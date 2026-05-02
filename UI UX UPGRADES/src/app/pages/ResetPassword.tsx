import { motion } from "motion/react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { LiquidWave } from "../components/LiquidWave";
import { GlassCard } from "../components/GlassCard";
import { RippleButton } from "../components/RippleButton";
import { Mail, KeyRound } from "lucide-react";
import { useNavigate } from "react-router";

export function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f9fb] dark:bg-[#0f172a]">
      <AnimatedBackground />
      <LiquidWave />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <GlassCard className="p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center">
              <KeyRound className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center text-[#1a1f36] dark:text-[#f1f5f9] mb-2"
          >
            Reset Password
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 mb-8"
          >
            Enter your email to receive a reset link
          </motion.p>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] transition-all"
              />
            </div>

            <RippleButton
              type="submit"
              className="w-full py-3 rounded-[16px] bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Send Reset Link
            </RippleButton>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <button
              onClick={() => navigate("/login")}
              className="text-[#3f19e6] dark:text-[#7c3aed] hover:underline"
            >
              Back to login
            </button>
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
