import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { AnimatedBackground } from "./AnimatedBackground";
import {
  Home,
  Calendar,
  BookOpen,
  MessageSquare,
  User,
  Menu,
  Sun,
  Moon,
  LogOut,
  UserPlus
} from "lucide-react";
import { useState, createContext, useContext } from "react";

interface UserContextType {
  isGuest: boolean;
  setIsGuest: (value: boolean) => void;
  username: string | null;
  setUsername: (value: string | null) => void;
}

const UserContext = createContext<UserContextType>({
  isGuest: true,
  setIsGuest: () => {},
  username: null,
  setUsername: () => {},
});

export const useUser = () => useContext(UserContext);

export function Layout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const isAuthPage = ["/login", "/signup", "/reset-password"].includes(location.pathname);

  const bottomNavItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/calendar", icon: Calendar, label: "Calendar" },
    { path: "/notes", icon: BookOpen, label: "Notes" },
    { path: "/chatbot", icon: MessageSquare, label: "AI Chat" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <UserContext.Provider value={{ isGuest, setIsGuest, username, setUsername }}>
      <div className={`${isDark ? "dark" : ""}`}>
        <div className="min-h-screen bg-[#f8f9fb] dark:bg-[#0f172a] pb-20">
          <AnimatedBackground />

          {/* Top Navbar */}
          {!isAuthPage && (
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10"
            >
              <div className="flex items-center justify-between px-4 h-16">
                <h1 className="text-xl font-bold text-[#1a1f36] dark:text-[#f1f5f9]">
                  BIU Student Hub
                </h1>

                <div className="flex items-center gap-3">
                  {/* Guest/User indicator */}
                  {isGuest ? (
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3f19e6]/10 dark:bg-[#7c3aed]/10 text-[#3f19e6] dark:text-[#7c3aed] text-sm"
                    >
                      <UserPlus className="w-4 h-4" />
                      Guest
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] text-sm">
                      <User className="w-4 h-4" />
                      {username || "User"}
                    </div>
                  )}

                  {/* Theme toggle */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsDark(!isDark)}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#0ea5e9] dark:from-[#0ea5e9] dark:to-[#7c3aed] flex items-center justify-center shadow-lg"
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: isDark ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isDark ? (
                        <Moon className="w-6 h-6 text-white" />
                      ) : (
                        <Sun className="w-6 h-6 text-white" />
                      )}
                    </motion.div>
                  </motion.button>

                  {/* Menu button */}
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5 text-[#1a1f36] dark:text-[#f1f5f9]" />
                  </button>
                </div>
              </div>

              {/* Dropdown menu */}
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-16 right-4 w-64 backdrop-blur-xl bg-white/90 dark:bg-black/90 border border-white/20 dark:border-white/10 rounded-[16px] shadow-xl p-2"
                >
                  <Link
                    to="/cgpa"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    CGPA Calculator
                  </Link>
                  <Link
                    to="/assignments"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Assignments
                  </Link>
                  <Link
                    to="/discussions"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Discussions
                  </Link>
                  <Link
                    to="/downloads"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Downloads
                  </Link>
                  <Link
                    to="/hall-of-fame"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Hall of Fame
                  </Link>
                  <Link
                    to="/news"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    News Feed
                  </Link>
                  <Link
                    to="/past-questions"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Past Questions
                  </Link>
                  <Link
                    to="/skillswap"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    SkillSwap
                  </Link>
                  <Link
                    to="/subscriptions"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Subscriptions
                  </Link>
                  <Link
                    to="/admin"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Admin Panel
                  </Link>
                  <div className="border-t border-white/20 dark:border-white/10 my-2" />
                  <Link
                    to="/privacy"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/support"
                    className="block px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-black/50 text-[#1a1f36] dark:text-[#f1f5f9]"
                    onClick={() => setShowMenu(false)}
                  >
                    Support
                  </Link>
                  {!isGuest && (
                    <>
                      <div className="border-t border-white/20 dark:border-white/10 my-2" />
                      <button
                        onClick={() => {
                          setIsGuest(true);
                          setUsername(null);
                          setShowMenu(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-500/10 text-red-500"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </motion.header>
          )}

          {/* Main content */}
          <main className={isAuthPage ? "" : "pt-16"}>
            <Outlet />
          </main>

          {/* Bottom Navigation */}
          {!isAuthPage && (
            <motion.nav
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-t border-white/20 dark:border-white/10"
            >
              <div className="flex items-center justify-around h-20 px-4">
                {bottomNavItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex flex-col items-center gap-1 min-w-[64px]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`
                          w-12 h-12 rounded-[16px] flex items-center justify-center
                          ${
                            isActive
                              ? "bg-gradient-to-br from-[#3f19e6] to-[#0ea5e9] dark:from-[#7c3aed] dark:to-[#0ea5e9] shadow-lg"
                              : "bg-white/20 dark:bg-black/20"
                          }
                        `}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isActive
                              ? "text-white"
                              : "text-[#1a1f36] dark:text-[#f1f5f9]"
                          }`}
                        />
                      </motion.div>
                      <span
                        className={`text-xs ${
                          isActive
                            ? "text-[#3f19e6] dark:text-[#7c3aed] font-semibold"
                            : "text-[#1a1f36]/60 dark:text-[#f1f5f9]/60"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </UserContext.Provider>
  );
}
