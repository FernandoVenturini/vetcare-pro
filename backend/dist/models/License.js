"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class License extends sequelize_1.Model {
}
License.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("trial", "basic", "premium", "enterprise"),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("active", "expired", "suspended"),
        defaultValue: "active",
    },
    expiresAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
}, {
    sequelize: database_1.default,
    tableName: "licenses",
    modelName: "License",
    timestamps: true,
});
exports.default = License;
//# sourceMappingURL=License.js.map