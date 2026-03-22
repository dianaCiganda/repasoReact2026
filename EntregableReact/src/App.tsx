import Header from "./componentes/Header"
import MainApi from './MainApi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from './Pages/AcercaDe';
import Contacto from './Pages/Contacto';



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainApi />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
