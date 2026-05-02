import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { FileQuestion } from "lucide-react";

export function PastQuestions() {
  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Past Questions
        </h2>

        <GlassCard className="p-8 text-center">
          <FileQuestion className="w-16 h-16 mx-auto mb-4 text-[#3f19e6] dark:text-[#7c3aed]" />
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            Exam Archive
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
            Browse past exam questions and solutions
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
