"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Appointment extends sequelize_1.Model {
}
Appointment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("consulta", "retorno", "vacinação", "cirurgia", "banho_tosa", "exame"),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("agendado", "confirmado", "realizado", "cancelado"),
        defaultValue: "agendado",
    },
    notes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    patientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "patients",
            key: "id",
        },
    },
    clientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "clients",
            key: "id",
        },
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
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
    tableName: "appointments",
    modelName: "Appointment",
    timestamps: true,
});
exports.default = Appointment;
//# sourceMappingURL=Appointment.js.map