"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const SUBJECTS = [
  "Reserva de mesa",
  "Encomenda especial",
  "Parcerias e eventos",
  "Dúvida geral",
  "Reclamação / Sugestão",
  "Outro",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Nome é obrigatório";
  if (!data.email.trim()) {
    errors.email = "Email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email inválido";
  }
  if (!data.message.trim()) errors.message = "Mensagem é obrigatória";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-cream-100 text-sm placeholder-cream-200/30 focus:outline-none focus:border-gold/50 transition-colors duration-200";

  const labelClass = "block text-cream-200/70 text-xs font-medium mb-1.5 tracking-wide";

  return (
    <section
      id="contato"
      className="relative py-24 md:py-36 bg-dark-bg overflow-hidden"
      aria-label="Contato"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9954a, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Fale conosco"
          title="Contato"
          subtitle="Reservas, encomendas, eventos ou qualquer dúvida. Estamos aqui para ajudar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Quick contacts */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="left">
              <h3 className="text-cream-100 font-semibold mb-4">Canais de contato rápido</h3>
            </ScrollReveal>

            {[
              {
                icon: "💬",
                label: "WhatsApp",
                desc: "Resposta mais rápida",
                href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
                cta: "Enviar mensagem",
                color: "#25D366",
              },
              {
                icon: "📸",
                label: "Instagram",
                desc: "@wafflestationcoffee",
                href: SITE_CONFIG.instagram,
                cta: "Seguir",
                color: "#E1306C",
              },
              {
                icon: "📞",
                label: "Telefone",
                desc: SITE_CONFIG.phone,
                href: `tel:${SITE_CONFIG.phoneRaw}`,
                cta: "Ligar agora",
                color: "#c9954a",
              },
            ].map((channel, i) => (
              <ScrollReveal key={channel.label} direction="left" delay={i * 0.1}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-card hover:border-gold/20 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${channel.color}20`, border: `1px solid ${channel.color}30` }}
                  >
                    {channel.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-cream-100 font-semibold text-sm">{channel.label}</p>
                    <p className="text-cream-200/50 text-xs truncate">{channel.desc}</p>
                  </div>
                  <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    →
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="p-6 md:p-8 rounded-2xl border border-dark-border bg-dark-card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <CheckCircle size={48} className="text-green-400" />
                    <h3 className="text-cream-100 text-xl font-semibold font-display" style={{ fontFamily: "var(--font-display)" }}>
                      Mensagem enviada!
                    </h3>
                    <p className="text-cream-200/60 text-sm max-w-xs">
                      Obrigado pelo contato. Retornaremos em breve pelo email ou WhatsApp informado.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-4 text-gold text-sm hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Nome *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className={inputClass}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className={inputClass}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className={labelClass}>Telefone</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelClass}>Assunto</label>
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ WebkitAppearance: "none" }}
                        >
                          <option value="">Selecione...</option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className={labelClass}>Mensagem *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Descreva sua dúvida, pedido ou sugestão..."
                        className={`${inputClass} resize-none`}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-espresso-950 font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 hover:shadow-glow-gold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="loading-spinner !w-4 !h-4" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar Mensagem
                        </>
                      )}
                    </button>

                    <p className="text-cream-200/30 text-xs text-center mt-4">
                      Para resposta mais rápida, use nosso WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
