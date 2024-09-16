import { useState, useEffect } from "react";
import styles from "./homePage.module.scss";
import Loader from "../components/Loader";
import { AnimatePresence, motion } from "framer-motion";


type Props = {};

export default function HomePage({}: Props) {
  const [isComplete, setIsComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  // const [noiseFrequency, setNoiseFrequency] = useState(1);

  useEffect(() => {
    const sessionHasVisited = sessionStorage.getItem("hasVisited");

    // Skip loader if user has visited before
    if (sessionHasVisited) {
      setHasVisited(true);
    }
  }, []);
   // useEffect(() => {
   //   const interval = setInterval(() => {
   //     setNoiseFrequency(Math.random() * 0.5 + 1);
   //   }, 300);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (isComplete) {
      sessionStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setHasVisited(true);
      }, 5000);
    }
  }, [isComplete]);
  // const backgroundImage = `linear-gradient(0deg, rgba(34,34,34,0.46), rgba(0,0,0,0)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${noiseFrequency}' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
  // style={{
  //   background: backgroundImage,
  // }}

  return (
    <motion.div
      className={styles.main}
    >
      <AnimatePresence>
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
       
          
          homePage
          
        </div>
      </AnimatePresence>
    </motion.div>
  );
}
