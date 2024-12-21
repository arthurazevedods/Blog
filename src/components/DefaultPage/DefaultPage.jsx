import Hero from "../../components/Hero/Hero";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
    return (
        <>
            <main>
                <Hero></Hero>

                {/*Renderiza conteúdo da rota*/}
                <Outlet />
            </main>
        </>
    )
}