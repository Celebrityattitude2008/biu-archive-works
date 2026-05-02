import { motion } from "motion/react";
import { ReactNode, useState } from "react";

interface RippleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function RippleButton({
  children,
  onClick,
  className = "",
  type = "button",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    onClick?.();
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 1,
          }}
          animate={{
            width: 300,
            height: 300,
            x: ripple.x - 150,
            y: ripple.y - 150,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      {children}
    </motion.button>
  );
}
