import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[99]"
        variants={variants}
        animate="default"
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      {/* Soft large glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none z-[-1]"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
    </>
  );
};

export default Cursor;
