import styles from "./Sobre.module.css";
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function Sobre() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        👋 Olá, me chamo Leonardo!
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Leonardo Silva"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedor Front-end e estou muito feliz em te ver por aqui!
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou em 2019, quando tive o meu primeiro contato com lógica de programação na linguagem Python. Fiz alguns cursos livres pelo YouTube e cheguei a construir programas simples na linguagem. Porém, não consegui criar uma identificação com a linguagem e acabei me afastando por algum tempo.
      </p>
      <p className={styles.paragrafo}>
        Foi quando, no fim de 2020, decidi realizar alguns cursos livres de JavaScript, também pelo YouTube. Foi com o Curso Em Vídeo que dei meus primeiros passos na linguagem e logo de cara me apaixonei por criar páginas web dinâmicas e interativas ao usuário. Com isso, tive a primeira certeza de que queria seguir a carreira de desenvolvimento Web Front-end.
      </p>
      <p className={styles.paragrafo}>
        Continuei meus estudos, me especializando também em HTML e CSS, adquirindo uma base cada vez mais sólida no desenvolvimento Web. Atualmente, estou estudando ReactJS, na Alura. Tem sido uma grande aventura poder utilizar essa biblioteca tão poderosa para desenvolvimento Front-end.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido apenas aprendizado contínuo e dedicação total. Espero em breve conseguir a minha primeira colocação como Dev no mercado de trabalho, para poder compartilhar mais experiências por aqui também!
      </p>
    </PostModelo>
  );
}