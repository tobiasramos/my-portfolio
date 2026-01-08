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
              - Desenvolvimento de interfaces e componentes web utilizando
              Next.js, React Hooks, Context API e Ant Design.
            </li>
            <li>
              - Implementação de testes automatizados com Jest e React Testing
              Library, garantindo qualidade e confiabilidade do código.
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <img src="../img/labsif.jpeg" alt="Logo da empresa" />
          <h3>LabsIF</h3>
          <span>Agosto 2023 - Junho 2024</span>
          <ul>
            <li>
              - Desenvolvimento de interfaces e componentes web com React,
              Next.js, Material UI, Bootstrap e Ant Design.
            </li>
            <li>- Gerenciamento de estado utilizando Redux e Zustand.</li>
            <li>
              - Implementação de testes automatizados seguindo práticas de TDD
              com Jest e React Testing Library.
            </li>
            <li>
              - Atuação pontual no back-end com Node.js e Sequelize para
              integração com banco de dados.
            </li>
          </ul>
        </div>
        <div className={styles.company}>
          <img src="../img/studywise.jpeg" alt="Logo da empresa" />
          <h3>Studywise</h3>
          <span>Abril - Junho de 2023</span>
          <ul>
            <li>
              - Desenvolvimento de uma interface Kanban para desktop utilizando
              Angular, TypeScript e Angular Material, com funcionalidades de
              drag-and-drop.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
