import Banner from "../../components/Banner/Banner";
import Post from "../../components/Post/Post";

import styles from './Inicio.module.css';

import posts from '../../json/posts.json';

export default function Inicio() {
    return (
        <>
            <main>
                <Banner></Banner>
                <ul className={styles.posts}>
                    {posts.map((post)=>(
                        <li key={post.id}>
                            <Post post={post}/>
                        </li>
                    ))}
                </ul>

             
            </main>

        </>
    )
}