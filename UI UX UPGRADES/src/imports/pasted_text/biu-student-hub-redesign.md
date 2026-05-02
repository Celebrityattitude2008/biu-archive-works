# BIU Student Hub Redesign — Quick Figma AI Prompt

## COPY & PASTE THIS INTO FIGMA AI:

---

**Design a premium, modern student portal UI redesign for "BIU Student Hub" with these specifications:**

### COLOR PALETTE (MUST MAINTAIN):
- Light Mode: Background #f8f9fb, Cards #ffffff, Primary #3f19e6, Text #1a1f36
- Dark Mode: Background #0f172a, Cards #1e293b, Primary #7c3aed, Text #f1f5f9
- Accents: Cyan #0ea5e9, Green #10b981, Orange #f59e0b, Red #ef4444

### CORE DESIGN FEATURES (CRITICAL):

1. **iPhone Liquid Glass Effects**:
   - Apply glassmorphism (backdrop-filter: blur(20px)) to ALL cards and containers
   - Semi-transparent backgrounds: rgba(255,255,255,0.1) light / rgba(0,0,0,0.1) dark
   - Subtle border glow with soft shadows
   - Glass effect on stat cards, feature icons, modals, chat bubbles, navigation

2. **Light/Dark Mode Toggle Bubble**:
   - Circular bubble button (48-56px) in top-right header
   - Light mode icon: Bright sun (flaticon.com Freepik style) #f59e0b
   - Dark mode icon: Crescent moon (flaticon.com Freepik style) #0ea5e9
   - Animated pulsing glow ring around active toggle
   - Smooth morph animation when switching modes (700ms, spring physics)
   - Bubble shrinks/expands on click with full-page fade transition

3. **Liquid Water Effects**:
   - Wavy section dividers (amplitude 8-12px, smooth wave motion, 4-5s cycle)
   - Liquid wave separators between header and content
   - Ripple effects on button clicks (expand from click point, 600ms duration, ease-out)
   - Subtle floating liquid blob decorations in backgrounds (2-8% opacity, slow organic motion)
   - Liquid loading animations (fill container bottom-to-top with wave surface)
   - Gradient wave color fading from primary to transparent

4. **Peak UI/UX Elements**:
   - Hover lift effect: Cards rise 4-6px with enhanced shadow
   - Micro-interactions: Smooth 200-300ms transitions on all interactions
   - Stagger animations: Sequential card fade-ins (100ms stagger)
   - Spring bounce on load animations
   - Material shadows: Soft (0 4px 20px), Elevated (0 8px 30px), Glow (0 0 20px)
   - Corner radius: 24-30px (containers), 16-20px (cards), 12-14px (buttons), 8-10px (icons)

### PAGES TO DESIGN (ALL 21):
1. **Homepage/Dashboard** - Landing page with stats cards, feature grid
2. **Calendar/Scheduler** - Calendar widget, event management
3. **Login** - Authentication entry point
4. **Sign Up** - User registration form
5. **Reset Password** - Password recovery page
6. **Profile** - User profile with edit section
7. **View Profile** - Other user profiles (read-only)
8. **CGPA Calculator** - GPA calculation tool with course list
9. **Chatbot/Study AI** - Chat interface with glass bubbles
10. **Assignments** - Assignment submission/management
11. **Discussions/Forum** - Community discussion posts
12. **Download/App Store** - Resource download hub
13. **Hall of Fame** - Leaderboard/contributor rankings
14. **News Feed** - Campus updates and announcements
15. **Notes Archive** - Resource hub for study materials
16. **Past Questions** - Exam past question library
17. **SkillSwap** - Peer collaboration platform
18. **Subscriptions** - User subscription management
19. **Admin Panel** - Command center for admins
20. **Privacy Policy** - Legal/privacy page
21. **Support/Help** - FAQ and support contact

### ANIMATION SPECS:
- Page Load: Fade in with scale (0.95→1, 500ms), cards stagger 100ms, liquid wave sweeps in
- Liquid Wave: 4000ms cycle, sine wave, amplitude 40px
- Bubble Pulse: 2000ms, scale 1→1.2→1, outer ring fade
- Ripple: 600ms, ease-out, expands from center
- Floating Blobs: 8-12s varied cycles, slow Y-translate with sine offset

### MOBILE RESPONSIVE:
- Breakpoints: Mobile <480px (single column), Tablet 480-1024px (2-3 columns), Desktop >1024px (4 columns)
- Touch targets minimum 48px
- Bottom navigation on mobile
- Full-width modals
- Reduced blur (10px) on mobile for performance

### ICON REQUIREMENTS:
Use flaticon.com icons (Freepik style, monochrome):
- Sun icon (light mode, warm)
- Moon/Star icon (dark mode, cool)
- Books, Calendar, User, Settings, Home, Chat, Checkmark icons
- 24-32px size, match theme colors

### TYPOGRAPHY:
- Primary Font: Inter (all body/labels)
- Accent Font: Caveat (section titles, handwritten feel)
- Sizes: Headers 28-32px, Titles 18-20px, Body 14-16px, Labels 12-13px uppercase

### VIBE/STYLE:
Premium, modern iOS-inspired, smooth, trustworthy, student-friendly, full of delightful micro-interactions, feels like native app, depth-focused, glassmorphism-driven.

### SPECIFIC DETAILS:
- Glass borders: 1-2px with 15-20% opacity gradient
- Inner glow: Subtle white/color glow on glass surfaces
- Background: Gradient with liquid blob decorations (3-5% opacity)
- Button states: Press=scale 0.98 darker shadow, Hover=lift 4px expanded shadow
- Loading state: Skeleton with shimmer animation
- Error feedback: Subtle shake with wave underline

**DELIVER**: High-fidelity mockups, interactive prototypes showing animations, component library with all variants, responsive layouts for all screen sizes, complete design system documentation.

---

## SIMPLER ULTRA-CONDENSED VERSION (if above is too long):

Design BIU Student Hub redesign with:
- **Glass effect** on all cards (blur 20px, semi-transparent)
- **Bubble toggle** (light/dark mode, sun/moon icons from flaticon, pulsing glow, smooth animation)
- **Liquid waves** (section dividers, ripple effects, floating blobs in background, wavy animations)
- **Peak effects** (card hover lift, micro-interactions, bounce animations, smooth transitions)
- Keep colors: Light #f8f9fb/#ffffff/#3f19e6, Dark #0f172a/#1e293b/#7c3aed
- iPhone-premium vibe, fully responsive, inter+caveat fonts, flaticon icons
- Pages: Dashboard, Calendar, Login, Profile, Chatbot, Admin
- Make it feel like a native iOS app with smooth delightful interactions