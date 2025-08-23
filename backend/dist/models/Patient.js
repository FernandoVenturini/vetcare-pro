"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Patient extends sequelize_1.Model {
}
Patient.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    breed: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: sequelize_1.DataTypes.FLOAT,
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
    tableName: "patients",
    modelName: "Patient",
    timestamps: true,
});
exports.default = Patient;
//# sourceMappingURL=Patient.js.map