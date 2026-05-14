interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--coffee-espresso)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/a43af29c-71ca-40b0-b160-0d246ca62f97/files/a68c642d-95c7-43b0-8cf7-62004ce7edb5.jpg"
          alt="Coffee beans"
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,15,8,0.97) 0%, rgba(26,15,8,0.7) 50%, rgba(26,15,8,0.3) 100%)",
          }}
        />
      </div>

      {/* Decorative accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "linear-gradient(180deg, transparent, var(--coffee-amber), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-36">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Авторский кофе с доставкой</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-7xl md:text-8xl font-bold leading-none mb-6 animate-slide-up stagger-1"
            style={{ color: "var(--coffee-cream)" }}
          >
            КОФЕ,<br />
            <span className="text-gradient">КАК ТЫ</span><br />
            ЛЮБИШЬ
          </h1>

          <p
            className="font-body text-lg mb-10 animate-slide-up stagger-2"
            style={{ color: "rgba(245,230,208,0.65)", maxWidth: "480px", lineHeight: 1.7 }}
          >
            Отборные зёрна со всего мира. Свежая обжарка на нашем производстве.
            Персональная подписка с рекомендациями под ваш вкус.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
            <button
              onClick={() => onNavigate("catalog")}
              className="btn-primary px-8 py-4 rounded-sm text-sm"
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => onNavigate("subscription")}
              className="btn-outline px-8 py-4 rounded-sm text-sm"
            >
              Оформить подписку
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 animate-slide-up stagger-4">
            {[
              { num: "40+", label: "сортов кофе" },
              { num: "12", label: "стран происхождения" },
              { num: "2400+", label: "довольных клиентов" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "var(--coffee-amber)" }}
                >
                  {stat.num}
                </div>
                <div className="font-body text-sm" style={{ color: "rgba(245,230,208,0.5)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(transparent, var(--coffee-espresso))",
        }}
      />
    </section>
  );
}
