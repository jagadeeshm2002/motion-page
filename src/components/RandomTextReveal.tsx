import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

// Define prop types for the component
interface RandomTextRevealProps {
  text: string;
  hover?: boolean;
  className?: string;
}

// Custom hook for text reveal animation
const useRandomTextReveal = (
  text: string,
  trigger: boolean,
  intervalTime: number,
  characters: string
): [string, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [displayedText, setDisplayedText] = useState<string>(""); // The displayed text
  const [hoverActive, setHoverActive] = useState<boolean>(false); // The hover state

  useEffect(() => {
    if (!trigger&& !hoverActive) return; // Animation only starts when trigger or hoverActive is true

    let interval: any;
    let currentIndex = 0;

    // Function to generate random characters
    const randomChar = (): string =>
      characters.charAt(Math.floor(Math.random() * characters.length));

    // Function to update the displayed text
    const updateText = () => {
      if (currentIndex <= text.length) {
        const randomText = text
          .split("")
          .map((char, index) => (index < currentIndex ? char : randomChar()))
          .join("");

        setDisplayedText(randomText);
        currentIndex++;
      } else {
        if (interval) clearInterval(interval); // Stop the interval when done
        setHoverActive(false); // Reset hover state after animation ends
      }
    };

    // Start the interval to update the text
    interval = setInterval(updateText, intervalTime);

    // Cleanup function to clear the interval when the component unmounts or the trigger changes
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [trigger, hoverActive, text, intervalTime, characters]);

  return [displayedText, setHoverActive];
};

// Main component
const RandomTextReveal: React.FC<RandomTextRevealProps> = ({
  text,
  hover = false,
  ...props
}: RandomTextRevealProps) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?[];,./`~';
  const intervalTime = 100;

  // Use the custom hook for animation (triggered by hoverActive state)
  const [displayedText, setHoverActive] = useRandomTextReveal(
    text,
    hover|| true,
    intervalTime,
    characters
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      whileHover={{ opacity: hover?[0,1] :1}} 
      className={props.className}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "monospace", fontSize: "24px", cursor: "pointer" }}
      onMouseEnter={() => hover && setHoverActive(true)} // Start on hover enter
      // onMouseLeave={() => hover && setHoverActive(false)} // Reset on hover exit
    >
      <AnimatePresence>
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
           
            
            animate={{ opacity:1 }} 
            // Animate based on hover state
            // whileHover={{opacity:1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.05 * index }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default RandomTextReveal;
