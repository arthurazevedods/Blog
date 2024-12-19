import Banner from "../../components/Banner/Banner";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
    return (
        <>
            <main>
                <Banner></Banner>

                {/*Renderiza conteúdo da rota*/}
                <Outlet />
            </main>
        </>
    )
}