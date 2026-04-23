import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  className = "",
  suffix = ""
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 60, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      setDisplayValue(Math.floor(v));
    });
  }, [rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}{suffix}
    </motion.span>
  );
}
