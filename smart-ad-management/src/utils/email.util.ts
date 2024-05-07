import * as nodemailer from 'nodemailer';
import { randomBytes } from 'crypto';

 export function generateResetToken(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendResetPasswordEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aiubsemester1@gmail.com',
      pass: 'zpip miax heks pdnk',
    },
  });

 const mailOptions = {
  from: 'aiubsemester1@gmail.com',
  to: email,
  subject: 'Reset Password',
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        #tokenField {
          font-size: 20px;
          font-weight: bold;
          color: black;
        }
      </style>
  </head>
  <body>
      <h1>Password Reset</h1>
      <p>To reset your password, please use the following token:</p>
      <textarea id="tokenField" rows="4" cols="50" readonly>${token}</textarea>
      <p>Please manually copy the above token.</p>
  </body>
  </html>
  `,
};

  await transporter.sendMail(mailOptions);
}
