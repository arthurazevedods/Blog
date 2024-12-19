import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import MainButton from '@components/MainButton/MainButton';
/* eslint-disable react/prop-types */
export default function Post({ post }) {
    return (
        <>
            <Link to={`/posts/${post.id}`}>
                <div className={styles.post}>
                    <img
                        className={styles.capa}
                        src={`/assets/posts/${post.id}/capa.png`}
                        alt="Capa do post"
                    />

                    <h2 className={styles.titulo}>
                        {post.titulo}
                    </h2>
                    <MainButton>Ler</MainButton>
                </div>
            </Link>
        </>

    );
}
