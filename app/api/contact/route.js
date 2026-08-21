import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, orderNumber, orderDate, paymentMethod, state, city, message } = await req.json();

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
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: #58ACAF; padding: 32px; text-align: center; }
            .header h1 { color: #fff; margin: 0; font-size: 22px; }
            .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .row { display: flex; margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
            .label { font-weight: 700; color: #333; min-width: 160px; font-size: 14px; }
            .value { color: #555; font-size: 14px; flex: 1; }
            .message-box { background: #f8faff; border-left: 4px solid #58ACAF; padding: 16px; border-radius: 4px; margin-top: 8px; }
            .message-box p { margin: 0; color: #444; font-size: 14px; line-height: 1.7; }
            .footer { background: #f8f8f8; padding: 20px 32px; text-align: center; border-top: 1px solid #eee; }
            .footer p { color: #999; font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
              <p>Someone reached out through Oxliv</p>
            </div>
            <div class="body">
              <div class="row"><span class="label">👤 Full Name</span><span class="value">${firstName} ${lastName}</span></div>
              <div class="row"><span class="label">📧 Email</span><span class="value"><a href="mailto:${email}">${email}</a></span></div>
              <div class="row"><span class="label">📞 Phone</span><span class="value">${phone || "Not provided"}</span></div>
              <div class="row"><span class="label">🧾 Order Number</span><span class="value">${orderNumber || "Not provided"}</span></div>
              <div class="row"><span class="label">📅 Order Date</span><span class="value">${orderDate || "Not provided"}</span></div>
              <div class="row"><span class="label">💳 Payment Method</span><span class="value">${paymentMethod || "Not provided"}</span></div>
              <div class="row"><span class="label">📍 Location</span><span class="value">${city || ""}, ${state || ""}</span></div>
              <div class="row" style="border-bottom:none; padding-bottom:0;">
                <span class="label">💬 Message</span>
              </div>
              <div class="message-box"><p>${message}</p></div>
            </div>
            <div class="footer">
              <p>OxygenGears Contact Form • Reply directly to this email to respond to the customer</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
