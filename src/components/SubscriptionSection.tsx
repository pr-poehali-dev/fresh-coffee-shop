import { useState } from "react";
import Icon from "@/components/ui/icon";
import BgBeans from "@/components/BgBeans";

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

type FormStep = "plans" | "form" | "success";

export default function SubscriptionSection() {
  const [selectedPlan, setSelectedPlan] = useState("explorer");
  const [selectedTaste, setSelectedTaste] = useState<string[]>([]);
  const [selectedIntensity, setSelectedIntensity] = useState("medium");
  const [formStep, setFormStep] = useState<FormStep>("plans");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", birthday: "" });

  const toggleTaste = (id: string) => {
    setSelectedTaste((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.email) setFormStep("success");
  };

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);

  return (
    <section id="subscription" className="py-24" style={{ background: "rgba(20,10,4,0.98)", position: "relative" }}>
      <BgBeans seed={99} count={20} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* SUCCESS */}
        {formStep === "success" && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-slide-up">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="section-title text-4xl font-bold mb-4" style={{ color: "var(--coffee-amber)" }}>
              Подписка оформлена!
            </h2>
            <p className="font-body text-lg mb-3" style={{ color: "rgba(245,230,208,0.65)", maxWidth: 480 }}>
              Спасибо, {formData.name.split(" ")[0]}! Мы свяжемся с вами в течение 24 часов для подтверждения и выбора первого кофе.
            </p>
            {formData.birthday && (
              <div className="mt-4 px-6 py-4 rounded-sm flex items-center gap-3" style={{ background: "rgba(232,148,26,0.12)", border: "1px solid rgba(232,148,26,0.3)" }}>
                <span className="text-2xl">🎂</span>
                <p className="font-body text-sm" style={{ color: "var(--coffee-amber)" }}>
                  Мы запомнили ваш день рождения — приятный сюрприз вас ждёт!
                </p>
              </div>
            )}
            <button
              onClick={() => { setFormStep("plans"); setFormData({ name: "", phone: "", email: "", address: "", birthday: "" }); }}
              className="btn-outline px-8 py-3 rounded-sm text-sm mt-10"
            >
              Вернуться к подпискам
            </button>
          </div>
        )}

        {/* FORM */}
        {formStep === "form" && (
          <div className="max-w-2xl mx-auto animate-slide-up">
            <button onClick={() => setFormStep("plans")} className="flex items-center gap-2 font-body text-sm mb-8 transition-all" style={{ color: "rgba(245,230,208,0.4)" }}>
              <Icon name="ArrowLeft" size={16} /> Назад к тарифам
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Оформление</span>
            </div>
            <h2 className="section-title text-4xl font-bold mb-6" style={{ color: "var(--coffee-cream)" }}>Ваши данные</h2>

            <div className="rounded-sm px-5 py-4 mb-8 flex items-center justify-between" style={{ background: "rgba(196,122,43,0.12)", border: "1px solid rgba(196,122,43,0.3)" }}>
              <div>
                <span className="font-display text-sm" style={{ color: "rgba(245,230,208,0.5)" }}>Тариф: </span>
                <span className="font-display text-lg font-bold" style={{ color: "var(--coffee-amber)" }}>{selectedPlanData?.name}</span>
              </div>
              <span className="font-display text-xl font-bold" style={{ color: "var(--coffee-cream)" }}>
                {selectedPlanData?.price.toLocaleString("ru")} ₽/мес
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { key: "name", label: "Имя и фамилия *", type: "text", placeholder: "Иван Иванов" },
                { key: "phone", label: "Телефон *", type: "tel", placeholder: "+7 (999) 000-00-00" },
                { key: "email", label: "Email *", type: "email", placeholder: "ivan@email.ru" },
                { key: "address", label: "Адрес доставки", type: "text", placeholder: "Москва, ул. Примерная, д. 1, кв. 10" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="font-display text-xs tracking-widest uppercase mb-2 block" style={{ color: "rgba(245,230,208,0.4)" }}>{f.label}</label>
                  <input
                    type={f.type}
                    value={formData[f.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-sm font-body text-sm outline-none"
                    style={{ background: "rgba(245,230,208,0.05)", border: "1px solid rgba(196,122,43,0.25)", color: "var(--coffee-cream)" }}
                  />
                </div>
              ))}

              {/* Birthday */}
              <div>
                <label className="font-display text-xs tracking-widest uppercase mb-2 block" style={{ color: "rgba(245,230,208,0.4)" }}>Дата рождения</label>
                <input
                  type="date"
                  value={formData.birthday}
                  onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm font-body text-sm outline-none"
                  style={{ background: "rgba(245,230,208,0.05)", border: "1px solid rgba(196,122,43,0.25)", color: "var(--coffee-cream)", colorScheme: "dark" }}
                />
                <div className="mt-3 px-4 py-3 rounded-sm flex items-center gap-3" style={{ background: "rgba(232,148,26,0.08)", border: "1px solid rgba(232,148,26,0.2)" }}>
                  <span className="text-xl">🎂</span>
                  <p className="font-body text-xs" style={{ color: "var(--coffee-amber)", lineHeight: 1.5 }}>
                    В день рождения мы пришлём подарок — бесплатный пакет редкого кофе в дополнение к вашей обычной поставке.
                  </p>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.phone || !formData.email}
                className="btn-primary w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2 mt-2"
                style={{ opacity: (!formData.name || !formData.phone || !formData.email) ? 0.4 : 1, cursor: (!formData.name || !formData.phone || !formData.email) ? "not-allowed" : "pointer" }}
              >
                <Icon name="Check" size={16} />
                Оформить подписку
              </button>
              <p className="font-body text-xs text-center" style={{ color: "rgba(245,230,208,0.3)" }}>
                * — обязательные поля. Подписку можно отменить в любое время.
              </p>
            </div>
          </div>
        )}

        {/* PLANS */}
        {formStep === "plans" && (
          <>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "var(--coffee-amber)" }} />
                <span className="tag-roast">Регулярная доставка</span>
                <div className="h-px w-12" style={{ background: "var(--coffee-amber)" }} />
              </div>
              <h2 className="section-title text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--coffee-cream)" }}>
                ПОДПИСКА
              </h2>
              <p className="font-body text-lg" style={{ color: "rgba(245,230,208,0.55)", maxWidth: "520px", margin: "0 auto" }}>
                Персональные рекомендации на основе вашего вкусового профиля. Свежий кофе приходит автоматически — никаких забот.
              </p>
            </div>

            {/* Taste Quiz */}
            <div className="rounded-sm p-8 mb-12" style={{ background: "rgba(45,26,14,0.5)", border: "1px solid rgba(196,122,43,0.2)" }}>
              <div className="font-display text-lg font-semibold tracking-wider uppercase mb-6 flex items-center gap-3" style={{ color: "var(--coffee-amber)" }}>
                <Icon name="Sparkles" size={18} />
                Ваш вкусовой профиль
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-body text-sm mb-4" style={{ color: "rgba(245,230,208,0.5)" }}>Как чаще всего готовите кофе?</p>
                  <div className="flex flex-wrap gap-3">
                    {tasteQuiz.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => toggleTaste(t.id)}
                        className="flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm transition-all"
                        style={{
                          background: selectedTaste.includes(t.id) ? "rgba(232,148,26,0.25)" : "rgba(245,230,208,0.05)",
                          border: `1px solid ${selectedTaste.includes(t.id) ? "var(--coffee-amber)" : "rgba(245,230,208,0.1)"}`,
                          color: selectedTaste.includes(t.id) ? "var(--coffee-amber)" : "rgba(245,230,208,0.55)",
                        }}
                      >
                        <span>{t.icon}</span>{t.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-sm mb-4" style={{ color: "rgba(245,230,208,0.5)" }}>Предпочтительная насыщенность:</p>
                  <div className="flex gap-3">
                    {intensityOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedIntensity(opt.id)}
                        className="flex-1 py-2 rounded-sm font-display text-xs tracking-wider uppercase transition-all"
                        style={{
                          background: selectedIntensity === opt.id ? "var(--coffee-caramel)" : "rgba(196,122,43,0.08)",
                          color: selectedIntensity === opt.id ? "var(--coffee-espresso)" : "var(--coffee-caramel)",
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
                      background: isSelected ? "linear-gradient(135deg, rgba(196,122,43,0.15) 0%, rgba(92,51,23,0.3) 100%)" : "rgba(45,26,14,0.5)",
                      border: `2px solid ${isSelected ? "var(--coffee-caramel)" : "rgba(196,122,43,0.15)"}`,
                      transform: isSelected ? "translateY(-4px)" : "none",
                      boxShadow: isSelected ? "0 16px 40px rgba(196,122,43,0.2)" : "none",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold" style={{ color: isSelected ? "var(--coffee-amber)" : "var(--coffee-cream)" }}>
                          {plan.name}
                        </h3>
                        <p className="font-body text-xs mt-1" style={{ color: "rgba(245,230,208,0.45)" }}>{plan.desc}</p>
                      </div>
                      {plan.badge && (
                        <span className="tag-roast flex-shrink-0" style={{ background: isSelected ? "rgba(232,148,26,0.3)" : "rgba(196,122,43,0.15)" }}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="mb-6">
                      <span className="font-display text-4xl font-bold" style={{ color: "var(--coffee-amber)" }}>
                        {plan.price.toLocaleString("ru")} ₽
                      </span>
                      <span className="font-body text-sm ml-2" style={{ color: "rgba(245,230,208,0.4)" }}>/ {plan.period}</span>
                    </div>

                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Icon name="Check" size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--coffee-amber)" }} />
                          <span className="font-body text-sm" style={{ color: "rgba(245,230,208,0.65)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan.id); setFormStep("form"); }}
                      className={`w-full py-3 rounded-sm font-display text-sm tracking-wider uppercase transition-all ${isSelected ? "btn-primary" : "btn-outline"}`}
                    >
                      {isSelected ? "Оформить подписку →" : "Выбрать"}
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-center font-body text-xs mt-8" style={{ color: "rgba(245,230,208,0.3)" }}>
              Подписку можно отменить в любое время. Доставка раз в месяц.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
