import { SITE_CONFIG } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const FEATURES = [
  {
    icon: "🧇",
    title: "Waffles Artesanais",
    desc: "Massa preparada na hora, ingredientes selecionados e feitos com carinho em cada detalhe.",
  },
  {
    icon: "☕",
    title: "Cafés Especiais",
    desc: "Grãos de origem única, torrefação artesanal e baristas treinados para a extração perfeita.",
  },
  {
    icon: "🏡",
    title: "Ambiente Acolhedor",
    desc: "Um espaço intimista e convidativo onde cada canto foi pensado para o seu conforto.",
  },
  {
    icon: "❤️",
    title: "Feito com Amor",
    desc: "Desde 2018 servindo momentos especiais com dedicação e paixão pela gastronomia.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-36 bg-dark-bg overflow-hidden"
      aria-label="Sobre nós"
    >
      {/* Bg accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9954a, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images mosaic */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-3">
              <ImagePlaceholder
                aspectRatio="aspect-square"
                label="Nossa cafeteria"
                icon="☕"
                className="col-span-1 row-span-1"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Ambiente"
                icon="🏡"
                className="col-span-1"
              />
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Waffles"
                icon="🧇"
                className="col-span-2"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-espresso-950 rounded-2xl p-4 shadow-lg z-10">
                <p className="text-2xl font-display font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  +500
                </p>
                <p className="text-xs font-semibold tracking-wide">Clientes felizes</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Nossa história"
              title="Um refúgio para bons momentos"
              align="left"
            />

            <ScrollReveal delay={0.2}>
              <p className="text-cream-200/70 leading-relaxed mb-6">
                {SITE_CONFIG.description}
              </p>
              <p className="text-cream-200/70 leading-relaxed mb-8">
                Acreditamos que uma boa xícara de café e um waffle artesanal têm o poder
                de transformar qualquer dia. Por isso, cada detalhe do nosso espaço foi
                pensado para que você se sinta em casa — seja para uma pausa no trabalho,
                um encontro com amigos ou um momento a sós.
              </p>
            </ScrollReveal>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={0.1 * (i + 1)}>
                  <div className="p-4 rounded-xl border border-dark-border bg-dark-card/50 hover:border-gold/30 transition-all duration-300 group">
                    <span className="text-2xl mb-2 block" aria-hidden="true">{f.icon}</span>
                    <h3 className="text-cream-100 font-semibold text-sm mb-1 group-hover:text-gold transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-cream-200/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
