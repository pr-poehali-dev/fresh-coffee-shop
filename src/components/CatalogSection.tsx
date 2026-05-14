import { useState } from "react";
import Icon from "@/components/ui/icon";
import BgBeans from "@/components/BgBeans";

type Category = "beans" | "drip" | "capsules";

interface Product {
  id: number;
  name: string;
  origin: string;
  roast: string;
  notes: string[];
  price: number;
  weight: number;
  badge?: string;
  category: Category;
  unit?: string;
}

const products: Product[] = [
  // Зёрна / молотый
  { id: 1, name: "Эфиопия Иргачефф", origin: "Эфиопия", roast: "Лёгкая", notes: ["Жасмин", "Черника", "Цитрус"], price: 890, weight: 250, badge: "Хит", category: "beans" },
  { id: 2, name: "Колумбия Уила", origin: "Колумбия", roast: "Средняя", notes: ["Карамель", "Орех", "Тёмный шоколад"], price: 750, weight: 250, category: "beans" },
  { id: 3, name: "Бразилия Серрадо", origin: "Бразилия", roast: "Тёмная", notes: ["Шоколад", "Табак", "Ваниль"], price: 680, weight: 250, badge: "Новинка", category: "beans" },
  { id: 4, name: "Кения АА", origin: "Кения", roast: "Средняя", notes: ["Смородина", "Томат", "Красное вино"], price: 980, weight: 250, category: "beans" },
  { id: 5, name: "Гватемала Антигуа", origin: "Гватемала", roast: "Средняя", notes: ["Коричневый сахар", "Цветы", "Специи"], price: 720, weight: 250, category: "beans" },
  { id: 6, name: "Йемен Мокко", origin: "Йемен", roast: "Тёмная", notes: ["Какао", "Сухофрукты", "Земля"], price: 1200, weight: 250, badge: "Редкий", category: "beans" },
  // Дрип-кофе
  { id: 7, name: "Эфиопия Сидама", origin: "Эфиопия", roast: "Лёгкая", notes: ["Персик", "Жасмин", "Мёд"], price: 590, weight: 80, badge: "Дрип", category: "drip", unit: "10 пак." },
  { id: 8, name: "Колумбия Декаф", origin: "Колумбия", roast: "Средняя", notes: ["Карамель", "Миндаль", "Молочный шоколад"], price: 620, weight: 80, category: "drip", unit: "10 пак." },
  { id: 9, name: "Гватемала Blend", origin: "Гватемала", roast: "Средняя", notes: ["Коричневый сахар", "Апельсин", "Орех"], price: 490, weight: 80, badge: "Хит", category: "drip", unit: "10 пак." },
  { id: 10, name: "Бразилия Night", origin: "Бразилия", roast: "Тёмная", notes: ["Тёмный шоколад", "Дым", "Ваниль"], price: 450, weight: 80, category: "drip", unit: "10 пак." },
  // Капсулы
  { id: 11, name: "Espresso Intenso", origin: "Блэнд", roast: "Тёмная", notes: ["Какао", "Горечь", "Специи"], price: 890, weight: 56, badge: "Nespresso", category: "capsules", unit: "8 шт." },
  { id: 12, name: "Lungo Delicato", origin: "Колумбия", roast: "Лёгкая", notes: ["Карамель", "Цитрус", "Мёд"], price: 890, weight: 56, category: "capsules", unit: "8 шт." },
  { id: 13, name: "Ristretto Bold", origin: "Эфиопия + Бразилия", roast: "Средняя", notes: ["Слива", "Шоколад", "Дым"], price: 950, weight: 56, badge: "Новинка", category: "capsules", unit: "8 шт." },
  { id: 14, name: "Decaf Smooth", origin: "Коста-Рика", roast: "Средняя", notes: ["Орех", "Ваниль", "Мягкость"], price: 920, weight: 56, category: "capsules", unit: "8 шт." },
];

const roastColors: Record<string, string> = {
  "Лёгкая": "#e8941a",
  "Средняя": "#c47a2b",
  "Тёмная": "#5c3317",
};

const CATEGORIES: { id: Category | "all"; label: string; icon: string }[] = [
  { id: "all", label: "Все", icon: "🫘" },
  { id: "beans", label: "Зёрна / молотый", icon: "☕" },
  { id: "drip", label: "Дрип-кофе", icon: "🔽" },
  { id: "capsules", label: "Капсулы", icon: "💊" },
];

const ROASTS = ["Все", "Лёгкая", "Средняя", "Тёмная"];

interface CatalogSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [category, setCategory] = useState<Category | "all">("all");
  const [roast, setRoast] = useState("Все");

  const filtered = products.filter((p) => {
    const catMatch = category === "all" || p.category === category;
    const roastMatch = roast === "Все" || p.roast === roast;
    return catMatch && roastMatch;
  });

  return (
    <section id="catalog" className="py-24" style={{ background: "var(--coffee-espresso)", position: "relative" }}>
      <BgBeans seed={42} count={16} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Ассортимент</span>
            </div>
            <h2 className="section-title text-5xl md:text-6xl font-bold" style={{ color: "var(--coffee-cream)" }}>
              КАТАЛОГ
            </h2>
          </div>
          {/* Roast filter */}
          <div className="flex gap-2 flex-wrap">
            {ROASTS.map((r) => (
              <button
                key={r}
                onClick={() => setRoast(r)}
                className="px-4 py-2 rounded-sm font-display text-xs tracking-widest uppercase transition-all"
                style={{
                  background: roast === r ? "var(--coffee-caramel)" : "rgba(196,122,43,0.1)",
                  color: roast === r ? "var(--coffee-espresso)" : "var(--coffee-caramel)",
                  border: "1px solid rgba(196,122,43,0.3)",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-3 flex-wrap mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-sm font-display text-sm tracking-wide uppercase transition-all duration-200"
              style={{
                background: category === c.id
                  ? "linear-gradient(135deg, var(--coffee-amber), var(--coffee-caramel))"
                  : "rgba(196,122,43,0.08)",
                color: category === c.id ? "var(--coffee-espresso)" : "var(--coffee-caramel)",
                border: `1px solid ${category === c.id ? "var(--coffee-amber)" : "rgba(196,122,43,0.2)"}`,
                fontWeight: category === c.id ? 700 : 500,
              }}
            >
              <span>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        <div className="divider-coffee mb-10" />

        {filtered.length === 0 ? (
          <div className="text-center py-16 font-body" style={{ color: "rgba(245,230,208,0.35)" }}>
            Нет товаров с выбранными фильтрами
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="card-coffee rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 animate-slide-up"
                style={{
                  animationDelay: `${i * 0.07}s`,
                  borderColor: "rgba(196,122,43,0.2)",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(196,122,43,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(196,122,43,0.2)")}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1" style={{ color: "var(--coffee-cream)" }}>
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={12} style={{ color: "rgba(245,230,208,0.4)" }} />
                      <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>
                        {product.origin}
                      </span>
                    </div>
                  </div>
                  {product.badge && (
                    <span
                      className="font-display text-xs tracking-widest uppercase px-3 py-1 rounded-sm flex-shrink-0"
                      style={{ background: "rgba(232,148,26,0.2)", color: "var(--coffee-amber)", border: "1px solid rgba(232,148,26,0.4)" }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Roast indicator — только для зёрен и дрипа */}
                {product.category !== "capsules" && (
                  <div className="flex items-center gap-3">
                    <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>Обжарка:</span>
                    <div className="flex gap-1">
                      {["Лёгкая", "Средняя", "Тёмная"].map((r) => (
                        <div
                          key={r}
                          className="h-2 w-6 rounded-full"
                          style={{
                            background: ["Лёгкая", "Средняя", "Тёмная"].indexOf(r) <= ["Лёгкая", "Средняя", "Тёмная"].indexOf(product.roast)
                              ? roastColors[product.roast]
                              : "rgba(196,122,43,0.15)",
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-body text-xs" style={{ color: "var(--coffee-caramel)" }}>{product.roast}</span>
                  </div>
                )}

                {/* Вкусовые ноты */}
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="font-body text-xs px-2 py-1 rounded-sm"
                      style={{ background: "rgba(245,230,208,0.06)", color: "rgba(245,230,208,0.6)", border: "1px solid rgba(245,230,208,0.1)" }}
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Тип упаковки */}
                {product.category !== "beans" && (
                  <div className="flex items-center gap-2">
                    <Icon name={product.category === "drip" ? "Package" : "Circle"} size={13} style={{ color: "rgba(245,230,208,0.3)" }} />
                    <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>
                      {product.category === "drip" ? "Дрип-пакеты" : "Капсулы Nespresso"} · {product.unit}
                    </span>
                  </div>
                )}

                <div className="divider-coffee mt-auto" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-2xl font-bold" style={{ color: "var(--coffee-amber)" }}>
                      {product.price} ₽
                    </span>
                    <span className="font-body text-xs ml-2" style={{ color: "rgba(245,230,208,0.4)" }}>
                      / {product.unit ?? `${product.weight}г`}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn-primary px-4 py-2 rounded-sm text-xs flex items-center gap-2"
                  >
                    <Icon name="Plus" size={14} />
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
