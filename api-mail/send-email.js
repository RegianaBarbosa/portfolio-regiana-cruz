const { sendOneEmail } = require("./src/mail/mail.service");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, nome, email, message, mensagem } = req.body;
    const clientName = name || nome;
    const clientMessage = message || mensagem;

    const logoWhitePath = path.join(
      process.cwd(),
      "src/assets/brand/logo-white-rc.png",
    );

    const bodyEmpresa = {
      template: "solicitacao-empresa",
      context: {
        nome: clientName,
        email,
        mensagem: clientMessage,
      },
      subject: `[Portfólio] Nova mensagem de ${clientName}`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
    };

    const bodyCliente = {
      template: "confirmacao-cliente",
      context: {
        nome: clientName,
        email,
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

    await sendOneEmail(bodyEmpresa);
    await sendOneEmail(bodyCliente);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({
      success: false,
      message: err.message || "Erro interno",
    });
  }
};
