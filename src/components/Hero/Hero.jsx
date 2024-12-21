import styles from './Hero.module.css'
import imagem from '@assets/setup.jpg'
export default function Hero() {
    let imageUrl = "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80";
    imageUrl = imagem
    return (
        <>
            <div className={styles.hero} style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className={styles.hero_content}>
                    <h1>CODAR BR</h1>
                    <div className={styles.explore}>
                        <p className={styles.welcome}>
                            Explore nossos conteúdos sobre programação, tecnologia, inovação e muito mais. Seja você iniciante ou experiente, este é o lugar para trocar ideias, aprender e crescer na jornada do desenvolvimento.
                        </p>

                        <button>EXPLORE</button>
                    </div>
                </div>
                <div className={styles.picture}>
                    <p className={styles.refImage}>
                        Picture by{' '}
                        <a href="https://unsplash.com/pt-br/@zarakvg" target="_blank" rel="noopener noreferrer">
                            <p className={styles.refImage}>@zarakvg</p>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
