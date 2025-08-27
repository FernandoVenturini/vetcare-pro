"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
dotenv_1.default.config();
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const medicalRecordRoutes_1 = __importDefault(require("./routes/medicalRecordRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const transactionRoutes_1 = __importDefault(require("./routes/transactionRoutes"));
const inventoryRoutes_1 = __importDefault(require("./routes/inventoryRoutes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);
app.use('/api/auth', authRoutes_1.default);
app.use('/api/clients', clientRoutes_1.default);
app.use('/api/patients', patientRoutes_1.default);
app.use('/api/appointments', appointmentRoutes_1.default);
app.use('/api/medical-records', medicalRecordRoutes_1.default);
app.use('/api/services', serviceRoutes_1.default);
app.use('/api/transactions', transactionRoutes_1.default);
app.use('/api/inventory', inventoryRoutes_1.default);
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Algo deu errado!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
database_1.default.sync()
    .then(() => {
    console.log('Modelos sincronizados com o banco de dados');
})
    .catch((error) => {
    console.error('Erro ao sincronizar modelos:', error);
});
exports.default = app;
//# sourceMappingURL=app.js.map