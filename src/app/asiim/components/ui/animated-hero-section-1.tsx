import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface NavLink {
  label: string;
  href: string;
}

interface AnimatedHeroProps {
  backgroundImageUrl: string;
  logo: React.ReactNode;
  navLinks: NavLink[];
  topRightAction?: React.ReactNode;
  title: string | React.ReactNode;
  description: string;
  ctaButton: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const AnimatedHero = ({
  backgroundImageUrl,
  logo,
  navLinks,
  topRightAction,
  title,
  description,
  ctaButton,
  secondaryCta,
  className,
}: AnimatedHeroProps) => {
  const glassButtonClassName =
    "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-xl shadow-black/10";

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pt-40 pb-32",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-12 text-white"
      >
        <div className="flex items-center gap-2">{logo}</div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/90 transition-colors hover:text-asiim-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">{topRightAction}</div>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start justify-center text-left px-6 md:px-12 max-w-5xl w-full text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl leading-[1.2] md:leading-[1.2] max-w-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/80 font-medium"
        >
          {description}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            onClick={ctaButton.onClick}
            size="lg"
            className={glassButtonClassName}
          >
            {ctaButton.text}
          </Button>
          {secondaryCta && (
            <Button
              onClick={secondaryCta.onClick}
              size="lg"
              className={glassButtonClassName}
            >
              {secondaryCta.text}
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
