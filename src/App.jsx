import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Characters from "./components/Characters";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className={styles.app}>
      <Navbar setView={setView} />
      <div className={styles.content}>
        {view === "video" && <Video setView={setView} />}
        {view === "characters" && <Characters />}
        {view === "home" && (
          <div className={styles.home}>
            <h1>Bem-vindo ao Mundo de Dragon Ball!</h1>
            <p>Escolha uma opção acima para começar!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
