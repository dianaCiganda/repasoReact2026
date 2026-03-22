import Header from "./componentes/Header";
import MainApi from "./MainApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from "./Pages/AcercaDe";
import Contacto from "./Pages/Contacto";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Header setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<MainApi searchTerm={searchTerm} />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;