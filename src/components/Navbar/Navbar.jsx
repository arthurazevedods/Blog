import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                    <Link className={styles.link} to={'/'}>
                        Início
                    </Link>
                    <Link className={styles.link} to={'/sobremim'}>
                        Sobre mim
                    </Link>
                </nav>
            </header>
        </>
    )
}