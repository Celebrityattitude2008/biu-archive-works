import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { CreditCard } from "lucide-react";

export function Subscriptions() {
  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Subscriptions
        </h2>

        <GlassCard className="p-8 text-center">
          <CreditCard className="w-16 h-16 mx-auto mb-4 text-[#3f19e6] dark:text-[#7c3aed]" />
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            Manage Subscriptions
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
            View and manage your subscriptions
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
