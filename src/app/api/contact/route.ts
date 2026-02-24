import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "cbford@1337itsolutions.com";
const TO_EMAIL = "ai.cbford@gmail.com";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char] ?? char;
  });

const errorResponse = (status: number, message: string) =>
  NextResponse.json({ error: message }, { status });

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch (error) {
    console.error("[1337ITS lead] invalid JSON", error);
    return errorResponse(400, "Invalid request payload.");
  }

  if (!body || typeof body !== "object") {
    return errorResponse(400, "Invalid request payload.");
  }

  const { name, email, company, initiative } = body as Record<string, unknown>;

  if (!name || !email || !initiative) {
    return errorResponse(400, "Name, email, and initiative are required.");
  }

  const payload = {
    name: String(name).trim().slice(0, 120),
    email: String(email).trim().slice(0, 120),
    company: company ? String(company).trim().slice(0, 160) : "",
    initiative: String(initiative).trim().slice(0, 1200),
    submittedAt: new Date().toISOString(),
  } as const;

  console.info("[1337ITS lead]", payload);

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[1337ITS lead] Missing RESEND_API_KEY env var");
    return errorResponse(
      503,
      "Messaging service is unavailable. Email cbford@1337itsolutions.com directly.",
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New 1337ITS Lead: ${payload.name}`;
  const plainText = [
    "A new lead submitted the contact form.",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "(not provided)"}`,
    "Initiative:",
    payload.initiative,
    "",
    `Submitted At: ${payload.submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6;">
      <p style="margin: 0 0 16px 0;">A new lead submitted the 1337ITS contact form.</p>
      <ul style="list-style: none; padding: 0; margin: 0 0 16px 0;">
        <li><strong>Name:</strong> ${escapeHtml(payload.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(payload.email)}</li>
        <li><strong>Company:</strong> ${escapeHtml(payload.company || "(not provided)")}</li>
      </ul>
      <p style="margin: 0 0 8px 0;"><strong>Initiative:</strong></p>
      <p style="white-space: pre-line; margin: 0 0 16px 0;">${escapeHtml(payload.initiative)}</p>
      <p style="color: #64748b; font-size: 12px;">Submitted at ${payload.submittedAt}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: payload.email,
      subject,
      text: plainText,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("[1337ITS lead] Resend error", error);
    return errorResponse(
      502,
      "We couldn't send your message. Email cbford@1337itsolutions.com and we'll jump on it.",
    );
  }

  return NextResponse.json({ ok: true, message: "Message sent. We respond within one business day." });
}
