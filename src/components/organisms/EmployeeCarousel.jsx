import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EmployeeCard from "../molecules/EmployeeCard";

const variants = {
  enter: (dir) => ({ x: dir * 50, opacity: 0, scale: 0.85 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: -dir * 50, opacity: 0, scale: 0.85 }),
};

const EmployeeCarousel = ({ employees }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [spacing, setSpacing] = useState(110);

  const wrap = (i) => (i + employees.length) % employees.length;

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % employees.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? employees.length - 1 : prev - 1));
  };

  useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

      if (isMobile && width <= 551) {
      setSpacing(30);
      return;
    }
    if (isMobile && width <= 766) {
      setSpacing(110);
      return;
    }

    

    if (width < 480) setSpacing(30);
    else if (width < 850) setSpacing(30);
    else if (width < 950) setSpacing(50);
    else if (width < 1063) setSpacing(80);
    else setSpacing(110);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
<div className="relative flex w-full max-w-full mt-6 items-center justify-center">

      {/* LEFT BUTTON */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50"
      >
        <FaChevronLeft size={22} />
      </motion.button>

      {/* SLIDER */}
      <div
        className="
        relative flex items-center justify-center overflow-visible
        w-[260px] h-[300px]
        sm:w-[350px] sm:h-[320px]
        md:w-[500px] md:h-[350px]
      "
      >
        {[0, 1, 2].map((slot) => {
          const offset = slot - 1;
          const i = wrap(index + offset);
          const isCenter = offset === 0;

          return (
            <motion.div
              key={slot + index}
              className="absolute"
              custom={direction}
              initial="enter"
              animate={{
                ...variants.center,
                x: offset * spacing,
              scale: isCenter ? 1 : 0.92,   
              opacity: isCenter ? 1 : 1,
                filter: isCenter ? "blur(0px)" : "blur(0px)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              style={{
                zIndex: isCenter ? 5 : 1,
                pointerEvents: isCenter ? "auto" : "none",
              }}
            >
              <div
                className={`
                  rounded-2xl transition-all duration-300
                  ${
                    isCenter
                      ? "bg-white shadow-xl"
                      : "bg-white/10 backdrop-blur-md border border-white/20"
                  }
                `}
              >
                <EmployeeCard {...employees[i]} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* RIGHT BUTTON */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        onClick={next}
        className="absolute right-0  top-1/2 -translate-y-1/2 z-50"
      >
        <FaChevronRight size={22} />
      </motion.button>
    </div>
  );
};

export default EmployeeCarousel;
