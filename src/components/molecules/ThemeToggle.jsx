import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        flex items-center justify-center
        w-12 h-12
        rounded-full
        border
        backdrop-blur-md
        shadow-xl
        transition-all
        duration-300
        hover:rotate-12
        hover:scale-110
        active:scale-95
        ${
          isDark
            ? "bg-slate-800/80 border-slate-600 text-yellow-300"
            : "bg-white/80 border-slate-200 text-slate-800"
        }
      `}
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}