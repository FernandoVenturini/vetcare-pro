import app from "./app"; // Ensure this file exists and is correctly exported
import sequelize from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Testar conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Ambiente: ${process.env.NODE_ENV || "development"}`);
    });
  })
  .catch((error: any) => {
    console.error("Erro ao conectar com o banco de dados:", error);
    process.exit(1);
  });
