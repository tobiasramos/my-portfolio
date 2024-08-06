import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ addMarginTop }) => {
  return (
    <footer
      className={`${styles.footer} ${addMarginTop ? styles.marginTop : ""}`}
    >
      <div>
        &copy; 2023 | Feito por
        <a
          href="https://www.linkedin.com/in/tobias-ramos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tobias Ramos
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  addMarginTop: PropTypes.bool,
};
export default Footer;
