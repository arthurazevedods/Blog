import { useParams } from "react-router-dom";
import posts from "@json/posts.json";
import PostModel from "@components/PostModel/PostModel";
import ReactMarkdown from 'react-markdown'

import './Post.css'
export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <h2>Post não encontrado</h2>;
  }

  return (
    <PostModel FotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>


    </PostModel>
  );
}
