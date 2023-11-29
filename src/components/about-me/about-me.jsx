import styles from "./about-me.module.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <h2>Sobre mim</h2>
      <div className={styles.container}>
        <p className={styles.summary}>
          Front end com mais de 2 anos de experiência em desenvolvimento de
          aplicações web, fazendo o uso de frameworks e bibliotecas modernos.
        </p>
        <p className={styles.summary}>
          Minha jornada é marcada por uma constante busca por evolução,
          participai de projetos desafiadores, explorando tecnologias que eram
          novas para mim, experiências como essas expandiram meus conhecimentos
          e habilidades.
        </p>
        <p className={styles.summary}>
          Além do meu lado profissional, sou também um grande praticante de
          esportes. Tenho um imenso apego ao muay thai, e ao ciclismo, em ambos
          esportes participo de competições.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
