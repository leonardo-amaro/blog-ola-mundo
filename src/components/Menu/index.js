import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link className={styles.link} to='/'>
          Início
        </Link>
        <Link className={styles.link} to='/sobre'>
          Sobre mim
        </Link>
      </nav>
    </header>
  );
}

export default Menu;