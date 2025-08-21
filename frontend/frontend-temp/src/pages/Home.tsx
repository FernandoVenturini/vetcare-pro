// src/pages/Home.tsx
import React from "react";
import {
  FaPaw,
  FaClipboardList,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Feature = {
  icon: IconType;
  title: string;
  desc: string;
};

const features: Feature[] = [
  { icon: FaPaw, title: "Gestão de pets", desc: "Cadastre pets e histórico." },
  { icon: FaClipboardList, title: "Agendamentos", desc: "Organize consultas." },
  { icon: FaChartLine, title: "Relatórios", desc: "Monitore indicadores." },
  {
    icon: FaUserCircle,
    title: "Gestão de clientes",
    desc: "Dados e histórico.",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Bem-vindo ao VetCare Pro
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <Icon size={40} className="text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
