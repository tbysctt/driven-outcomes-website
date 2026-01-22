import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  enabled?: boolean;
}

export function useAnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  enabled = true,
}: UseAnimatedCounterOptions): string {
  const [displayValue, setDisplayValue] = useState("0" + suffix);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(target * easedProgress);

      setDisplayValue(currentValue.toLocaleString() + suffix);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target.toLocaleString() + suffix);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, suffix, enabled]);

  return displayValue;
}
