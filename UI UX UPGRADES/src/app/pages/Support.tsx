import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { HelpCircle, Mail, MessageSquare } from "lucide-react";

export function Support() {
  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Support & Help
        </h2>

        <div className="grid gap-4 mb-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
                  FAQ
                </h3>
                <p className="text-sm text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
                  Find answers to common questions
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#10b981] to-[#0ea5e9] flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
                  Email Support
                </h3>
                <p className="text-sm text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
                  support@biuhub.edu
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
                  Live Chat
                </h3>
                <p className="text-sm text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
                  Chat with our support team
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </div>
  );
}
