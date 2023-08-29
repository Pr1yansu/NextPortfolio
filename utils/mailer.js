// mailer.js
import nodemailer from "nodemailer";

async function sendConfirmationEmail(email) {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: email,
    subject: "Thank You for Subscribing to Our Newsletter",
    text: `Dear subscriber,\n\nThank you for subscribing to our newsletter!\n\nWe're excited to have you on board. We will be in touch with you shortly to discuss your interests and work. In the meantime, if you have any questions or would like to share more about your work, please feel free to reply to this email.\n\nBest regards,\nThe Newsletter Team`,
  };

  await transporter.sendMail(mailOptions);

  // Sending a message to yourself about the user's subscription
  const adminMailOptions = {
    from: "your-email@example.com",
    to: "priyansuchowdhury57@gmail.com", // Your email address
    subject: "New Newsletter Subscription",
    text: `A new user subscribed to the newsletter:\nEmail: ${email}\n\nPlease reach out to them to discuss their work and interests.`,
  };

  await transporter.sendMail(adminMailOptions);
}

export { sendConfirmationEmail };
