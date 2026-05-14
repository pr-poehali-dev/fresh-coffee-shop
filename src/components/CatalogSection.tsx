import { useState } from "react";
import Icon from "@/components/ui/icon";
import BgBeans from "@/components/BgBeans";

interface Product {
  id: number;
  name: string;
  origin: string;
  roast: string;
  notes: string[];
  price: number;
  weight: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Эфиопия Иргачефф",
    origin: "Эфиопия",
    roast: "Лёгкая",
    notes: ["Жасмин", "Черника", "Цитрус"],
    price: 890,
    weight: 250,
    badge: "Хит",
  },
  {
    id: 2,
    name: "Колумбия Уила",
    origin: "Колумбия",
    roast: "Средняя",
    notes: ["Карамель", "Орех", "Тёмный шоколад"],
    price: 750,
    weight: 250,
  },
  {
    id: 3,
    name: "Бразилия Серрадо",
    origin: "Бразилия",
    roast: "Тёмная",
    notes: ["Шоколад", "Табак", "Ваниль"],
    price: 680,
    weight: 250,
    badge: "Новинка",
  },
  {
    id: 4,
    name: "Кения АА",
    origin: "Кения",
    roast: "Средняя",
    notes: ["Смородина", "Томат", "Красное вино"],
    price: 980,
    weight: 250,
  },
  {
    id: 5,
    name: "Гватемала Антигуа",
    origin: "Гватемала",
    roast: "Средняя",
    notes: ["Коричневый сахар", "Цветы", "Специи"],
    price: 720,
    weight: 250,
  },
  {
    id: 6,
    name: "Йемен Мокко",
    origin: "Йемен",
    roast: "Тёмная",
    notes: ["Какао", "Сухофрукты", "Земля"],
    price: 1200,
    weight: 250,
    badge: "Редкий",
  },
];

const roastColors: Record<string, string> = {
  "Лёгкая": "#e8941a",
  "Средняя": "#c47a2b",
  "Тёмная": "#5c3317",
};

interface CatalogSectionProps {
  onAddToCart: (product: Product) => void;
}

export default function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [filter, setFilter] = useState("Все");
  const roasts = ["Все", "Лёгкая", "Средняя", "Тёмная"];

  const filtered = filter === "Все" ? products : products.filter((p) => p.roast === filter);

  return (
    <section id="catalog" className="py-24" style={{ background: "var(--coffee-espresso)", position: "relative" }}>
      <BgBeans seed={42} count={16} />
      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Ассортимент</span>
            </div>
            <h2
              className="section-title text-5xl md:text-6xl font-bold"
              style={{ color: "var(--coffee-cream)" }}
            >
              КАТАЛОГ
            </h2>
          </div>

          <div className="flex gap-2">
            {roasts.map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className="px-4 py-2 rounded-sm font-display text-xs tracking-widest uppercase transition-all"
                style={{
                  background: filter === r ? "var(--coffee-caramel)" : "rgba(196,122,43,0.1)",
                  color: filter === r ? "var(--coffee-espresso)" : "var(--coffee-caramel)",
                  border: "1px solid rgba(196,122,43,0.3)",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="divider-coffee mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="card-coffee rounded-sm p-6 flex flex-col gap-4 group hover:border-[rgba(196,122,43,0.5)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="font-display text-xl font-semibold mb-1"
                    style={{ color: "var(--coffee-cream)" }}
                  >
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
                    className="font-display text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(232,148,26,0.2)",
                      color: "var(--coffee-amber)",
                      border: "1px solid rgba(232,148,26,0.4)",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Roast indicator */}
              <div className="flex items-center gap-3">
                <span className="font-body text-xs" style={{ color: "rgba(245,230,208,0.4)" }}>
                  Обжарка:
                </span>
                <div className="flex gap-1">
                  {["Лёгкая", "Средняя", "Тёмная"].map((r) => (
                    <div
                      key={r}
                      className="h-2 w-6 rounded-full transition-all"
                      style={{
                        background:
                          ["Лёгкая", "Средняя", "Тёмная"].indexOf(r) <=
                          ["Лёгкая", "Средняя", "Тёмная"].indexOf(product.roast)
                            ? roastColors[product.roast]
                            : "rgba(196,122,43,0.15)",
                      }}
                    />
                  ))}
                </div>
                <span className="font-body text-xs" style={{ color: "var(--coffee-caramel)" }}>
                  {product.roast}
                </span>
              </div>

              {/* Tasting notes */}
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="font-body text-xs px-2 py-1 rounded-sm"
                    style={{
                      background: "rgba(245,230,208,0.06)",
                      color: "rgba(245,230,208,0.6)",
                      border: "1px solid rgba(245,230,208,0.1)",
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="divider-coffee mt-auto" />

              <div className="flex items-center justify-between">
                <div>
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: "var(--coffee-amber)" }}
                  >
                    {product.price} ₽
                  </span>
                  <span className="font-body text-xs ml-2" style={{ color: "rgba(245,230,208,0.4)" }}>
                    / {product.weight}г
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
      </div>
    </section>
  );
}