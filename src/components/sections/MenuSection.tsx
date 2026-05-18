"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

function MenuItemCard({
  item,
  index,
}: {
  item: (typeof MENU_CATEGORIES)[0]["items"][0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative group flex items-start gap-4 p-4 rounded-xl border border-dark-border bg-dark-card/60 hover:border-gold/30 hover:bg-dark-card transition-all duration-300 card-hover"
    >
      {/* Color accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-cream-100 font-semibold text-sm leading-tight group-hover:text-gold transition-colors duration-300">
            {item.name}
          </h4>
          {item.badge && (
            <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium bg-gold/15 text-gold border border-gold/20">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-cream-200/50 text-xs leading-relaxed mb-2">{item.description}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-cream-200/30 bg-dark-border/40 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="shrink-0 text-right">
        <p
          className="text-gold font-display font-bold text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {formatPrice(item.price)}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const currentCategory = MENU_CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="cardapio"
      className="relative py-24 md:py-36 bg-dark-surface overflow-hidden"
      aria-label="Cardápio"
      style={{ backgroundColor: "#0d0905" }}
    >
      {/* Bg accent */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9954a, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="O que servimos"
          title="Nosso Cardápio"
          subtitle="Cada item preparado com ingredientes selecionados e muito carinho. Do clássico ao especial."
        />

        {/* Category Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-hide justify-start md:justify-center">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-espresso-950 shadow-glow-gold"
                    : "bg-dark-card border border-dark-border text-cream-200/60 hover:text-cream-100 hover:border-gold/30"
                }`}
                aria-selected={activeCategory === category.id}
                role="tab"
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Category info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-cream-200/40 text-sm italic">
                {currentCategory.description}
              </p>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              {currentCategory.items.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-cream-200/30 text-xs mt-10">
            * Preços sujeitos a alteração sem aviso prévio. Consulte-nos sobre alérgenos e opções sem glúten.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
