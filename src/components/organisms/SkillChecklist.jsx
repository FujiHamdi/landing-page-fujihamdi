import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const SkillChecklist = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      className="
        skill-checklist max-w-6xl mx-auto px-8 md:hidden mt-4 
        grid grid-cols-2 gap-x-4 gap-y-2 
        text-white text-sm font-medium p-3
      "
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((item, idx) => (
        <motion.label
          key={idx}
          variants={itemVariants}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            className="
              w-4 h-4 
              rounded-full  
              border-white
            "
          />
          <span>{item}</span>
        </motion.label>
      ))}
    </motion.div>
  );
};

export default SkillChecklist;
