import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Leonardo Silva, desenvolvedor front-end e uso este espaço para compartilhar vários conhecimentos. Espero que aprenda algo novo 😊
        </p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt='Ilustração de um circulo colorido ao fundo'
        />
        <img 
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Foto de Leonardo Silva'
        />
      </div>
    </div>
  );
}

export default Banner;