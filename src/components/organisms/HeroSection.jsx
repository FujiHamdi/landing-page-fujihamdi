import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function HeroSection({ hero }) {
  if (!hero) return null;

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.p
            className="text-cyan-900 font-semibold text-lg mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {hero.name}
          </motion.h1>

          <motion.h2
            className="text-2xl text-slate-700 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hero.role}
          </motion.h2>

          <motion.p
            className="text-slate-900 leading-8 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {hero.summary}
          </motion.p>

          {/* Contact */}
          <motion.div
            className="space-y-3 text-slate-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>📍 {hero.location}</p>

            <p>
              📧{" "}
              <a
                href={`mailto:${hero.contact.email}`}
                className="text-slate-700 hover:text-cyan-600 transition"
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
                className="text-slate-700 hover:text-cyan-600 transition underline"
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
                className="text-slate-700 hover:text-cyan-600 transition underline"
              >
                Portfolio Website
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
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-100
                  border
                  border-cyan-200
                  text-slate-800
                  text-sm
                  font-medium
                "
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