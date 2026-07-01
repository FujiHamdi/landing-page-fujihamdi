import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import ProfileCard from "./ProfileCard";

export default function HeroSection({ hero }) {
  const { isDark } = useTheme();

  if (!hero) return null;

  return (
    <section className="py-12 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.p
            className={`font-semibold text-lg mb-2 ${
              isDark ? "text-cyan-400" : "text-cyan-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            className={`text-5xl lg:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {hero.name}
          </motion.h1>

          <motion.h2
            className={`text-2xl font-medium mb-6 ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hero.role}
          </motion.h2>

          <motion.p
            className={`leading-8 mb-8 max-w-xl ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {hero.summary}
          </motion.p>

          {/* Contact */}
          <motion.div
            className={`space-y-3 mb-8 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>📍 {hero.location}</p>

            <p>
              📧{" "}
              <a
                href={`mailto:${hero.contact.email}`}
                className={`transition ${
                  isDark
                    ? "hover:text-cyan-400"
                    : "hover:text-cyan-600"
                }`}
              >
                {hero.contact.email}
              </a>
            </p>

            <p>
              💼{" "}
              <a
                href={hero.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition ${
                  isDark
                    ? "hover:text-cyan-400"
                    : "hover:text-cyan-600"
                }`}
              >
                LinkedIn
              </a>
            </p>

            <p>
              🌐{" "}
              <a
                href={hero.contact.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition ${
                  isDark
                    ? "hover:text-cyan-400"
                    : "hover:text-cyan-600"
                }`}
              >
                Portfolio Website
              </a>
            </p>
            <p>
              📄{" "}
              <a
                href={hero.contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition ${
                  isDark
                    ? "hover:text-cyan-400"
                    : "hover:text-cyan-600"
                }`}
              >
                Curriculum Vitae (CV)
              </a>
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {hero.skills.map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? "bg-cyan-500/10 border-cyan-400/40 text-cyan-200"
                    : "bg-cyan-100 border-cyan-200 text-slate-800"
                }`}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ProfileCard hero={hero} />
        </motion.div>
      </div>
    </section>
  );
}