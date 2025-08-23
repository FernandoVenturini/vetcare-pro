import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaw,
  FaCalendarAlt,
  FaFileMedical,
  FaMoneyBillWave,
  FaBoxOpen,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold heading-font mb-6">
                Sistema Completo para{" "}
                <span className="text-accent-400">Clínicas Veterinárias</span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Gerencie sua clínica com eficiência, atenda melhor seus clientes
                e cresça seu negócio com nossa solução completa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/planos"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 text-center"
                >
                  Ver Planos
                </Link>
                <Link
                  to="/demo"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 text-center"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-2 w-full max-w-lg">
                  <img
                    src="https://images.unsplash.com/photo-1587033554585-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Dashboard VetCare Pro"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <FaPaw className="text-xl mr-2" />
                    <div>
                      <div className="font-bold">4.9/5</div>
                      <div className="text-sm">Avaliação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 heading-font mb-4">
              Recursos Completo para sua Clínica
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              Tudo o que você precisa para gerenciar sua clínica veterinária de
              forma eficiente e profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaCalendarAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Agenda Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Sistema de agendamento com lembretes automáticos, bloqueios de
                horários e integração com calendários.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Agendamento online</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Lembretes automáticos</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Bloqueio de horários</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaFileMedical className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prontuário Eletrônico
              </h3>
              <p className="text-gray-600 mb-4">
                Registro completo do histórico médico dos animais com fotos,
                exames e tratamentos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Histórico completo</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Fotos e documentos</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Prescrições digitais</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaMoneyBillWave className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gestão Financeira
              </h3>
              <p className="text-gray-600 mb-4">
                Controle de receitas, despesas, fluxo de caixa e emissão de
                notas fiscais.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Fluxo de caixa</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Contas a pagar/receber</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Relatórios financeiros</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaBoxOpen className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gestão de Estoque
              </h3>
              <p className="text-gray-600 mb-4">
                Controle de medicamentos, produtos e materiais com alertas de
                estoque mínimo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Controle de estoque</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Alertas automáticos</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Relatórios de movimentação</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaUsers className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gestão de Clientes
              </h3>
              <p className="text-gray-600 mb-4">
                Cadastro completo de tutores e animais com histórico de
                atendimentos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Cadastro de tutores</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Histórico de atendimentos</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Comunicação automatizada</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <FaChartLine className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Relatórios e BI
              </h3>
              <p className="text-gray-600 mb-4">
                Dashboards e relatórios personalizados para tomada de decisão
                estratégica.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Dashboards personalizados</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Relatórios financeiros</span>
                </li>
                <li className="flex items-center">
                  <FaPaw className="text-primary-500 mr-2" />
                  <span>Análise de desempenho</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold heading-font mb-6">
            Pronto para Transformar sua Clínica?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Comece agora mesmo com 14 dias grátis. Sem cartão de crédito.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/planos"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 text-center"
            >
              Teste Grátis
            </Link>
            <Link
              to="/contato"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 text-center"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
