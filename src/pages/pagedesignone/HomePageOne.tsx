import { useState, useEffect } from "react";
import styles from "./homePageOne.module.scss";
import Loader from "../../components/Loader";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function HomePageOne({}: Props) {
  const [isComplete, setIsComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  // const [noiseFrequency, setNoiseFrequency] = useState(1);

  // useEffect(() => {
  //   const sessionHasVisited = sessionStorage.getItem("hasVisited");

  //   // Skip loader if user has visited before
  //   if (sessionHasVisited) {
  //     setHasVisited(true);
  //   }
  // }, []);
  //  useEffect(() => {
  //    const interval = setInterval(() => {
  //      setNoiseFrequency(Math.random() * 0.5 + 1);
  //    }, 300);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (isComplete) {
  //     sessionStorage.setItem("hasVisited", "true");
  //     setTimeout(() => {
  //       setHasVisited(true);
  //     }, 5000);
  //   }
  // }, [isComplete]);


  return (
    <motion.div className={styles.main}>
      <AnimatePresence>
        {/* Show Loader if not visited */}
        {!hasVisited && (
          <div className={styles.preLoader}>
            <Loader setIsComplete={setIsComplete} />
          </div>
        )}

        {/* Display the homepageone, fade in after loader completion */}
        <div
          className={`${styles.homepage} ${
            hasVisited ? styles.visible :
            isComplete ? styles.visible : ""
          }`}
        >
          homePage
        </div>
      </AnimatePresence>
    </motion.div>
  );
}
