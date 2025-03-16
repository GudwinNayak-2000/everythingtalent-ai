import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}
const Typewriter = ({ text, speed = 100, delay = 1500 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isDeleting) {
      if (index > 0) {
        setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (index < text.length) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), delay); // Pause before deleting
      }
    }
  }, [index, isDeleting, text, speed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="whitespace-nowrap text-sm opacity-70 mt-6 font-bold">
      {displayedText}
      <span className={`inline-block w-1 bg-white transition-opacity duration-300 ${showCursor ? "opacity-100" : "opacity-0"}`}>
        {" "}
      </span>
    </span>
  );
};

export default Typewriter;
