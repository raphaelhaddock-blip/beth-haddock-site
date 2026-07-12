import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, resource } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Beth Haddock Website <contact@bethhaddock.com>",
      to: process.env.CONTACT_EMAIL || "beth@warburtonadvisers.com",
      replyTo: email,
      subject: `Checklist request: ${email}`,
      text: `
New resource request from the website.

Email: ${email}
Resource: ${resource || "2026 Regulatory Priorities Checklist"}

Reply to this email with the checklist attached to fulfill the request.
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
