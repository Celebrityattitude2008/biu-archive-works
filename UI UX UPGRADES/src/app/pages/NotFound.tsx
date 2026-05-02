import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <GlassCard className="p-8 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-[#ef4444]" />
          <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-2">
            404
          </h2>
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-4">
            Page Not Found
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60 mb-6">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-[16px] bg-gradient-to-r from-[#3f19e6] to-[#0ea5e9] text-white"
          >
            Go Home
          </Link>
        </GlassCard>
      </motion.div>
    </div>
  );
}
