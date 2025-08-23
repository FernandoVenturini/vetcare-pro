"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class MedicalRecord extends sequelize_1.Model {
}
MedicalRecord.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    diagnosis: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    treatment: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
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
    veterinarianId: {
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
    tableName: "medical_records",
    modelName: "MedicalRecord",
    timestamps: true,
});
exports.default = MedicalRecord;
//# sourceMappingURL=MedicalRecord.js.map