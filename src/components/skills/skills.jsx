import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div>
      <h2>Habilidades</h2>
      <div className={styles.skillsContainer}>
        <h3>Técnica:</h3>
        <div className={styles.technique}>
          <a
            href="https://www.w3schools.com/html/html_intro.asp"
            target="_blank"
          >
            <div>
              <img src="../img/html.png" alt="Logo HTML" />
              <h4>HTML5</h4>
            </div>
          </a>

          <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">
            <div>
              <img src="../img/css.png" alt="Logo CSS" />
              <h4>CSS3</h4>
            </div>
          </a>

          <a href="https://getbootstrap.com/" target="_blank">
            <div>
              <img src="../img/bootstrap-.jpeg" alt="Logo BOOTSTRAP" />
              <h4>BOOTSTRAP</h4>
            </div>
          </a>

          <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank">
            <div>
              <img src="../img/js.png" alt="Logo JAVASCRIPT" />
              <h4>JAVASCRIPT</h4>
            </div>
          </a>

          <a href="https://jquery.com/" target="_blank">
            <div>
              <img src="../img/jquery.png" alt="Logo JQUERY" />
              <h4>JQUERY</h4>
            </div>
          </a>

          <a href="https://jquery.com/" target="_blank">
            <div>
              <img src="../img/typescript.png" alt="Logo TYPESCRIPT" />
              <h4>TYPESCRIPT</h4>
            </div>
          </a>

          <a
            href="https://pt-br.reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            <div>
              <img src="../img/react.png" alt="Logo React" />
              <h4>REACT</h4>
            </div>
          </a>

          <a href="https://nextjs.org/" target="_blank">
            <div>
              <img src="../img/next.png" alt="Logo Next" />
              <h4>NEXT</h4>
            </div>
          </a>

          <a href="https://mui.com/" target="_blank">
            <div>
              <img src="../img/materialUi.png" alt="Logo MATERIAL UI" />
              <h4>MATERIAL UI</h4>
            </div>
          </a>

          <a href="https://ant.design/" target="_blank">
            <div>
              <img src="../img/ant-design.png" alt="Logo ANT DESIGN" />
              <h4>ANT DESIGN</h4>
            </div>
          </a>

          <a href="https://redux.js.org/" target="_blank">
            <div>
              <img src="../img/redux.svg" alt="Logo REDUX" />
              <h4>REDUX</h4>
            </div>
          </a>

          <a href="https://zustand-demo.pmnd.rs/" target="_blank">
            <div>
              <img src="../img/zustand.png" alt="Logo ZUSTAND" />
              <h4>ZUSTAND</h4>
            </div>
          </a>

          <a href="https://jestjs.io/" target="_blank">
            <div>
              <img src="../img/jest.png" alt="Logo JEST" />
              <h4>JEST</h4>
            </div>
          </a>

          <a href="https://testing-library.com/" target="_blank">
            <div>
              <img
                src="../img/testing-library.png"
                alt="Logo TESTING LIBRARY"
              />
              <h4>TESTING LIBRARY</h4>
            </div>
          </a>

          <a href="https://angular.io/" target="_blank">
            <div>
              <img src="../img/angular.png" alt="Logo ANGULAR" />
              <h4>ANGULAR</h4>
            </div>
          </a>

          <a href="https://git-scm.com/" target="_blank">
            <div>
              <img src="../img/git.png" alt="Logo Git" />
              <h4>GIT</h4>
            </div>
          </a>

          <a href="https://github.com/" target="_blank">
            <div>
              <img src="../img/github.png" alt="Logo GitHub" />
              <h4>GitHub</h4>
            </div>
          </a>

          <a href="https://nodejs.org/en" target="_blank">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Logo NODEJS"
              />
              <h4>NODEJS</h4>
            </div>
          </a>

          <a href="https://expressjs.com/pt-br/" target="_blank">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Logo EXPRESS"
              />
              <h4>EXPRESS</h4>
            </div>
          </a>

          <a href="https://sequelize.org/docs/v6/" target="_blank">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                alt="Logo SEQUELIZE"
              />
              <h4>SEQUELIZE</h4>
            </div>
          </a>

          <a href="https://www.mysql.com/" target="_blank">
            <div>
              <img src="../img/mysql.png" alt="Logo MYSQL" />
              <h4>MYSQL</h4>
            </div>
          </a>
        </div>
        <h3>Não técnica:</h3>
        <div className={styles.nonTechnical}>
          <p>Empatia</p>
          <p>Adaptabilidade</p>
          <p>Comunicação</p>
          <p>Resiliência</p>
          <p>Autocontrole</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
