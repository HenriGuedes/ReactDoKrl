import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-4 mt-16 text-center">
      {/* ícones de redes sociais */}
      <div className="flex justify-center gap-6 mb-2 text-2xl">
        <a
          href="https://github.com/henrique-silvestre"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/henrique-guedes-silvestre"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:henrique.silvestre@email.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* texto simples */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Henrique Guedes — Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
