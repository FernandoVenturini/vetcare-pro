import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaBarcode } from "react-icons/fa";

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Extrair plano da URL
  const searchParams = new URLSearchParams(location.search);
  const planParam = searchParams.get("plan") || "profissional-nuvem";

  // Informações do plano
  const planDetails = {
    "basico-nuvem": {
      name: "Plano Básico na Nuvem",
      price: "R$ 99,00",
      period: "/mês",
      features: [
        "Até 2 usuários",
        "Agenda básica",
        "Prontuário eletrônico",
        "Gestão financeira básica",
      ],
    },
    "profissional-nuvem": {
      name: "Plano Profissional na Nuvem",
      price: "R$ 199,00",
      period: "/mês",
      features: [
        "Até 5 usuários",
        "Agenda inteligente",
        "Prontuário completo",
        "Gestão financeira completa",
        "Gestão de estoque",
        "Relatórios básicos",
      ],
    },
    "empresarial-nuvem": {
      name: "Plano Empresarial na Nuvem",
      price: "R$ 349,00",
      period: "/mês",
      features: [
        "Usuários ilimitados",
        "Agenda avançada",
        "Prontuário completo + BI",
        "Gestão financeira avançada",
        "Gestão de estoque avançada",
        "Relatórios e dashboards",
      ],
    },
    "basico-desktop": {
      name: "Plano Básico Desktop",
      price: "R$ 299,00",
      period: " (pagamento único)",
      features: [
        "Até 2 usuários",
        "Agenda básica",
        "Prontuário eletrônico",
        "Gestão financeira básica",
      ],
    },
    "profissional-desktop": {
      name: "Plano Profissional Desktop",
      price: "R$ 599,00",
      period: " (pagamento único)",
      features: [
        "Até 5 usuários",
        "Agenda inteligente",
        "Prontuário completo",
        "Gestão financeira completa",
        "Gestão de estoque",
        "Relatórios básicos",
      ],
    },
    "empresarial-desktop": {
      name: "Plano Empresarial Desktop",
      price: "R$ 999,00",
      period: " (pagamento único)",
      features: [
        "Usuários ilimitados",
        "Agenda avançada",
        "Prontuário completo + BI",
        "Gestão financeira avançada",
        "Gestão de estoque avançada",
        "Relatórios e dashboards",
      ],
    },
  };

  const plan =
    planDetails[planParam as keyof typeof planDetails] ||
    planDetails["profissional-nuvem"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em um sistema real, aqui você faria uma chamada à API de pagamento
    alert(
      `Pedido realizado com sucesso! Você receberá um email com as instruções.`
    );
    navigate("/sucesso");
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 heading-font mb-8 text-center">
            Finalizar Compra
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Informações do Pedido */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Resumo do Pedido
                </h2>

                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{plan.name}</span>
                    <span className="font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-gray-600">{plan.period}</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{plan.price}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Recursos Inclusos
                </h2>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulário de Pagamento */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Informações do Cliente
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Método de Pagamento
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("credit")}
                        className={`border rounded-lg p-4 flex items-center justify-center ${
                          paymentMethod === "credit"
                            ? "border-primary-500 bg-primary-50"
                            : "border-gray-300"
                        }`}
                      >
                        <FaCreditCard className="text-primary-600 mr-2" />
                        <span>Cartão de Crédito</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("boleto")}
                        className={`border rounded-lg p-4 flex items-center justify-center ${
                          paymentMethod === "boleto"
                            ? "border-primary-500 bg-primary-50"
                            : "border-gray-300"
                        }`}
                      >
                        <FaBarcode className="text-primary-600 mr-2" />
                        <span>Boleto Bancário</span>
                      </button>
                    </div>

                    {paymentMethod === "credit" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Número do Cartão
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="0000 0000 0000 0000"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Nome no Cartão
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Nome como impresso no cartão"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Validade
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "boleto" && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                        <FaBarcode className="text-4xl text-blue-600 mx-auto mb-4" />
                        <p className="text-blue-800 mb-2">
                          Após confirmação, você receberá um boleto por email
                        </p>
                        <p className="text-sm text-blue-600">
                          O acesso será liberado após o pagamento do boleto
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Confirmar Pagamento
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
