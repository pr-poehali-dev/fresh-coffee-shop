import { useState } from "react";
import Icon from "@/components/ui/icon";

const plans = [
  {
    id: "starter",
    name: "Старт",
    desc: "Для тех, кто только знакомится с specialty кофе",
    price: 1490,
    period: "месяц",
    features: [
      "1 пакет 250г на выбор команды",
      "Карточка с историей происхождения",
      "Рекомендации по приготовлению",
      "Доступ к онлайн-дегустациям",
    ],
    badge: null,
  },
  {
    id: "explorer",
    name: "Исследователь",
    desc: "Для тех, кто хочет открывать новые вкусы каждый месяц",
    price: 2490,
    period: "месяц",
    features: [
      "2 пакета 250г — куратор подбирает под ваш вкус",
      "Персональный профиль вкуса",
      "Приоритетный доступ к лимитедам",
      "Онлайн-дегустации + записи",
      "Скидка 10% на разовые покупки",
    ],
    badge: "Популярный",
  },
  {
    id: "connoisseur",
    name: "Знаток",
    desc: "Для настоящих ценителей с максимальным погружением",
    price: 4290,
    period: "месяц",
    features: [
      "4 пакета 250г — редкие и лимитированные сорта",
      "Глубокий профиль вкуса + история",
      "Первый доступ ко всем новинкам",
      "Персональные консультации с обжарщиком",
      "Скидка 15% + бесплатная доставка",
      "Именная карточка участника клуба",
    ],
    badge: "Премиум",
  },
];

const tasteQuiz = [
  { id: "espresso", label: "Эспрессо", icon: "☕" },
  { id: "filter", label: "Фильтр", icon: "🫗" },
  { id: "milky", label: "С молоком", icon: "🥛" },
  { id: "cold", label: "Холодный", icon: "🧊" },
];

const intensityOptions = [
  { id: "light", label: "Лёгкий" },
  { id: "medium", label: "Сбалансированный" },
  { id: "bold", label: "Насыщенный" },
];

export default function SubscriptionSection() {
  const [selectedPlan, setSelectedPlan] = useState("explorer");
  const [selectedTaste, setSelectedTaste] = useState<string[]>([]);
  const [selectedIntensity, setSelectedIntensity] = useState("medium");

  const toggleTaste = (id: string) => {
    setSelectedTaste((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="subscription"
      className="py-24"
      style={{ background: "rgba(20,10,4,0.98)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Регулярная доставка</span>
            <div className="h-px w-12" style={{ background: "var(--coffee-amber)" }} />
          </div>
          <h2
            className="section-title text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--coffee-cream)" }}
          >
            ПОДПИСКА
          </h2>
          <p className="font-body text-lg" style={{ color: "rgba(245,230,208,0.55)", maxWidth: "520px", margin: "0 auto" }}>
            Персональные рекомендации на основе вашего вкусового профиля.
            Свежий кофе приходит автоматически — никаких забот.
          </p>
        </div>

        {/* Taste Quiz */}
        <div
          className="rounded-sm p-8 mb-12"
          style={{ background: "rgba(45,26,14,0.5)", border: "1px solid rgba(196,122,43,0.2)" }}
        >
          <div className="font-display text-lg font-semibold tracking-wider uppercase mb-6 flex items-center gap-3"
            style={{ color: "var(--coffee-amber)" }}>
            <Icon name="Sparkles" size={18} />
            Ваш вкусовой профиль
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-body text-sm mb-4" style={{ color: "rgba(245,230,208,0.5)" }}>
                Как чаще всего готовите кофе?
              </p>
              <div className="flex flex-wrap gap-3">
                {tasteQuiz.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => toggleTaste(t.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm transition-all"
                    style={{
                      background: selectedTaste.includes(t.id)
                        ? "rgba(232,148,26,0.25)"
                        : "rgba(245,230,208,0.05)",
                      border: `1px solid ${selectedTaste.includes(t.id) ? "var(--coffee-amber)" : "rgba(245,230,208,0.1)"}`,
                      color: selectedTaste.includes(t.id) ? "var(--coffee-amber)" : "rgba(245,230,208,0.55)",
                    }}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-sm mb-4" style={{ color: "rgba(245,230,208,0.5)" }}>
                Предпочтительная насыщенность:
              </p>
              <div className="flex gap-3">
                {intensityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedIntensity(opt.id)}
                    className="flex-1 py-2 rounded-sm font-display text-xs tracking-wider uppercase transition-all"
                    style={{
                      background: selectedIntensity === opt.id
                        ? "var(--coffee-caramel)"
                        : "rgba(196,122,43,0.08)",
                      color: selectedIntensity === opt.id
                        ? "var(--coffee-espresso)"
                        : "var(--coffee-caramel)",
                      border: "1px solid rgba(196,122,43,0.3)",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className="rounded-sm p-7 cursor-pointer transition-all duration-300 flex flex-col"
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(196,122,43,0.15) 0%, rgba(92,51,23,0.3) 100%)"
                    : "rgba(45,26,14,0.5)",
                  border: `2px solid ${isSelected ? "var(--coffee-caramel)" : "rgba(196,122,43,0.15)"}`,
                  transform: isSelected ? "translateY(-4px)" : "none",
                  boxShadow: isSelected ? "0 16px 40px rgba(196,122,43,0.2)" : "none",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="font-display text-2xl font-bold"
                      style={{ color: isSelected ? "var(--coffee-amber)" : "var(--coffee-cream)" }}
                    >
                      {plan.name}
                    </h3>
                    <p className="font-body text-xs mt-1" style={{ color: "rgba(245,230,208,0.45)" }}>
                      {plan.desc}
                    </p>
                  </div>
                  {plan.badge && (
                    <span
                      className="tag-roast flex-shrink-0"
                      style={{
                        background: isSelected ? "rgba(232,148,26,0.3)" : "rgba(196,122,43,0.15)",
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <span
                    className="font-display text-4xl font-bold"
                    style={{ color: "var(--coffee-amber)" }}
                  >
                    {plan.price.toLocaleString("ru")} ₽
                  </span>
                  <span className="font-body text-sm ml-2" style={{ color: "rgba(245,230,208,0.4)" }}>
                    / {plan.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--coffee-amber)" }}
                      />
                      <span className="font-body text-sm" style={{ color: "rgba(245,230,208,0.65)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-sm font-display text-sm tracking-wider uppercase transition-all ${
                    isSelected ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {isSelected ? "Оформить подписку" : "Выбрать"}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center font-body text-xs mt-8" style={{ color: "rgba(245,230,208,0.3)" }}>
          Подписку можно отменить в любое время. Доставка раз в месяц.
        </p>
      </div>
    </section>
  );
}
