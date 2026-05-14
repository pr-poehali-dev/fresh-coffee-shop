import BgBeans from "@/components/BgBeans";

const METHODS = [
  {
    tag: "Мытая (Washed)",
    color: "#4a9eff",
    icon: "💧",
    desc: "Мякоть удаляется механически сразу после сбора, затем зёрна ферментируются в воде 24–72 часа и тщательно промываются. Длительная сушка на приподнятых столах — 2–4 недели.",
    taste: "Чистый, яркий, кислотный вкус. Терруар передаётся максимально точно — никаких посторонних влияний мякоти.",
    examples: "Эфиопия Иргачефф, Кения АА, Колумбия Уила",
    complexity: 3,
  },
  {
    tag: "Натуральная (Natural / Dry)",
    color: "#e8941a",
    icon: "☀️",
    desc: "Ягода сушится целиком под солнцем 3–6 недель. Мякоть постепенно отдаёт зёрнам сахар и фруктовые соединения. Требует постоянного переворачивания во избежание плесени.",
    taste: "Насыщенный, ягодный, иногда винный вкус. Плотное тело, сладость и фруктовость. Меньше кислотности, чем у мытой.",
    examples: "Эфиопия (натур.), Йемен Мокко, Бразилия",
    complexity: 2,
  },
  {
    tag: "Хани (Honey / Pulped Natural)",
    color: "#d4923a",
    icon: "🍯",
    desc: "Часть мякоти (mucilage) намеренно оставляется на зерне при сушке. Степень варьируется: Yellow honey — минимум мякоти, Red — средне, Black honey — почти как натуральная.",
    taste: "Баланс между мытой и натуральной. Мягкая сладость, среднее тело, умеренная кислотность. Шелковистая текстура.",
    examples: "Гватемала, Коста-Рика, Бразилия (хани)",
    complexity: 4,
  },
  {
    tag: "Анаэробная (Anaerobic)",
    color: "#b06040",
    icon: "🔬",
    desc: "Ягоды или очищенные зёрна ферментируются в герметичных баках без доступа кислорода. CO₂, выделяемый в процессе, создаёт особую среду. Контролируется pH и температура.",
    taste: "Интенсивные, нетипичные ноты: тропические фрукты, ферментация, специи. Экспериментальный метод — вкус каждой партии уникален.",
    examples: "Колумбия, Эфиопия, Панама (спешелти)",
    complexity: 5,
  },
  {
    tag: "Влажная очистка (Wet-Hulled / Giling Basah)",
    color: "#8a6040",
    icon: "🌊",
    desc: "Традиционный индонезийский метод. Зёрна очищаются от пергамента при высокой влажности (50%), затем досушиваются. Уникален для Суматры и Сулавеси.",
    taste: "Землистый, тяжёлый, пряный вкус. Низкая кислотность, очень плотное тело. Характерный «суматранский» профиль.",
    examples: "Суматра Манделинг, Сулавеси Торая",
    complexity: 2,
  },
];

export default function ProcessingSection() {
  return (
    <section id="processing" className="py-24" style={{ background: "rgba(25, 12, 5, 0.98)", position: "relative" }}>
      <BgBeans seed={21} count={14} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Путь от дерева до зерна</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="section-title text-5xl md:text-6xl font-bold" style={{ color: "var(--coffee-cream)" }}>
              ОБРАБОТКА<br />ЯГОДЫ
            </h2>
            <p className="font-body text-base md:max-w-sm" style={{ color: "rgba(245,230,208,0.5)", lineHeight: 1.7 }}>
              Способ обработки кофейной ягоды — один из ключевых факторов, определяющих
              вкус в чашке. Иногда важнее самого происхождения.
            </p>
          </div>
          <div className="divider-coffee mt-8" />
        </div>

        {/* Схема ягоды */}
        <div
          className="rounded-sm p-6 mb-12 flex flex-col md:flex-row items-center gap-8"
          style={{ background: "rgba(45,26,14,0.5)", border: "1px solid rgba(196,122,43,0.2)" }}
        >
          <div className="flex-shrink-0">
            <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
              {/* Внешняя оболочка */}
              <ellipse cx="80" cy="80" rx="70" ry="70" fill="#8B2500" opacity="0.7" />
              {/* Мякоть */}
              <ellipse cx="80" cy="80" rx="58" ry="58" fill="#C0392B" opacity="0.6" />
              {/* Слизь (mucilage) */}
              <ellipse cx="80" cy="80" rx="46" ry="46" fill="#d4923a" opacity="0.5" />
              {/* Пергамент */}
              <ellipse cx="80" cy="80" rx="36" ry="36" fill="#c8a060" opacity="0.6" />
              {/* Серебряная плёнка */}
              <ellipse cx="80" cy="80" rx="28" ry="28" fill="#e8d080" opacity="0.5" />
              {/* Зёрна */}
              <ellipse cx="72" cy="80" rx="14" ry="20" fill="#5a3010" />
              <ellipse cx="88" cy="80" rx="14" ry="20" fill="#4a2808" />
              {/* Линия между зёрнами */}
              <line x1="80" y1="60" x2="80" y2="100" stroke="#2a1408" strokeWidth="1.5" />
              {/* Подписи */}
              <text x="155" y="20" fontSize="8" fill="#f5a832" fontFamily="sans-serif" textAnchor="end">Кожура</text>
              <text x="155" y="44" fontSize="8" fill="#e07060" fontFamily="sans-serif" textAnchor="end">Мякоть</text>
              <text x="155" y="68" fontSize="8" fill="#d4923a" fontFamily="sans-serif" textAnchor="end">Слизь</text>
              <text x="155" y="92" fontSize="8" fill="#c8a060" fontFamily="sans-serif" textAnchor="end">Пергамент</text>
              <text x="155" y="116" fontSize="8" fill="#fdf0d8" fontFamily="sans-serif" textAnchor="end">Зёрна</text>
              {/* Линии-указатели */}
              <line x1="80" y1="15" x2="145" y2="17" stroke="rgba(245,230,208,0.2)" strokeWidth="0.8" />
              <line x1="80" y1="28" x2="145" y2="41" stroke="rgba(245,230,208,0.2)" strokeWidth="0.8" />
              <line x1="80" y1="38" x2="145" y2="65" stroke="rgba(245,230,208,0.2)" strokeWidth="0.8" />
              <line x1="80" y1="46" x2="145" y2="89" stroke="rgba(245,230,208,0.2)" strokeWidth="0.8" />
              <line x1="80" y1="60" x2="145" y2="113" stroke="rgba(245,230,208,0.2)" strokeWidth="0.8" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--coffee-amber)" }}>
              Анатомия кофейной ягоды
            </h3>
            <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.7 }}>
              Кофейная ягода (coffee cherry) — небольшой плод, похожий на вишню.
              Внутри каждой ягоды, как правило, два зерна — это и есть то, что мы обжариваем.
              Каждый слой по-своему влияет на финальный вкус в зависимости от метода обработки.
            </p>
          </div>
        </div>

        {/* Методы */}
        <div className="flex flex-col gap-6">
          {METHODS.map((m) => (
            <div
              key={m.tag}
              className="rounded-sm p-7"
              style={{ background: "rgba(45,26,14,0.5)", border: "1px solid rgba(196,122,43,0.15)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="text-4xl flex-shrink-0">{m.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="font-display text-sm tracking-wider uppercase px-3 py-1 rounded-sm"
                      style={{ background: `${m.color}22`, color: m.color, border: `1px solid ${m.color}44` }}
                    >
                      {m.tag}
                    </span>
                    <div className="flex gap-1 items-center">
                      <span className="font-body text-xs mr-1" style={{ color: "rgba(245,230,208,0.3)" }}>Сложность:</span>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full"
                          style={{ background: i < m.complexity ? m.color : "rgba(245,230,208,0.1)" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-display text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(245,230,208,0.35)" }}>Процесс</p>
                      <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.65)", lineHeight: 1.7 }}>{m.desc}</p>
                    </div>
                    <div>
                      <p className="font-display text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(245,230,208,0.35)" }}>Вкус в чашке</p>
                      <p className="font-body text-sm mb-3" style={{ color: "rgba(245,230,208,0.65)", lineHeight: 1.7 }}>{m.taste}</p>
                      <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.3)" }}>
                        Примеры: {m.examples}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
