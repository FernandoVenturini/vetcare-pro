import React from "react";

const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 heading-font mb-8 text-center">
            Sobre o VetCare Pro
          </h1>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-700 mb-6">
              O VetCare Pro foi criado com o objetivo de revolucionar a gestão
              de clínicas veterinárias, oferecendo uma solução completa que
              combina tecnologia de ponta com uma interface intuitiva e
              funcionalidades essenciais para o dia a dia da clínica.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Nossa História
            </h2>
            <p className="text-gray-700 mb-6">
              Fundada em 2020 por um grupo de veterinários e desenvolvedores, a
              VetCare Pro nasceu da necessidade de ter um sistema que realmente
              atendesse às demandas do setor veterinário. Nossa equipe entende
              as particularidades do mercado e desenvolveu uma solução que
              otimiza processos, reduz erros e aumenta a produtividade.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Nossos Valores
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Excelência:</span> Compromisso
                com a qualidade em todos os aspectos
              </li>
              <li>
                <span className="font-semibold">Inovação:</span> Constante
                atualização e melhoria do sistema
              </li>
              <li>
                <span className="font-semibold">Empatia:</span> Compreensão das
                necessidades dos nossos clientes
              </li>
              <li>
                <span className="font-semibold">Transparência:</span>{" "}
                Relacionamento claro e honesto com nossos parceiros
              </li>
              <li>
                <span className="font-semibold">Suporte:</span> Atendimento
                especializado e humanizado
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-700">Clínicas Atendidas</div>
            </div>
            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">
                98%
              </div>
              <div className="text-gray-700">Satisfação dos Clientes</div>
            </div>
            <div className="bg-accent-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">
                24/7
              </div>
              <div className="text-gray-700">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
