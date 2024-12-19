import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import SobreMim from "./pages/SobreMim/SobreMim"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import DefaultPage from "./components/DefaultPage/DefaultPage"

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMim />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
