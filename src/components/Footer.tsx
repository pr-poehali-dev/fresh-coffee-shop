interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "about", label: "О нас" },
    { id: "roasting", label: "Обжарка" },
    { id: "subscription", label: "Подписка" },
    { id: "contacts", label: "Контакты" },
    { id: "cart", label: "Корзина" },
  ];

  return (
    <footer
      style={{
        background: "rgba(15,8,3,0.99)",
        borderTop: "1px solid rgba(196,122,43,0.15)",
      }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-display text-3xl font-bold tracking-widest text-gradient mb-2">
              BREW
            </div>
            <p className="font-body text-sm" style={{ color: "rgba(245,230,208,0.3)" }}>
              Авторский кофе с доставкой
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-right">
            <p className="font-body text-xs" style={{ color: "rgba(245,230,208,0.25)" }}>
              © 2024 BREW Coffee
            </p>
            <p className="font-body text-xs mt-1" style={{ color: "rgba(245,230,208,0.2)" }}>
              Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}