import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { BookOpen, Calendar, TrendingUp, Users } from "lucide-react";
import { useUser } from "../components/Layout";

export function Dashboard() {
  const { isGuest } = useUser();

  const stats = [
    { icon: BookOpen, label: "Courses", value: "6", color: "from-[#3f19e6] to-[#0ea5e9]" },
    { icon: Calendar, label: "Events", value: "12", color: "from-[#10b981] to-[#0ea5e9]" },
    { icon: TrendingUp, label: "CGPA", value: "3.8", color: "from-[#f59e0b] to-[#ef4444]" },
    { icon: Users, label: "Friends", value: "24", color: "from-[#7c3aed] to-[#0ea5e9]" },
  ];

  return (
    <div className="relative min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-6">
          Welcome back{isGuest ? ", Guest" : ""}!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className={`w-12 h-12 rounded-[12px] bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9] mb-4">
            Quick Actions
          </h3>
          <p className="text-[#1a1f36]/60 dark:text-[#f1f5f9]/60">
            Your personalized dashboard content will appear here.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
