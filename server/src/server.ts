import express from 'express';
import nodemailer from 'nodemailer';
import { primsa } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "147dbee3797ba6",
    pass: "c6ca6689c0d300"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await primsa.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  });

  await transport.sendMail({
    from: 'Team Feedback <hello@feedget.com>',
    to: 'Jefferson Soares <jefferson1104junior@gmail.com>',
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;" >`,
      `<h1>Tipo do feedback: ${type}</h1>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n')
  });
  
  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('HTTP Server running!');
});