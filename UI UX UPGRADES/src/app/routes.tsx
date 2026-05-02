import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Calendar } from "./pages/Calendar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ResetPassword } from "./pages/ResetPassword";
import { Profile } from "./pages/Profile";
import { ViewProfile } from "./pages/ViewProfile";
import { CGPACalculator } from "./pages/CGPACalculator";
import { Chatbot } from "./pages/Chatbot";
import { Assignments } from "./pages/Assignments";
import { Discussions } from "./pages/Discussions";
import { Downloads } from "./pages/Downloads";
import { HallOfFame } from "./pages/HallOfFame";
import { NewsFeed } from "./pages/NewsFeed";
import { NotesArchive } from "./pages/NotesArchive";
import { PastQuestions } from "./pages/PastQuestions";
import { SkillSwap } from "./pages/SkillSwap";
import { Subscriptions } from "./pages/Subscriptions";
import { AdminPanel } from "./pages/AdminPanel";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Support } from "./pages/Support";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "calendar", Component: Calendar },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "reset-password", Component: ResetPassword },
      { path: "profile", Component: Profile },
      { path: "profile/:userId", Component: ViewProfile },
      { path: "cgpa", Component: CGPACalculator },
      { path: "chatbot", Component: Chatbot },
      { path: "assignments", Component: Assignments },
      { path: "discussions", Component: Discussions },
      { path: "downloads", Component: Downloads },
      { path: "hall-of-fame", Component: HallOfFame },
      { path: "news", Component: NewsFeed },
      { path: "notes", Component: NotesArchive },
      { path: "past-questions", Component: PastQuestions },
      { path: "skillswap", Component: SkillSwap },
      { path: "subscriptions", Component: Subscriptions },
      { path: "admin", Component: AdminPanel },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "support", Component: Support },
      { path: "*", Component: NotFound },
    ],
  },
]);
