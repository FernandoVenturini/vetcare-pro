const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Client = require('../models/Client');
const Payment = require('../models/Payment');
const License = require('../models/License');
const { sendWelcomeEmail } = require('../utils/emailService');

// Processar pagamento
exports.processPayment = async (req, res) => {
    try {
        const { plan, clientName, clientEmail, clientPhone, clientClinic } = req.body;

        // Determinar preço com base no plano
        const planPrices = {
            'basico-nuvem': 9900,      // R$ 99,00 em centavos
            'profissional-nuvem': 19900, // R$ 199,00
            'empresarial-nuvem': 34900,  // R$ 349,00
            'basico-desktop': 29900,     // R$ 299,00 (único)
            'profissional-desktop': 59900, // R$ 599,00
            'empresarial-desktop': 99900   // R$ 999,00
        };

        const amount = planPrices[plan];
        if (!amount) {
            return res.status(400).json({ error: 'Plano inválido' });
        }

        // Criar cliente no Stripe
        const customer = await stripe.customers.create({
            email: clientEmail,
            name: clientName
        });

        // Criar pagamento no Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'brl',
            customer: customer.id,
            metadata: {
                plan: plan,
                clientName: clientName,
                clientEmail: clientEmail
            }
        });

        // Criar registro de pagamento no banco
        const payment = await Payment.create({
            amount: amount / 100, // Converter de centavos para reais
            paymentMethod: 'credit_card',
            paymentId: paymentIntent.id,
            status: 'pending',
            planType: plan
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
            paymentId: payment.id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Confirmar pagamento
exports.confirmPayment = async (req, res) => {
    try {
        const { paymentId, clientName, clientEmail, clientPhone, clientClinic } = req.body;

        // Verificar status do pagamento no Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ error: 'Pagamento não confirmado' });
        }

        // Atualizar status do pagamento
        const payment = await Payment.findByPk(paymentId);
        if (payment) {
            payment.status = 'completed';
            await payment.save();
        }

        // Criar ou atualizar cliente
        let client = await Client.findOne({ where: { email: clientEmail } });
        if (!client) {
            client = await Client.create({
                name: clientName,
                email: clientEmail,
                password: Math.random().toString(36).slice(-8), // Senha temporária
                clinicName: clientClinic,
                phone: clientPhone,
                planType: payment.planType.split('-')[0] // Extrair tipo de plano
            });
        }

        // Para planos desktop, gerar licença
        if (payment.planType.includes('desktop')) {
            const license = await License.create({
                clientId: client.id,
                planType: payment.planType.split('-')[0],
                isActivated: true,
                activatedAt: new Date(),
                expiresAt: new Date(Date.now() + (10 * 365 * 24 * 60 * 60 * 1000)) // 10 anos
            });

            // Enviar email com licença
            await sendWelcomeEmail(client.email, {
                name: client.name,
                plan: client.planType,
                licenseKey: license.licenseKey,
                isDesktop: true
            });
        } else {
            // Para planos nuvem, enviar email de boas-vindas
            await sendWelcomeEmail(client.email, {
                name: client.name,
                plan: client.planType,
                isDesktop: false
            });
        }

        res.json({
            success: true,
            message: 'Pagamento confirmado com sucesso',
            accountId: client.id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};