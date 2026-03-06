import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Весенний пейзаж"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.75) saturate(1.1) hue-rotate(-10deg)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255,182,193,0.25) 0%, rgba(0,0,0,0.3) 100%)" }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm uppercase tracking-[0.3em] mb-4 text-pink-100"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          С праздником весны
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          С 8 Марта,<br />
          <em>Мамочка!</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl max-w-xl mx-auto opacity-90"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          Ты — самый дорогой человек в моей жизни. Этот день — для тебя ✿
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-pink-200 text-sm tracking-wide"
        >
          — с любовью, Артём Журавлёв
        </motion.p>
      </div>
    </div>
  );
}
