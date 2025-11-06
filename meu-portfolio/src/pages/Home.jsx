import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white flex flex-col">
      {/* 🧭 Navbar fixa no topo */}
      <Navbar />

      {/* Conteúdo principal ocupa a tela toda */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-10 md:px-24 gap-16">
        {/* 🧠 Coluna esquerda — texto de apresentação */}
        <div className="max-w-xl text-center md:text-left animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Henrique Guedes
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Estudante de Engenharia de Software | Desenvolvedor Front-End
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Desenvolvedor iniciante apaixonado por tecnologia e inovação. Busco
            criar interfaces modernas e funcionais enquanto evoluo minhas
            habilidades em desenvolvimento web e boas práticas de código.
          </p>

          {/* botões de ação */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/projetos"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Ver Projetos
            </Link>

            <a
              href="https://github.com/henrique-silvestre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/henrique-guedes-silvestre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* 🧍 Coluna direita — imagem */}
        <div className="flex flex-col items-center gap-6 animate-fadeIn">
          <div className="relative">
            {/* brilho sutil atrás da imagem */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-25"></div>
            <img
              src="https://i.imgur.com/NlR4XQy.png"
              alt="Foto de Henrique Guedes"
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-blue-400 shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* rodapé discreto */}
      <footer className="text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} Henrique Guedes — Portfólio Pessoal
      </footer>
    </div>
  );
}

export default Home;
