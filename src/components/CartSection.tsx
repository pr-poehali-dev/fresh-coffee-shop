import Icon from "@/components/ui/icon";
import BgBeans from "@/components/BgBeans";

interface CartItem {
  id: number;
  name: string;
  origin: string;
  price: number;
  weight: number;
  qty: number;
}

interface CartSectionProps {
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onNavigate: (section: string) => void;
}

export default function CartSection({ items, onUpdateQty, onRemove, onNavigate }: CartSectionProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const isEmpty = items.length === 0;

  return (
    <section id="cart" className="py-24 min-h-screen" style={{ background: "var(--coffee-espresso)", position: "relative" }}>
      <BgBeans seed={33} count={15} />
      <div className="max-w-4xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
          <span className="tag-roast">Ваш выбор</span>
        </div>
        <h2
          className="section-title text-5xl md:text-6xl font-bold mb-12"
          style={{ color: "var(--coffee-cream)" }}
        >
          КОРЗИНА
        </h2>

        {isEmpty ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">☕</div>
            <h3
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "var(--coffee-cream)" }}
            >
              Корзина пуста
            </h3>
            <p className="font-body mb-8" style={{ color: "rgba(245,230,208,0.45)" }}>
              Добавьте кофе из каталога, чтобы оформить заказ
            </p>
            <button
              onClick={() => onNavigate("catalog")}
              className="btn-primary px-8 py-4 rounded-sm text-sm"
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-sm p-6 flex items-center gap-6"
                  style={{ background: "rgba(45,26,14,0.6)", border: "1px solid rgba(196,122,43,0.15)" }}
                >
                  <div className="flex-1">
                    <h3
                      className="font-display text-lg font-semibold mb-1"
                      style={{ color: "var(--coffee-cream)" }}
                    >
                      {item.name}
                    </h3>
                    <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.4)" }}>
                      {item.origin} · {item.weight}г
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-8 h-8 rounded-sm flex items-center justify-center transition-all"
                      style={{ background: "rgba(196,122,43,0.15)", color: "var(--coffee-caramel)" }}
                    >
                      <Icon name="Minus" size={14} />
                    </button>
                    <span
                      className="font-display text-xl font-bold w-8 text-center"
                      style={{ color: "var(--coffee-cream)" }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-8 h-8 rounded-sm flex items-center justify-center transition-all"
                      style={{ background: "rgba(196,122,43,0.15)", color: "var(--coffee-caramel)" }}
                    >
                      <Icon name="Plus" size={14} />
                    </button>
                  </div>

                  <div className="text-right min-w-[90px]">
                    <div className="font-display text-xl font-bold" style={{ color: "var(--coffee-amber)" }}>
                      {(item.price * item.qty).toLocaleString("ru")} ₽
                    </div>
                    <div className="font-body text-xs" style={{ color: "rgba(245,230,208,0.35)" }}>
                      {item.price} ₽ / шт
                    </div>
                  </div>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="transition-all"
                    style={{ color: "rgba(245,230,208,0.25)" }}
                  >
                    <Icon name="X" size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div
              className="rounded-sm p-6 h-fit"
              style={{ background: "rgba(45,26,14,0.8)", border: "1px solid rgba(196,122,43,0.2)" }}
            >
              <h3 className="font-display text-xl font-semibold mb-6" style={{ color: "var(--coffee-cream)" }}>
                Итого
              </h3>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-body text-sm" style={{ color: "rgba(245,230,208,0.5)" }}>
                    Товары ({items.length})
                  </span>
                  <span className="font-body text-sm" style={{ color: "var(--coffee-cream)" }}>
                    {total.toLocaleString("ru")} ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-sm" style={{ color: "rgba(245,230,208,0.5)" }}>
                    Доставка
                  </span>
                  <span className="font-body text-sm" style={{ color: "var(--coffee-amber)" }}>
                    Бесплатно
                  </span>
                </div>
              </div>

              <div className="divider-coffee mb-6" />

              <div className="flex justify-between mb-6">
                <span className="font-display text-lg font-semibold" style={{ color: "var(--coffee-cream)" }}>
                  К оплате
                </span>
                <span className="font-display text-2xl font-bold" style={{ color: "var(--coffee-amber)" }}>
                  {total.toLocaleString("ru")} ₽
                </span>
              </div>

              <button className="btn-primary w-full py-4 rounded-sm text-sm">
                Оформить заказ
              </button>

              <p className="font-body text-xs text-center mt-4" style={{ color: "rgba(245,230,208,0.3)" }}>
                Доставка 1–3 дня по Москве
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}