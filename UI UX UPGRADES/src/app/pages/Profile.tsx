import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { User, Mail, Book, Award } from "lucide-react";
import { useUser } from "../components/Layout";

export function Profile() {
  const { isGuest, username } = useUser();

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Profile
        </h2>

        <GlassCard className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
              {isGuest ? "Guest User" : username}
            </h3>
            <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
              {isGuest ? "Browse only mode" : "Student"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-[16px] bg-white/20 dark:bg-black/20">
              <Mail className="w-5 h-5 text-[#3f19e6] dark:text-[#7c3aed]" />
              <span className="text-[#1a1f36] dark:text-[#f1f5f9]">
                {isGuest ? "guest@example.com" : "student@biu.edu"}
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-[16px] bg-white/20 dark:bg-black/20">
              <Book className="w-5 h-5 text-[#10b981]" />
              <span className="text-[#1a1f36] dark:text-[#f1f5f9]">
                6 Active Courses
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-[16px] bg-white/20 dark:bg-black/20">
              <Award className="w-5 h-5 text-[#f59e0b]" />
              <span className="text-[#1a1f36] dark:text-[#f1f5f9]">
                CGPA: 3.8
              </span>
            </div>
          </div>

          {isGuest && (
            <div className="mt-6 p-4 rounded-[16px] bg-[#f59e0b]/10 border border-[#f59e0b]/20">
              <p className="text-[#1a1f36] dark:text-[#f1f5f9] text-sm">
                ⚠️ You're browsing as a guest. Sign in to unlock all features.
              </p>
            </div>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
}
