import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/data";
import { Clock, MapPin, Phone } from "lucide-react";

const DELIVERY_STEPS = [
  {
    step: "01",
    icon: "📱",
    title: "Acesse o iFood",
    desc: "Abra o app ou site do iFood e busque por Waffle Station Coffee Shop",
  },
  {
    step: "02",
    icon: "🧇",
    title: "Monte seu pedido",
    desc: "Escolha seus waffles e bebidas favoritos com todos os complementos",
  },
  {
    step: "03",
    icon: "💳",
    title: "Pague online",
    desc: "Pague com cartão, Pix ou vale refeição diretamente no app",
  },
  {
    step: "04",
    icon: "🛵",
    title: "Receba em casa",
    desc: "Seu pedido chega fresquinho na sua porta em até 40 minutos",
  },
];

export default function DeliverySection() {
  return (
    <section
      id="delivery"
      className="relative py-24 md:py-36 bg-dark-bg overflow-hidden"
      aria-label="Delivery"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, #c9954a 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Peça de onde estiver"
          title="Delivery"
          subtitle="Nossos waffles artesanais chegam até você. Faça seu pedido pelo iFood ou WhatsApp."
        />

        {/* Main delivery card */}
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-3xl border border-dark-border bg-dark-card overflow-hidden mb-12">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* iFood side */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-dark-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#EA1D2C" }}>
                    🛵
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-bold text-xl">iFood</h3>
                    <p className="text-cream-200/50 text-sm">Delivery rápido e seguro</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Rastreamento em tempo real",
                    "Pagamento 100% seguro online",
                    "Entrega em até 40 minutos",
                    "Avalie e ganhe cupons",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-cream-200/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE_CONFIG.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#EA1D2C" }}
                >
                  <span>🛵</span>
                  Pedir no iFood
                </a>
              </div>

              {/* WhatsApp side */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#25D366" }}>
                    💬
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-bold text-xl">WhatsApp</h3>
                    <p className="text-cream-200/50 text-sm">Atendimento personalizado</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Fale direto com a equipe",
                    "Pedidos personalizados e especiais",
                    "Tire todas as suas dúvidas",
                    "Encomendas para eventos",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-cream-200/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Olá!%20Quero%20fazer%20um%20pedido%20para%20delivery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pedir via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_STEPS.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <div className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-dark-card border border-dark-border flex items-center justify-center text-3xl group-hover:border-gold/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-espresso-950 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-cream-100 font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-cream-200/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Delivery info */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-dark-card border border-dark-border">
            <div className="flex items-center gap-2 text-sm text-cream-200/60">
              <Clock size={14} className="text-gold" />
              <span>Entrega em até <strong className="text-cream-100">40 min</strong></span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-dark-border" />
            <div className="flex items-center gap-2 text-sm text-cream-200/60">
              <MapPin size={14} className="text-gold" />
              <span>Raio de <strong className="text-cream-100">5 km</strong> de cobertura</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-dark-border" />
            <div className="flex items-center gap-2 text-sm text-cream-200/60">
              <Phone size={14} className="text-gold" />
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="hover:text-gold transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
