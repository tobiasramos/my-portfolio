import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div>
      <h1>Experiência</h1>
      <div className={styles.companiesContainer}>
        <div className={styles.company}>
          <img src="../img/labsif.jpeg" alt="Logo da empresa" />
          <h3>LabsIF</h3>
          <span>Agosto 2023 - atual</span>
          <ul>
            <li>
              Desenvolvo telas e componentes web, utilizando ReactJs,
              MaterialUI, Bootstrap, Redux
            </li>
            <li>
              Faço teste dos componentes que crio, colocando em prático o TDD.
              Uso o Jest e React Testing Library para a realização dos testes
            </li>
            <li>
              E recentemente comecei a participar no back end das aplicações,
              usando o NodeJs e o Sequelize para fazer a comunicação com o banco
              de dados .
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <img src="../img/studywise.jpeg" alt="Logo da empresa" />
          <h3>Studywise</h3>
          <span>Abril - Junho de 2023</span>
          <ul>
            <li>
              Participei na criação de telas e componentes de um kanbom. Para o
              desenvolvimento dessa aplicação foi utilizado a biblioteca
              Angular, junto com o TypeScript. Foi usando também o Angular
              Material para ajudar no design e nas colunas drag-and-drop.
              Aplicação desenvolvida apenas para desktop.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
