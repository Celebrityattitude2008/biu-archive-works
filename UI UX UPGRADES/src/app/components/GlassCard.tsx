import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 8px 30px rgba(63, 25, 230, 0.15)",
      }}
      className={`
        backdrop-blur-xl
        bg-white/10 dark:bg-black/10
        border border-white/20 dark:border-white/10
        rounded-[24px]
        shadow-lg
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
