import { useState } from "react";
import Navbar from "../components/Navbar";
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

  function handleBuscaChange(novoValor) {
    setBusca(novoValor)
  }

  const filtro =  projetos.filter((projetosf)=>{return projetosf.Nome.toLowerCase().includes(busca.toLowerCase())})//includes está servindo para analisar se oq foi digitado está batendo com o nome do projeto 

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Meus Projetos 🚀</h1>
      <p>Aqui vai aparecer a lista de projetos.</p>
      <ul>
        <li>
          {filtro.length === 0 ? (  <p>Não encontrado</p> // Se o filtro estiver vazio
          ) :(// Caso contrário, exibe os projetos que passaram no filtro
            filtro.map((projects) => (
            <>
              <h1>{projects.Nome}</h1>
              <p>{projects.Descrição}</p>
              <a href={projects.Link}>Link do projeto</a>
            </>
          )))}
        </li>
      </ul>
      <Navbar onBuscaChange={handleBuscaChange} />
    </div>
  );
}
export default Projetos;
