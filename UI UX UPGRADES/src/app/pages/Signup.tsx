import { motion } from "motion/react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { LiquidWave } from "../components/LiquidWave";
import { GlassCard } from "../components/GlassCard";
import { RippleButton } from "../components/RippleButton";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import { useNavigate } from "react-router";
import { useUser } from "../components/Layout";
import { useState } from "react";

export function Signup() {
  const navigate = useNavigate();
  const { setIsGuest, setUsername } = useUser();
  const [name, setName] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGuest(false);
    setUsername(name || "User");
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
        className="relative z-10 w-full max-w-md px-6 py-12"
      >
        <GlassCard className="p-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10b981] to-[#0ea5e9] flex items-center justify-center">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center text-[#1a1f36] dark:text-[#f1f5f9] mb-2"
          >
            Join BIU Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 mb-8"
          >
            Create your student account
          </motion.p>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
            onSubmit={handleSignup}
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative"
            >
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative"
            >
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="relative"
            >
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1a1f36]/40 dark:text-[#f1f5f9]/40" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-12 pr-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <RippleButton
                type="submit"
                className="w-full py-3 rounded-[16px] bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                Create Account
              </RippleButton>
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-center"
          >
            <button
              onClick={() => navigate("/login")}
              className="text-[#3f19e6] dark:text-[#7c3aed] hover:underline"
            >
              Already have an account? Sign in
            </button>
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
