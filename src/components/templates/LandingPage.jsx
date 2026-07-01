import BackgroundSVG from "@/assets/background.svg";
import CategoryList from "@/components/organisms/CategoryList";
import HeroSection from "@/components/organisms/HeroSection";
import { motion } from "framer-motion";
import SkillChecklist from "../organisms/SkillChecklist";


export default function LandingPage({ hero, employees, categories }) {
  return (
    <>
      <div className="relative text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={BackgroundSVG}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <HeroSection hero={hero} employees={employees}/>

       <SkillChecklist items={hero.checkItems} />

        <div className="max-w-6xl block md:hidden mx-auto px-8 py-6 ">
              <motion.p
                  className="
                    block md:hidden
                    text-md font-bold leading-tight
                    text-yellow-200
                    mt-2 whitespace-pre-line underline
                  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {hero.ctaLink}
                </motion.p>
        </div>  
      </div>
    </>
  );
}
