import { motion } from "framer-motion";
import avatar from "../../assets/images/avatar.jpeg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

const ProfileCard = ({ hero }) => {
  if (!hero) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="
        bg-white
        rounded-3xl
        shadow-2xl
        p-6
        w-full
        max-w-sm
      "
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
            shadow-lg
          "
        />
      </div>

      {/* Experience */}
      <div className="mt-7">
        <h3 className="font-semibold text-gray-800 mb-4">
          Experience
        </h3>

        <div className="space-y-4">
          {hero.experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="border-l-4 border-cyan-500 pl-4"
            >
              <h4 className="font-semibold text-gray-800">
                {exp.company}
              </h4>

              <p className="text-cyan-600 text-sm">
                {exp.role}
              </p>

              <p className="text-xs text-gray-800 mb-1">
                {exp.period}
              </p>

              <p className="text-sm text-gray-600 line-clamp-3">
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