import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "147dbee3797ba6",
    pass: "c6ca6689c0d300"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Team Feedback <hello@feedget.com>',
      to: 'Jefferson Soares <jefferson1104junior@gmail.com>',
      subject,
      html: body,
    });
  }
}