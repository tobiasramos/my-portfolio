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
      <section className={styles.myProjects} id="my-projects">
        <article className={styles.arrow}>
          <ArrowBackIosNewIcon onClick={handleLeftClick} />
        </article>
        <div className={styles.carousel} ref={carousel}>
        <article className={styles.item}>
            <div className={styles.imageProject}>
              <a
                href="https://general-product-store-git-main-tobias-ramos-projects.vercel.app/"
                target="_blank"
              >
                <img
                  src="../img/project-5.gif"
                  alt="Foto do primeiro projeto"
                />
              </a>
            </div>
            <div className={styles.info}>
              <a
                href="https://github.com/tobiasramos/general-product-store"
                target="_blank"
              >
                <h3>Loja de produtos em geral</h3>
              </a>

              <h4>Tecnologias:</h4>
              <ul>
                <li>- NextJS</li>
                <li>- Zustand</li>
                <li>- Ant Design</li>
              </ul>
            </div>
          </article>

          <article className={styles.item}>
            <div className={styles.imageProject}>
              <a
                href="https://multi-step-form-git-main-tobias-ramos-projects.vercel.app/"
                target="_blank"
              >
                <img
                  src="../img/project-1.gif"
                  alt="Foto do primeiro projeto"
                />
              </a>
            </div>
            <div className={styles.info}>
              <a
                href="https://github.com/tobiasramos/multi-step-form.git"
                target="_blank"
              >
                <h3>Multi Step Form</h3>
              </a>

              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Styled Components</li>
                <li>- Jest/React Testing Library</li>
              </ul>
            </div>
          </article>

          <article className={styles.item}>
            <div className={styles.imageProject}>
              <a
                href="https://pokedex-git-main-tobias-ramos-projects.vercel.app/"
                target="_blank"
              >
                <img src="../img/project-2.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div className={styles.info}>
              <a
                href="https://github.com/tobiasramos/pokedex.git"
                target="_blank"
              >
                <h3>Pokedex</h3>
              </a>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </article>

          <article className={styles.item}>
            <div className={styles.imageProject}>
              <a
                href="https://country-search-git-main-tobias-ramos-projects.vercel.app/"
                target="_blank"
              >
                <img
                  src="../img/project-3.gif"
                  alt="Foto do primeiro projeto"
                />
              </a>
            </div>
            <div className={styles.info}>
              <a
                href="https://github.com/tobiasramos/country-search"
                target="_blank"
              >
                <h3>Country Search</h3>
              </a>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </article>

          <article className={styles.item}>
            <div className={styles.imageProject}>
              <a
                href="https://job-listings-git-main-tobias-ramos-projects.vercel.app/"
                target="_blank"
              >
                <img src="../img/project-4.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div className={styles.info}>
              <a
                href="https://github.com/tobiasramos/job-listings"
                target="_blank"
              >
                <h3>Job Listings</h3>
              </a>
              <h4>Tecnologias:</h4>
              <ul>
                <li>- ReactJS</li>
                <li>- Axios</li>
              </ul>
            </div>
          </article>
        </div>
        <article className={styles.arrow}>
          <ArrowForwardIosIcon onClick={handleRightClick} />
        </article>
      </section>
    </>
  );
};

export default Projects;
