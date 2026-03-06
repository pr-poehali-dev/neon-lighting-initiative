import Icon from "@/components/ui/icon";

const VIDEO_URL = "https://yandex.ru/video/preview/3740082463171301054";

export default function Featured() {
  const openVideo = () => window.open(VIDEO_URL, "_blank");

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ background: "linear-gradient(135deg, #fff0f5 0%, #fce4ec 50%, #fff0f5 100%)" }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative group cursor-pointer" onClick={openVideo}>
        <img
          src="/images/woman-horse.jpg"
          alt="Подарок для мамы"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.9) brightness(0.95)", borderRadius: "2px" }}
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(255,182,193,0.25)" }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: "rgba(255,255,255,0.9)" }}>
            <Icon name="Play" size={32} className="ml-1" style={{ color: "#d4547a" }} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm" style={{ background: "rgba(255,255,255,0.85)", color: "#d4547a", fontFamily: "'Montserrat', sans-serif" }}>
          🎁 Подарок #1 — нажми, чтобы посмотреть
        </div>
      </div>

      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-[0.2em]" style={{ color: "#c4849a", fontFamily: "'Montserrat', sans-serif" }}>От всего сердца</h3>
        <p className="text-2xl lg:text-4xl mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#5a2d3a" }}>
          Мама, ты вдохновляешь меня каждый день — своей добротой, силой и любовью, которую даришь так щедро.
        </p>
        <p className="text-base lg:text-lg mb-8" style={{ color: "#8a4a5a", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Нажми на кнопку — я приготовил для тебя кое-что особенное ✨
        </p>
        <button
          onClick={openVideo}
          className="px-6 py-3 text-sm transition-all duration-300 cursor-pointer w-fit uppercase tracking-wide"
          style={{ background: "#d4547a", color: "white", border: "none", borderRadius: "2px", fontFamily: "'Montserrat', sans-serif" }}
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = "#b03d62"; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "#d4547a"; }}
        >
          🎁 Открыть Подарок #1
        </button>
      </div>
    </div>
  );
}
