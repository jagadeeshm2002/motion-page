import React from "react";
import styles from "./HeroPage.module.scss";
import classNames from "classnames";
import vector from "../../assets/image/Vector.png";
import homePageImage from "../../assets/image/homePageImage.jpg";
import VectorSvg from "../../assets/svg/Vector.svg";

type Props = {};

function HeroPage({}: Props) {
  const time = new Date().toTimeString().split(" ")[0].split(":").slice(0, 2).join(" : ");
  return (
    <main className={styles.container}>
      <div className={styles.padding}>
        <div className={styles.grainBg}></div>
        <div className={styles.gridBg}></div>

        <div className={classNames(styles.BackgroundImage, styles.mainHero)}>
          <div className={classNames(styles.lineAnimation, styles.lines)}></div>
          <div className={styles.heroText}>
            <p className={classNames(styles.ultraRegular,styles.heroTextP)}>
              {"WATER".split("").map((char, index) => (
                <span key={index} className={styles.textSpan}>{char}</span>
              ))}
              <br />
              {"INNOVATION".split("").map((char, index) => (
                <span key={index} className={styles.textSpan}>{char}</span>
              ))}
            </p>
          </div>
          <div className={styles.timeContainer}><div><span>[TIME: {time}]</span></div></div>
        </div>
      </div>
    </main>
  );
}

export default HeroPage;
