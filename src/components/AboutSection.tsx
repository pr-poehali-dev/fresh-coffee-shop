export default function AboutSection() {
  const facts = [
    {
      icon: "🌱",
      title: "Terroir",
      description:
        "Каждый регион придаёт зёрнам уникальный характер. Вулканические почвы Гватемалы, высокогорья Эфиопии, тропики Бразилии — мы изучаем каждое происхождение.",
    },
    {
      icon: "☕",
      title: "Процессинг",
      description:
        "Мытая, натуральная, хани — способ обработки зёрен кардинально меняет вкус. Мы рассказываем о каждом методе, чтобы вы понимали, что пьёте.",
    },
    {
      icon: "🔬",
      title: "Каппинг",
      description:
        "Профессиональная дегустация по стандартам SCA. Мы оцениваем каждую партию перед отправкой, чтобы в вашей чашке был только лучший кофе.",
    },
    {
      icon: "📦",
      title: "Свежесть",
      description:
        "Обжарка и отправка в один день. Пик вкуса — 7–21 день после обжарки. Вы получаете кофе в идеальный момент.",
    },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "rgba(45,26,14,0.5)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Наша философия</span>
            </div>
            <h2
              className="section-title text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--coffee-cream)" }}
            >
              О КОФЕ
            </h2>
            <p
              className="font-body text-lg mb-6"
              style={{ color: "rgba(245,230,208,0.65)", lineHeight: 1.8 }}
            >
              Кофе — это не просто напиток. Это история места, где росли зёрна,
              рук, которые их собирали, и мастерства обжарщика.
            </p>
            <p
              className="font-body text-lg mb-10"
              style={{ color: "rgba(245,230,208,0.65)", lineHeight: 1.8 }}
            >
              Мы работаем напрямую с фермерами, поддерживая справедливую торговлю
              и экологичное производство. Каждый пакет — это осознанный выбор.
            </p>

            <div
              className="p-6 rounded-sm"
              style={{
                background: "rgba(232,148,26,0.08)",
                border: "1px solid rgba(232,148,26,0.25)",
                borderLeft: "4px solid var(--coffee-amber)",
              }}
            >
              <p
                className="font-display text-xl italic"
                style={{ color: "var(--coffee-cream)" }}
              >
                «Хороший кофе не нуждается в маскировке — он говорит сам за себя»
              </p>
              <p className="font-body text-sm mt-3" style={{ color: "rgba(245,230,208,0.4)" }}>
                — Алексей Морозов, основатель BREW
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="relative rounded-sm overflow-hidden mb-6" style={{ height: "320px" }}>
              <img
                src="https://cdn.poehali.dev/projects/a43af29c-71ca-40b0-b160-0d246ca62f97/files/59c11e6c-e923-4288-83c3-82aec62da16d.jpg"
                alt="Coffee brewing"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 60%, rgba(26,15,8,0.8) 100%)",
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.title}
                  className="card-coffee p-5 rounded-sm"
                >
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <h4
                    className="font-display text-sm font-semibold tracking-wider uppercase mb-2"
                    style={{ color: "var(--coffee-amber)" }}
                  >
                    {fact.title}
                  </h4>
                  <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.55)", lineHeight: 1.6 }}>
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
