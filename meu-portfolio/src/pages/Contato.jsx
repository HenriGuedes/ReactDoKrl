import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contato() {
  // estados para armazenar o que o usuário digitar
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  // função chamada quando o usuário envia o formulário
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

    // limpa os campos
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white pt-28 pb-20 px-8 ">
      {/* 🧭 Navbar fixa */}
      <Navbar />

      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">
          Entre em Contato
        </h1>
        <p className="text-slate-300 text-lg">
          Dúvidas, ideias ou oportunidades? Fale comigo!
        </p>
      </div>

      {/* 🔹 Container principal */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
        {/* 📬 Formulário */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-lg w-full md:w-2/3"
        >
          <label className="font-semibold text-slate-200">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="bg-slate-700 border border-slate-600 p-2 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <label className="font-semibold text-slate-200">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="bg-slate-700 border border-slate-600 p-2 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <label className="font-semibold text-slate-200">Mensagem</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="bg-slate-700 border border-slate-600 p-2 rounded text-white h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 rounded-lg transition-all mt-4"
          >
            Enviar mensagem
          </button>
        </form>

        {/* ☎️ Bloco lateral com contato direto */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-lg w-full md:w-1/3 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Contato direto
          </h2>
          <p className="text-slate-300 mb-6 max-w-sm">
            Se quiser um contato mais próximo, me chame por:
          </p>

          {/* email */}
          <div className="mb-6">
            <p className="font-semibold text-blue-500 mb-1">Email</p>
            <a
              href="mailto:henriquegsilvestre@gmail.com"
              className="text-slate-200 hover:text-blue-400 transition"
            >
              henriquegsilvestre@gmail.com
            </a>
          </div>

          {/* telefone */}
          <div>
            <p className="font-semibold text-blue-500 mb-1">Telefone</p>
            <a
              href="tel:+5511940721027"
              className="text-slate-200 hover:text-blue-400 transition"
            >
              (11) 94072-1027
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
