"use client";

import { useTheme } from "@/context/global-theme-context";
import { FiSun, FiMoon } from "react-icons/fi";
import Tooltip from "./tooltip";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "default-dark";

  return (
    <Tooltip content={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="w-8.5 h-8.5 relative rounded-lg border bg-portfolio-card border-portfolio-border/60 text-portfolio-muted hover:text-portfolio-text hover:border-portfolio-border flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
      >
        {/* Sun Icon */}
        <div className={`absolute transition-all duration-300 ease-out transform flex items-center justify-center ${isDark ? "translate-y-0 opacity-100 scale-100 rotate-0" : "translate-y-2 opacity-0 scale-75 -rotate-45"}`}>
          <FiSun className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.2)]" />
        </div>

        {/* Moon Icon */}
        <div className={`absolute transition-all duration-300 ease-out transform flex items-center justify-center ${!isDark ? "translate-y-0 opacity-100 scale-100 rotate-0" : "-translate-y-2 opacity-0 scale-75 rotate-45"}`}>
          <FiMoon className="w-3.5 h-3.5 text-portfolio-accent" />
        </div>
      </button>
    </Tooltip>
  );
}