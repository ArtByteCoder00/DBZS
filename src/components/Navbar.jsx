import styles from "./Navbar.module.css";

function Navbar({ setView }) {
  return (
    <nav className={styles.navbar}>
      <button onClick={() => setView("video")}>Assistir Vídeo</button>
      <button onClick={() => setView("characters")}>Ver Personagens</button>
    </nav>
  );
}

export default Navbar;
