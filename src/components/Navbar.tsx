import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  cartCount: number;
}

export default function Navbar({ activeSection, onNavigate, cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "picker", label: "Подбор" },
    { id: "about", label: "О кофе" },
    { id: "roasting", label: "Обжарка" },
    { id: "processing", label: "Обработка" },
    { id: "terroir", label: "Терруар" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        background: "rgba(26,15,8,0.95)",
        borderBottom: "1px solid rgba(196,122,43,0.2)",
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => handleNav("home")}
          className="font-display text-2xl font-bold tracking-widest text-gradient"
        >
          BREW
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("cart")}
            className="relative p-2 text-[var(--coffee-cream)] hover:text-[var(--coffee-amber)] transition-colors"
          >
            <Icon name="ShoppingBag" size={22} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                style={{ background: "var(--coffee-amber)", color: "var(--coffee-espresso)" }}
              >
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-[var(--coffee-cream)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(196,122,43,0.15)" }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`nav-link text-left ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}