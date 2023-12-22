import nodemailer from 'nodemailer';

export type EmailData = {
  email: string;
  title: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    // 초기에 설정해둔 env 데이터
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ email, title, message }: EmailData) {
  const mailData = {
    from: email,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${title}`,
    html: ` <h1>${title}</h1/>
    <div>${message}</div>
    <br/>
    <p>보낸사람 : ${email}</p>`,
  };

  return transporter.sendMail(mailData);
}
