import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-800">
        <h1 className="text-white text-3xl font-bold">Meu Portfólio 💼</h1>
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
