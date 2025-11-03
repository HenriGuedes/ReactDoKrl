import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props);
  return (
    <div>
      <nav className="bg-blue-100  fixed top-0 w-full h-25 flex flex-row gap-4 pt-12 ">
        <Link
          to="/projetos"
          className="bg-blue-300 rounded w-30 h-8 text-center p-1  ml-30"
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

        <div className=" fixed top-0   absolute, right-0 pt-13">
          <label className="mr-4"> pesqueisa</label>
          <input
            type="text"
            className="bg-amber-800 w-48 h-6 rounded mr-40 "
            onChange={(event) => props.onBuscaChange(event.target.value)}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
