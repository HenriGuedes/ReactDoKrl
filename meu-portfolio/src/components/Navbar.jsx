import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-100  fixed top-0 w-full h-25 flex flex-row-reverse  gap-4 pt-8 ">
      <Link
        to="/projetos"
        className="bg-blue-300 rounded w-30 h-8 text-center p-1 mr-4"
      >
        projeto
      </Link>
      <Link
        to="/contato"
        className="bg-blue-300 rounded w-30 h-8 text-center p-1 "
      >
        Contato
      </Link>
      <Link to="/" className="bg-blue-300 rounded w-30 h-8 text-center p-1 ">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
