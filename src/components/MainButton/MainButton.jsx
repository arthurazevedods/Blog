import styles from './MainButton.module.css'
/* eslint-disable react/prop-types */
export default function MainButton( {children}) {  
    return (
        <button className={styles.btn}>
            {children}
        </button>
    );
}
