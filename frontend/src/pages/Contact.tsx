import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em um sistema real, aqui você faria uma chamada à API
    alert(
      `Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      clinic: "",
      message: "",
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 heading-font mb-8 text-center">
            Entre em Contato
          </h1>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Clínica
                      </label>
                      <input
                        type="text"
                        name="clinic"
                        value={formData.clinic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Nome da sua clínica"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Como podemos ajudar?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 3230-1500</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600">contato@vetcarepro.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaHeadset className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Suporte</h3>
                      <p className="text-gray-600">24/7 - (11) 99999-9999</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Horário de Funcionamento
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Segunda - Sexta</span>
                      <span>08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado</span>
                      <span>09:00 - 13:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo</span>
                      <span>Fechado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
