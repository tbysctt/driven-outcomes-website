import { useState, useEffect, useRef } from "react";

interface UseTypingAnimationOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
}: UseTypingAnimationOptions): string {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset charIndex when word changes
  useEffect(() => {
    setCharIndex(0);
    setIsDeleting(false);
  }, [currentWordIndex]);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    let timeout: number;

    if (!isDeleting) {
      // Typing phase
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCharIndex(0);
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
        } else if (loop) {
          // Loop back to first word
          setCurrentWordIndex(0);
        }
      }
    }

    timeoutRef.current = timeout as unknown as NodeJS.Timeout;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, currentWordIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return displayText;
}
