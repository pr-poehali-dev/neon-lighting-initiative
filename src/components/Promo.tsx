import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Нежный фон"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.65) saturate(1.3) hue-rotate(-20deg)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,100,130,0.3) 0%, rgba(180,50,90,0.2) 100%)" }} />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
        Специально для тебя
      </h3>

      <div className="absolute bottom-12 right-6 z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-right">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Твой второй подарок — месяц кино и сериалов в подарок от Артёма 🎬
        </p>
        <a
          href="https://start.ru/code?utm_source=cpa&fake_id=4d53536d-6ff8-4aad-8193-869401d7a19d&promocode=flm30p2h87j5h&erid=2VtzqwezS77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          style={{ background: "rgba(255,255,255,0.95)", color: "#d4547a", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, borderRadius: "2px" }}
          onMouseEnter={e => { (e.target as HTMLAnchorElement).style.background = "white"; (e.target as HTMLAnchorElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.95)"; (e.target as HTMLAnchorElement).style.transform = "scale(1)"; }}
        >
          🎁 Открыть Подарок #2
        </a>
      </div>
    </div>
  );
}
