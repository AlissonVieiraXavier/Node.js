const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const port = 3000;
//email e senha do remetente
let user = "alissonvieiraxavier@hotmail.com";
let senhaTesteenv = process.env.PASS;
let pass = senhaTesteenv;

app.get("/", (req, res) => {
  res.send("Aplication running.");
  console.log(senhaTesteenv);
});

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 25,
    auth: { user, pass },
  });

  transporter
    .sendMail({
      from: user,
      to: "alissonvieira02313102@gmail.com",
      replyTo: user,
      subject: "Email Teste aplicação",
      text: "Lorem ipsum dolor sit amet. Aut pariatur voluptas ut enim dolores sed eius optio aut incidunt iste ex modi labore in nemo officiis qui magnam beatae. Ex dolor atque eum corporis repellendus et totam velit. Qui architecto voluptatem ut fuga minus non molestiae reprehenderit hic blanditiis illum",
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
