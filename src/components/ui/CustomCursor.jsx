"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleLinkHoverStart);
      link.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleLinkHoverStart);
        link.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#BC8B57]/30 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
          borderWidth: isHovering ? "2px" : "1px",
          borderColor: isHovering ? "rgba(188, 139, 87, 1)" : "rgba(188, 139, 87, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#BC8B57] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(188,139,87,0.5)]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isVisible ? (isHovering ? 0.5 : 1) : 0,
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
