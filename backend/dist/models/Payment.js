"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING(3),
        defaultValue: "BRL",
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "completed", "failed", "refunded"),
        defaultValue: "pending",
    },
    method: {
        type: sequelize_1.DataTypes.ENUM("credit_card", "debit_card", "pix", "bank_slip"),
        allowNull: false,
    },
    transactionId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    licenseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "licenses",
            key: "id",
        },
    },
}, {
    sequelize: database_1.default,
    tableName: "payments",
    modelName: "Payment",
    timestamps: true,
});
exports.default = Payment;
//# sourceMappingURL=Payment.js.map