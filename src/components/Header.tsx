interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm tracking-[0.2em]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          С любовью ✿
        </div>
        <nav className="flex gap-8">
          <a
            href="#"
            className="text-white hover:text-pink-200 transition-colors duration-300 uppercase text-xs tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Для мамы
          </a>
        </nav>
      </div>
    </header>
  );
}
