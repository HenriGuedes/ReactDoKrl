import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import DetalheProjeto from "./pages/DetalheProjeto";
import Footer from "./components/Footer";

function App() {
  // ✅ Cria o estado global de busca
  const [busca, setBusca] = useState("");

  return (
    <>
      <BrowserRouter>
        {/* ✅ Corrigido: agora o nome da prop está igual ao do Navbar */}
        <Navbar busca={busca} setBusca={setBusca} />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* ✅ Envia o valor da busca para a página de Projetos */}
          <Route path="/projetos" element={<Projetos busca={busca} />} />
          <Route path="/projetos/:id" element={<DetalheProjeto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
