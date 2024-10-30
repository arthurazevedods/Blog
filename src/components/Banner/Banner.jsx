import styles from './Banner.module.css'
import circulo from '../../assets/circulo_colorido.png'
import foto from '../../assets/foto.jpg'
export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Blog Sem Nome
                    </h1>

                    <p className={styles.paragrafo}>
                        Boas vindas ao meu espaço pessoal! Eu sou o Dono do Blog. Aqui compartilho vários conhecimentos, espero que aprenda algo novo e enriquecedor aqui!
                    </p>
                </div>

                <div className={styles.imagens}>
                    <img 
                        className={styles.circuloColorido} 
                        src={circulo} 
                        aria-hidden={true} 
                    />
                    <img 
                        className={styles.minhaFoto} 
                        src={foto} 
                        aria-hidden={true} 
                    />

                </div>
            </div>
        </>
    )
}