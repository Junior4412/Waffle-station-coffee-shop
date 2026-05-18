# ☕ Waffle Station Coffee Shop

Site profissional fullstack para a **Waffle Station Coffee Shop** — Mauá, SP.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **TailwindCSS** — estilização utilitária
- **Framer Motion** — animações
- **Lucide React** — ícones

## Seções

- 🏠 **Hero** — Apresentação cinematográfica com animações
- 📖 **Sobre** — História e diferenciais
- 🧇 **Cardápio** — 5 categorias com cards interativos
- ⭐ **Avaliações** — Reviews do Google animados
- 📸 **Ambiente** — Galeria filtrada por categoria
- 🛵 **Delivery** — Integração iFood + WhatsApp
- 📍 **Localização** — Mapa interativo + horários
- 📬 **Contato** — Formulário validado + canais diretos

## Funcionalidades

- ✅ Mobile-first responsivo
- ✅ Scroll reveal animations
- ✅ Navbar dinâmica com blur no scroll
- ✅ Botão flutuante WhatsApp
- ✅ Links Instagram + TikTok
- ✅ Menu com tabs por categoria
- ✅ Formulário de contato validado
- ✅ SEO otimizado (metadata, OG, JSON-LD)
- ✅ Acessibilidade (ARIA, focus-visible, roles)
- ✅ Dark aesthetic premium
- ✅ Fontes Google (Cormorant Garamond + DM Sans)

## Rodando localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## Build para produção

```bash
npm run build
npm start
```

## Deploy na Vercel

### Método 1 — via CLI

```bash
npm i -g vercel
vercel
```

### Método 2 — via GitHub

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em **"Add New Project"**
4. Importe o repositório
5. As configurações são detectadas automaticamente via `vercel.json`
6. Clique em **Deploy** ✅

### Configurações Vercel

O arquivo `vercel.json` já está configurado:
- Framework: Next.js
- Region: `gru1` (São Paulo)
- Build: `npm run build`

## Personalização

### Dados do negócio
Edite `src/lib/data.ts` para atualizar:
- Informações de contato
- Horários de funcionamento
- Itens do cardápio
- Avaliações

### Estilo visual
Edite `tailwind.config.ts` para customizar:
- Paleta de cores (`espresso`, `cream`, `gold`)
- Fontes
- Animações

### Imagens reais
Substitua os `ImagePlaceholder` por componentes `next/image` com imagens reais:

```tsx
import Image from "next/image";

<Image
  src="/images/sua-foto.jpg"
  alt="Descrição"
  fill
  className="object-cover"
/>
```

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Navbar responsiva
│   │   └── Footer.tsx    # Footer completo
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── DeliverySection.tsx
│   │   ├── LocationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── WhatsAppButton.tsx
│       ├── ScrollReveal.tsx
│       ├── SectionHeader.tsx
│       └── ImagePlaceholder.tsx
├── lib/
│   ├── data.ts           # Dados do negócio
│   └── utils.ts          # Utilitários (cn, formatPrice)
└── styles/
    └── globals.css       # Estilos globais + variáveis CSS
```

## Contato do cliente

**Waffle Station Coffee Shop**  
Av. Guilherme Polydoro, 23 - Jardim Zaira, Mauá - SP  
📞 (11) 97061-4479  
💰 Faixa de preço: R$20–R$40

---

Desenvolvido com ❤️ e ☕
