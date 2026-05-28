import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ============================================================
   CONTACT FORM API  — POST /api/contact
   Sends form submissions to the inbox below via Resend.
   Requires RESEND_API_KEY in your environment (.env.local locally,
   or the Vercel project settings in production).
   ============================================================ */

const TO_EMAIL = "info@invidiousentertainment.com";

// Until your domain is verified in Resend, you can only send from
// "onboarding@resend.dev". After verifying invidiousentertainment.com,
// set CONTACT_FROM_EMAIL to e.g. "Invidious Entertainment <noreply@invidiousentertainment.com>".
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Invidious Entertainment <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  // Validate at the boundary
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New message from ${name} — Invidious Entertainment`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
