import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <Link to={`post/${post.id}`}>
      <div className={styles.post}>
        <img 
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Foto de capa do post"
        />
        <h2 className={styles.titulo}>
          {post.titulo}
        </h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  );
}

export default PostCard;