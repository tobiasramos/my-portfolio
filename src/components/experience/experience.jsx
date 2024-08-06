import styles from "./Experience.module.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Experience = () => {
  return (
    <>
      <h2>Experiência</h2>
      <div className={styles.companiesContainer}>
        <div className={styles.company}>
          <img src="../img/insight-logo.jpeg" alt="Logo da empresa" />
          <h3>Insight Data Science Lab</h3>
          <span>Julho 2024 - atual</span>
          <ul>
            <li>
            - Desenvolvo telas e componentes web, utilizando NextJS, ContextAPI, Ant Design e diversidade em hooks do ReactJS;
            </li>
            <li>
              -Uso o Jest e React Testing Library para a realização dos testes.
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <img src="../img/labsif.jpeg" alt="Logo da empresa" />
          <h3>LabsIF</h3>
          <span>Agosto 2023 - Junho 2024</span>
          <ul>
            <li>
              - Desenvolvia telas e componentes web, utilizando ReactJs, NextJs,
              MaterialUI, Bootstrap, Ant Design, Redux e Zustang;
            </li>
            <li>
              - Fazia testes nos componentes que eu criava, colocando em prático
              o TDD. Era usado o Jest e React Testing Library para a realização
              dos testes;
            </li>
            <li>
              - Participei de atividades no back end, usando o NodeJs e o
              Sequelize para fazer a comunicação com o banco de dados.
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <img src="../img/studywise.jpeg" alt="Logo da empresa" />
          <h3>Studywise</h3>
          <span>Abril - Junho de 2023</span>
          <ul>
            <li>
              - Participei na criação de telas e componentes de um kanbom. Para
              o desenvolvimento dessa aplicação foi utilizado a biblioteca
              Angular, junto com o TypeScript. Foi usando também o Angular
              Material para ajudar no design e nas colunas drag-and-drop.
              Aplicação desenvolvida apenas para desktop.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
