import { motion } from "motion/react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { LiquidWave } from "../components/LiquidWave";
import { GlassCard } from "../components/GlassCard";
import { RippleButton } from "../components/RippleButton";
import { Mail, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router";
import { useUser } from "../components/Layout";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const { setIsGuest, setUsername } = useUser();
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGuest(false);
    setUsername(email.split("@")[0] || "User");
    navigate("/");
  };

  const handleGuestLogin = () => {
    setIsGuest(true);
    navigate("/");
  };

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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] flex items-center justify-center">
              <LogIn className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center text-[#1a1f36] dark:text-[#f1f5f9] mb-2"
          >
            Welcome Back
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 mb-8"
          >
            Sign in to BIU Student Hub
          </motion.p>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
            onSubmit={handleLogin}
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#3f19e6] dark:focus:ring-[#7c3aed] transition-all"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#3f19e6] dark:focus:ring-[#7c3aed] transition-all"
              />
            </div>

            <RippleButton
              type="submit"
              className="w-full py-3 rounded-[16px] bg-gradient-to-r from-[#3f19e6] to-[#0ea5e9] dark:from-[#7c3aed] dark:to-[#0ea5e9] text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Sign In
            </RippleButton>

            <RippleButton
              type="button"
              onClick={handleGuestLogin}
              className="w-full py-3 rounded-[16px] bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-white/10 text-[#1a1f36] dark:text-[#f1f5f9] shadow-lg hover:shadow-xl transition-shadow"
            >
              Continue as Guest
            </RippleButton>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center space-y-2"
          >
            <button
              onClick={() => navigate("/signup")}
              className="text-[#3f19e6] dark:text-[#7c3aed] hover:underline block w-full"
            >
              Don't have an account? Sign up
            </button>
            <button
              onClick={() => navigate("/reset-password")}
              className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 hover:underline text-sm"
            >
              Forgot password?
            </button>
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
