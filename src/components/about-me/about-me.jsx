import styles from "./about-me.module.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <h2>Sobre mim</h2>
      <div className={styles.container}>
        <p className={styles.summary}>
          Front end com quase 2 anos de experiência em desenvolvimento de
          aplicações web, fazendo o uso de bibliotecas e frameworks modernos.
        </p>
        <p className={styles.summary}>
          Minha jornada é marcada por uma constante busca por evolução,
          frequentemente participo de projetos desafiadores, explorando novas
          tecnologias, ajudando pessoas e enriquecendo meus conhecimentos e
          habilidades. Um grande passo foi participar do desenvolvimento ao lado
          server (back end), entendendo como funcionar toda estrutura e lógica por trás
          de uma aplicação.
        </p>
        <p className={styles.summary}>
          Saindo um pouco do meu lado profissional, sou também um grande
          praticante de esportes. Tenho um imenso apego ao muay thai, e ao
          ciclismo, em ambos esportes participo de competições. Tenho abito de
          ler, livros relacionados a tecnologias e também a literatura.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
