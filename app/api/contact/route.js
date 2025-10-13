import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Nodemailer needs Node runtime

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      company,
      position,
      message,
      privacyPolicy,
    } = body || {};

    // Basic validation
    const required = [
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      company,
      position,
      message,
    ];
    if (required.some((v) => !v) || !privacyPolicy) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const fullPhone = `${countryCode} ${phone}`.trim();

    // Create transporter (Gmail SMTP with app password)
    const base = {
      host: "smtp.gmail.com",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      // helpful timeouts
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
      tls: {
        servername: "smtp.gmail.com", // SNI
        minVersion: "TLSv1.2",
      },
    };

    // Try 587 STARTTLS first
    let transporter = nodemailer.createTransport({
      ...base,
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true,
    });

    try {
      await transporter.verify();
    } catch (e) {
      // Fallback to 465 if 587 fails
      transporter = nodemailer.createTransport({
        ...base,
        port: 465,
        secure: true, // Implicit TLS
      });
      await transporter.verify();
    }

    const FROM = process.env.FROM_EMAIL || process.env.SMTP_USER;

    const ADMIN = process.env.ADMIN_EMAIL;
    const BRAND = process.env.BRAND_NAME || "Our Team";

    // 1) Email to the customer
    await transporter.sendMail({
      from: FROM,
      to: email,
      subject: `Thanks for contacting ${BRAND}`,
      text: `Hi ${firstName},

Thanks for reaching out! We received your message and will get back to you soon.

Your message:
"${message}"

Best,
${BRAND}`,
      html: `
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Thanks for reaching out! We received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <blockquote>${escapeHtml(message)}</blockquote>
        <p>Best,<br/>${escapeHtml(BRAND)}</p>
      `,
    });

    // 2) Email to admin (rafamalik5763@gmail.com) with full submission
    const submittedAt = new Date().toISOString();
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        <tr><td><b>Name</b></td><td>${escapeHtml(firstName)} ${escapeHtml(
      lastName
    )}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(fullPhone)}</td></tr>
        <tr><td><b>Company</b></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><b>Position</b></td><td>${escapeHtml(position)}</td></tr>
        <tr><td><b>Message</b></td><td>${escapeHtml(message)}</td></tr>
        <tr><td><b>Privacy Accepted</b></td><td>${
          privacyPolicy ? "Yes" : "No"
        }</td></tr>
        <tr><td><b>Submitted At</b></td><td>${submittedAt}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: FROM,
      to: ADMIN, // <- rafamalik5763@gmail.com from .env
      subject: `New contact: ${firstName} ${lastName} (${company})`,
      text: `New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${fullPhone}
Company: ${company}
Position: ${position}
Message: ${message}
Privacy Accepted: ${privacyPolicy ? "Yes" : "No"}
Submitted At: ${submittedAt}
`,
      html: adminHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Email sending failed." },
      { status: 500 }
    );
  }
}

// minimal HTML escape to avoid injecting markup in admin email
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
