/**
 * Microsoft Graph email transport.
 *
 * Ported from korvai-platform-v2-core so the website sends mail the same way
 * the platform does:
 *   - apps/user/src/email/email.service.ts   -> sendViaMsGraph()
 *   - apps/dq-engine/.../graph-auth.service.ts -> token caching
 *
 * App-only (client credentials) flow: no signed-in user, the app sends as the
 * MS_FROM_EMAIL mailbox. That mailbox must exist in the tenant and the app
 * registration needs the Mail.Send *application* permission with admin consent.
 *
 * This module is server-only — MS_CLIENT_SECRET must never reach the browser.
 */

interface SendMailOptions {
  to: string[];
  subject: string;
  html: string;
  /** Where a reply should go. For the contact form this is the enquirer. */
  replyTo?: string;
}

interface GraphConfig {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  fromEmail: string;
  tokenUrl: string;
  scope: string;
}

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";
const DEFAULT_SCOPE = "https://graph.microsoft.com/.default";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

/**
 * Reads the same env var names core uses. DEFAULT_TOKEN_URL may contain a
 * literal `<tenantId>` placeholder (core substitutes it the same way in
 * graph-auth.service.ts); if it is absent we build the URL from MS_TENANT_ID.
 */
function readConfig(): GraphConfig {
  const tenantId = process.env.MS_TENANT_ID?.trim();
  const clientId = process.env.MS_CLIENT_ID?.trim();
  const clientSecret = process.env.MS_CLIENT_SECRET?.trim();
  const fromEmail = process.env.MS_FROM_EMAIL?.trim();

  const missing = [
    ["MS_TENANT_ID", tenantId],
    ["MS_CLIENT_ID", clientId],
    ["MS_CLIENT_SECRET", clientSecret],
    ["MS_FROM_EMAIL", fromEmail],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    throw new Error(`Missing email env vars: ${missing.join(", ")}`);
  }

  const templateUrl = process.env.DEFAULT_TOKEN_URL?.trim();
  const tokenUrl = templateUrl
    ? templateUrl.replace("<tenantId>", tenantId!)
    : `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  return {
    tenantId: tenantId!,
    clientId: clientId!,
    clientSecret: clientSecret!,
    fromEmail: fromEmail!,
    tokenUrl,
    scope: process.env.DEFAULT_EMAIL_SERVICE_URL?.trim() || DEFAULT_SCOPE,
  };
}

/** Recipients come from MAIL_TO and may be a comma-separated list. */
export function getRecipients(): string[] {
  const raw = process.env.MAIL_TO?.trim();
  if (!raw) throw new Error("Missing email env vars: MAIL_TO");
  const list = raw
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  if (list.length === 0) throw new Error("MAIL_TO contained no addresses");
  return list;
}

/* ------------------------------------------------------------------ */
/*  Token (cached, as core does)                                       */
/* ------------------------------------------------------------------ */

let cachedToken: string | null = null;
let cachedTokenExpiry = 0;

async function getAccessToken(config: GraphConfig): Promise<string> {
  const nowSeconds = Date.now() / 1000;
  if (cachedToken && cachedTokenExpiry > nowSeconds) return cachedToken;

  const form = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "client_credentials",
    scope: config.scope,
  });

  const response = await fetch(config.tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Graph token request failed (${response.status}): ${detail}`);
  }

  const data = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };
  if (!data.access_token) {
    throw new Error("Graph token response contained no access_token");
  }

  cachedToken = data.access_token;
  // Expire slightly early so an in-flight request never uses a dead token.
  cachedTokenExpiry = nowSeconds + Math.max((data.expires_in ?? 3600) - 100, 60);

  return cachedToken;
}

/* ------------------------------------------------------------------ */
/*  Send                                                               */
/* ------------------------------------------------------------------ */

export async function sendMail(options: SendMailOptions): Promise<void> {
  const config = readConfig();
  const token = await getAccessToken(config);

  const sendUrl = `${GRAPH_BASE}/users/${encodeURIComponent(config.fromEmail)}/sendMail`;

  const payload = {
    message: {
      subject: options.subject,
      body: { contentType: "HTML", content: options.html },
      toRecipients: options.to.map((address) => ({
        emailAddress: { address },
      })),
      ...(options.replyTo
        ? { replyTo: [{ emailAddress: { address: options.replyTo } }] }
        : {}),
    },
    saveToSentItems: true,
  };

  const response = await fetch(sendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  // 202 Accepted is the success case for sendMail.
  if (!response.ok) {
    const detail = await response.text();
    // A stale cached token would surface as 401 — drop it so the next attempt refetches.
    if (response.status === 401) {
      cachedToken = null;
      cachedTokenExpiry = 0;
    }
    throw new Error(`Graph sendMail failed (${response.status}): ${detail}`);
  }
}
