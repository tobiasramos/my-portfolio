import styles from "./about-me.module.css";
import "@fontsource/roboto/500.css";
import '@fontsource/roboto/700.css';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h2>Sobre mim</h2>
      <div className={styles.container}>
        <p className={styles.summary}>
          Front end com mais de 2 anos de experiência em desenvolvimento de
          aplicações web, fazendo o uso de frameworks e bibliotecas modernos.
          Minha jornada é marcada por uma constante busca por evolução,
          participai de projetos desafiadores, explorando tecnologias que eram
          novas para mim, experiências como essas expandiram meus conhecimentos e
          habilidades. Além do meu lado profissional, sou também um grande
          praticante de esportes. Tenho um imenso apego ao muay thai, e ao
          ciclismo, em ambos esportes participo de competições.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
