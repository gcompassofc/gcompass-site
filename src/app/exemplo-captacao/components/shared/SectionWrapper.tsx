import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  threshold?: number;
}

export default function SectionWrapper({ 
  children, 
  className = "", 
  id,
  delay = 0,
  threshold = 0.1
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
