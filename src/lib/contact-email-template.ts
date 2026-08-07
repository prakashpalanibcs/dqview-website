/**
 * HTML body for the contact-form enquiry email.
 *
 * Styled to the deKorvai site palette (see the @theme block in
 * src/app/globals.css) rather than the platform's light transactional style.
 *
 * Email-client constraints this template works around:
 *   - Outlook (Word rendering engine) ignores background-color on <div>, so the
 *     layout is tables with matching `bgcolor` attributes. On a dark design this
 *     matters more than usual: a dropped background would leave light text on
 *     white and make the mail unreadable.
 *   - Gmail can strip <style> blocks, so every visual style is also inline. The
 *     <style> block carries only the mobile media query, which is a progressive
 *     enhancement.
 *   - Gradients do not render in Outlook, so every gradient sits on top of a
 *     solid `bgcolor` fallback.
 *   - color-scheme meta stops clients force-inverting an already-dark design.
 */

export interface ContactSubmission {
  area: string;
  fullName: string;
  email: string;
  company: string;
  country: string;
  message: string;
  attribution: string;
}

/* Palette — mirrors src/app/globals.css @theme */
const C = {
  bg: "#08061a",
  surface: "#13112b",
  surfaceLight: "#1e1b3f",
  border: "#2a2545",
  primary: "#3b82f6",
  primaryLight: "#60a5fa",
  accent: "#8b5cf6",
  accentLight: "#a78bfa",
  text: "#ffffff",
  muted: "#9ca3af",
  dim: "#6b7280",
  /* Midpoint of the blue→violet gradient, used as the Outlook solid fallback. */
  gradientFallback: "#6a6ff1",
};

/** Email bodies are HTML, so every submitted value must be escaped. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Preserve the line breaks the visitor typed in the message field. */
function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

export function buildContactSubject(submission: ContactSubmission): string {
  return `Website enquiry — ${submission.area} — ${submission.company}`;
}

/* ------------------------------------------------------------------ */
/*  Row builders                                                       */
/* ------------------------------------------------------------------ */

const LABEL_STYLE = `margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.2;letter-spacing:.08em;text-transform:uppercase;color:${C.muted};`;
const VALUE_STYLE = `margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;font-weight:bold;color:${C.text};word-break:break-word;`;

function infoRow(label: string, value: string): string {
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 10px;">
                <tr>
                  <td bgcolor="${C.surfaceLight}" style="background-color:${C.surfaceLight};border:1px solid ${C.border};border-radius:8px;padding:12px 16px;">
                    <p style="${LABEL_STYLE}">${escapeHtml(label)}</p>
                    <p style="${VALUE_STYLE}">${escapeHtml(value)}</p>
                  </td>
                </tr>
              </table>`;
}

function optionalRow(label: string, value: string): string {
  return value.trim() ? infoRow(label, value) : "";
}

/** The email value doubles as a mailto link so you can reply in one click. */
function emailRow(label: string, value: string): string {
  return `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 10px;">
                <tr>
                  <td bgcolor="${C.surfaceLight}" style="background-color:${C.surfaceLight};border:1px solid ${C.border};border-radius:8px;padding:12px 16px;">
                    <p style="${LABEL_STYLE}">${escapeHtml(label)}</p>
                    <p style="${VALUE_STYLE}">
                      <a href="mailto:${escapeHtml(value)}" style="color:${C.accentLight};text-decoration:none;">${escapeHtml(value)}</a>
                    </p>
                  </td>
                </tr>
              </table>`;
}

/* ------------------------------------------------------------------ */
/*  Template                                                           */
/* ------------------------------------------------------------------ */

export function buildContactEnquiryHtml(
  submission: ContactSubmission,
  receivedAt: string
): string {
  // Shown in the inbox list preview, hidden in the body itself.
  const preheader = `${submission.fullName} — ${submission.company} — ${submission.area}`;

  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New enquiry from dekorvai.com</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width: 620px) {
      .dk-container { width: 100% !important; }
      .dk-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .dk-title { font-size: 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${C.bg};">
  <div style="display:none;font-size:1px;color:${C.bg};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.bg}" style="background-color:${C.bg};margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" class="dk-container" width="640" cellpadding="0" cellspacing="0" border="0" style="width:640px;max-width:640px;border-collapse:collapse;">

          <!-- Header -->
          <tr>
            <td bgcolor="${C.gradientFallback}" align="center" class="dk-pad"
                style="background-color:${C.gradientFallback};background-image:linear-gradient(135deg,${C.primary} 0%,${C.accent} 100%);border-radius:12px 12px 0 0;padding:32px 36px;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#e5e0ff;">deKorvai</p>
              <h1 class="dk-title" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.25;font-weight:bold;color:#ffffff;">New enquiry from dekorvai.com</h1>
              <p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#ded9ff;">${escapeHtml(receivedAt)}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td bgcolor="${C.surface}" class="dk-pad" style="background-color:${C.surface};border-left:1px solid ${C.border};border-right:1px solid ${C.border};padding:32px 36px;">
${infoRow("Primary area of interest", submission.area)}
${infoRow("Full name", submission.fullName)}
${emailRow("Work email", submission.email)}
${infoRow("Company", submission.company)}
${optionalRow("Country / region", submission.country)}
${optionalRow("How did you find us?", submission.attribution)}

              <!-- Message -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:18px 0 0;">
                <tr>
                  <td bgcolor="${C.surfaceLight}" style="background-color:${C.surfaceLight};border:1px solid ${C.border};border-left:3px solid ${C.accent};border-radius:8px;padding:18px 20px;">
                    <p style="${LABEL_STYLE}margin-bottom:10px;">How can we help?</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#d7d3e8;">${escapeMultiline(submission.message)}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:26px 0 0;">
                <tr>
                  <td bgcolor="${C.accent}" style="background-color:${C.accent};background-image:linear-gradient(135deg,${C.primary} 0%,${C.accent} 100%);border-radius:8px;">
                    <a href="mailto:${escapeHtml(submission.email)}?subject=${encodeURIComponent(`Re: your enquiry to deKorvai — ${submission.area}`)}"
                       style="display:inline-block;padding:13px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">
                      Reply to ${escapeHtml(submission.fullName)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#0e0b1c" align="center" class="dk-pad" style="background-color:#0e0b1c;border:1px solid ${C.border};border-top:none;border-radius:0 0 12px 12px;padding:20px 36px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${C.dim};">
                Sent from the contact form on
                <a href="https://www.dekorvai.com" style="color:${C.accentLight};text-decoration:none;">dekorvai.com</a>
                &nbsp;·&nbsp; Replying to this email reaches ${escapeHtml(submission.fullName)} directly.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}
