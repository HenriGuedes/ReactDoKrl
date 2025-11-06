import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ busca, setBusca }) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setBusca(event.target.value);
    navigate("/projetos"); // redireciona pra página de projetos ao digitar
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* título simples do site */}
        <h1 className="text-xl font-bold text-blue-400 tracking-wide">
          Henrique.dev
        </h1>

        {/* links de navegação */}
        <div className="flex gap-6 text-2xl font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/projetos" className="hover:text-blue-400 transition">
            Projetos
          </Link>
          <Link to="/contato" className="hover:text-blue-400 transition">
            Contato
          </Link>
        </div>

        {/* barra de pesquisa */}
        <div className="hidden md:flex items-center bg-slate-800 rounded-md px-2 py-1">
          <input
            type="text"
            value={busca}
            onChange={handleChange}
            placeholder="Buscar projetos..."
            className="bg-transparent text-white focus:outline-none placeholder-gray-400 w-40"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
