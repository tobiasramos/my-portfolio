import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        &copy; 2023 | Feito por
        <a href="https://www.linkedin.com/in/tobias-ramos/" target="_blank">
          Tobias Ramos
        </a>
      </div>
    </footer>
  );
};

export default Footer;
