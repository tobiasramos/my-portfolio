import styles from "./about-me.module.css";
import '@fontsource/roboto/500.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <img src="./img/profile.jpg" alt="Logo do perfil" />
      <h1>Sobre mim</h1>
      <p className={styles.summary}>
        Front end com mais de 2 anos de experiência em desenvolvimento de
        aplicações web, fazendo o uso de frameworks e bibliotecas modernos.
        Minha jornada é marcada por uma constante busca por evolução, participai
        de projetos desafiadores, explorando tecnologias que eram novas para
        mim, experiências como essas expandiu meus conhecimentos e habilidades.
        Além desse meu lado profissional, sou também um grande praticante de
        esportes. Tenho um imenso apego ao muay thai, e ao ciclismo, em ambos
        esportes já participei de competições e assim é a minha rotina,
        estuando, trabalhando e praticando esses esportes.
      </p>
    </div>
  );
};

export default AboutMe;
