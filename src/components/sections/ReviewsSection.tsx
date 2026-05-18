"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "text-gold fill-gold" : "text-cream-200/20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl border border-dark-border bg-dark-card hover:border-gold/20 transition-all duration-300 flex flex-col gap-4 group"
    >
      {/* Quote mark */}
      <div
        className="absolute top-4 right-6 text-5xl text-gold/10 font-display leading-none select-none"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Top row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
          <span className="text-gold font-bold text-sm" aria-hidden="true">
            {review.avatar}
          </span>
        </div>
        <div>
          <p className="text-cream-100 font-semibold text-sm">{review.name}</p>
          <p className="text-cream-200/40 text-xs">{review.date}</p>
        </div>
        <div className="ml-auto">
          <StarRating rating={review.rating} />
        </div>
      </div>

      {/* Highlight badge */}
      {review.highlight && (
        <div className="inline-flex">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
            {review.highlight}
          </span>
        </div>
      )}

      {/* Review text */}
      <p className="text-cream-200/60 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Google attribution */}
      <div className="flex items-center gap-1.5 mt-auto">
        <svg viewBox="0 0 24 24" width="12" height="12" className="opacity-50">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-cream-200/30 text-xs">Google Reviews</span>
      </div>
    </motion.div>
  );
}

// Marquee ticker of aggregate rating
function RatingBanner() {
  const stars = "★★★★★";
  const text = `${stars} 5.0 · +200 avaliações no Google · ${stars} Waffles incríveis · ${stars} Ambiente aconchegante · ${stars} Atendimento nota 10 · `;
  const repeated = text.repeat(4);

  return (
    <div className="overflow-hidden border-y border-dark-border bg-dark-card/40 py-3 my-16" aria-hidden="true">
      <div className="animate-marquee whitespace-nowrap text-xs tracking-widest text-gold/60 uppercase">
        {repeated}
        {repeated}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 md:py-36 bg-dark-bg overflow-hidden"
      aria-label="Avaliações"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="O que dizem sobre nós"
          title="Avaliações"
          subtitle="Mais de 200 avaliações 5 estrelas no Google. Veja o que nossos clientes têm a dizer."
        />

        {/* Average rating */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" aria-hidden="true" />
              ))}
            </div>
            <p
              className="text-5xl font-display font-bold text-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5.0
            </p>
            <div className="text-left">
              <p className="text-cream-100 text-sm font-semibold">Excelente</p>
              <p className="text-cream-200/50 text-xs">+200 avaliações</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        <RatingBanner />

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <a
              href="https://g.page/r/wafflestation/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/30 text-gold hover:bg-gold/10 text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              Deixar uma avaliação no Google →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
