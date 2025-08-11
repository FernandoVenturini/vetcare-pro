-- Criar banco de dados (execute com superusuário)
-- CREATE DATABASE vetcare_pro; (OK)
-- CREATE USER vetcare_user WITH ENCRYPTED PASSWORD 'sua_senha_segura'; (OK)
-- GRANT ALL PRIVILEGES ON DATABASE vetcare_pro TO vetcare_user; (OK)

-- Conecte-se ao banco de dados e execute:

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS "Clients" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "clinicName" VARCHAR(255),
    "phone" VARCHAR(20),
    "planType" VARCHAR(20) DEFAULT 'basico',
    "subscriptionId" VARCHAR(255),
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Licenças
CREATE TABLE IF NOT EXISTS "Licenses" (
    "id" SERIAL PRIMARY KEY,
    "licenseKey" VARCHAR(255) UNIQUE NOT NULL,
    "clientId" INTEGER NOT NULL,
    "planType" VARCHAR(20) NOT NULL,
    "isActivated" BOOLEAN DEFAULT false,
    "activatedAt" TIMESTAMP,
    "expiresAt" TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE CASCADE
);

-- Tabela de Pagamentos
CREATE TABLE IF NOT EXISTS "Payments" (
    "id" SERIAL PRIMARY KEY,
    "clientId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) DEFAULT 'BRL',
    "paymentMethod" VARCHAR(20) NOT NULL,
    "paymentId" VARCHAR(255),
    "status" VARCHAR(20) DEFAULT 'pending',
    "planType" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE CASCADE
);

-- Índices
CREATE INDEX IF NOT EXISTS "idx_clients_email" ON "Clients"("email");
CREATE INDEX IF NOT EXISTS "idx_licenses_key" ON "Licenses"("licenseKey");
CREATE INDEX IF NOT EXISTS "idx_payments_client" ON "Payments"("clientId");