import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { FileText } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Privacy Policy
        </h2>

        <GlassCard className="p-8">
          <FileText className="w-12 h-12 mb-4 text-[#3f19e6] dark:text-[#7c3aed]" />
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-4">
            Your Privacy Matters
          </h3>
          <div className="text-[#1a1f36]/80 dark:text-[#f1f5f9]/80 space-y-4">
            <p>
              At BIU Student Hub, we are committed to protecting your privacy and
              ensuring the security of your personal information.
            </p>
            <p>
              This privacy policy outlines how we collect, use, and safeguard your
              data when you use our platform.
            </p>
            <p className="text-sm text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
              Last updated: April 28, 2026
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
