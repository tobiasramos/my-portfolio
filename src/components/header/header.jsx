import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles} src="../img/profile.jpg" alt="Foto de perfil" />
      <div className={styles.titleContainer}>
        <h1>Tobias Ramos</h1>
        <p>Desenvolvedor front end</p>
      </div>
    </div>
  );
};

export default Header;
