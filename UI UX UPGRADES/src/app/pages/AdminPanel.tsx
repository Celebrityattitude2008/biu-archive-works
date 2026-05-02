import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Shield } from "lucide-react";
import { useUser } from "../components/Layout";

export function AdminPanel() {
  const { isGuest } = useUser();

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Admin Panel
        </h2>

        <GlassCard className="p-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-[#ef4444]" />
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            {isGuest ? "Access Restricted" : "Admin Dashboard"}
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
            {isGuest
              ? "This area is only accessible to administrators"
              : "Admin controls and settings"}
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
