import { motion } from "framer-motion";
import Currency from "../../assets/logos/currency.svg";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const EmployeeCard = ({ name, role, avatar, price, skills }) => {
  return (
    <motion.div
      whileHover="show"
      initial="hidden"
      variants={{ show: {}, hidden: {} }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
      w-[230px] h-[320px]
        relative bg-white 
        w-full max-w-[240px]  
        rounded-2xl shadow-lg p-4
        flex flex-col items-center text-center
      "
    >

      {/* Tooltip */}
      <motion.div
        variants={tooltipVariants}
        transition={{ duration: 0.35 }}
        className="
          absolute bg-white text-green-600 font-semibold shadow-md 
          px-1.5 py-1.5 rounded-lg 
          -top-14 left-1/2 -translate-x-1/2
        "
      >
        <div className="relative">
          <div className="flex items-center space-x-2">
            <img src={Currency} alt="Currency" className="h-5 w-5" />
            <span>{price}</span>
          </div>
          <div
            className="
              w-0 h-0 absolute left-1/2 -bottom-3 -translate-x-1/2
              border-l-8 border-r-8 border-t-8 
              border-l-transparent border-r-transparent border-t-white
            "
          />
        </div>
      </motion.div>

      {/* Avatar */}
      <img
        src={avatar}
        alt="employee"
        className="
          w-20 h-20 sm:w-24 sm:h-24 mb-4
        "
      />

      {/* Name */}
      <Heading level={3} className="text-base sm:text-lg">
        {name}
      </Heading>

      {/* Role */}
      <Text className="text-sm text-blue-500 font-semibold mt-1 mb-2">
        {role}
      </Text>

      {/* Skills Badges */}
      <div className="skills flex flex-wrap gap-2 justify-center mt-6">
        {skills?.map((skill, idx) => (
          <Text
            key={idx}
            className="skill-badge border border-black text-xs px-2 py-1 rounded-md"
          >
            {skill}
          </Text>
        ))}
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
