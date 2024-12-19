import styles from './MainButton.module.css'
/* eslint-disable react/prop-types */
export default function MainButton( {children, tamanho}) {  
    return (
        <button className={`${styles.btn} ${styles[tamanho]}`}>
            {children}
        </button>
    );
}
