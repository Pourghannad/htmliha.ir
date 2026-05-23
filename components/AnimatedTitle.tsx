"use client";

import { useRef, useState, useCallback, useEffect, ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
}

export const AnimatedTitle = ({ children }: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textSpanRef = useRef<HTMLSpanElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const [transformValue, setTransformValue] = useState(0);

  const updateTransform = useCallback(() => {
    if (!containerRef.current || !textSpanRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const fullTextWidth = textSpanRef.current.scrollWidth;

    const offset = Math.min(0, containerWidth - fullTextWidth);

    setTransformValue(offset);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    updateTransform();
  }, [updateTransform]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransformValue(0);
  }, []);

  useEffect(() => {
    if (!isHovered) return;

    const handleResize = () => {
      updateTransform();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovered, updateTransform]);

  const animationDuration =
    transformValue === 0 ? 700 : (Math.abs(transformValue) * 15) / 2;

  return (
    <div
      ref={containerRef}
      className="group w-full overflow-hidden whitespace-nowrap after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textSpanRef}
        className={`inline-block transition-transform ease-linear will-change-transform text-2xl h-9 relative font-bold whitespace-pre`}
        style={{
          transform: `translateX(${transformValue}px)`,
          transitionDuration: `${animationDuration}ms`,
        }}
      >
        {children}
      </span>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80" />
    </div>
  );
};
