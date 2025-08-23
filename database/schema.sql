-- Criar banco de dados (execute com superusuário)
-- CREATE DATABASE vetcare_pro;
-- CREATE USER vetcare_user WITH ENCRYPTED PASSWORD 'sua_senha_segura';
-- GRANT ALL PRIVILEGES ON DATABASE vetcare_pro TO vetcare_user;

-- Conecte-se ao banco de dados e execute:

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "clinicName" VARCHAR(255),
    "role" VARCHAR(20) DEFAULT 'veterinarian',
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS "clients" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "phone" VARCHAR(20),
    "address" TEXT,
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Pacientes
CREATE TABLE IF NOT EXISTS "patients" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "species" VARCHAR(100) NOT NULL,
    "breed" VARCHAR(100),
    "age" INTEGER,
    "weight" DECIMAL(5,2),
    "clientId" INTEGER NOT NULL REFERENCES "clients"("id") ON DELETE CASCADE,
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Agendamentos
CREATE TABLE IF NOT EXISTS "appointments" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "status" VARCHAR(20) DEFAULT 'agendado',
    "notes" TEXT,
    "patientId" INTEGER NOT NULL REFERENCES "patients"("id") ON DELETE CASCADE,
    "clientId" INTEGER NOT NULL REFERENCES "clients"("id") ON DELETE CASCADE,
    "userId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Prontuários Médicos
CREATE TABLE IF NOT EXISTS "medical_records" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "diagnosis" TEXT,
    "treatment" TEXT,
    "notes" TEXT,
    "patientId" INTEGER NOT NULL REFERENCES "patients"("id") ON DELETE CASCADE,
    "userId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Serviços
CREATE TABLE IF NOT EXISTS "services" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "category" VARCHAR(100),
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Transações Financeiras
CREATE TABLE IF NOT EXISTS "transactions" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" VARCHAR(100),
    "status" VARCHAR(20) DEFAULT 'pendente',
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Itens de Inventário
CREATE TABLE IF NOT EXISTS "inventory_items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "category" VARCHAR(100),
    "clinicId" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX IF NOT EXISTS "idx_users_email" ON "users"("email");
CREATE INDEX IF NOT EXISTS "idx_clients_clinic" ON "clients"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_patients_clinic" ON "patients"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_appointments_clinic" ON "appointments"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_appointments_date" ON "appointments"("date");
CREATE INDEX IF NOT EXISTS "idx_medical_records_clinic" ON "medical_records"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_services_clinic" ON "services"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_transactions_clinic" ON "transactions"("clinicId");
CREATE INDEX IF NOT EXISTS "idx_inventory_clinic" ON "inventory_items"("clinicId");