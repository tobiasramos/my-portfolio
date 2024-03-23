import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div>
      <h2>Habilidades</h2>
      <div className={styles.skillsContainer}>
        <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
          <div>
            <img src="../img/html.png" alt="Logo HTML" />
            <h3>HTML5</h3>
          </div>
        </a>

        <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">
          <div>
            <img src="../img/css.png" alt="Logo CSS" />
            <h3>CSS3</h3>
          </div>
        </a>

        <a href="https://getbootstrap.com/" target="_blank">
          <div>
            <img src="../img/bootstrap-.jpeg" alt="Logo BOOTSTRAP" />
            <h3>BOOTSTRAP</h3>
          </div>
        </a>

        <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank">
          <div>
            <img src="../img/js.png" alt="Logo JAVASCRIPT" />
            <h3>JAVASCRIPT</h3>
          </div>
        </a>

        <a href="https://jquery.com/" target="_blank">
          <div>
            <img src="../img/jquery.png" alt="Logo JQUERY" />
            <h3>JQUERY</h3>
          </div>
        </a>

        <a href="https://jquery.com/" target="_blank">
          <div>
            <img src="../img/typescript.png" alt="Logo TYPESCRIPT" />
            <h3>TYPESCRIPT</h3>
          </div>
        </a>

        <a
          href="https://pt-br.reactjs.org/docs/getting-started.html"
          target="_blank"
        >
          <div>
            <img src="../img/react.png" alt="Logo React" />
            <h3>REACT</h3>
          </div>
        </a>

        <a
          href="https://nextjs.org/"
          target="_blank"
        >
          <div>
            <img src="../img/next.png" alt="Logo Next" />
            <h3>NEXT</h3>
          </div>
        </a>

        <a href="https://mui.com/" target="_blank">
          <div>
            <img src="../img/materialUi.png" alt="Logo MATERIAL UI" />
            <h3>MATERIAL UI</h3>
          </div>
        </a>

        <a href="https://ant.design/" target="_blank">
          <div>
            <img src="../img/ant-design.png" alt="Logo ANT DESIGN" />
            <h3>ANT DESIGN</h3>
          </div>
        </a>

        <a href="https://redux.js.org/" target="_blank">
          <div>
            <img src="../img/redux.svg" alt="Logo REDUX" />
            <h3>REDUX</h3>
          </div>
        </a>

        <a href="https://zustand-demo.pmnd.rs/" target="_blank">
          <div>
            <img src="../img/zustand.png" alt="Logo ZUSTAND" />
            <h3>ZUSTAND</h3>
          </div>
        </a>

        <a href="https://jestjs.io/" target="_blank">
          <div>
            <img src="../img/jest.png" alt="Logo JEST" />
            <h3>JEST</h3>
          </div>
        </a>

        <a href="https://testing-library.com/" target="_blank">
          <div>
            <img src="../img/testing-library.png" alt="Logo TESTING LIBRARY" />
            <h3>TESTING LIBRARY</h3>
          </div>
        </a>

        <a href="https://angular.io/" target="_blank">
          <div>
            <img src="../img/angular.png" alt="Logo ANGULAR" />
            <h3>ANGULAR</h3>
          </div>
        </a>

        <a href="https://git-scm.com/" target="_blank">
          <div>
            <img src="../img/git.png" alt="Logo Git" />
            <h3>GIT</h3>
          </div>
        </a>

        <a href="https://github.com/" target="_blank">
          <div>
            <img src="../img/github.png" alt="Logo GitHub" />
            <h3>GitHub</h3>
          </div>
        </a>

        <a href="https://nodejs.org/en" target="_blank">
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Logo NODEJS"
            />
            <h3>NODEJS</h3>
          </div>
        </a>
        <a href="https://expressjs.com/pt-br/" target="_blank">
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Logo EXPRESS"
            />
            <h3>EXPRESS</h3>
          </div>
        </a>
        <a href="https://sequelize.org/docs/v6/" target="_blank">
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
              alt="Logo SEQUELIZE"
            />
            <h3>SEQUELIZE</h3>
          </div>
        </a>
        <a href="https://www.mysql.com/" target="_blank">
          <div>
            <img src="../img/mysql.png" alt="Logo MYSQL" />
            <h3>MYSQL</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Skills;
