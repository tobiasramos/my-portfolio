import styles from "./about-me.module.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <h2>Sobre mim</h2>
      <div className={styles.container}>
        <p className={styles.summary}>
          Olá, me chamo Tobias, tenho 25 anos, moro em Senador Pompeu – Ce. Sou
          front end com 2 anos de experiência em desenvolvimento de aplicações
          web e graduado em Sistemas de Informação.
        </p>
        <p className={styles.summary}>
          Minha trajetória é impulsionada por uma busca de evolução e
          aprendizado contínuo. Tenho uma aptidão em participar de projetos
          desafiadores, explorando novas tecnologias, fazendo bons networks,
          ajudando pessoas e enriquecendo meus conhecimentos.
        </p>
        <p className={styles.summary}>
          Assim como um bom programador, gosto de uma xícara cheia de café,
          gosto de lugares leves e que não tenha muito estrondo, e gosto de
          estar em rodas de conversas com as pessoas que me fazem bem. Pode não
          parecer, mas também sou uma pessoa atlética, já participei de
          competições em dois esportes que tenho grande identificação, muai thay
          e ciclismo.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
