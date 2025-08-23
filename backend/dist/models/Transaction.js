"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("income", "expense"),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
    },
    paymentMethod: {
        type: sequelize_1.DataTypes.ENUM("cash", "credit_card", "debit_card", "pix", "bank_transfer"),
        allowNull: false,
    },
    clientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "clients",
            key: "id",
        },
    },
    serviceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "services",
            key: "id",
        },
    },
    clinicId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
}, {
    sequelize: database_1.default,
    tableName: "transactions",
    modelName: "Transaction",
    timestamps: true,
});
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map