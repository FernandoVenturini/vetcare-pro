import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Carregar variáveis de ambiente
dotenv.config();

// Importar rotas
import authRoutes from './routes/authRoutes';
import clientRoutes from './routes/clientRoutes';
import patientRoutes from './routes/patientRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import medicalRecordRoutes from './routes/medicalRecordRoutes';
import serviceRoutes from './routes/serviceRoutes';
import transactionRoutes from './routes/transactionRoutes';
import inventoryRoutes from './routes/inventoryRoutes';

// Importar configuração do banco de dados
import sequelize from './config/database';

const app = express();

// Middleware de segurança
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limite de 100 requisições por IP
});
app.use(limiter);

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/inventory', inventoryRoutes);

// Rota de health check
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Middleware de tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Algo deu errado!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Rota 404
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

// Sincronizar modelos com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar modelos:', error);
    });

export default app;