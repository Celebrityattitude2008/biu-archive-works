import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#3f19e6]/20 to-[#0ea5e9]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#7c3aed]/20 to-[#10b981]/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#f59e0b]/15 to-[#ef4444]/15 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
