import { useRef } from "react";
import styles from "./Projects.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Projects = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <h2>Projetos</h2>
      <div class={styles.myProjects} id="my-projects">
        <div class={styles.carousel} ref={carousel}>
          <div class={styles.item}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/task-management"
                target="_blank"
              >
                <img
                  src="../img/project-1.gif"
                  alt="Foto do primeiro projeto"
                />
              </a>
            </div>
            <div class={styles.info}>
              <h3>Task Management</h3>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
                <li>- Material UI</li>
              </ul>
            </div>
          </div>

          <div class={styles.item}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/pokedex.git"
                target="_blank"
              >
                <img src="../img/project-2.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div class={styles.info}>
              <h3>Pokedex</h3>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </div>

          <div class={styles.item}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/country-search"
                target="_blank"
              >
                <img
                  src="../img/project-3.gif"
                  alt="Foto do primeiro projeto"
                />
              </a>
            </div>
            <div class={styles.info}>
              <h3>Country Search</h3>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </div>

          <div class={styles.item}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/job-listings"
                target="_blank"
              >
                <img src="../img/project-4.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div class={styles.info}>
              <h3>Job Listings</h3>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="buttons">
          <ArrowBackIosNewIcon onClick={handleLeftClick} />
          <ArrowForwardIosIcon onClick={handleRightClick} />
        </div>
      </div>
    </>
  );
};

export default Projects;
