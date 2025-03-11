import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => post.id === Number(parametros.id));

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${parametros.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <Markdown>
          {post.texto}
        </Markdown>
      </div>
    </PostModelo>
  );
}