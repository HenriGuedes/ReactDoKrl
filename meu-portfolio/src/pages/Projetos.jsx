// 🆕 export adicionado para que o DetalheProjeto possa acessar os dados daqui
import { useState } from "react";
import { Link } from "react-router-dom"; // 🆕 Importado para criar links clicáveis
import Navbar from "../components/Navbar";

// 🆕 Exporta os projetos também, para serem usados na página de detalhes
export const projetos = [
  {
    id: 1,
    Nome: "Projeto1",
    Resumo: "Projeto criado para praticar componentes e hooks no React.",
    Descrição:
      "Este projeto foi desenvolvido com foco em boas práticas de código e atenção à experiência do usuário. A ideia foi aplicar conceitos de componentização e estilização com Tailwind, resultando em uma aplicação leve, moderna e totalmente responsiva. O código foi estruturado de forma limpa, facilitando manutenção e expansão futura.",
    Link: "https://www.linkedin.com/feed",
  },
  {
    id: 2,
    Nome: "Projeto2",
    Resumo: "Um portfólio interativo com busca e rotas dinâmicas.",
    Descrição:
      "Este projeto simula um portfólio profissional, implementando rotas dinâmicas e um sistema de pesquisa de projetos em tempo real. O foco principal foi aprimorar o uso de props, state e React Router, além de aplicar um design responsivo e agradável ao usuário.",
    Link: "https://www.linkedin.com/feed",
  },
  {
    id: 3,
    Nome: "Projeto3",
    Resumo: "Aplicação para treinar lógica e estrutura de código com React.",
    Descrição:
      "Aplicação desenvolvida para praticar conceitos fundamentais do React, como manipulação de estado, renderização condicional e composição de componentes. O projeto também reforça o uso do Tailwind CSS para estilização eficiente e moderna.",
    Link: "https://www.linkedin.com/feed",
  },
];

// 🆕 O componente agora usa a lista exportada em vez de state interno
function Projetos() {
  const [busca, setBusca] = useState("");

  function handleBuscaChange(novoValor) {
    setBusca(novoValor);
  }

  const filtro = projetos.filter((projetosf) => {
    return projetosf.Nome.toLowerCase().includes(busca.toLowerCase());
  }); //includes está servindo para analisar se oq foi digitado está batendo com o nome do projeto

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white pt-28 px-8">
      {/* 🧭 Navbar fixa */}
      <Navbar busca={busca} setBusca={setBusca} />

      {/* 🔹 Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">Meus Projetos</h1>
        <p className="text-slate-300 text-lg">
          Confira abaixo alguns dos meus projetos recentes 🚀
        </p>
      </div>

      {/* 📦 Lista de projetos */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {filtro.length === 0 ? (
          <p className="col-span-full text-center text-slate-400 text-lg">
            Nenhum projeto encontrado 😕
          </p>
        ) : (
          // Caso contrário, exibe os projetos que passaram no filtro
          filtro.map((projects) => (
            <div
              key={projects.id} // 🆕 chave única para cada item da lista (evita erro do React)
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all rounded-xl p-6 shadow-lg hover:shadow-blue-900/40 text-center"
            >
              <h1 className="text-2xl font-semibold text-blue-400 mb-3">
                {projects.Nome}
              </h1>
              <p className="text-slate-300 mb-4">{projects.Resumo}</p>

              <a
                href={projects.Link}
                target="_blank"
                className="text-blue-500 underline block mb-4 hover:text-blue-400 transition"
              >
                Ver projeto externo ↗
              </a>

              {/* 🆕 Botão para ver detalhes individuais do projeto */}
              <Link
                to={`/projetos/${projects.id}`} // 🆕 cria link dinâmico para /projetos/:id
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
              >
                Ver detalhes →
              </Link>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default Projetos;
