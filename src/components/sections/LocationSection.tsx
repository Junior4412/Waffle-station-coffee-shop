import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/data";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0d0905" }}
      aria-label="Localização"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos encontre"
          title="Localização"
          subtitle="Estamos em Mauá, São Paulo. Venha nos visitar e viva a experiência completa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* Address card */}
            <ScrollReveal direction="left">
              <div className="p-5 rounded-2xl border border-dark-border bg-dark-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold text-sm mb-1">Endereço</h3>
                    <p className="text-cream-200/60 text-sm leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold text-xs mt-2 hover:underline"
                    >
                      <Navigation size={10} />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone card */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="p-5 rounded-2xl border border-dark-border bg-dark-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold text-sm mb-1">Telefone / WhatsApp</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="text-cream-200/60 text-sm hover:text-gold transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-5 rounded-2xl border border-dark-border bg-dark-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cream-100 font-semibold text-sm mb-3">Horário de funcionamento</h3>
                    <ul className="space-y-2">
                      {SITE_CONFIG.hours.map((h) => (
                        <li key={h.day} className="flex justify-between items-center text-sm">
                          <span className="text-cream-200/50">{h.day}</span>
                          <span className="text-cream-100 font-medium">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Directions CTA */}
            <ScrollReveal direction="left" delay={0.3}>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-espresso-950 font-semibold text-sm py-3 rounded-xl transition-all duration-300 hover:shadow-glow-gold"
              >
                <Navigation size={16} />
                Como Chegar
              </a>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-dark-border shadow-card" style={{ height: "480px" }}>
              {/* Fallback/placeholder map with actual address shown */}
              <div className="w-full h-full relative bg-dark-card flex flex-col">
                {/* Map placeholder with styling */}
                <div className="flex-1 relative overflow-hidden">
                  {/* Grid pattern simulating map */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#1a110a",
                      backgroundImage: `
                        linear-gradient(rgba(45,31,20,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(45,31,20,0.8) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Road lines */}
                  <div className="absolute top-1/3 left-0 right-0 h-8 bg-dark-border/60" />
                  <div className="absolute top-0 bottom-0 left-2/5 w-5 bg-dark-border/60" />
                  <div className="absolute top-2/3 left-0 right-0 h-4 bg-dark-border/40" />
                  <div className="absolute top-0 bottom-0 right-1/3 w-3 bg-dark-border/40" />

                  {/* Location pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-glow-gold">
                      <MapPin size={20} className="text-espresso-950" fill="currentColor" />
                    </div>
                    <div className="w-2 h-2 bg-gold rounded-full mt-0.5" />
                  </div>

                  {/* Label */}
                  <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-1/2 mt-6">
                    <div className="bg-dark-bg/90 border border-gold/30 rounded-lg px-3 py-2 mt-8">
                      <p className="text-cream-100 text-xs font-semibold whitespace-nowrap">
                        Waffle Station Coffee Shop
                      </p>
                      <p className="text-cream-200/50 text-[10px] whitespace-nowrap">
                        Av. Guilherme Polydoro, 23
                      </p>
                    </div>
                  </div>

                  {/* Open Maps button overlay */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-dark-bg/90 border border-gold/30 text-gold text-sm px-4 py-2 rounded-full hover:bg-gold/10 transition-all duration-300"
                    >
                      <Navigation size={14} />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
