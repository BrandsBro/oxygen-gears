import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, orderNumber, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form — ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Order Number:</strong> ${orderNumber || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
