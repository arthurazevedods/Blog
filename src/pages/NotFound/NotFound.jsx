import MainButton from "@components/MainButton/MainButton";
import style from './NotFound.module.css';
import error from '@assets/erro_404.png';
export default function NotFound() {
    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>

                <h1 className={style.titulo}>Ops! Página não encontrada.</h1>

                <p className={style.paragrafo}>
                    Tem certeza que era isso que estava procurando?
                </p>
                <p className={style.paragrafo}>
                    Aguarde e tente novamente mais tarde ou retorne para a página principal.
                </p>

                <div className={style.botaoContainer}>
                    <MainButton>Voltar</MainButton>
                </div>

                <img className={style.imagemCachorro} src={error} alt="Imagem de um cachorro" />
            </div>

            <div className={style.espacoEmBranco}>

            </div>

        </>

    )
}