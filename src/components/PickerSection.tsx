import { useState } from "react";
import Icon from "@/components/ui/icon";
import BgBeans from "@/components/BgBeans";

const METHODS = [
  { id: "espresso", label: "Эспрессо", icon: "☕", hint: "Концентрированный, насыщенный" },
  { id: "pour-over", label: "Пуровер", icon: "🫗", hint: "Фильтр, чистый вкус" },
  { id: "french-press", label: "Френч-пресс", icon: "🧊", hint: "Плотный, с телом" },
  { id: "aeropress", label: "Аэропресс", icon: "💧", hint: "Мягкий, универсальный" },
  { id: "cold-brew", label: "Колд-брю", icon: "🧃", hint: "Холодное заваривание" },
  { id: "turk", label: "Турка", icon: "🔥", hint: "Традиционный, крепкий" },
];

const TASTE_PARAMS = [
  { id: "sweetness", label: "Сладость", low: "Нейтральная", high: "Выраженная" },
  { id: "bitterness", label: "Горечь", low: "Минимальная", high: "Насыщенная" },
  { id: "acidity", label: "Кислотность", low: "Нет совсем", high: "Яркая" },
];

interface Result {
  name: string;
  origin: string;
  roast: string;
  notes: string[];
  why: string;
}

function getRecommendation(method: string, taste: Record<string, number>): Result[] {
  const { sweetness = 2, bitterness = 2, acidity = 2 } = taste;

  const results: Result[] = [];

  // Высокая кислотность → эфиопия, кения
  if (acidity >= 3) {
    results.push({
      name: "Эфиопия Иргачефф",
      origin: "Эфиопия",
      roast: "Лёгкая",
      notes: ["Жасмин", "Черника", "Цитрус"],
      why: "Яркая ягодная кислотность и цветочные ноты — именно то, что вы ищете.",
    });
  }
  if (acidity >= 4) {
    results.push({
      name: "Кения АА",
      origin: "Кения",
      roast: "Средняя",
      notes: ["Смородина", "Томат", "Красное вино"],
      why: "Интенсивная кислотность с фруктовой сложностью — для настоящих ценителей.",
    });
  }

  // Высокая горечь + тёмная → бразилия, йемен
  if (bitterness >= 3) {
    results.push({
      name: "Бразилия Серрадо",
      origin: "Бразилия",
      roast: "Тёмная",
      notes: ["Шоколад", "Табак", "Ваниль"],
      why: "Насыщенная горчинка с шоколадным телом — классика тёмной обжарки.",
    });
  }
  if (bitterness >= 4) {
    results.push({
      name: "Йемен Мокко",
      origin: "Йемен",
      roast: "Тёмная",
      notes: ["Какао", "Сухофрукты", "Земля"],
      why: "Редкий сорт с глубокой горечью и землистой сложностью.",
    });
  }

  // Высокая сладость → колумбия, гватемала
  if (sweetness >= 3) {
    results.push({
      name: "Колумбия Уила",
      origin: "Колумбия",
      roast: "Средняя",
      notes: ["Карамель", "Орех", "Тёмный шоколад"],
      why: "Карамельная сладость и ореховость — сбалансированный выбор на каждый день.",
    });
  }
  if (sweetness >= 4) {
    results.push({
      name: "Гватемала Антигуа",
      origin: "Гватемала",
      roast: "Средняя",
      notes: ["Коричневый сахар", "Цветы", "Специи"],
      why: "Мягкая природная сладость с цветочным послевкусием.",
    });
  }

  // Метод влияет на приоритет
  if (method === "espresso" && bitterness < 3) {
    results.unshift({
      name: "Колумбия Уила",
      origin: "Колумбия",
      roast: "Средняя",
      notes: ["Карамель", "Орех", "Тёмный шоколад"],
      why: "Идеальный баланс для эспрессо — тело, сладость и минимальная горечь.",
    });
  }
  if ((method === "pour-over" || method === "aeropress") && acidity < 3) {
    results.unshift({
      name: "Гватемала Антигуа",
      origin: "Гватемала",
      roast: "Средняя",
      notes: ["Коричневый сахар", "Цветы", "Специи"],
      why: "Мягкая и сладкая — раскрывается в фильтре без лишней кислотности.",
    });
  }
  if (method === "turk" || method === "french-press") {
    results.unshift({
      name: "Бразилия Серрадо",
      origin: "Бразилия",
      roast: "Тёмная",
      notes: ["Шоколад", "Табак", "Ваниль"],
      why: "Плотное тело и шоколадность — лучшее для турки и френч-пресса.",
    });
  }
  if (method === "cold-brew") {
    results.unshift({
      name: "Колумбия Уила",
      origin: "Колумбия",
      roast: "Средняя",
      notes: ["Карамель", "Орех", "Тёмный шоколад"],
      why: "При холодном заваривании карамельные ноты становятся особенно яркими.",
    });
  }

  // Дедупликация по имени
  const seen = new Set<string>();
  const unique = results.filter((r) => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  });

  // Запасной вариант
  if (unique.length === 0) {
    unique.push({
      name: "Колумбия Уила",
      origin: "Колумбия",
      roast: "Средняя",
      notes: ["Карамель", "Орех", "Тёмный шоколад"],
      why: "Универсальный выбор для любого метода и вкусовых предпочтений.",
    });
  }

  return unique.slice(0, 2);
}

export default function PickerSection() {
  const [step, setStep] = useState<"method" | "taste" | "result">("method");
  const [method, setMethod] = useState<string>("");
  const [taste, setTaste] = useState<Record<string, number>>({ sweetness: 2, bitterness: 2, acidity: 2 });

  const results = step === "result" ? getRecommendation(method, taste) : [];

  const reset = () => {
    setStep("method");
    setMethod("");
    setTaste({ sweetness: 2, bitterness: 2, acidity: 2 });
  };

  return (
    <section
      id="picker"
      className="py-24"
      style={{ background: "rgba(30, 14, 6, 0.97)", position: "relative" }}
    >
      <BgBeans seed={66} count={12} />
      <div className="max-w-4xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "var(--coffee-amber)" }} />
            <span className="tag-roast">Персональный подбор</span>
            <div className="h-px w-10" style={{ background: "var(--coffee-amber)" }} />
          </div>
          <h2 className="section-title text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--coffee-cream)" }}>
            ПОМОЩНИК
          </h2>
          <p className="font-body text-lg" style={{ color: "rgba(245,230,208,0.5)", maxWidth: 480, margin: "0 auto" }}>
            Ответьте на два вопроса — подберём зёрна под ваш вкус и способ приготовления
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {["method", "taste", "result"].map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold transition-all"
                style={{
                  background: step === s || (s === "result" && step === "result")
                    ? "var(--coffee-amber)"
                    : step === "taste" && s === "method"
                    ? "var(--coffee-caramel)"
                    : "rgba(196,122,43,0.15)",
                  color: step === s ? "var(--coffee-espresso)" : "rgba(245,230,208,0.4)",
                  border: "1px solid rgba(196,122,43,0.3)",
                }}
              >
                {(step === "taste" && s === "method") || (step === "result" && s !== "result") ? (
                  <Icon name="Check" size={14} style={{ color: "var(--coffee-espresso)" }} />
                ) : (
                  i + 1
                )}
              </div>
              {i < 2 && (
                <div className="w-12 h-px" style={{ background: "rgba(196,122,43,0.2)" }} />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1: Method */}
        {step === "method" && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl font-semibold text-center mb-8" style={{ color: "var(--coffee-cream)" }}>
              Как вы готовите кофе?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {METHODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setMethod(m.id); setStep("taste"); }}
                  className="p-6 rounded-sm text-left transition-all duration-200 group"
                  style={{
                    background: "rgba(45,26,14,0.6)",
                    border: "1px solid rgba(196,122,43,0.2)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.border = "1px solid rgba(196,122,43,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.border = "1px solid rgba(196,122,43,0.2)")}
                >
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <div className="font-display text-lg font-semibold mb-1" style={{ color: "var(--coffee-amber)" }}>
                    {m.label}
                  </div>
                  <div className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>
                    {m.hint}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Taste */}
        {step === "taste" && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl font-semibold text-center mb-10" style={{ color: "var(--coffee-cream)" }}>
              Каким должен быть вкус?
            </h3>
            <div className="flex flex-col gap-10 mb-12">
              {TASTE_PARAMS.map((p) => (
                <div key={p.id}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display text-lg font-semibold" style={{ color: "var(--coffee-amber)" }}>
                      {p.label}
                    </span>
                    <span className="font-display text-sm" style={{ color: "rgba(245,230,208,0.35)" }}>
                      {taste[p.id]}/5
                    </span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.35)" }}>{p.low}</span>
                    <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.35)" }}>{p.high}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <button
                        key={v}
                        onClick={() => setTaste((prev) => ({ ...prev, [p.id]: v }))}
                        className="flex-1 h-10 rounded-sm transition-all duration-150 font-display text-sm font-bold"
                        style={{
                          background: taste[p.id] >= v
                            ? `linear-gradient(135deg, var(--coffee-amber), var(--coffee-caramel))`
                            : "rgba(196,122,43,0.1)",
                          color: taste[p.id] >= v ? "var(--coffee-espresso)" : "rgba(245,230,208,0.3)",
                          border: `1px solid ${taste[p.id] >= v ? "var(--coffee-amber)" : "rgba(196,122,43,0.2)"}`,
                        }}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep("method")}
                className="btn-outline px-6 py-3 rounded-sm text-sm"
              >
                ← Назад
              </button>
              <button
                onClick={() => setStep("result")}
                className="btn-primary flex-1 py-3 rounded-sm text-sm"
              >
                Подобрать кофе →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Result */}
        {step === "result" && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl font-semibold text-center mb-3" style={{ color: "var(--coffee-cream)" }}>
              Ваш идеальный кофе
            </h3>
            <p className="font-body text-sm text-center mb-10" style={{ color: "rgba(245,230,208,0.4)" }}>
              На основе ваших предпочтений мы рекомендуем:
            </p>
            <div className="flex flex-col gap-5 mb-10">
              {results.map((r, i) => (
                <div
                  key={r.name}
                  className="rounded-sm p-7"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, rgba(196,122,43,0.18) 0%, rgba(92,51,23,0.25) 100%)"
                      : "rgba(45,26,14,0.5)",
                    border: `2px solid ${i === 0 ? "var(--coffee-caramel)" : "rgba(196,122,43,0.15)"}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {i === 0 && (
                        <span className="tag-roast text-xs mb-2 inline-block">⭐ Лучший выбор</span>
                      )}
                      <h4 className="font-display text-2xl font-bold mt-1" style={{ color: "var(--coffee-amber)" }}>
                        {r.name}
                      </h4>
                      <p className="font-body text-sm mt-1" style={{ color: "rgba(245,230,208,0.4)" }}>
                        {r.origin} · Обжарка: {r.roast}
                      </p>
                    </div>
                    <Icon name="Coffee" size={32} style={{ color: "rgba(196,122,43,0.25)" }} />
                  </div>
                  <p className="font-body text-sm mb-4" style={{ color: "rgba(245,230,208,0.6)", lineHeight: 1.6 }}>
                    {r.why}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {r.notes.map((n) => (
                      <span
                        key={n}
                        className="font-body text-xs px-3 py-1 rounded-sm"
                        style={{
                          background: "rgba(245,230,208,0.07)",
                          border: "1px solid rgba(245,230,208,0.12)",
                          color: "rgba(245,230,208,0.6)",
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary px-6 py-3 rounded-sm text-xs flex items-center gap-2">
                    <Icon name="ShoppingBag" size={14} />
                    Добавить в корзину
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={reset} className="btn-outline px-8 py-3 rounded-sm text-sm">
                ↺ Начать заново
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
