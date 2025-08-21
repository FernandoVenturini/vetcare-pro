// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        VetCare Pro
      </Link>

      <div className="flex space-x-6 items-center">
        {["Home", "Pets", "Agendamentos"].map((page) => (
          <motion.div key={page} whileHover={{ scale: 1.1 }}>
            <Link
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {page}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
