export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #5a2d3a 0%, #8a1a40 50%, #5a2d3a 100%)" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: "#f4a0b5", fontFamily: "'Montserrat', sans-serif" }}>Подарки</h3>
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); document.querySelector<HTMLElement>('.gift-btn-1')?.click(); }}
                  className="hover:text-pink-200 transition-colors duration-300 text-sm sm:text-base"
                  style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  🎁 Подарок #1 — Видео
                </a>
                <a
                  href="https://start.ru/code?utm_source=cpa&fake_id=4d53536d-6ff8-4aad-8193-869401d7a19d&promocode=flm30p2h87j5h&erid=2VtzqwezS77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-200 transition-colors duration-300 text-sm sm:text-base"
                  style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  🎬 Подарок #2 — Start.ru
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: "#f4a0b5", fontFamily: "'Montserrat', sans-serif" }}>С праздником</h3>
                <span className="text-sm sm:text-base" style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                  8 марта 2026
                </span>
                <span className="text-sm sm:text-base" style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                  От Артёма Журавлёва
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                style={{ color: "#f9d0dc", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                Мама
              </h1>
              <p className="text-sm sm:text-base" style={{ color: "#f4a0b5", fontFamily: "'Montserrat', sans-serif" }}>
                ✿ с любовью, Артём
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
