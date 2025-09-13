import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationType = 'slideInFromLeft' | 'slideInFromRight' | 'zoomIn' | 'fadeIn';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: AnimationType;
}

const AnimatedSection = ({ children, animationType = 'fadeIn' }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const style: MotionStyle = {
    opacity,
    scale,
  };

  if (animationType === 'slideInFromLeft') {
    style.x = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  } else if (animationType === 'slideInFromRight') {
    style.x = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  } else if (animationType === 'fadeIn') {
    style.y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  }
  // zoomIn is covered by the default scale transform.

  return (
    <motion.div ref={ref} style={style}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;