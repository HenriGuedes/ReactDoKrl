import { useParams, Link } from "react-router-dom";
import { projetos } from "../pages/Projetos"; // ✅ agora funciona certinho

function DetalheProjeto() {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === parseInt(id)); // busca pelo id

  if (!projeto) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center text-2xl">
        Projeto não encontrado 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white pt-28 px-8 flex flex-col items-center text-center">
      {/* 🧭 Nome do projeto */}
      <h1 className="text-5xl font-bold mb-6 text-blue-400 drop-shadow-md">
        {projeto.Nome}
      </h1>

      {/* 📝 Descrição */}
      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
        {projeto.Descrição ||
          "Este projeto foi desenvolvido com foco em boas práticas de código e atenção à experiência do usuário. A proposta é criar uma aplicação moderna e intuitiva, com layout responsivo e tecnologias atuais, garantindo desempenho e acessibilidade. Ele representa um dos meus principais aprendizados em desenvolvimento front-end e demonstra minha evolução na construção de interfaces organizadas, fluidas e visuais."}
      </p>

      {/* 🔗 Link externo */}
      <a
        href={projeto.Link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-all shadow-md"
      >
        Ver projeto completo
      </a>

      {/* 🔙 Voltar */}
      <Link
        to="/projetos"
        className="text-slate-400 hover:text-blue-400 mt-10 inline-block transition-all"
      >
        ← Voltar para projetos
      </Link>
    </div>
  );
}

export default DetalheProjeto;
