import HeroSection from "@/components/organisms/HeroSection";
import ThemeToggle from "../molecules/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

export default function LandingPage({ hero }) {
  const { isDark } = useTheme();

  return (
    <main
      className={`
        relative
        min-h-screen
        overflow-hidden
        transition-all
        duration-500
        ${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"}
      `}
    >

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 -z-10 backdrop-blur-[2px] transition-colors duration-500
          ${
            isDark
              ? "bg-slate-950/70"
              : "bg-white/40"
          }
        `}
      />

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero */}
      <div className="container mx-auto px-6 lg:px-10 py-10">
        <HeroSection hero={hero} />
      </div>
    </main>
  );
}