const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Configurar transporte de email
const transporter = nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true para porta 465, false para outras
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Enviar email de boas-vindas
exports.sendWelcomeEmail = async (to, clientData) => {
    try {
        const subject = clientData.isDesktop
            ? 'Bem-vindo ao VetCare Pro Desktop'
            : 'Bem-vindo ao VetCare Pro Nuvem';

        let html = `
      <h2>Olá ${clientData.name},</h2>
      <p>Seja bem-vindo ao VetCare Pro!</p>
      <p>Estamos felizes em tê-lo como nosso cliente.</p>
    `;

        if (clientData.isDesktop) {
            html += `
        <h3>Sua licença Desktop</h3>
        <p><strong>Chave de Licença:</strong> ${clientData.licenseKey}</p>
        <p>Para ativar o sistema:</p>
        <ol>
          <li>Baixe o instalador em nosso site</li>
          <li>Execute o instalador</li>
          <li>Insira esta chave de licença quando solicitado</li>
        </ol>
      `;
        } else {
            html += `
        <h3>Acesso ao Sistema na Nuvem</h3>
        <p>Você pode acessar o sistema através do link:</p>
        <p><a href="${process.env.FRONTEND_URL}/app">Acessar VetCare Pro</a></p>
        <p>Suas credenciais de acesso foram enviadas em email separado.</p>
      `;
        }

        html += `
      <h3>Plano Contratado: ${clientData.plan}</h3>
      <p>Qualquer dúvida, entre em contato com nosso suporte.</p>
      <p>Atenciosamente,<br>Equipe VetCare Pro</p>
    `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            html: html
        };

        await transporter.sendMail(mailOptions);
        console.log('Email de boas-vindas enviado para:', to);
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
};

// Enviar email de confirmação de pagamento
exports.sendPaymentConfirmation = async (to, paymentData) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: 'Confirmação de Pagamento - VetCare Pro',
            html: `
        <h2>Pagamento Confirmado</h2>
        <p>Olá,</p>
        <p>Seu pagamento foi confirmado com sucesso.</p>
        <p><strong>Valor:</strong> R$ ${paymentData.amount}</p>
        <p><strong>Plano:</strong> ${paymentData.plan}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
        <p>Obrigado por escolher o VetCare Pro!</p>
      `
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Erro ao enviar email de confirmação:', error);
    }
};