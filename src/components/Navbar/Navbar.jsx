import styles from './Navbar.module.css';
import NavbarLink from '../NavbarLink/NavbarLink';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                    <NavbarLink to="/">
                        Início
                    </NavbarLink>
                    <NavbarLink to="/sobremim">
                        Sobre mim
                    </NavbarLink>
                </nav>
            </header>
        </>
    )
}