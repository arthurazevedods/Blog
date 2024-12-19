import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import SobreMim from "./pages/SobreMim/SobreMim"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import DefaultPage from "./components/DefaultPage/DefaultPage"
import Post from "./pages/Post/Post"

function AppRoutes() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMim />} />
            <Route path="posts/:id" element={<Post />} />
          </Route>
          <Route path="*" element={<div>Página não encontrada</div>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
