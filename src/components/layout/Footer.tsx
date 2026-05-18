import { SITE_CONFIG } from "@/lib/data";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2
              className="text-3xl font-display font-bold text-cream-100 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Waffle Station
            </h2>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Coffee Shop
            </p>
            <p className="text-cream-200/60 text-sm leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-200/60 hover:text-gold transition-colors text-sm group"
                aria-label="Seguir no Instagram"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                Instagram
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-200/60 hover:text-gold transition-colors text-sm"
                aria-label="Seguir no TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-cream-100 font-semibold mb-4 text-sm tracking-wider uppercase">
              Informações
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream-200/60">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-200/60">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="hover:text-gold transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-200/60">
                <span className="text-gold text-xs">R$</span>
                <span>Faixa de preço: {SITE_CONFIG.priceRange}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-cream-100 font-semibold mb-4 text-sm tracking-wider uppercase flex items-center gap-2">
              <Clock size={14} className="text-gold" />
              Horários
            </h3>
            <ul className="space-y-2">
              {SITE_CONFIG.hours.map((h) => (
                <li key={h.day} className="text-sm">
                  <span className="text-cream-200/50 block">{h.day}</span>
                  <span className="text-cream-100">{h.time}</span>
                </li>
              ))}
            </ul>

            <a
              href={SITE_CONFIG.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 text-sm px-4 py-2 rounded-full transition-all duration-300"
            >
              🛵 Pedir pelo iFood
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/30">
          <p>
            © {currentYear} Waffle Station Coffee Shop. Todos os direitos reservados.
          </p>
          <p>Mauá, São Paulo — Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}
