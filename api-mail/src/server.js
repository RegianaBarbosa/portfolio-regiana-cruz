require("dotenv").config();
const path = require("path");
const pug = require("pug");
const fs = require('fs');

const express = require("express");
const cors = require("cors");
const { sendOneEmail } = require("./mail/mail.service");

const app = express();
app.use(express.json());

// Configuração do CORS aceitando o ambiente local e produção
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://regianabarbosa.github.io",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/", async (req, res) => {
  res.send("Mail service is running");
});

app.post("/send-email", async (req, res) => {
  const { name, nome, email, message, mensagem } = req.body;
  const clientName = name || nome;
  const clientMessage = message || mensagem;

  // Caminho da logo branca a partir da pasta api-mail/
  const logoWhitePath = path.resolve(
    __dirname,
    "../../src/assets/brand/logo-white-rc.png",
  );

  // 1. Notificação para a dona do portfólio
  const bodyEmpresa = {
    template: "solicitacao-empresa",
    context: {
      nome: clientName,
      email: email,
      mensagem: clientMessage,
    },
    subject: `[Portfólio] Nova mensagem de ${clientName}`,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
  };

  // 2. Email de confirmação para o cliente
  const bodyCliente = {
    template: "confirmacao-cliente",
    context: {
      nome: clientName,
      email: email,
      mensagem: clientMessage,
    },
    subject: "Solicitação enviada com sucesso! — Regiana Cruz",
    to: email,
    attachments: [
      {
        filename: "logo-white-rc.png",
        path: logoWhitePath,
        cid: "logoWhite",
      },
    ],
  };

  try {
    await sendOneEmail(bodyEmpresa);
    await sendOneEmail(bodyCliente);
    res.json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// 🔍 ROTA DE PREVIEW NO NAVEGADOR
app.get("/preview/:template", (req, res) => {
  const { template } = req.params;

  // Dados fictícios para simular a visualização
  const mockContext = {
    nome: "Pedro Silva",
    email: "pedro.silva@exemplo.com",
    mensagem:
      "Olá Regiana! Adorei seu portfólio e gostaria de fazer um orçamento para o redesign da minha plataforma.",
  };

  try {
    const templatePath = path.resolve(
      __dirname,
      "../templates",
      `${template}.pug`,
    );
    let html = pug.renderFile(templatePath, mockContext);

    // Caminho da sua logo real
    const logoPath = path.resolve(
      __dirname,
      "../../src/assets/brand/logo-white-rc.png",
    );

    // Se o arquivo existir, lê e converte para base64
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath);
      const logoBase64 = logoBuffer.toString("base64");
      const dataUri = `data:image/png;base64,${logoBase64}`;

      // Substitui o cid:logoWhite pela imagem real em base64
      html = html.replace(/cid:logoWhite/g, dataUri);
    }

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (err) {
    res
      .status(404)
      .send(
        `<h3>Erro ao carregar o template "${template}":</h3><pre>${err.message}</pre>`,
      );
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mail service rodando em http://localhost:${PORT}`);
});
