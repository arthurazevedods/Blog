import styles from './Banner.module.css'
import circulo from '../../assets/circulo_colorido.png'
import foto from '../../assets/foto.jpg'
import NavbarLink from '@components/NavbarLink/NavbarLink'
export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        <NavbarLink to="/">
                            CODAR BR
                        </NavbarLink>
                    </h1>

                    <p className={styles.paragrafo}>
                        Explore nossos conteúdos sobre programação, tecnologia, inovação e muito mais. Seja você iniciante ou experiente, este é o lugar para trocar ideias, aprender e crescer na jornada do desenvolvimento.
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