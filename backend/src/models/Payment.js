const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clients',
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        defaultValue: 'BRL'
    },
    paymentMethod: {
        type: DataTypes.ENUM('credit_card', 'boleto', 'pix'),
        allowNull: false
    },
    paymentId: {
        type: DataTypes.STRING, // ID do gateway de pagamento
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'failed', 'refunded'),
        defaultValue: 'pending'
    },
    planType: {
        type: DataTypes.ENUM('basico-nuvem', 'profissional-nuvem', 'empresarial-nuvem',
            'basico-desktop', 'profissional-desktop', 'empresarial-desktop'),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Payment;