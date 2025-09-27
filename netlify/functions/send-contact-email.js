const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Método não permitido." }),
    };
  }

  const {
    CONTACT_EMAIL_USER,
    CONTACT_EMAIL_PASS,
    CONTACT_EMAIL_HOST,
    CONTACT_EMAIL_PORT,
    CONTACT_EMAIL_SECURE,
    CONTACT_EMAIL_TO,
  } = process.env;

  if (!CONTACT_EMAIL_USER || !CONTACT_EMAIL_PASS) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message:
          "O serviço de email não está configurado. Defina as variáveis de ambiente necessárias.",
      }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Pedido inválido." }),
    };
  }

  const { name, contact, services = [], message } = payload;

  if (!name || !contact || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "São necessários o nome, os contactos e a mensagem.",
      }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: CONTACT_EMAIL_HOST || "smtp.office365.com",
    port: Number(CONTACT_EMAIL_PORT || 587),
    secure: CONTACT_EMAIL_SECURE === "true",
    auth: {
      user: CONTACT_EMAIL_USER,
      pass: CONTACT_EMAIL_PASS,
    },
  });

  const serviceList =
    Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Não indicado";

  const emailText = `Novo pedido de orçamento\n\nNome: ${name}\nContactos: ${contact}\nServiços: ${serviceList}\n\nMensagem:\n${message}`;

  const emailHtml = `
    <h2>Pedido de Orçamento</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Contactos:</strong> ${contact}</p>
    <p><strong>Serviços:</strong> ${serviceList}</p>
    <p><strong>Mensagem:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `Pedidos de Orçamento <${CONTACT_EMAIL_USER}>`,
      to: CONTACT_EMAIL_TO || "dinismiguelcosta@hotmail.com",
      subject: "Novo pedido de orçamento recebido",
      text: emailText,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Pedido enviado com sucesso." }),
    };
  } catch (error) {
    console.error("Erro ao enviar email de contacto:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Não foi possível enviar o email neste momento.",
      }),
    };
  }
};
