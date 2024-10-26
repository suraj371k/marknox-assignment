import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation = ({ setIsLoading }) => {
  const words = ["Welcome", "to", "my", "portfolio"];

  // Animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, words.length * 600 + 1000); // Adjust timing as needed
    return () => clearTimeout(loadingTimeout);
  }, [setIsLoading]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <AnimatePresence>
        <motion.div className="text-3xl md:text-5xl text-white font-bold flex space-x-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoadingAnimation;
