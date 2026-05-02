import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { MessageSquare, Send } from "lucide-react";
import { useUser } from "../components/Layout";

export function Chatbot() {
  const { isGuest } = useUser();

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Study AI Assistant
        </h2>

        <GlassCard className="p-6 h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 p-3 rounded-[16px] bg-white/30 dark:bg-black/30 backdrop-blur-sm">
                <p className="text-[#1a1f36] dark:text-[#f1f5f9]">
                  Hello! I'm your study assistant. How can I help you today?
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder={isGuest ? "Sign in to chat..." : "Type your message..."}
              disabled={isGuest}
              className="flex-1 px-4 py-3 rounded-[16px] bg-white/50 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm text-[#1a1f36] dark:text-[#f1f5f9] placeholder:text-[#1a1f36]/40 dark:placeholder:text-[#f1f5f9]/40 focus:outline-none focus:ring-2 focus:ring-[#3f19e6] dark:focus:ring-[#7c3aed] disabled:opacity-50"
            />
            <button
              disabled={isGuest}
              className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
