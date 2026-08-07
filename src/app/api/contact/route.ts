import { NextResponse } from "next/server";
import { sendMail, getRecipients } from "@/lib/email";
import {
  buildContactEnquiryHtml,
  buildContactSubject,
  type ContactSubmission,
} from "@/lib/contact-email-template";

/** POST-only handler; never prerender. */
export const dynamic = "force-dynamic";

/**
 * Email is an explicit opt-in: IS_EMAIL must be set to true. Unset or anything
 * else means no email is sent. Accepts a few spellings so a value of "TRUE" or
 * "1" does not silently disable delivery.
 *
 * Netlify Forms capture is deliberately NOT gated by this — the dashboard record
 * always happens, so turning email off cannot lose an enquiry.
 */
function isEmailEnabled(): boolean {
  const flag = process.env.IS_EMAIL?.trim().toLowerCase();
  return flag === "true" || flag === "1" || flag === "yes";
}

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

const MAX_LENGTHS: Record<keyof ContactSubmission, number> = {
  area: 120,
  fullName: 200,
  email: 254,
  company: 200,
  country: 120,
  message: 5000,
  attribution: 120,
};

const REQUIRED_FIELDS: (keyof ContactSubmission)[] = [
  "area",
  "fullName",
  "email",
  "company",
  "message",
];

/** Deliberately permissive — real validation is whether Graph can deliver. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Bots submit instantly; a human takes longer than this to fill seven fields. */
const MIN_FILL_MS = 3000;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(
  body: Record<string, unknown>
): { ok: true; submission: ContactSubmission } | { ok: false; error: string } {
  const submission: ContactSubmission = {
    area: asString(body.area),
    fullName: asString(body.fullName),
    email: asString(body.email),
    company: asString(body.company),
    country: asString(body.country),
    message: asString(body.message),
    attribution: asString(body.attribution),
  };

  for (const field of REQUIRED_FIELDS) {
    if (!submission[field]) return { ok: false, error: `${field} is required` };
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = submission[field as keyof ContactSubmission];
    if (value.length > limit) {
      return { ok: false, error: `${field} exceeds ${limit} characters` };
    }
  }

  if (!EMAIL_PATTERN.test(submission.email)) {
    return { ok: false, error: "email is not a valid address" };
  }

  return { ok: true, submission };
}

/* ------------------------------------------------------------------ */
/*  Rate limiting                                                      */
/*                                                                     */
/*  Best-effort only. On serverless each cold start resets this map and */
/*  concurrent instances do not share it, so treat it as a speed bump   */
/*  rather than a guarantee — the honeypot is the primary defence. For  */
/*  hard limits this needs Netlify Blobs or an external store.          */
/* ------------------------------------------------------------------ */

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound across a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        hits.delete(key);
      }
    }
  }

  return false;
}

function clientIp(request: Request): string {
  return (
    request.headers.get("x-nf-client-connection-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

/* ------------------------------------------------------------------ */
/*  Handler                                                            */
/* ------------------------------------------------------------------ */

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: a hidden field no human sees. Respond 200 so bots get no signal
  // that they were rejected, but send nothing.
  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  // Timing check — same silent-accept treatment.
  const elapsed = typeof body.elapsed === "number" ? body.elapsed : 0;
  if (elapsed > 0 && elapsed < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { submission } = result;

  // Email is opt-in via IS_EMAIL. Netlify Forms capture is unaffected — that
  // happens client-side and always runs, so switching email off never loses an
  // enquiry. With the flag off we still return ok so the visitor sees success.
  if (!isEmailEnabled()) {
    console.log(
      "[contact] IS_EMAIL is not enabled — enquiry captured, email skipped"
    );
    return NextResponse.json({ ok: true, emailSent: false });
  }

  try {
    const receivedAt = new Date().toUTCString();
    await sendMail({
      to: getRecipients(),
      subject: buildContactSubject(submission),
      html: buildContactEnquiryHtml(submission, receivedAt),
      // Replying in the inbox answers the enquirer, not the sender mailbox.
      replyTo: submission.email,
    });

    return NextResponse.json({ ok: true, emailSent: true });
  } catch (error) {
    // Log the real cause server-side; return something generic to the client so
    // Graph errors and env details are never exposed publicly.
    console.error("[contact] send failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please email us directly." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
