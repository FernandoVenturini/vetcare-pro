import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaDesktop } from "react-icons/fa";

const Pricing: React.FC = () => {
  const [isCloud, setIsCloud] = useState(true);

  const cloudPlans = [
    {
      name: "Básico",
      price: "R$ 99",
      period: "/mês",
      description: "Para clínicas em início de atividade",
      features: [
        "Até 2 usuários",
        "Agenda básica",
        "Prontuário eletrônico",
        "Gestão financeira básica",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 199",
      period: "/mês",
      description: "Para clínicas em crescimento",
      features: [
        "Até 5 usuários",
        "Agenda inteligente",
        "Prontuário completo",
        "Gestão financeira completa",
        "Gestão de estoque",
        "Relatórios básicos",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "R$ 349",
      period: "/mês",
      description: "Para grandes clínicas e redes",
      features: [
        "Usuários ilimitados",
        "Agenda avançada",
        "Prontuário completo + BI",
        "Gestão financeira avançada",
        "Gestão de estoque avançada",
        "Relatórios e dashboards",
        "Suporte 24/7",
        "Treinamento personalizado",
      ],
      popular: false,
    },
  ];

  const desktopPlans = [
    {
      name: "Básico",
      price: "R$ 299",
      period: " (único)",
      description: "Para clínicas em início de atividade",
      features: [
        "Até 2 usuários",
        "Agenda básica",
        "Prontuário eletrônico",
        "Gestão financeira básica",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 599",
      period: " (único)",
      description: "Para clínicas em crescimento",
      features: [
        "Até 5 usuários",
        "Agenda inteligente",
        "Prontuário completo",
        "Gestão financeira completa",
        "Gestão de estoque",
        "Relatórios básicos",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "R$ 999",
      period: " (único)",
      description: "Para grandes clínicas e redes",
      features: [
        "Usuários ilimitados",
        "Agenda avançada",
        "Prontuário completo + BI",
        "Gestão financeira avançada",
        "Gestão de estoque avançada",
        "Relatórios e dashboards",
        "Suporte 24/7",
        "Treinamento personalizado",
      ],
      popular: false,
    },
  ];

  const plans = isCloud ? cloudPlans : desktopPlans;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 heading-font mb-4">
            Planos que se Adaptam ao Seu Negócio
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta às necessidades da sua
            clínica
          </p>

          <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setIsCloud(true)}
                className={`px-6 py-3 rounded-full font-medium flex items-center ${
                  isCloud ? "bg-primary-600 text-white" : "text-gray-700"
                }`}
              >
                <FaCloud className="mr-2" />
                Nuvem
              </button>
              <button
                onClick={() => setIsCloud(false)}
                className={`px-6 py-3 rounded-full font-medium flex items-center ${
                  !isCloud ? "bg-primary-600 text-white" : "text-gray-700"
                }`}
              >
                <FaDesktop className="mr-2" />
                Desktop
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border shadow-md relative ${
                plan.popular
                  ? "border-accent-500 ring-2 ring-accent-500 ring-opacity-20"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-1 rounded-full font-bold text-sm">
                  MAIS POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3"
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

              <Link
                to={`/checkout?plan=${plan.name.toLowerCase()}-${
                  isCloud ? "nuvem" : "desktop"
                }`}
                className={`w-full text-center font-bold py-3 px-4 rounded-lg transition duration-300 block ${
                  plan.popular
                    ? "bg-accent-500 hover:bg-accent-600 text-white"
                    : "bg-primary-600 hover:bg-primary-700 text-white"
                }`}
              >
                Escolher Plano
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-gray-600">
                Temos planos especiais para redes de clínicas, hospitais
                veterinários e clínicas especializadas.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <Link
                to="/contato"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
              >
                Fale com um especialista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
