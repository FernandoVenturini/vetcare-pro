const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

// Gerar token JWT
const generateToken = (clientId) => {
    return jwt.sign({ id: clientId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
};

// Registro de novo cliente
exports.register = async (req, res) => {
    try {
        const { name, email, password, clinicName, phone } = req.body;

        // Verificar se cliente já existe
        const existingClient = await Client.findOne({ where: { email } });
        if (existingClient) {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        // Criar novo cliente
        const client = await Client.create({
            name,
            email,
            password,
            clinicName,
            phone
        });

        // Gerar token
        const token = generateToken(client.id);

        res.status(201).json({
            message: 'Cliente registrado com sucesso',
            token,
            client: {
                id: client.id,
                name: client.name,
                email: client.email,
                clinicName: client.clinicName
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login de cliente
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se cliente existe
        const client = await Client.findOne({ where: { email } });
        if (!client) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Verificar senha
        if (!client.validatePassword(password)) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Gerar token
        const token = generateToken(client.id);

        res.json({
            message: 'Login realizado com sucesso',
            token,
            client: {
                id: client.id,
                name: client.name,
                email: client.email,
                clinicName: client.clinicName,
                planType: client.planType
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Verificar token
exports.verifyToken = (req, res) => {
    res.json({
        message: 'Token válido',
        client: req.client
    });
};