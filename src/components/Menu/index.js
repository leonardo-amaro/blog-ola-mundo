import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        <Link 
          className={`
            ${styles.link}
            ${localizacao.pathname === '/' ? styles.linkDestacado : ''}
          `} 
          to='/'
        >
          Início
        </Link>
        <Link 
          className={`
            ${styles.link}
            ${localizacao.pathname === '/sobre' ? styles.linkDestacado : ''}
          `} 
          to='/sobre'
        >
          Sobre mim
        </Link>
      </nav>
    </header>
  );
}

export default Menu;