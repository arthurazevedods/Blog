import MainButton from "@components/MainButton/MainButton";
import style from './NotFound.module.css';
import error from '@assets/erro_404.png';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate(); //hook
    const defaultText = "Ops! Página não encontrada.";
    const postText = "Ops! Post não encontrado.";
    // Verifica se a URL inclui "posts"
    const isPostRoute = window.location.pathname.includes('/posts/');
    const displayText = isPostRoute ? postText : defaultText;

    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>

                <h1 className={style.titulo}>{displayText}</h1>

                <p className={style.paragrafo}>
                    Tem certeza que era isso que estava procurando?
                </p>
                <p className={style.paragrafo}>
                    Aguarde e tente novamente mais tarde ou retorne para a página principal.
                </p>

                <div 
                    className={style.botaoContainer}
                    onClick={() => navigate(-1)}
                >
                    <MainButton tamanho='lg'>
                        Voltar
                    </MainButton>
                </div>

                <img className={style.imagemCachorro} src={error} alt="Imagem de um cachorro" />
            </div>

            <div className={style.espacoEmBranco}>
            </div>
        </>
    );
}
