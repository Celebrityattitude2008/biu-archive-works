import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { MessageCircle } from "lucide-react";
import { useUser } from "../components/Layout";

export function Discussions() {
  const { isGuest } = useUser();

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Discussions
        </h2>

        <GlassCard className="p-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-[#3f19e6] dark:text-[#7c3aed]" />
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            Community Forum
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 mb-4">
            Join discussions with fellow students
          </p>
          {isGuest && (
            <p className="text-[#f59e0b] text-sm">
              ⚠️ Sign in to participate in discussions
            </p>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
}
