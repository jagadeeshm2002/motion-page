import { motion } from "framer-motion";
import styles from "./loader.module.scss";
import { useEffect, useState } from "react";

type Props = { setIsComplete: Function };
export default function HomePage({ setIsComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  const transition = {
    duration: 3,
    yoyo: Infinity,
    ease: "easeInOut",
    repeat: Infinity,
  };
  const gridNumber = 6;

  // const anim = (variants: any, custom: number) => {
  //   return {
  //     initial: "initial",
  //     animate: "enter",
  //     exit: "exit",
  //     variants,
  //     custom,
  //   };
  // };
  const expend = {
    initial: { height: "100vh" },
    enter: (i: number) => ({
      height: 0,

      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: (i: number) => ({
      height: "100vh",

      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  useEffect(() => {
    if (finished) {
      setIsComplete(true);
    }
  }, [finished, setIsComplete]);
  useEffect(() => {
    const loader = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loader);
          setTimeout(() => {
            setFinished(true);

            // Trigger grid animation after loader completes
          }, 500); // Stop when progress reaches 100
          return 100;
        }
        const randomNumber = Math.floor(Math.random() * 10); // Random increment
        return Math.min(prevProgress + randomNumber, 100); // Ensure progress doesn't exceed 100
      });
    }, 300); // Runs every 300ms (adjust the interval duration as needed)

    return () => clearInterval(loader); // Clear the interval on component unmount
  }, []);
  return (
    <div className={styles.main}>
      {finished && (
        <div className={styles.gridContainer}>
          {[...Array(gridNumber)].map((_, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                initial="initial"
                animate="enter"
                variants={expend}
                className={styles.gridLoader}
              ></motion.div>
            );
          })}
        </div>
      )}

      {!finished && (
        <div className={styles.loaderContainer}>
          <div className={styles.svgContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="356"
              height="99"
              viewBox="0 0 356 99"
              fill="none"
            >
              <motion.path
                d="M38.1231 46.7815L36.3138 2.06769H37.3477L48.3323 2.32615L51.5631 96.9231L37.0892 97.5692L36.4431 59.9631L22.4862 60.7385L21.5815 97.0523H6.33231L1.03385 96.7939V80.2523L0 50.4L1.29231 2.06769L22.7446 2.45539L22.2277 47.1692L38.1231 46.7815ZM108.166 14.3446L107.649 84.3877L106.228 93.6923L102.092 97.0523L88.9108 98.4739L64.7446 96.1477L61.2554 92.6585L58.8 87.36L59.3169 65.1323C59.3169 55.44 59.4462 46.6523 59.7046 38.8985C59.5754 25.7169 59.7046 12.5354 60.0923 11.8892C60.0923 11.3723 60.8677 9.17539 62.2892 7.10769L63.9692 2.97231L84.3877 1.03385L98.9908 2.84308L106.228 5.68616L108.166 14.3446ZM84.7754 79.6062L89.5569 77.6677L91.1077 29.3354L88.0062 27.5262L75.6 27.2677L74.4369 31.6615L74.6954 49.8831V78.8308L76.7631 79.2185L84.7754 79.6062ZM162.055 7.62462L164.511 25.0708L164.382 25.5877C164.382 25.7169 163.865 31.7908 163.606 37.8646C163.348 41.3539 163.089 45.4892 162.96 50.0123L158.308 58.2831L145.902 62.4185L134.917 62.9354L136.726 84.6462L137.372 95.6308L128.455 96.6646C127.551 96.6646 126 96.7939 124.578 96.9231C123.674 97.0523 122.769 97.0523 121.865 97.0523L117.342 96.2769V76.6339L116.566 63.84C116.437 61.1262 116.437 58.6708 116.437 56.4739C116.308 52.4677 116.308 48.5908 116.308 47.1692V17.3169L116.825 2.06769H121.865C124.837 2.06769 128.326 1.93846 131.557 1.93846C137.889 1.93846 144.609 1.68 146.289 2.06769C147.711 2.45539 150.554 2.71385 153.009 3.10154L157.532 3.87692L162.055 7.62462ZM143.834 49.7539L145.772 47.8154C145.772 45.7477 146.418 34.7631 146.418 33.4708C146.418 32.1785 145.255 27.6554 144.997 26.3631L141.895 23.0031L137.502 21.9692H128.714L127.938 24.1662L127.422 33.4708L128.455 49.7539L133.625 50.7877L143.834 49.7539ZM171.36 96.5354L171.102 51.6923L171.618 46.9108L171.36 42.1292L172.006 13.5692L173.169 2.45539L215.169 3.23077L215.815 28.4308H188.289L187.772 44.5846L208.837 44.1969V45.6185L209.483 56.6031L189.84 56.9908L190.486 76.1169L216.72 77.4092V97.3108L171.36 96.5354ZM224.086 25.2L244.763 25.7169L243.729 41.8708L245.28 74.6954L244.375 96.5354L242.566 96.7939L224.474 96.4062L223.698 90.4615L223.44 55.8277L224.086 25.2ZM224.862 0L244.375 0.258461L245.28 5.29846V13.9569L244.763 18.6092L224.086 18.7385L223.44 10.3385L223.182 1.29231L224.862 0ZM295.68 1.55077H296.972L295.68 26.3631L276.037 25.2L276.425 46.3939L294.129 47.4277L295.551 59.7046H274.745L276.942 97.3108L255.102 96.6646L254.197 58.1539L253.938 40.8369L254.843 2.97231L271.514 1.29231L295.68 1.55077ZM333.674 0.904615H355.385L339.102 55.0523V61.6431L338.068 97.3108L312.997 97.9569L317.649 58.6708L313.514 52.3385L297.748 2.32615L317.649 0.904615L326.437 49.4954L330.055 39.5446L333.674 0.904615Z"
                fill="red"
                stroke="rgba(255, 255, 255, 0.69)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  fillOpacity: 0,
                }}
                animate={{
                  strokeDasharray: 1000,
                  strokeDashoffset: [0, 1000, 0],
                  fillOpacity: 0,
                }}
                exit={{ fillOpacity: 1 }}
                transition={transition}
              />
            </svg>
          </div>
          <div className={styles.loader}>
            <p className={styles.pixelifySans}>{progress}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
