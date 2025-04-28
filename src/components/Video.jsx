import styles from "./Video.module.css";

function Video({ setView }) {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GJtb9xiC0Pk?si=haCbKrM5i6JB-0yD"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className={styles.backButton} onClick={() => setView("home")}>
        Voltar
      </button>
    </div>
  );
}

export default Video;
