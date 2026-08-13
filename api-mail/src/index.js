require("dotenv").config();
const { sendOneEmail } = require("./mail/mail.service");

(async () => {
  try {
    await sendOneEmail({
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: "Teste de Email do Portfólio",
      template: "solicitacao-empresa",
      context: {
        nome: "Regiana Cruz",
        email: "regianablc@gmail.com",
        mensagem: "Email enviado com Node puro 😄",
      },
    });

    console.log("Email enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao testar envio de email:", error);
  }
})();
