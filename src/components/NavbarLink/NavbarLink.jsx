import PropTypes from 'prop-types';
import styles from './NavbarLink.module.css'
import { Link, useLocation } from 'react-router-dom';
export default function NavbarLink({ children, to }) {
    const local = useLocation(); //hook


    return (
        <>
            <Link className={`${styles.link} ${local.pathname === to ? styles.destaqueLink : ""} `} to={to} >
                {children}
            </Link>
        </>
    )
}

NavbarLink.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}