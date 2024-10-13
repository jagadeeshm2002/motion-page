import React from "react";
/**
 * A hook that manages a progress state and triggers a completion state when the progress reaches 100.
 *
 * @returns {{ progress: number, finished: boolean }} An object with `progress` and `finished` properties.
 */
function ProgressHook(): {
  progress: number;
  finished: boolean;
} {
  const [progress, setProgress] = React.useState<number>(0);
  const [finished, setFinished] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loader = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loader);
          setTimeout(() => {
            setFinished(true);

          }, 500); // Stop when progress reaches 100
          return 100;
        }
        const randomNumber = Math.floor(Math.random() * 10); // Random increment
        return Math.min(prevProgress + randomNumber, 100); // Ensure progress doesn't exceed 100
      });
    }, 300); // Runs every 300ms 

    return () => clearInterval(loader); // Clear the interval on component unmount
  }, []);

  return { progress, finished };
}

export default ProgressHook;
