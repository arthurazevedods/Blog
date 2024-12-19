import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import SobreMim from "./pages/SobreMim/SobreMim"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import DefaultPage from "./components/DefaultPage/DefaultPage"
import Post from "./pages/Post/Post"
import NotFound from "./pages/NotFound/NotFound"
import ScrollToTop from "@components/ScrollToTop/ScrollToTop"

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMim />} />
            
          </Route>
          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
