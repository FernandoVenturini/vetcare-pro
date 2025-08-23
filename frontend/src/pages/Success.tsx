// src/pages/Success.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // Redireciona para Home após 5 segundos
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-md"
      >
        <h1 className="text-4xl font-bold text-green-600 mb-4">Sucesso!</h1>
        <p className="text-gray-700 mb-6">
          Sua ação foi concluída com sucesso. Você será redirecionado para a
          página inicial em breve.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          Ir para Home
        </button>
      </motion.div>
    </div>
  );
};

export default Success;
