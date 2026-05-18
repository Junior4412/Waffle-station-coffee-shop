"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const STAGGER_DELAY = 0.15;

function SteamLine({ delay = 0, left = "50%" }: { delay?: number; left?: string }) {
  return (
    <motion.div
      className="absolute bottom-full w-px"
      style={{ left, height: "40px", background: "linear-gradient(to top, rgba(201,149,74,0.4), transparent)" }}
      animate={{
        y: [-40, -80],
        opacity: [0, 0.6, 0],
        scaleX: [1, 1.5, 0.5],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção inicial"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 bg-gradient-radial from-espresso-900/40 via-dark-bg to-dark-bg"
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(45,22,8,0.6) 0%, transparent 70%)" }}
      />
      {/* Atmospheric orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #c9954a, transparent)" }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-8"
        style={{ background: "radial-gradient(circle, #8b5020, transparent)" }}
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: "linear-gradient(rgba(201,149,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,74,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gold opacity-60" />
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-body">
            Mauá · São Paulo
          </p>
          <div className="h-px w-8 bg-gold opacity-60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: STAGGER_DELAY * 2, ease: [0.4, 0, 0.2, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-cream-100">Waffle</span>
          <span className="block text-gold-gradient" style={{
            background: "linear-gradient(135deg, #e0b870, #c9954a, #9d6e2e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Station
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: STAGGER_DELAY * 3 }}
          className="text-lg sm:text-xl md:text-2xl font-display italic text-cream-200/70 mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Coffee Shop
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: STAGGER_DELAY * 4 }}
          className="max-w-lg mx-auto text-cream-200/50 text-sm md:text-base leading-relaxed mt-4 mb-10"
        >
          Waffles artesanais feitos na hora & cafés especiais selecionados.
          Um refúgio acolhedor para os bons momentos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: STAGGER_DELAY * 5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToMenu}
            className="group relative px-8 py-4 bg-gold hover:bg-gold-light text-espresso-950 font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:shadow-glow-gold"
          >
            <span className="relative z-10">Ver Cardápio</span>
            <span className="absolute inset-0 rounded-full bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href={SITE_CONFIG.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-gold/30 text-cream-200 hover:border-gold hover:text-gold text-sm tracking-wide rounded-full transition-all duration-300"
          >
            <span>🛵</span>
            Pedir pelo iFood
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: STAGGER_DELAY * 6 }}
          className="flex items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: "5★", label: "Avaliação Google" },
            { value: "+20", label: "Opções no Cardápio" },
            { value: "2018", label: "Fundada em" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl md:text-3xl font-display font-bold text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-cream-200/40 text-xs tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Decorative coffee cup area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative inline-block"
        >
          <div className="relative w-24 h-24 mx-auto">
            {/* Cup icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl text-center select-none"
              aria-hidden="true"
            >
              ☕
            </motion.div>
            {/* Steam lines */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-full h-16">
              <SteamLine delay={0} left="35%" />
              <SteamLine delay={0.8} left="50%" />
              <SteamLine delay={1.6} left="65%" />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={scrollToAbout}
          className="mt-12 flex flex-col items-center gap-2 text-cream-200/30 hover:text-gold transition-colors duration-300 mx-auto"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Explorar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
