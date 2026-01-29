import { useEffect, useRef, useState } from "react";

// Check if device has fine pointer (mouse) - safe for SSR
const getIsFineMouse = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

export function CursorDot() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isFineMouse = getIsFineMouse();

  useEffect(() => {
    if (!isFineMouse) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const delay = 0.15;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnterClickable = () => {
      setIsExpanded(true);
    };

    const handleMouseLeaveClickable = () => {
      setIsExpanded(false);
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * delay;
      cursorY += (mouseY - cursorY) * delay;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Set up clickable element listeners
    const clickableSelector =
      'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable';

    const addClickableListeners = () => {
      const clickables = document.querySelectorAll(clickableSelector);
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterClickable);
        el.addEventListener("mouseleave", handleMouseLeaveClickable);
      });
    };

    // Initial setup and observe DOM changes for dynamically added elements
    addClickableListeners();

    const observer = new MutationObserver(() => {
      addClickableListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Start animation
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();

      const clickables = document.querySelectorAll(clickableSelector);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterClickable);
        el.removeEventListener("mouseleave", handleMouseLeaveClickable);
      });
    };
  }, [isFineMouse]);

  if (!isFineMouse) return null;

  return (
    <div
      ref={cursorRef}
      id="cursor-dot"
      className={isExpanded ? "cursor-expanded" : ""}
    />
  );
}
