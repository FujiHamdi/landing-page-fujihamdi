import { motion } from "framer-motion";
import EmployeeCarousel from "./EmployeeCarousel";

export default function HeroSection({ hero, employees }) {
  if (!hero) return null;

  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* -- LEFT SIDE-- */}
        <div className="text-left">
        <motion.p
          className="text-yellow-200 mt-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <img src={hero.title} alt="Currency" className="mb-5 w-30" />
        </motion.p>

        <motion.p
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          className="text-md md:text-2md font-bold leading-tight mb-7 whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {hero.ctaText}
        </motion.p>


        <motion.p
          className="
            hidden md:block             
            text-md md:text-2md font-bold leading-tight
            m-0 mt-2 whitespace-pre-line underline
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {hero.ctaLink}
        </motion.p>

        {/* Feature List */}
        <motion.div
          className="mt-8 hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 text-white items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* 1 */}
          <div className="flex flex-col items-start text-start">
            <div className="w-30 h-[3px] bg-white mb-2"></div>
            <p className="text-md font-bold mb-2">평균 월 120만원</p>
            <p className="text-[13px] opacity-90 leading-relaxed">
              임금을 해당 국가를 기준으로 계산합니다.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-start text-start">
            <div className="w-30 h-[3px] bg-white mb-2"></div>
            <p className="text-md font-bold mb-2">최대 3회 인력교체</p>
            <p className="text-[13px] opacity-90 leading-relaxed">
              막상 채용해보니 맞지 않아도 걱정하지 마세요.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-start text-start">
            <div className="w-30 h-[3px] bg-white mb-2"></div>
            <p className="text-md font-bold mb-2">평균 3일, 최대 10일</p>
            <p className="text-[13px] opacity-90 leading-relaxed">
              급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
            </p>
          </div>
        </motion.div>

      </div>


        {/* -- RIGHT SIDE --*/}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <EmployeeCarousel employees={employees} />
        </motion.div>

      </div>
    </section>
  );
}
