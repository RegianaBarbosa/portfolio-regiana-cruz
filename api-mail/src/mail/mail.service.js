const path = require("path");
const pug = require("pug");
const transporter = require("./mailer");

function renderTemplate(template, context) {
  const templatePath = path.join(
    __dirname,
    "../../templates",
    `${template}.pug`,
  );

  return pug.renderFile(templatePath, context);
}

async function sendOneEmail({ to, subject, template, context, attachments }) {
  if (!to) {
    throw new Error('Nenhum destinatário informado no parâmetro "to"');
  }

  const html = renderTemplate(template, context);

  return transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
    attachments,
  });
}

module.exports = {
  sendOneEmail,
};
