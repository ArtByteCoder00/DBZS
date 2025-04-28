import { useState, useEffect } from "react";
import styles from "./Characters.module.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items || []); // a API retorna "items"
        setLoading(false);
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  if (loading) {
    return <p className={styles.loading}>Carregando personagens...</p>;
  }

  return (
    <div className={styles.charactersGrid}>
      {characters.map((char) => (
        <div key={char.id} className={styles.card}>
          <img src={char.image} alt={char.name} className={styles.image} />
          <h3>{char.name}</h3>
          <p>Raça: {char.race}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
