import styles from "./Index.module.css";
import Post from "components/Post";
import posts from "json/posts.json";

export default function Index() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}