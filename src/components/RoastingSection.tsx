import BgBeans from "@/components/BgBeans";

const steps = [
  {
    num: "01",
    title: "Отбор и сортинг",
    description:
      "Зелёные зёрна проходят визуальный и ручной отбор. Убираем дефекты: чёрные зёрна, ломаные, с оболочкой. Оцениваем влажность (10–12% — норма) и плотность. Только однородное сырьё даёт стабильный результат от обжарки к обжарке.",
  },
  {
    num: "02",
    title: "Разработка профиля",
    description:
      "Для каждого происхождения создаётся уникальный профиль: кривая температуры, скорость нагрева (Rate of Rise), точки первого и второго крэка. Профили разрабатываются на малых партиях (200г), затем масштабируются на рабочий ростер.",
  },
  {
    num: "03",
    title: "Барабанная обжарка",
    description:
      "Используем профессиональные ростеры с точным контролем температуры и тяги. Первый крэк (~196°C) — зёрна раскрываются, выделяют CO₂ и пар. Второй крэк (~224°C) — начало разрушения клеточной структуры. Время между крэками определяет степень обжарки.",
  },
  {
    num: "04",
    title: "Охлаждение",
    description:
      "Сразу после обжарки зёрна охлаждаются принудительным продувом воздуха за 4–5 минут. Быстрое охлаждение останавливает пиролиз и фиксирует вкусовой профиль. Медленное — продолжает «допекать» зёрна и ухудшает результат.",
  },
  {
    num: "05",
    title: "Дегазация и фасовка",
    description:
      "После обжарки зёрна активно выделяют CO₂ 12–48 часов. Фасуем в вакуумные пакеты с односторонним клапаном — газ выходит, кислород не попадает. Рекомендуем заваривать через 3–7 дней после обжарки для эспрессо и через 7–14 для фильтра.",
  },
];

const ROAST_INFLUENCE = [
  {
    level: "Лёгкая",
    range: "185–205°C",
    color: "#f5c060",
    barW: "33%",
    taste: "Цветочность, ягоды, цитрус, высокая кислотность",
    body: "Лёгкое",
    acidity: "Высокая",
    bitterness: "Минимальная",
    aroma: "Деликатный, фруктовый",
    best: "Пуровер, V60, аэропресс, каппинг",
    desc: "Сохраняет максимум терруара и происхождения. Зерно не успевает «потерять себя» — вы слышите страну, регион, фермера.",
  },
  {
    level: "Средняя",
    range: "205–220°C",
    color: "#c47a2b",
    barW: "60%",
    taste: "Карамель, орех, шоколад, умеренная кислотность",
    body: "Среднее",
    acidity: "Сбалансированная",
    bitterness: "Умеренная",
    aroma: "Насыщенный, карамельный",
    best: "Эспрессо, аэропресс, кемекс, пуровер",
    desc: "Золотой баланс. Сахара карамелизируются, формируя сладость и тело. Универсальный выбор для большинства методов заваривания.",
  },
  {
    level: "Тёмная",
    range: "220–240°C",
    color: "#5c3317",
    barW: "90%",
    taste: "Тёмный шоколад, дым, ваниль, горечь",
    body: "Плотное",
    acidity: "Низкая",
    bitterness: "Выраженная",
    aroma: "Дымный, смолистый",
    best: "Эспрессо, турка, френч-пресс",
    desc: "Обжарщик берёт на себя роль терруара — вкус определяет огонь, а не происхождение. Подходит для кофе с молоком.",
  },
];

export default function RoastingSection() {
  return (
    <section id="roasting" className="py-24" style={{ background: "var(--coffee-espresso)", position: "relative" }}>
      <BgBeans seed={13} count={18} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Производство</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="section-title text-5xl md:text-6xl font-bold" style={{ color: "var(--coffee-cream)" }}>
              ОБЖАРКА
            </h2>
            <p className="font-body text-base md:max-w-sm" style={{ color: "rgba(245,230,208,0.5)", lineHeight: 1.7 }}>
              Обжарка превращает зелёное зерно в то, что мы знаем как кофе.
              Это точная наука и одновременно — искусство.
            </p>
          </div>
          <div className="divider-coffee mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "420px" }}>
              <img
                src="https://cdn.poehali.dev/projects/a43af29c-71ca-40b0-b160-0d246ca62f97/files/c8d651b9-63f7-430b-b1fc-abe805730c9c.jpg"
                alt="Coffee roasting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(45deg, rgba(26,15,8,0.6) 0%, transparent 60%)" }} />
              <div className="absolute bottom-8 left-8">
                <div className="font-display text-5xl font-bold" style={{ color: "var(--coffee-amber)" }}>218°C</div>
                <div className="font-body text-sm mt-1" style={{ color: "rgba(245,230,208,0.6)" }}>Средняя температура обжарки</div>
              </div>
            </div>

            {/* Temperature scale */}
            <div className="mt-5 p-5 rounded-sm" style={{ background: "rgba(45,26,14,0.8)", border: "1px solid rgba(196,122,43,0.2)" }}>
              <div className="font-display text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(245,230,208,0.4)" }}>
                Шкала обжарки
              </div>
              <div className="relative h-4 rounded-full overflow-hidden">
                <div className="h-full w-full" style={{ background: "linear-gradient(90deg, #f5c060 0%, #c47a2b 40%, #8b4513 70%, #3d1c0a 100%)" }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>185°C Светлая</span>
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>212°C Средняя</span>
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>240°C Тёмная</span>
              </div>
            </div>

            {/* Ключевые моменты */}
            <div className="mt-5 p-5 rounded-sm" style={{ background: "rgba(45,26,14,0.8)", border: "1px solid rgba(196,122,43,0.2)" }}>
              <div className="font-display text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(245,230,208,0.4)" }}>
                Ключевые точки
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { temp: "~150°C", event: "Реакция Майяра", desc: "Аминокислоты + сахара → коричневый цвет, сотни ароматических соединений" },
                  { temp: "~196°C", event: "Первый крэк", desc: "Зерно резко расширяется, выделяет пар и CO₂, характерный треск" },
                  { temp: "~224°C", event: "Второй крэк", desc: "Разрушение клеточных стенок, масла выходят на поверхность, дымность" },
                ].map((p) => (
                  <div key={p.temp} className="flex gap-3">
                    <span className="font-display text-sm font-bold flex-shrink-0 w-16" style={{ color: "var(--coffee-amber)" }}>{p.temp}</span>
                    <div>
                      <div className="font-display text-sm font-semibold" style={{ color: "var(--coffee-cream)" }}>{p.event}</div>
                      <div className="font-body text-xs" style={{ color: "rgba(245,230,208,0.45)" }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — steps */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--coffee-cream)" }}>
              Процесс обжарки
            </h3>
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-display text-4xl font-bold" style={{ color: "rgba(196,122,43,0.3)", lineHeight: 1 }}>
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--coffee-amber)" }}>
                      {step.title}
                    </h3>
                    <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                    {i < steps.length - 1 && <div className="divider-coffee mt-8" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Влияние обжарки на вкус */}
        <div>
          <div className="divider-coffee mb-12" />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Вкус и степень обжарки</span>
          </div>
          <h3 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--coffee-cream)" }}>
            Как обжарка меняет вкус
          </h3>
          <p className="font-body mb-10" style={{ color: "rgba(245,230,208,0.5)", lineHeight: 1.7, maxWidth: "600px" }}>
            Каждый градус на ростере — это выбор. Чем темнее обжарка, тем больше
            «голос» обжарщика заглушает терруар. Чем светлее — тем ярче звучит происхождение.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROAST_INFLUENCE.map((r) => (
              <div
                key={r.level}
                className="rounded-sm p-6 flex flex-col gap-4"
                style={{ background: "rgba(45,26,14,0.6)", border: `1px solid ${r.color}44` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-2xl font-bold" style={{ color: r.color }}>{r.level}</h4>
                    <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.35)" }}>{r.range}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full" style={{ background: r.color, opacity: 0.85 }} />
                </div>

                {/* Bar */}
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(245,230,208,0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: r.barW, background: r.color }} />
                </div>

                <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.6 }}>{r.desc}</p>

                <div className="flex flex-col gap-2">
                  {[
                    { label: "Вкус", val: r.taste },
                    { label: "Кислотность", val: r.acidity },
                    { label: "Горечь", val: r.bitterness },
                    { label: "Тело", val: r.body },
                    { label: "Аромат", val: r.aroma },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between gap-2">
                      <span className="font-body text-xs flex-shrink-0" style={{ color: "rgba(245,230,208,0.3)" }}>{d.label}</span>
                      <span className="font-body text-xs text-right" style={{ color: "rgba(245,230,208,0.65)" }}>{d.val}</span>
                    </div>
                  ))}
                </div>

                <div className="divider-coffee" />
                <div>
                  <p className="font-body text-xs mb-1" style={{ color: "rgba(245,230,208,0.3)" }}>Лучше всего для:</p>
                  <p className="font-body text-xs" style={{ color: r.color }}>{r.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
