"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const { scrollY } = useScroll();
  
  const springConfig = {
    damping: 15,
    stiffness: 40,
    mass: 0.1,
    restDelta: 0.001
  };
  
  const smoothY = useSpring(scrollY, springConfig);
  
  // Transform the smooth scroll value into a negative translate3d
  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        // Use offsetHeight to get the exact pixel height of the content container
        setContentHeight(scrollRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Periodically check for height changes (e.g., images loading)
    const interval = setInterval(handleResize, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden pointer-events-auto z-10"
      >
        {children}
      </motion.div>
      {/* Create a phantom div to maintain the scrollbar */}
      <div style={{ height: contentHeight }} className="relative z-0 pointer-events-none" />
    </>
  );
};

export default SmoothScroll;
