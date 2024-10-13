import  { useEffect } from "react";
import styles from "./loaderTwo.module.scss";
import { motion } from "framer-motion";
import ProgressHook from "../../hooks/ProgressHook";
import RandomTextReveal from "../RandomTextReveal";
import classNames from "classnames";

type Props = { setIsComplete: Function };

function LoaderTwo({ setIsComplete }: Props) {
  const { progress, finished } = ProgressHook();

  const screenWidth: number = window.innerWidth;
  const screenHeight: number = window.innerHeight;
  const cellSize: number = 60;
  const columns: number = Math.floor(screenWidth / cellSize);
  const rows: number = Math.floor(screenHeight / cellSize);

  const getRandomNumber = (): number => {
    return Math.random() * 1;
  };

  const date: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const handleSkip = (): void => {
    setIsComplete(true);
  };
  const formattedDate: string = date.toLocaleString("en-US", options);
  const string: string =
    "CALIBRATING NEURAL UPLINK... ESTABLISHING SECURE LINK TO THE CYBER NETWORK. PLEASE WAIT AS WE FINALIZE THE CONNECTION.";
  useEffect(() => {
    if (finished) {
      setIsComplete(true);
    }
  }, [finished]);
  return (
    <div className={styles.container}>
      <div className={styles.grainBg}></div>
      {/* <div className={styles.gridBg}></div> */}
      <div className={styles.gridContainer} style={{ overflow: "hidden" }}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.gridRow}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className={styles.gridItem}>
                <div
                  className={styles.gridItemInner}
                  style={{
                    animationDelay: `${getRandomNumber()}s`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.loader}>
        <div className={styles.topSvg}>
          <p className={classNames(styles.topText, styles.textAnimation)}>
            <RandomTextReveal text="JAGADEESH VER 1.0" hover={false} />
          </p>
          <p className={classNames(styles.topText2, styles.textAnimation)}>
            <RandomTextReveal text="STATUS CHECK........OK" hover={false} />
          </p>
        </div>
        <div className={styles.bottomSvg}>
          <p className={classNames(styles.bottomText, styles.textAnimation)}>
            <RandomTextReveal text="Date : " hover={false} />
            {formattedDate}
          </p>
          <p className={classNames(styles.bottomText2, styles.textAnimation)}>
            {string.split(" ").map((char, index) => (
              <span>
                <RandomTextReveal
                  key={index}
                  text={char}
                  hover={false}
                  className={styles.randomText}
                />
              </span>
            ))}
          </p>
        </div>
        <div className={styles.loaderContent}>
          <div className={styles.loaderWrapper}>
            <div className={styles.skipButton}>
              <button onClick={handleSkip}>Skip Intro</button>
            </div>
            <div className={styles.loaderOverlay}></div>
            <div className={styles.loaderContainer}>
              <div className={styles.loaderHeader}></div>
              <div className={styles.loaderBody}>
                <div className={styles.loaderText}>Loading...</div>
                <motion.div className={styles.loaderBar}>
                  <motion.div
                    className={styles.loaderBarInner}
                    style={{ width: `${progress}%` }}
                  ></motion.div>
                </motion.div>
                <div className={styles.loaderPercentage}>
                  {!finished ? progress : "♾️"}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderTwo;
