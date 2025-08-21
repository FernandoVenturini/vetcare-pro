// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Agendamentos from "./pages/Agendamentos";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/agendamentos" element={<Agendamentos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
