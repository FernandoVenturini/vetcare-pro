import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaFileMedical,
  FaMoneyBillWave,
  FaBoxOpen,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Componentes do Dashboard
const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Agenda", icon: <FaCalendarAlt />, path: "/dashboard/agenda" },
    {
      name: "Prontuários",
      icon: <FaFileMedical />,
      path: "/dashboard/prontuarios",
    },
    {
      name: "Financeiro",
      icon: <FaMoneyBillWave />,
      path: "/dashboard/financeiro",
    },
    { name: "Estoque", icon: <FaBoxOpen />, path: "/dashboard/estoque" },
    { name: "Clientes", icon: <FaUsers />, path: "/dashboard/clientes" },
    {
      name: "Relatórios",
      icon: <FaChartLine />,
      path: "/dashboard/relatorios",
    },
    {
      name: "Configurações",
      icon: <FaCog />,
      path: "/dashboard/configuracoes",
    },
  ];

  return (
    <div className="bg-white w-64 min-h-screen shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-700 flex items-center">
          <FaPaw className="mr-2" />
          VetCare Pro
        </h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <button className="sidebar-link w-full text-left text-red-600 hover:bg-red-50">
          <FaSignOutAlt className="mr-3" />
          Sair
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-primary-600">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-600 font-medium">DV</span>
          </div>
          <span className="ml-2 text-gray-700">Dra. Vera</span>
        </div>
      </div>
    </header>
  );
};

const DashboardHome = () => {
  const today = new Date();

  const stats = [
    {
      name: "Consultas Hoje",
      value: "12",
      change: "+2",
      icon: <FaCalendarAlt className="text-blue-500" />,
    },
    {
      name: "Pacientes",
      value: "142",
      change: "+5",
      icon: <FaUsers className="text-green-500" />,
    },
    {
      name: "Receita Mensal",
      value: "R$ 12.450",
      change: "+12%",
      icon: <FaMoneyBillWave className="text-purple-500" />,
    },
    {
      name: "Estoque",
      value: "87%",
      change: "OK",
      icon: <FaBoxOpen className="text-yellow-500" />,
    },
  ];

  const recentAppointments = [
    {
      time: "09:00",
      patient: "Rex (Cachorro)",
      owner: "Carlos Silva",
      status: "Confirmado",
    },
    {
      time: "10:30",
      patient: "Mia (Gato)",
      owner: "Ana Oliveira",
      status: "Confirmado",
    },
    {
      time: "14:00",
      patient: "Thor (Cachorro)",
      owner: "Roberto Santos",
      status: "Pendente",
    },
    {
      time: "15:30",
      patient: "Luna (Coelho)",
      owner: "Juliana Costa",
      status: "Confirmado",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Bem-vinda, Dra. Vera!
        </h1>
        <p className="text-gray-600">
          {format(today, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-100">{stat.icon}</div>
            </div>
            <p className="text-sm text-green-600 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Agenda de Hoje */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Agenda de Hoje</h2>
            <button className="btn-primary flex items-center">
              <FaPlus className="mr-2" />
              Nova Consulta
            </button>
          </div>

          <div className="space-y-4">
            {recentAppointments.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {appointment.time}
                  </p>
                  <p className="text-gray-700">{appointment.patient}</p>
                  <p className="text-sm text-gray-500">{appointment.owner}</p>
                </div>
                <span
                  className={`badge ${
                    appointment.status === "Confirmado"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Atendimentos Recentes */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Atendimentos Recentes
          </h2>

          <div className="space-y-4">
            {[
              {
                patient: "Bella (Cachorro)",
                service: "Vacinação",
                date: "Ontem",
                value: "R$ 85,00",
              },
              {
                patient: "Nina (Gato)",
                service: "Consulta",
                date: "05/10/2023",
                value: "R$ 120,00",
              },
              {
                patient: "Max (Cachorro)",
                service: "Banho e Tosa",
                date: "04/10/2023",
                value: "R$ 95,00",
              },
              {
                patient: "Lola (Coelho)",
                service: "Exame de Rotina",
                date: "03/10/2023",
                value: "R$ 150,00",
              },
            ].map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {appointment.patient}
                  </p>
                  <p className="text-gray-700">{appointment.service}</p>
                  <p className="text-sm text-gray-500">{appointment.date}</p>
                </div>
                <p className="font-medium text-gray-900">{appointment.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Agenda = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Nova Consulta
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Agendamento de Consulta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Data
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Horário
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Paciente
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Selecione um paciente</option>
                <option>Rex (Cachorro)</option>
                <option>Mia (Gato)</option>
                <option>Thor (Cachorro)</option>
                <option>Luna (Coelho)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Tipo de Consulta
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Consulta de Rotina</option>
                <option>Retorno</option>
                <option>Emergência</option>
                <option>Vacinação</option>
                <option>Cirurgia</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Observações
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Observações sobre a consulta..."
            ></textarea>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="btn-primary">Agendar Consulta</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Prontuarios = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Prontuários</h1>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Novo Prontuário
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("list")}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === "list"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Lista de Pacientes
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-6 py-4 font-medium text-sm ${
                activeTab === "new"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Novo Atendimento
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "list" ? (
            <div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar paciente..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <FaSearch className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Paciente
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Espécie/Raça
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tutor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Última Consulta
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        name: "Rex",
                        species: "Cachorro - Pastor Alemão",
                        owner: "Carlos Silva",
                        lastVisit: "15/09/2023",
                      },
                      {
                        name: "Mia",
                        species: "Gato - Siamês",
                        owner: "Ana Oliveira",
                        lastVisit: "10/09/2023",
                      },
                      {
                        name: "Thor",
                        species: "Cachorro - Golden Retriever",
                        owner: "Roberto Santos",
                        lastVisit: "05/09/2023",
                      },
                      {
                        name: "Luna",
                        species: "Coelho - Holandês",
                        owner: "Juliana Costa",
                        lastVisit: "01/09/2023",
                      },
                    ].map((patient, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {patient.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {patient.species}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {patient.owner}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {patient.lastVisit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900 mr-3">
                            Ver
                          </button>
                          <button className="text-accent-600 hover:text-accent-900">
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Novo Atendimento
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Paciente
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Selecione um paciente</option>
                    <option>Rex (Cachorro)</option>
                    <option>Mia (Gato)</option>
                    <option>Thor (Cachorro)</option>
                    <option>Luna (Coelho)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Data do Atendimento
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Procedimentos Realizados
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Descrição do procedimento"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="w-32">
                      <input
                        type="number"
                        placeholder="Quantidade"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="1"
                      />
                    </div>
                    <div className="w-32">
                      <input
                        type="number"
                        placeholder="Valor (R$)"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <button className="flex items-center text-primary-600 hover:text-primary-800">
                    <FaPlus className="mr-2" />
                    Adicionar Procedimento
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Total: R$ 0,00
                    </h3>
                  </div>
                  <div className="space-x-3">
                    <button className="btn-outline">Cancelar</button>
                    <button className="btn-primary">Salvar Atendimento</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Financeiro = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Nova Transação
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Receitas</h3>
          <p className="text-3xl font-bold text-green-600">R$ 12.450,00</p>
          <p className="text-sm text-gray-500 mt-2">Este mês</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Despesas</h3>
          <p className="text-3xl font-bold text-red-600">R$ 4.230,00</p>
          <p className="text-sm text-gray-500 mt-2">Este mês</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Saldo</h3>
          <p className="text-3xl font-bold text-blue-600">R$ 8.220,00</p>
          <p className="text-sm text-gray-500 mt-2">Positivo</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Transações Recentes
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  date: "15/10/2023",
                  description: "Consulta com Rex",
                  category: "Receita",
                  value: "R$ 120,00",
                  status: "Pago",
                },
                {
                  date: "14/10/2023",
                  description: "Compra de medicamentos",
                  category: "Despesa",
                  value: "R$ 350,00",
                  status: "Pago",
                },
                {
                  date: "12/10/2023",
                  description: "Vacinação da Mia",
                  category: "Receita",
                  value: "R$ 85,00",
                  status: "Pago",
                },
                {
                  date: "10/10/2023",
                  description: "Pagamento de fornecedor",
                  category: "Despesa",
                  value: "R$ 1.200,00",
                  status: "Pago",
                },
                {
                  date: "08/10/2023",
                  description: "Banho e tosa do Thor",
                  category: "Receita",
                  value: "R$ 95,00",
                  status: "Pago",
                },
              ].map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {transaction.category}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-medium ${
                      transaction.category === "Receita"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge badge-success">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Estoque = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Estoque</h1>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Novo Produto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Produtos em Estoque
          </h3>
          <p className="text-3xl font-bold text-gray-900">142</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Valor Total</h3>
          <p className="text-3xl font-bold text-gray-900">R$ 15.680,00</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Baixo Estoque
          </h3>
          <p className="text-3xl font-bold text-red-600">8</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Produtos</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produto..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantidade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Unitário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  name: "Vacina V8",
                  category: "Medicamentos",
                  quantity: 25,
                  unitValue: "R$ 45,00",
                  totalValue: "R$ 1.125,00",
                  status: "Normal",
                },
                {
                  name: "Shampoo Antialérgico",
                  category: "Cosméticos",
                  quantity: 8,
                  unitValue: "R$ 32,00",
                  totalValue: "R$ 256,00",
                  status: "Baixo",
                },
                {
                  name: "Antipulgas",
                  category: "Medicamentos",
                  quantity: 42,
                  unitValue: "R$ 28,00",
                  totalValue: "R$ 1.176,00",
                  status: "Normal",
                },
                {
                  name: "Seringa 5ml",
                  category: "Materiais",
                  quantity: 120,
                  unitValue: "R$ 1,50",
                  totalValue: "R$ 180,00",
                  status: "Normal",
                },
                {
                  name: "Coleira Ajustável",
                  category: "Acessórios",
                  quantity: 15,
                  unitValue: "R$ 25,00",
                  totalValue: "R$ 375,00",
                  status: "Normal",
                },
              ].map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {product.unitValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {product.totalValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`badge ${
                        product.status === "Baixo"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Clientes = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Lista de Clientes</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cliente..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Animais
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Visita
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  name: "Carlos Silva",
                  phone: "(11) 99999-1234",
                  email: "carlos@email.com",
                  animals: "Rex (Cachorro)",
                  lastVisit: "15/09/2023",
                },
                {
                  name: "Ana Oliveira",
                  phone: "(11) 98888-5678",
                  email: "ana@email.com",
                  animals: "Mia (Gato)",
                  lastVisit: "10/09/2023",
                },
                {
                  name: "Roberto Santos",
                  phone: "(11) 97777-9012",
                  email: "roberto@email.com",
                  animals: "Thor (Cachorro)",
                  lastVisit: "05/09/2023",
                },
                {
                  name: "Juliana Costa",
                  phone: "(11) 96666-3456",
                  email: "juliana@email.com",
                  animals: "Luna (Coelho)",
                  lastVisit: "01/09/2023",
                },
              ].map((client, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {client.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.animals}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {client.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      Ver
                    </button>
                    <button className="text-accent-600 hover:text-accent-900">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Relatorios = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Relatórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 mr-4">
              <FaChartLine className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Financeiro</h3>
              <p className="text-sm text-gray-500">
                Relatórios financeiros detalhados
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 mr-4">
              <FaUsers className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Clientes</h3>
              <p className="text-sm text-gray-500">
                Análise de clientes e animais
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 mr-4">
              <FaBoxOpen className="text-purple-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Estoque</h3>
              <p className="text-sm text-gray-500">Movimentação de estoque</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Relatório Financeiro - Setembro 2023
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Receitas por Categoria
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Consultas
                  </span>
                  <span className="text-sm font-medium text-gray-700">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Vacinação
                  </span>
                  <span className="text-sm font-medium text-gray-700">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Banho e Tosa
                  </span>
                  <span className="text-sm font-medium text-gray-700">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Despesas por Categoria
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Medicamentos
                  </span>
                  <span className="text-sm font-medium text-gray-700">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Funcionários
                  </span>
                  <span className="text-sm font-medium text-gray-700">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Outros
                  </span>
                  <span className="text-sm font-medium text-gray-700">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Resumo Financeiro
              </h3>
              <p className="text-gray-600">Setembro 2023</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">R$ 12.450,00</p>
              <p className="text-gray-600">Receita Total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Configuracoes = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <nav className="space-y-1">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-primary-50 text-primary-700 font-medium">
                Perfil da Clínica
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
                Usuários
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
                Serviços
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
                Integrações
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
                Preferências
              </button>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Perfil da Clínica
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nome da Clínica
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="Clínica Veterinária Dr. Silva"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  CNPJ
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="12.345.678/0001-90"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="(11) 3230-1500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="contato@clinicaveterinaria.com.br"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button className="btn-primary">Salvar Alterações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal do Dashboard
const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/prontuarios" element={<Prontuarios />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
