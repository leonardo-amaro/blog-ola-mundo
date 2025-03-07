import styles from "./Index.module.css";
import Banner from "components/Banner";
import posts from "json/posts.json";

export default function Index() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            {post.titulo}
          </li>
        ))}
      </ul>
    </main>
  );
}