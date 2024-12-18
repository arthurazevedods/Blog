import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import SobreMim from "./pages/SobreMim/SobreMim"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
