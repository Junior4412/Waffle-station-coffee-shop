"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Delivery", href: "#delivery" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dark-bg/95 backdrop-blur-md border-b border-dark-border shadow-lg"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex flex-col leading-none group"
              aria-label="Ir para o início"
            >
              <span
                className="text-xl md:text-2xl font-display font-bold text-cream-100 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Waffle Station
              </span>
              <span
                className="text-xs tracking-[0.25em] text-gold uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Coffee Shop
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-body transition-all duration-300 rounded-md relative group",
                    activeSection === link.href.replace("#", "")
                      ? "text-gold"
                      : "text-cream-200/70 hover:text-cream-100"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.ifood}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-light text-espresso-950 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:shadow-glow-gold"
              >
                <span>🛵</span>
                Pedir Agora
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-cream-200 hover:text-gold transition-colors"
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-dark-bg/98 backdrop-blur-lg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span
                className="text-xl font-display font-bold text-cream-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Waffle Station
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-cream-200 hover:text-gold transition-colors"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-center py-4 text-2xl font-display text-cream-200 hover:text-gold border-b border-dark-border/50 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1, duration: 0.3 }}
                href={SITE_CONFIG.ifood}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-gold text-espresso-950 text-lg font-semibold py-4 rounded-xl transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                <span>🛵</span>
                Pedir pelo iFood
              </motion.a>
            </nav>

            <div className="px-6 pb-8 flex justify-center gap-6">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/60 hover:text-gold transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-dark-border">·</span>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/60 hover:text-gold transition-colors text-sm"
                aria-label="TikTok"
              >
                TikTok
              </a>
              <span className="text-dark-border">·</span>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/60 hover:text-gold transition-colors text-sm"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
