import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import RoastingSection from "@/components/RoastingSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import ContactsSection from "@/components/ContactsSection";
import CartSection from "@/components/CartSection";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  name: string;
  origin: string;
  price: number;
  weight: number;
  qty: number;
}

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [cart, setCart] = useState<CartItem[]>([]);

  const navigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product: { id: number; name: string; origin: string; price: number; weight: number }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const renderSection = () => {
    switch (activeSection) {
      case "catalog":
        return <CatalogSection onAddToCart={addToCart} />;
      case "about":
        return <AboutSection />;
      case "roasting":
        return <RoastingSection />;
      case "subscription":
        return <SubscriptionSection />;
      case "contacts":
        return <ContactsSection />;
      case "cart":
        return (
          <CartSection
            items={cart}
            onUpdateQty={updateQty}
            onRemove={removeItem}
            onNavigate={navigate}
          />
        );
      default:
        return <HeroSection onNavigate={navigate} />;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--coffee-espresso)", color: "var(--coffee-cream)" }}
    >
      <Toaster />
      <Navbar
        activeSection={activeSection}
        onNavigate={navigate}
        cartCount={cartCount}
      />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
