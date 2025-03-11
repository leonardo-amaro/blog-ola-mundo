import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => post.id === Number(parametros.id));

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${parametros.id}/capa.png`}
      titulo={post.titulo}
    >
      {post.texto}
    </PostModelo>
  );
}