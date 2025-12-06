import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * CategoryList
 * props:
 *   categories: [{ id, name, icon }]  (icon is a react element from react-icons)
 *
 * Behavior:
 *  - fade-in (500ms)
 *  - slide left by one item every 5s
 *  - seamless loop via duplication and instant reset
 */
export default function CategoryList({ categories = [] }) {
  const ITEMS = categories || [];
  if (!ITEMS.length) return null;
  const items = [...ITEMS, ...ITEMS];

  const ITEM_WIDTH = 190; 
  const GAP = 16;

  const [index, setIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [ITEMS.length]);

  useEffect(() => {
    if (index > 0 && index % ITEMS.length === 0) {
      const resetTimeout = setTimeout(() => {
        setDisableTransition(true);
        setIndex(0);
        setTimeout(() => setDisableTransition(false), 50);
      }, 650);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, ITEMS.length]);

  const translateX = -index * ITEM_WIDTH;

  return (
    <section className="overflow-hidden py-6 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-full overflow-hidden">
          <motion.div
            animate={{
              x: translateX,
            }}
            transition={
              disableTransition
                ? { duration: 0 } 
                : { duration: 0.6, ease: "easeOut" }
            }
            className="flex items-center gap-4"
            style={{ willChange: "transform" }}
          >
            {items.map((cat, i) => (
              <div
                key={i}
                className="min-w-[180px] h-[50px] flex items-center gap-3 px-4 bg-white/15 rounded-lg border border-white/20 backdrop-blur-md text-white shadow-sm"
              >
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <img src={cat.icon} className="w-5"/>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {cat.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
