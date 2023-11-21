import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ResumeIcon from "@mui/icons-material/Description";

const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      <ul>
        <li>
          <a href="https://github.com/tobiasramos" target="_blank">
            <GitHubIcon />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/tobias-ramos/" target="_blank">
            <LinkedInIcon color="blue" />
          </a>
        </li>

        <li>
          <a href="mailto:tobiasramossilva@gmail.com?subject=link HTML">
            <EmailIcon />
          </a>
        </li>

        <li>
          <a href="../curriculo/Currículo.pdf" target="iframe_download"></a>
          <ResumeIcon />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
