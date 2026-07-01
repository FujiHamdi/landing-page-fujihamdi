import { motion } from "framer-motion";
import avatar from "../../assets/images/avatar.jpeg";
import { useTheme } from "@/context/ThemeContext";

const ProfileCard = ({ hero }) => {
  const { isDark } = useTheme();

  if (!hero) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`
        w-full
        max-w-sm
        rounded-3xl
        p-6
        backdrop-blur-xl
        border
        transition-all
        duration-500

        ${
          isDark
            ? "bg-slate-900/70 border-slate-900 shadow-1xl shadow-cyan-700/20"
            : "bg-white/80 border-slate-200 shadow-2xl"
        }
      `}
    >
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={avatar}
          alt={hero.name}
          className="
            w-52
            h-52
            rounded-full
            object-cover
            border-4
            border-cyan-500
            shadow-xl
          "
        />
      </div>

      {/* Experience */}
      <div className="mt-8">
        <h3
          className={`font-bold text-lg mb-5 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Experience
        </h3>

        <div className="space-y-5">
          {hero.experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="border-l-4 border-cyan-500 pl-4"
            >
              <h4
                className={`font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {exp.company}
              </h4>

              <p className="text-cyan-500 text-sm font-medium">
                {exp.role}
              </p>

              <p
                className={`text-xs mb-2 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {exp.period}
              </p>

              <p
                className={`text-sm leading-6 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ProfileCard;