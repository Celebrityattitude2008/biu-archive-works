import { motion } from "motion/react";

export function LiquidWave() {
  return (
    <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.path
          d="M0,60 C360,100 720,20 1440,60 L1440,0 L0,0 Z"
          className="fill-gradient-to-r from-[#3f19e6]/20 to-[#0ea5e9]/20 dark:from-[#7c3aed]/20 dark:to-[#0ea5e9]/20"
          animate={{
            d: [
              "M0,60 C360,100 720,20 1440,60 L1440,0 L0,0 Z",
              "M0,40 C360,80 720,0 1440,40 L1440,0 L0,0 Z",
              "M0,60 C360,100 720,20 1440,60 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
