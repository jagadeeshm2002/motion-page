import React, { useEffect, useState } from "react";
import styles from "./HeroPage.module.scss";
import classNames from "classnames";
import vector from "../../assets/image/Vector.png";
import homePageImage from "../../assets/image/homePageImage.jpg";
import VectorSvg from "../../assets/svg/Vector.svg";
import corner from "../../assets/image/corner.png";

type Props = {};

function HeroPage({}: Props) {
  const [randomDelays, setRandomDelays] = useState<string[]>([]);

  useEffect(() => {
    
    const delays = Array.from({ length: 5 }, () => (Math.random() * 1.5).toFixed(2)); 
    setRandomDelays(delays);
  }, []);
  const time = new Date()
    .toTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, 2)
    .join(" : ");
  return (
    <main className={styles.container}>
      <div className={styles.padding}>
        <div className={styles.grainBg}></div>
        <div className={styles.gridBg}></div>

        <div className={classNames(styles.BackgroundImage, styles.mainHero)}>
          <div className={classNames(styles.lineAnimation, styles.lines)}></div>
          <div className={styles.heroText}>
            <p className={classNames(styles.ultraRegular, styles.heroTextP)}>
              {"WATER".split("").map((char, index) => (
                <span key={index} className={styles.textSpan}>
                  {char}
                </span>
              ))}
              <br />
              {"INNOVATION".split("").map((char, index) => (
                <span key={index} className={styles.textSpan}>
                  {char}
                </span>
              ))}
            </p>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.slikscreen}>
              <p className={styles.timetext}>[TIME: {time}]</p>
            </div>
          </div>
          <div className={styles.asideContainer}>
            <div className={styles.aside}>
              <img
                src={corner}
                alt="corner"
                style={{ transform: "rotate(180deg)" }}
              />
              <img
                src={corner}
                alt="corner"
                style={{ transform: "rotate(270deg)" }}
              />
              <img
                src={corner}
                alt="corner"
                style={{ transform: "rotate(90deg)" }}
              />
              <img src={corner} alt="corner" />
              <div className={styles.asideinner}>
                {"// wellcome to 💩 life /let journeybegin = true; /if (challenges) {/ debug(); /}else {/ execute(); /};"
                  .split("/")
                  .map((char, index) => (
                    <p
                      key={index}
                      className={classNames(
                        styles.asideText,
                        styles.slikscreen
                      )}
                    >
                      {char}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.bottomLoader}>
            {randomDelays.map((delay, index) => (
        <div key={index} style={{ animationDelay: `${delay}s` }} />
      ))}
            </div>
            <div className={styles.bottomParagarph}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                sed do eiusmod tempor incididunt ut <br />
                labore et labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroPage;
