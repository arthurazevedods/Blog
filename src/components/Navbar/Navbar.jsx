import styles from './Navbar.module.css';
import NavbarLink from '../NavbarLink/NavbarLink';

export default function Navbar() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}><a href="#">CODAR BR</a></div>
                    <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
                    <label htmlFor="menu-toggle" className={styles.menuIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className={styles.navLinks}>
                        <li>
                            <NavbarLink to="/">
                                Início
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/sobremim">
                                Sobre Mim
                            </NavbarLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
