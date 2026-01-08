import styles from "./about-me.module.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <h2>Sobre mim</h2>
      <div className={styles.container}>
        <p className={styles.summary}>
          Olá! Me chamo Tobias Ramos, sou Desenvolvedor Front-end com
          experiência no desenvolvimento de aplicações web modernas, utilizando
          React, Next.js e TypeScript. Sou graduado em Sistemas de Informação e
          atuo na criação de interfaces responsivas, acessíveis e performáticas,
          com foco em boas práticas e qualidade de código.
        </p>
        <p className={styles.summary}>
          Tenho experiência com componentização, consumo de APIs REST,
          gerenciamento de estado e testes automatizados. Gosto de participar de
          projetos desafiadores, explorar novas tecnologias e colaborar com
          pessoas que compartilham a paixão por construir produtos digitais de
          impacto.
        </p>
        <p className={styles.summary}>
          Fora do código, pratico esportes como muay thai e ciclismo, atividades
          que me ajudam a manter disciplina, foco e constância — habilidades que
          também levo para o desenvolvimento de software.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
