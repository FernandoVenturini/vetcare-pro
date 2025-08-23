"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAppointmentConfirmation = exports.sendWelcomeEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendWelcomeEmail = async (to, name) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: 'Bem-vindo ao VetCare Pro',
            html: `
        <h1>Olá, ${name}!</h1>
        <p>Seja bem-vindo ao VetCare Pro, o sistema de gestão veterinária mais completo do mercado.</p>
        <p>Estamos felizes em tê-lo como nosso cliente.</p>
        <p>Qualquer dúvida, entre em contato com nosso suporte.</p>
        <p>Atenciosamente,<br>Equipe VetCare Pro</p>
      `
        };
        await transporter.sendMail(mailOptions);
    }
    catch (error) {
        console.error('Erro ao enviar email:', error);
    }
};
exports.sendWelcomeEmail = sendWelcomeEmail;
const sendAppointmentConfirmation = async (to, appointment) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: 'Confirmação de Agendamento - VetCare Pro',
            html: `
        <h1>Confirmação de Agendamento</h1>
        <p>Olá,</p>
        <p>Seu agendamento foi confirmado com sucesso.</p>
        <p><strong>Data:</strong> ${appointment.date}</p>
        <p><strong>Horário:</strong> ${appointment.time}</p>
        <p><strong>Tipo:</strong> ${appointment.type}</p>
        <p>Obrigado por escolher o VetCare Pro!</p>
      `
        };
        await transporter.sendMail(mailOptions);
    }
    catch (error) {
        console.error('Erro ao enviar email de confirmação:', error);
    }
};
exports.sendAppointmentConfirmation = sendAppointmentConfirmation;
//# sourceMappingURL=emailService.js.map