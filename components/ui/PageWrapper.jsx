import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0.5,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0.5,
      x: -50
    }
  };

  // Fade animation
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Scale animation
  const scaleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  // Slide up/down animation
  const slideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
      duration:.2,
      type: 'spring',
      stiffness: 260,
      damping: 20
    }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;