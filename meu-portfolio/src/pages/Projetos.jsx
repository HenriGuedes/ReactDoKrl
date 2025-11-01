import { useState } from "react";

function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      Nome: "Projeto1",
      Descrição: "Descrição do determinado projeto",
      Link: "https://www.linkedin.com/feed",
    },

    {
      Nome: "Projeto2",
      Descrição: "Descrição do determinado projeto",
      Link: "https://www.linkedin.com/feed",
    },

    {
      Nome: "Projeto3",
      Descrição: "Descrição do determinado projeto",
      Link: "https://www.linkedin.com/feed",
    },
  ]);

  const [busca, setBusca] = useState("");

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Meus Projetos 🚀</h1>
      <p>Aqui vai aparecer a lista de projetos.</p>
      <ul>
        <li>
          {projetos.map((projects) => (
            <>
              <h1>{projects.Nome}</h1>
              <p>{projects.Descrição}</p>
              <a href={projects.Link}>Link do projeto</a>
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}
export default Projetos;
