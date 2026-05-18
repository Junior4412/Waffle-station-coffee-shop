"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SITE_CONFIG } from "@/lib/data";

const GALLERY_ITEMS = [
  { id: 1, icon: "🏡", label: "Interior", category: "ambiente", span: "col-span-2 row-span-2" },
  { id: 2, icon: "🧇", label: "Waffle Nutella", category: "comida", span: "" },
  { id: 3, icon: "☕", label: "Cappuccino", category: "bebida", span: "" },
  { id: 4, icon: "🏠", label: "Área externa", category: "ambiente", span: "" },
  { id: 5, icon: "🍓", label: "Waffle Frutas", category: "comida", span: "" },
  { id: 6, icon: "🧊", label: "Cold Brew", category: "bebida", span: "col-span-2" },
  { id: 7, icon: "✨", label: "Detalhe ambiente", category: "ambiente", span: "" },
  { id: 8, icon: "🍫", label: "Brownie", category: "comida", span: "" },
];

export default function GallerySection() {
  const [filter, setFilter] = useState<string>("todos");

  const categories = ["todos", "ambiente", "comida", "bebida"];

  const filtered = filter === "todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="ambiente"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#0d0905" }}
      aria-label="Galeria e Ambiente"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nosso espaço"
          title="O Ambiente"
          subtitle="Um lugar pensado para te fazer sentir em casa. Cada canto tem sua história."
        />

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  filter === cat
                    ? "bg-gold text-espresso-950"
                    : "bg-dark-card border border-dark-border text-cream-200/60 hover:text-cream-100 hover:border-gold/30"
                }`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`${item.span} rounded-xl overflow-hidden group cursor-pointer relative`}
              >
                <ImagePlaceholder
                  label={item.label}
                  icon={item.icon}
                  className="w-full h-full"
                  aspectRatio=""
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-espresso-950/0 group-hover:bg-espresso-950/40 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <p className="text-cream-100 text-sm font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Social CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-cream-200/50 text-sm mb-4">
              Siga-nos no Instagram para ver mais fotos e novidades
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                aria-label="Seguir no Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @wafflestationmaua
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-card border border-dark-border text-cream-200 hover:border-gold/30 hover:text-gold text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
                aria-label="Seguir no TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
