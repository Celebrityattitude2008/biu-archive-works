import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { User } from "lucide-react";
import { useParams } from "react-router";

export function ViewProfile() {
  const { userId } = useParams();

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          User Profile
        </h2>

        <GlassCard className="p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            User {userId}
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
            Profile details will appear here
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
