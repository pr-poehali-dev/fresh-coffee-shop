import { useState } from "react";
import Icon from "@/components/ui/icon";

type IconName = "MapPin" | "Phone" | "Mail" | "Clock" | "Instagram" | "Send";

export default function ContactsSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const contacts: { icon: IconName; label: string; value: string }[] = [
    { icon: "MapPin", label: "Адрес", value: "Москва, ул. Кузнецкий Мост, 21" },
    { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
    { icon: "Mail", label: "Email", value: "hello@brew-coffee.ru" },
    { icon: "Clock", label: "Режим работы", value: "Пн–Пт 9:00–19:00" },
  ];

  const socials: { icon: IconName; label: string }[] = [
    { icon: "Instagram", label: "@brew.coffee" },
    { icon: "Send", label: "Telegram" },
  ];

  return (
    <section id="contacts" className="py-24" style={{ background: "rgba(45,26,14,0.4)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--coffee-amber)" }} />
              <span className="tag-roast">Свяжитесь с нами</span>
            </div>
            <h2
              className="section-title text-5xl md:text-6xl font-bold mb-8"
              style={{ color: "var(--coffee-cream)" }}
            >
              КОНТАКТЫ
            </h2>
            <p className="font-body mb-10" style={{ color: "rgba(245,230,208,0.55)", lineHeight: 1.7 }}>
              Есть вопросы о кофе, доставке или подписке?
              Напишите нам — ответим в течение нескольких часов.
            </p>

            <div className="flex flex-col gap-6">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(232,148,26,0.12)", border: "1px solid rgba(232,148,26,0.25)" }}
                  >
                    <Icon name={c.icon} size={18} style={{ color: "var(--coffee-amber)" }} />
                  </div>
                  <div>
                    <div className="font-display text-xs tracking-widest uppercase mb-1"
                      style={{ color: "rgba(245,230,208,0.35)" }}>
                      {c.label}
                    </div>
                    <div className="font-body" style={{ color: "var(--coffee-cream)" }}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              {socials.map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm transition-all"
                  style={{
                    background: "rgba(196,122,43,0.08)",
                    border: "1px solid rgba(196,122,43,0.25)",
                    color: "var(--coffee-caramel)",
                  }}
                >
                  <Icon name={s.icon} size={16} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-sm p-8"
            style={{ background: "rgba(26,15,8,0.8)", border: "1px solid rgba(196,122,43,0.2)" }}
          >
            <h3
              className="font-display text-2xl font-semibold mb-6"
              style={{ color: "var(--coffee-cream)" }}
            >
              Написать нам
            </h3>

            <div className="flex flex-col gap-5">
              <div>
                <label className="font-display text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: "rgba(245,230,208,0.4)" }}>
                  Имя
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-sm font-body text-sm outline-none transition-all"
                  style={{
                    background: "rgba(245,230,208,0.05)",
                    border: "1px solid rgba(196,122,43,0.2)",
                    color: "var(--coffee-cream)",
                  }}
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: "rgba(245,230,208,0.4)" }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ivan@email.ru"
                  className="w-full px-4 py-3 rounded-sm font-body text-sm outline-none transition-all"
                  style={{
                    background: "rgba(245,230,208,0.05)",
                    border: "1px solid rgba(196,122,43,0.2)",
                    color: "var(--coffee-cream)",
                  }}
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: "rgba(245,230,208,0.4)" }}>
                  Сообщение
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ваш вопрос..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-sm font-body text-sm outline-none resize-none transition-all"
                  style={{
                    background: "rgba(245,230,208,0.05)",
                    border: "1px solid rgba(196,122,43,0.2)",
                    color: "var(--coffee-cream)",
                  }}
                />
              </div>

              <button className="btn-primary w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2">
                <Icon name="Send" size={16} />
                Отправить сообщение
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
