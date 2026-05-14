import BgBeans from "@/components/BgBeans";

const REGIONS = [
  {
    continent: "Африка",
    color: "#e8941a",
    icon: "🌍",
    regions: [
      {
        name: "Эфиопия",
        altitude: "1800–2200 м",
        climate: "Тропический муссонный",
        soil: "Вулканический, богатый минералами",
        profile: "Цветочность, ягоды, цитрус, бергамот",
        desc: "Родина кофе. Невероятное разнообразие вкусов даже внутри одного региона. Иргачефф — эталон лёгких фруктовых профилей.",
      },
      {
        name: "Кения",
        altitude: "1500–2100 м",
        climate: "Умеренный тропический",
        soil: "Красные вулканические (нитосоли)",
        profile: "Смородина, помидор, красное вино, яркая кислотность",
        desc: "Строгая система классификации AA/AB/C. Двойная ферментация даёт характерную сочную кислотность.",
      },
    ],
  },
  {
    continent: "Латинская Америка",
    color: "#4a9eff",
    icon: "🌎",
    regions: [
      {
        name: "Колумбия",
        altitude: "1200–2000 м",
        climate: "Тропический горный",
        soil: "Вулканический пепел, дренированный",
        profile: "Карамель, орех, шоколад, мягкая кислотность",
        desc: "Два урожая в год благодаря уникальному рельефу. Регион Уила даёт одни из лучших specialty-кофе страны.",
      },
      {
        name: "Гватемала",
        altitude: "1300–1800 м",
        climate: "Субтропический горный",
        soil: "Вулканический, богатый фосфором",
        profile: "Коричневый сахар, специи, цветы, молочный шоколад",
        desc: "Регион Антигуа окружён тремя вулканами — почвы богаты минералами. Ночная прохлада замедляет созревание и концентрирует вкус.",
      },
      {
        name: "Бразилия",
        altitude: "800–1200 м",
        climate: "Тропический, сухой сезон",
        soil: "Латеритный, бедный кислотностью",
        profile: "Шоколад, орехи, ваниль, низкая кислотность",
        desc: "Крупнейший производитель мира. Плоский рельеф и механизированный сбор — кофе стабильный, телесный, подходит для эспрессо.",
      },
    ],
  },
  {
    continent: "Азия и Океания",
    color: "#a06020",
    icon: "🌏",
    regions: [
      {
        name: "Йемен",
        altitude: "1500–2500 м",
        climate: "Горный, засушливый",
        soil: "Каменистый, террасированные поля",
        profile: "Какао, сухофрукты, вино, специи, земля",
        desc: "Один из старейших регионов возделывания. Традиционная натуральная обработка тысячелетиями не менялась. Высокая ценность и редкость.",
      },
      {
        name: "Суматра (Индонезия)",
        altitude: "1000–1600 м",
        climate: "Экваториальный, влажный",
        soil: "Вулканический, очень влажный",
        profile: "Земля, кедр, табак, тёмный шоколад, пряности",
        desc: "Уникальный метод wet-hulling (Giling Basah) создаёт фирменный «суматранский» вкус — тяжёлый, землистый, без кислотности.",
      },
    ],
  },
];

const FACTORS = [
  { icon: "⛰️", title: "Высота", desc: "Чем выше — тем прохладнее, медленнее созревание, плотнее зерно и ярче кислотность. Выше 1800 м — specialty-зона." },
  { icon: "🌡️", title: "Климат", desc: "Разница температур ночь/день и наличие чётких сезонов дождей формируют ритм цветения и созревания." },
  { icon: "🪨", title: "Почва", desc: "Вулканические почвы богаты минералами, дают минеральность во вкусе. Дренаж влияет на концентрацию питательных веществ." },
  { icon: "💦", title: "Влажность", desc: "Определяет метод обработки. Влажный климат — мытая обработка, сухой — натуральная." },
  { icon: "🌿", title: "Тень", desc: "Кофе, выращенный в тени деревьев, созревает медленнее и даёт более сложный, многогранный вкус." },
  { icon: "🧬", title: "Сорт", desc: "Bourbon, Typica, Gesha, SL28 — генетика определяет потенциал вкуса. Gesha из Панамы — самый дорогой сорт в мире." },
];

export default function TerroirSection() {
  return (
    <section id="terroir" className="py-24" style={{ background: "rgba(35, 18, 8, 0.98)", position: "relative" }}>
      <BgBeans seed={88} count={13} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Влияние места</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="section-title text-5xl md:text-6xl font-bold" style={{ color: "var(--coffee-cream)" }}>
              ТЕРРУАР
            </h2>
            <p className="font-body text-base md:max-w-sm" style={{ color: "rgba(245,230,208,0.5)", lineHeight: 1.7 }}>
              Место произрастания формирует вкус кофе так же, как и для вина.
              Один сорт зерна, выращенный в разных регионах, даёт совершенно разные вкусы.
            </p>
          </div>
          <div className="divider-coffee mt-8" />
        </div>

        {/* Факторы терруара */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {FACTORS.map((f) => (
            <div
              key={f.title}
              className="rounded-sm p-5"
              style={{ background: "rgba(45,26,14,0.5)", border: "1px solid rgba(196,122,43,0.15)" }}
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-2" style={{ color: "var(--coffee-amber)" }}>
                {f.title}
              </h4>
              <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.55)", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Регионы по континентам */}
        <div className="flex flex-col gap-10">
          {REGIONS.map((continent) => (
            <div key={continent.continent}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{continent.icon}</span>
                <h3
                  className="font-display text-2xl font-bold tracking-wide"
                  style={{ color: continent.color }}
                >
                  {continent.continent}
                </h3>
                <div className="flex-1 h-px" style={{ background: `${continent.color}33` }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {continent.regions.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-sm p-6"
                    style={{
                      background: "rgba(45,26,14,0.5)",
                      border: `1px solid ${continent.color}33`,
                    }}
                  >
                    <h4 className="font-display text-xl font-bold mb-4" style={{ color: "var(--coffee-cream)" }}>
                      {r.name}
                    </h4>
                    <div className="flex flex-col gap-2 mb-4">
                      {[
                        { label: "Высота", val: r.altitude },
                        { label: "Климат", val: r.climate },
                        { label: "Почва", val: r.soil },
                      ].map((d) => (
                        <div key={d.label} className="flex gap-2">
                          <span className="font-body text-xs flex-shrink-0 w-14" style={{ color: "rgba(245,230,208,0.3)" }}>{d.label}</span>
                          <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.6)" }}>{d.val}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="rounded-sm px-3 py-2 mb-4 font-body text-xs"
                      style={{ background: `${continent.color}15`, color: continent.color, border: `1px solid ${continent.color}30` }}
                    >
                      🎵 {r.profile}
                    </div>
                    <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.5)", lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
