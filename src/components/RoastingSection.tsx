import BgBeans from "@/components/BgBeans";

export default function RoastingSection() {
  const steps = [
    {
      num: "01",
      title: "Отбор зёрен",
      description:
        "Зелёные зёрна проходят ручной сортинг. Убираем дефекты, оцениваем плотность и влажность. Только однородное сырьё даёт стабильный результат.",
    },
    {
      num: "02",
      title: "Профиль обжарки",
      description:
        "Для каждого происхождения — уникальный профиль температуры и времени. Разрабатываем на маленьких партиях, затем масштабируем.",
    },
    {
      num: "03",
      title: "Барабанная обжарка",
      description:
        "Используем профессиональные ростеры с контролем температуры до 1°C. Следим за первым и вторым крэком в режиме реального времени.",
    },
    {
      num: "04",
      title: "Дегазация и фасовка",
      description:
        "После обжарки зёрна дегазируются 12–24 часа. Фасуем в вакуумные пакеты с клапаном, сохраняющим свежесть до 6 месяцев.",
    },
  ];

  return (
    <section id="roasting" className="py-24" style={{ background: "var(--coffee-espresso)", position: "relative" }}>
      <BgBeans seed={13} count={18} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "500px" }}>
              <img
                src="https://cdn.poehali.dev/projects/a43af29c-71ca-40b0-b160-0d246ca62f97/files/c8d651b9-63f7-430b-b1fc-abe805730c9c.jpg"
                alt="Coffee roasting"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(45deg, rgba(26,15,8,0.6) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-8 left-8">
                <div
                  className="font-display text-5xl font-bold"
                  style={{ color: "var(--coffee-amber)" }}
                >
                  218°C
                </div>
                <div className="font-body text-sm mt-1" style={{ color: "rgba(245,230,208,0.6)" }}>
                  Средняя температура обжарки
                </div>
              </div>
            </div>

            {/* Temperature scale */}
            <div
              className="mt-6 p-5 rounded-sm"
              style={{ background: "rgba(45,26,14,0.8)", border: "1px solid rgba(196,122,43,0.2)" }}
            >
              <div className="font-display text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(245,230,208,0.4)" }}>
                Шкала обжарки
              </div>
              <div className="relative h-4 rounded-full overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    background: "linear-gradient(90deg, #e8c99a 0%, #c47a2b 35%, #8b4513 65%, #3d1c0a 100%)",
                  }}
                />
                <div
                  className="absolute top-0 h-full w-1 bg-white opacity-80"
                  style={{ left: "50%" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>Светлая</span>
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>Средняя</span>
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>Тёмная</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Производство</span>
            </div>
            <h2
              className="section-title text-5xl md:text-6xl font-bold mb-12"
              style={{ color: "var(--coffee-cream)" }}
            >
              ОБЖАРКА
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="font-display text-4xl font-bold"
                      style={{ color: "rgba(196,122,43,0.3)", lineHeight: 1 }}
                    >
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3
                      className="font-display text-xl font-semibold mb-3"
                      style={{ color: "var(--coffee-amber)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-body" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                    {i < steps.length - 1 && (
                      <div className="divider-coffee mt-8" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Блок обработки ягоды */}
            <div className="mt-14">
              <div className="divider-coffee mb-10" />
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
                <span className="tag-roast">Обработка ягоды</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--coffee-cream)" }}>
                От ягоды к зерну
              </h3>
              <p className="font-body mb-8" style={{ color: "rgba(245,230,208,0.55)", lineHeight: 1.7 }}>
                Кофейная ягода — это плод, внутри которого находятся два зерна. Способ удаления
                мякоти и ферментации кардинально влияет на вкус в чашке. Мы работаем
                со всеми тремя основными методами обработки.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    tag: "Мытая (Washed)",
                    color: "#4a9eff",
                    icon: "💧",
                    desc: "Мякоть удаляется механически, зёрна ферментируются в воде 24–72 часа, затем промываются и сушатся. Даёт чистый, яркий, кислотный вкус — хорошо передаёт терруар.",
                    examples: "Эфиопия Иргачефф, Кения АА",
                  },
                  {
                    tag: "Натуральная (Natural)",
                    color: "#e8941a",
                    icon: "☀️",
                    desc: "Ягода сушится целиком на солнце 3–6 недель. Мякоть отдаёт зёрнам сахар и фруктовость. Результат — насыщенный, ягодный, винный вкус с плотным телом.",
                    examples: "Эфиопия (натур.), Йемен Мокко",
                  },
                  {
                    tag: "Хани (Honey)",
                    color: "#d4923a",
                    icon: "🍯",
                    desc: "Часть мякоти остаётся на зерне во время сушки. Промежуточный метод: больше сладости и тела, чем у мытой, но чище, чем натуральная. Делится на Yellow, Red и Black honey.",
                    examples: "Гватемала, Коста-Рика",
                  },
                  {
                    tag: "Анаэробная (Anaerobic)",
                    color: "#b06040",
                    icon: "🔬",
                    desc: "Ягоды или зёрна ферментируются в герметичных баках без доступа кислорода. Экспериментальный метод — даёт уникальные, интенсивные, иногда тропические ноты.",
                    examples: "Колумбия, Эфиопия (спешелти)",
                  },
                ].map((p) => (
                  <div
                    key={p.tag}
                    className="rounded-sm p-5 flex gap-4"
                    style={{ background: "rgba(45,26,14,0.6)", border: "1px solid rgba(196,122,43,0.15)" }}
                  >
                    <div className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="font-display text-xs tracking-wider uppercase px-2 py-0.5 rounded-sm"
                          style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}
                        >
                          {p.tag}
                        </span>
                      </div>
                      <p className="font-body text-sm mb-2" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.6 }}>
                        {p.desc}
                      </p>
                      <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.3)" }}>
                        Примеры: {p.examples}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}