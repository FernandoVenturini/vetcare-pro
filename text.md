### TESTANDO API:
    -> curl http://localhost:3001/api/health

### CRIANDO USUARIO ADMIN:
    -> curl -X POST http://localhost:3001/api/auth/register \
        -H "Content-Type: application/json" \
        -d '{
            "name": "Administrador",
            "email": "admin@vetcare.com",
            "password": "admin123",
            "role": "admin"
         }'

### O QUE VAI APARECER:
    -> {
            "message": "Usuário criado com sucesso",
            "user": {
                "id": 1,
                "name": "Administrador",
                "email": "admin@vetcare.com",
                "role": "admin",
                "clinicId": null
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }

### 🧪 TESTE FINAL - FAÇA LOGIN: No mesmo terminal, teste o login:
    -> curl -X POST http://localhost:3001/api/auth/login \
            -H "Content-Type: application/json" \
            -d '{
                "email": "admin@vetcare.com",
                "password": "admin123"
            }'

### ✅ Deve retornar um token JWT (bem longo):
    -> {
            "message": "Login realizado com sucesso",
            "user": {
                "id": 1,
                "name": "Administrador",
                "email": "admin@vetcare.com",
                "role": "admin",
                "clinicId": null
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }

### USANDO O TOKEN NO TERMINLA: 
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB2ZXRjYXJlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjI5NTQzNiwiZXhwIjoxNzU2MzgxODM2fQ.kaSkb7je9OmI-cYDj09oCOx1h0SRvhkeiSx0yk7b25A" http://localhost:3001/api/auth/verify

### PODEMOS TAMBEM CRIAR UMA VARIAVEL PARA O TOKEN:
# Defina sua variável com o token
MEU_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB2ZXRjYXJlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjI5NTQzNiwiZXhwIjoxNzU2MzgxODM2fQ.kaSkb7je9OmI-cYDj09oCOx1h0SRvhkeiSx0yk7b25A"

# Use a variável
curl -H "Authorization: Bearer $MEU_TOKEN" http://localhost:3001/api/auth/verify

### TOKEN GERADO:
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB2ZXRjYXJlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjI5NTQzNiwiZXhwIjoxNzU2MzgxODM2fQ.kaSkb7je9OmI-cYDj09oCOx1h0SRvhkeiSx0yk7b25A"

### CRIANDO ALGUNS USUARIOS DE EXEMPLO:
# Criar um cliente
curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB2ZXRjYXJlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjI5NTQzNiwiZXhwIjoxNzU2MzgxODM2fQ.kaSkb7je9OmI-cYDj09oCOx1h0SRvhkeiSx0yk7b25A" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999",
    "address": "Rua das Flores, 123"
  }' http://localhost:3001/api/clients