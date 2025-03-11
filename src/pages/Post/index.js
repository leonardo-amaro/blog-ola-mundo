import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";
import PaginaPadrao from "components/PaginaPadrao";
import Erro404 from "pages/Erro404";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => post.id === Number(parametros.id));

  if (!post) return (
    <Erro404 />
  );

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${parametros.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <Markdown>{post.texto}</Markdown>
        </div>
      </PostModelo>
    </PaginaPadrao>
  );
}