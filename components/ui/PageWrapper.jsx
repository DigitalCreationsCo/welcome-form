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

  return (
    <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
      duration:.2,
      type: 'tween',
      stiffness: 260,
      damping: 20
    }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;