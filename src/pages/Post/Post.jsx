import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

import posts from "@json/posts.json";
import './Post.css'
import styles from './Post.module.css'

import PostModel from "@components/PostModel/PostModel";
import PostCard from "@components/PostCard/PostCard";
import DefaultPage from "@components/DefaultPage/DefaultPage";

import NotFound from "@pages/NotFound/NotFound";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <NotFound />
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const recomendados = shuffle(
    posts.filter((post) => post.id !== Number(params.id))
  ).slice(0, 4);



  return (
    <>
      <Routes>
        <Route path="*" element={<DefaultPage />}>

          <Route index element={
            <PostModel FotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>
                  {post.texto}
                </ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>Leia também:</h2>

              <ul className={styles.postsRecomendados}>
                {recomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModel>
          } />


        </Route>

      </Routes>

    </>

  );
}
