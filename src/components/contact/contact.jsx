import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ResumeIcon from "@mui/icons-material/Description";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <h2>Contato</h2>
        <ul className={styles.socialMedia}>
          <li>
            <a href="https://github.com/tobiasramos" target="_blank">
              <GitHubIcon className={styles.icon} />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/tobias-ramos/" target="_blank">
              <LinkedInIcon style={{ color: "blue" }} className={styles.icon} />
            </a>
          </li>

          <li>
            <a href="mailto:tobiasramossilva@gmail.com?subject=link HTML">
              <EmailIcon style={{ color: "#878286" }} className={styles.icon} />
            </a>
          </li>

          <li>
            <a href="../curriculo/Currículo.pdf" target="iframe_download"></a>
            <ResumeIcon style={{ color: "#655643" }} className={styles.icon} />
          </li>
        </ul>
    </>
  );
};

export default Contact;
