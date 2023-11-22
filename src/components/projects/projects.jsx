import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <h2>Projetos</h2>
      <div class={styles.myProjects} id="my-projects">
        <div class={styles.projects}>
          <div class={styles.project}>
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
            <div class={styles.nameProject}>
              <h3>Task Management</h3>
            </div>
          </div>

          <div class={styles.project}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/pokedex.git"
                target="_blank"
              >
                <img src="../img/project-2.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div class={styles.nameProject}>
              <h3>Pokedex</h3>
            </div>
          </div>
        </div>

        <div class={styles.projects}>
          <div class={styles.project}>
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
            <div class={styles.nameProject}>
              <h3>Country Search</h3>
            </div>
          </div>

          <div class={styles.project}>
            <div class={styles.imageProject}>
              <a
                href="https://github.com/tobiasramos/job-listings"
                target="_blank"
              >
                <img src="../img/project-4.gif" alt="Foto do segundo projeto" />
              </a>
            </div>
            <div class={styles.nameProject}>
              <h3>Job Listings</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
