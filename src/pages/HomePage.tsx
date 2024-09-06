import { useState, useEffect } from "react";
import styles from "./homePage.module.scss";
import Loader from "../components/Loader";

type Props = {};

export default function HomePage({}: Props) {
  const [isComplete, setIsComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const sessionHasVisited = sessionStorage.getItem("hasVisited");

    // Skip loader if user has visited before
    if (sessionHasVisited) {
      setHasVisited(true);
    }
  }, []);

  useEffect(() => {
    if (isComplete) {
      sessionStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setHasVisited(true);
      }, 5000);
    }
  }, [isComplete]);

  return (
    <div className={styles.main}>
      {/* Show Loader if not visited */}
      {!hasVisited && (
        <div className={styles.preLoader}>
          <Loader setIsComplete={setIsComplete} />
        </div>
      )}

      {/* Display the homepage, fade in after loader completion */}
      <div
        className={`${styles.homepage} ${
          hasVisited ? styles.visible : isComplete ? styles.visible : ""
        }`}
      >
        HomePage Content
      </div>
    </div>
  );
}
