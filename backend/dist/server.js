"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
database_1.default
    .authenticate()
    .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    app_1.default.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Ambiente: ${process.env.NODE_ENV || "development"}`);
    });
})
    .catch((error) => {
    console.error("Erro ao conectar com o banco de dados:", error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map