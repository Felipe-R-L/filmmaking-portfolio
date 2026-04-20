# Design System Documentation
## Felipe R. Leone - Tech-Noir Cinematográfico

---

## 📐 Filosofia de Design

Este portfólio digital integra **Brutalismo** e **Film Noir Cinematográfico** para criar uma experiência visual de atmosfera dark com uma abordagem técnica e corporativa. O design prioriza:

- **Funcionalismo Brutal**: Estrutura direta e hierarquia clara, sem ornamentos desnecessários
- **Estética Noir**: Granulação de filme, texturas industriais e sombras profundas
- **Precisão Técnica**: Tipografia monospace, elementos de terminal e código
- **Coesão Visual**: Paleta monocromática restrita com acentos estratégicos

---

## 🎨 Paleta de Cores

### Cores Principais

| Nome | Hex | Uso | Contexto |
|------|-----|-----|----------|
| **Void Black** | `#000000` | Background principal | Base estrutural |
| **Deep Coal** | `#0E0E0E` | Backgrounds de cartões/painéis | Camadas de conteúdo |
| **Slate Night** | `#131313` | Backgrounds alternativos | Seções e divisórias |
| **Industrial Grey** | `#1A1A1A` | Módulos de projeto | Cards e containers |
| **Concrete** | `#353534` | Bordas e divisores | Estrutura e separação |
| **Ash Grey** | `#888888` | Texto secundário | Subtítulos e labels |
| **Paper White** | `#E5E2E1` | Texto primário | Headlines e conteúdo principal |

### Cores de Acento

| Nome | Hex | Uso | Propósito |
|------|-----|-----|-----------|
| **Bordeaux Red** | `#B01B2E` | Acento primário | Ação, REC indicators, hovers críticos |
| **Technical Green** | `#B3CDB8` | Acento secundário | Status, confirmação, elementos técnicos |

### Hierarquia de Contraste

```
Background → Foreground
#000000 → #0E0E0E → #131313 → #1A1A1A → #353534 → #888888 → #E5E2E1
   └──────────────── Dark Foundation ────────────────┘     └── Light Text ──┘
```

### Uso de Cores

**Fondos e Estruturas**:
- `#000000`: Background absoluto (body, voids)
- `#0E0E0E`: Painéis de código, formulários
- `#131313`: Seções alternadas (Skills, Contact)
- `#1A1A1A`: Cards de projeto
- `#353534`: Bordas, divisores, elementos desativados

**Tipografia**:
- `#E5E2E1`: Títulos principais, texto ativo
- `#888888`: Subtítulos, descrições, labels
- `#353534`: Texto placeholder, números de linha

**Acentos e Estados**:
- `#B01B2E`: Badges "REC", hovers primários, indicadores de gravação, gradient stops
- `#B3CDB8`: Elementos técnicos, status, hovers secundários
- `#B01B2E` + opacity: Glows e ambient lighting (5-10%)
- `#B3CDB8` + opacity: Subtle highlights (3-5%)

---

## 🔤 Tipografia

### Famílias de Fontes

```css
/* Headlines e Títulos Principais */
font-family: 'Space Grotesk', sans-serif;
/* Uso: Títulos de seção, project titles, CTA buttons */
/* Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold) */

/* Texto de Interface e Identidade */
font-family: 'Inter', sans-serif;
/* Uso: Nome principal (FELIPE R. LEONE), UI text */
/* Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black) */

/* Código e Elementos Técnicos */
font-family: 'Space Mono', monospace;
/* Uso: Terminal headers, labels técnicos, code snippets, badges */
/* Weights: 400 (regular), 700 (bold) */

/* Alternativa Monospace Corporativa */
font-family: 'IBM Plex Mono', monospace;
/* Uso: Timecodes, status messages, navigation hints */
/* Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold) */

/* Subtítulos e Citações */
font-family: 'Noto Serif', serif;
/* Uso: Subtítulos em itálico, descrições editoriais, citações */
/* Weights: 400 (regular), 700 (bold) */
/* Styles: normal, italic */
```

### Hierarquia Tipográfica

#### Hero Section
```css
/* Nome Principal */
h1 {
  font-family: 'Inter';
  font-size: 7xl-9xl; /* 72px-128px */
  font-weight: 900;
  color: #E5E2E1;
  text-shadow: 2px 2px 0 #0a0a0a, 4px 4px 0 #141414;
  tracking: tight;
}

/* Título Profissional */
h2 {
  font-family: 'Space Grotesk';
  font-size: 4xl-6xl; /* 36px-60px */
  font-weight: 700;
  color: #737373;
  tracking: wide;
}

/* Badges de Papel */
span.badge {
  font-family: 'IBM Plex Mono';
  font-size: xs; /* 12px */
  color: #737373;
  letter-spacing: 0.15-0.25em;
}
```

#### Projects Section
```css
/* Project Titles */
h3 {
  font-family: 'Space Grotesk';
  font-size: 4xl-6xl; /* 36px-60px */
  font-weight: 700;
  color: #E5E2E1;
  text-transform: uppercase;
  tracking: tighter;
  line-height: none;
}

/* Subtítulos Editoriais */
p.subtitle {
  font-family: 'Noto Serif';
  font-size: lg-xl; /* 18px-20px */
  font-style: italic;
  color: #888888;
  line-height: relaxed;
}

/* Section Headers */
h2.section-title {
  font-family: 'Space Grotesk';
  font-size: 5xl-8xl; /* 48px-96px */
  font-weight: 700;
  text-transform: uppercase;
  tracking: tighter;
}

/* Scene Labels & Tags */
span.scene {
  font-family: 'Space Mono';
  font-size: 10px-12px;
  letter-spacing: 0.2-0.3em;
  text-transform: uppercase;
}
```

#### Code Terminal
```css
/* Terminal Header */
.terminal-header {
  font-family: 'Space Mono';
  font-size: 10px;
  letter-spacing: widest;
  text-transform: uppercase;
  color: #888888;
}

/* Code Content */
.code-line {
  font-family: 'Space Mono';
  font-size: xs-sm; /* 12px-14px */
  color: #E5E2E1;
  line-height: relaxed;
}
```

#### Skills & Contact
```css
/* Category Titles */
h3.skill-category {
  font-family: 'Space Grotesk';
  font-size: xl-2xl; /* 20px-24px */
  font-weight: 700;
  text-transform: uppercase;
  tracking: tight;
}

/* Skill Items */
span.skill-item {
  font-family: 'Space Mono';
  font-size: xs-sm; /* 12px-14px */
  text-transform: uppercase;
  letter-spacing: wider;
}

/* Form Labels */
label {
  font-family: 'Space Mono';
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
```

### Regras de Tracking (Letter-spacing)

- **Títulos Principais**: `tracking-tighter` / `tracking-tight`
- **Subtítulos**: `tracking-wide`
- **Labels Técnicos**: `tracking-[0.2em]` a `tracking-[0.3em]`
- **Badges e Tags**: `tracking-widest` ou `tracking-[0.15em]`

### Text Shadows e Efeitos

```css
/* Hero Name Shadow */
text-shadow: 2px 2px 0 #0a0a0a, 4px 4px 0 #141414;

/* Subtle Shadow for Depth */
text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
```

---

## 🎞️ Texturas e Efeitos Visuais

### Film Grain Overlay
- **Implementação**: Canvas-based animation com partículas aleatórias
- **Opacity**: `30%`
- **Blend Mode**: `mix-blend-overlay`
- **Z-Index**: `50` (acima de todo conteúdo)
- **Propósito**: Criar textura cinematográfica consistente

```tsx
// Algoritmo de noise
const value = Math.random() * 255;
buffer[i] = (30 << 24) | (value << 16) | (value << 8) | value;
```

### Texturas de Fundo
```css
/* Fractal Noise Pattern */
background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E");
opacity: 0.03;
```

### Grid Pattern (Hero)
```css
background-image: 
  linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
  linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
background-size: 50px 50px;
opacity: 5%;
```

### Vignette Effects
```css
/* Radial Vignette */
background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 100%);

/* Contextual Vignette (Projects) */
background: radial-gradient(circle at center, transparent 40%, rgba(19,19,19,0.9) 100%);
```

### Ambient Glows
```css
/* Bordeaux Glow */
background: #B01B2E;
opacity: 5-10%;
filter: blur(100px-150px);
mix-blend-mode: screen;

/* Technical Green Glow */
background: #B3CDB8;
opacity: 3-5%;
filter: blur(100px-120px);
mix-blend-mode: screen;
```

### Scan Line Effect (Terminal)
```tsx
// Animação de linha de scan contínua
<motion.div
  animate={{ y: ['-10%', '110%'] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
  className="absolute inset-x-0 h-8 bg-linear-to-b from-transparent via-[#B01B2E]/5 to-transparent"
/>
```

---

## 🎬 Partículas e Animações

### Sistema de Partículas
- **Quantidade**: 80 partículas
- **Cores**: `['#353534', '#888888', '#E5E2E1', '#B01B2E']`
- **Tamanho**: 0.5px - 2.5px
- **Opacidade**: 0.2 - 0.7
- **Velocidade**: ±0.25px por frame
- **Conexões**: Linhas entre partículas < 120px de distância
- **Z-Index**: `10`

```tsx
// Algoritmo de conexão
const distance = Math.sqrt(dx * dx + dy * dy);
if (distance < 120) {
  ctx.globalAlpha = (1 - distance / 120) * 0.2;
  ctx.lineWidth = 0.5;
}
```

### Motion Animation Patterns

#### Entry Animations
```tsx
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}

// Fade in from top
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Fade in from side
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}

// Scale + Fade
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

#### Scroll Effects (Parallax)
```tsx
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
```

#### Hover States
```tsx
// Vertical shift
whileHover={{ y: -5 }}

// Horizontal shift
whileHover={{ x: 10 }}

// Scale
whileHover={{ scale: 1.05 }}

// Tap feedback
whileTap={{ scale: 0.95 }}
```

#### Loop Animations
```tsx
// Scroll indicator
animate={{ y: [0, 8, 0] }}
transition={{ duration: 1.5, repeat: Infinity }}

// Pulse
animate={{ opacity: [1, 0] }}
transition={{ duration: 0.5, repeat: Infinity }}
```

#### Stagger Delays
```tsx
// Sequential reveal
transition={{ delay: index * 0.1 }}

// Multi-level stagger
transition={{ delay: index * 0.1 + i * 0.05 }}
```

---

## 📦 Componentes e Módulos

### ProjectCard

**Estrutura**:
- **35mm Film Strip**: Borda lateral decorativa com perfurações
- **REC Badge**: Indicador vermelho posicionado absolutamente
- **Content Module**: Background `#1A1A1A` com padding generoso
- **Tech Specs Panel**: Lista de tecnologias com borda verde
- **Code Terminal**: Visualização de código com typing effect

**Estados**:
- **Hover**: Mudança de background, ambient glow, vertical shift
- **Layout**: Alterna direção em índices pares/ímpares

**Shadow System**:
```css
/* Film strip depth */
shadow-[10px_0_30px_rgba(0,0,0,0.8)]
shadow-[-10px_0_30px_rgba(0,0,0,0.8)]

/* Card depth */
shadow-2xl
```

### CodeTerminal

**Características**:
- **Typing Animation**: Revela linhas sequencialmente (80ms interval)
- **Line Numbers**: Cinza escuro, não selecionáveis
- **Cursor Blink**: Bloco vermelho piscando
- **Scan Line**: Movimento vertical contínuo
- **Header**: Indicadores de status e título

**Box Shadow**:
```css
box-shadow: 
  0 0 40px rgba(176, 27, 46, 0.05), 
  inset 0 0 20px rgba(0, 0, 0, 0.8);
```

### Navigation

**Desktop**:
- Horizontal layout com logo à esquerda
- Links com underline animado em hover
- Background blur quando scrolled

**Mobile**:
- Slide-in menu lateral completo
- Backdrop blur overlay
- Botão hamburger/close toggle

**Scroll Behavior**:
```tsx
scrolled ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800' : ''
```

### Skill Cards

**Grid Layout**: 
- 1 coluna (mobile)
- 2 colunas (tablet)
- 3 colunas (desktop)

**Elementos**:
- Ícone com borda lateral colorida
- Lista de skills com bullets
- Corner accent decorativo
- Ambient glow em hover

### Contact Form

**Design Terminal**:
- Header com status indicators
- Labels uppercase em Space Mono
- Inputs com border-bottom apenas
- Focus state com cor `#B01B2E`
- Submit button com overlay animation

---

## 🎭 Elementos Decorativos

### Film Strip Perforations
```tsx
{[...Array(24)].map((_, i) => (
  <div className="w-4 h-4 bg-[#131313] border-b border-[#353534]/30 shadow-inner" />
))}
```

### Corner Frames
```tsx
<div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-neutral-700"></div>
<div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-neutral-700"></div>
<div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-neutral-700"></div>
<div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-neutral-700"></div>
```

### Section Dividers
```tsx
<div className="w-16 h-px bg-[#B01B2E]"></div>
<div className="w-16 h-px bg-[#B3CDB8]"></div>
```

### Status Indicators
```tsx
/* Recording Dot */
<div className="w-1.5 h-1.5 rounded-none bg-white animate-pulse"></div>

/* REC Badge */
<div className="bg-[#B01B2E] text-white px-5 py-2 border border-[#B01B2E]/50 shadow-[0_0_20px_rgba(176,27,46,0.3)]">
  <span className="w-1.5 h-1.5 rounded-none bg-white animate-pulse"></span>
  REC / {scene}
</div>
```

### Ambient Gradient Lines
```tsx
/* Vertical accent on hover */
<div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-[#B01B2E]/0 via-[#B01B2E]/30 to-[#B01B2E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
```

---

## 🔲 Layout e Espaçamento

### Container Widths
```css
container mx-auto px-6 md:px-12 xl:px-24
max-w-7xl
max-w-6xl
```

### Section Spacing
```css
/* Vertical padding padrão */
py-32

/* Content gaps */
gap-8 md:gap-12 xl:gap-24
gap-16 md:gap-24

/* Component spacing */
mb-24 (Section headers)
mb-12 (Content blocks)
mb-6 (Tight grouping)
```

### Grid Systems
```css
/* Skills Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-8 md:gap-12

/* Contact Grid */
grid md:grid-cols-2
gap-16 md:gap-24

/* Project Code Layout */
grid lg:grid-cols-12
gap-12 lg:gap-8
lg:col-span-5 (Specs)
lg:col-span-7 (Code)
```

### Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Wide**: `xl:` (≥ 1280px)

---

## 🎨 Estados e Interações

### Hover States

**Buttons**:
```css
/* Overlay animation */
.group/btn:hover .overlay {
  transform: translateY(0);
}
transition-transform duration-300 ease-in-out

/* Color shifts */
hover:bg-[#E5E2E1]
hover:text-[#131313]
hover:border-[#B01B2E]
```

**Cards**:
```css
/* Background change */
hover:bg-[#1C1C1C]
transition-colors duration-500

/* Glow intensification */
group-hover:opacity-100
group-hover:bg-[#B01B2E]/10
transition-opacity duration-700

/* Vertical shift */
group-hover:-translate-y-2
transition-transform duration-700
```

**Links & Icons**:
```css
hover:text-[#B01B2E]
hover:text-[#B3CDB8]
hover:text-[#E5E2E1]
transition-colors duration-300
```

### Focus States
```css
focus:outline-none
focus:border-[#B01B2E]
transition-colors
```

### Active States
```css
/* Navigation underline */
.group:hover .underline {
  width: 100%;
}
transition-all duration-300
```

### Transition Durations
- **Fast**: `300ms` (colors, borders)
- **Medium**: `500-700ms` (backgrounds, transforms)
- **Slow**: `1000ms` (ambient effects)

---

## 📝 Convenções de Nomenclatura

### BEM-like Classes (Conceitual)
```
Section → ProjectsSection, SkillsSection, ContactSection
Card → ProjectCard, SkillCard
Terminal → CodeTerminal
Effects → FilmGrain, Particles
Navigation → Navigation
```

### Variant Naming
```
Color intensity: /5, /10, /20, /30, /40, /50
Blur: blur-[100px], blur-[120px], blur-[150px]
Spacing: gap-8, gap-12, gap-16, gap-24
Opacity: opacity-[0.03], opacity-30, opacity-50
```

---

## ⚡ Performance e Otimizações

### Canvas Optimizations
```tsx
// Prevent zero-dimension errors
canvas.width = Math.max(width, 1);
canvas.height = Math.max(height, 1);

// Cleanup
return () => {
  if (animationId) cancelAnimationFrame(animationId);
};
```

### Animation Performance
```tsx
// Use once viewport to prevent re-animations
viewport={{ once: true }}

// Use margin for early triggers
viewport={{ once: true, margin: '-100px' }}
```

### Image Loading
- Uso de `figma:asset` para imports otimizados
- Fallback component para tratamento de erros

---

## 📚 Referências e Inspirações

### Estéticas
- **Film Noir**: Granulação, vignettes, contraste alto
- **Brutalismo Digital**: Tipografia direta, estrutura exposta, grid rígido
- **Terminal/HUD**: Elementos de interface técnica, monospace, status indicators

### Código de Referência
- **35mm Film**: Perfurações laterais, scene markers
- **Editorial Layout**: Offset typography, pull quotes itálicas
- **VHS/CRT**: Scan lines, ambient glows, texture overlay

---

## 🚀 Guidelines de Implementação

### Ao Adicionar Novos Componentes

1. **Seguir a Paleta**: Usar apenas cores documentadas
2. **Manter Tipografia**: Space Grotesk (títulos), Space Mono (técnico), Noto Serif (editorial)
3. **Aplicar Texturas**: Incluir fractal noise em backgrounds
4. **Adicionar Motion**: Entry animations com `whileInView`
5. **Bordas Neutras**: Usar `#353534` para divisores
6. **Glows Sutis**: Bordeaux/verde em 3-10% opacity apenas

### Princípios de Consistência

- **Sem Neon**: Evitar cores saturadas brilhantes (cyan, magenta)
- **Sóbrio e Técnico**: Preferir corporate/industrial a "tech flashy"
- **Monocromático + Acento**: 90% grayscale, 10% bordeaux/verde
- **Typography Hierarchy**: Sempre uppercase em titles, tracking largo em labels
- **Geometric Shapes**: Preferir quadrados/retângulos (`rounded-none`) a círculos

---

## 🎯 Checklist de Qualidade

- [ ] Todas as cores vêm da paleta documentada
- [ ] Tipografia usa apenas as 5 famílias definidas
- [ ] Backgrounds têm textura fractal noise
- [ ] Animações usam `viewport={{ once: true }}`
- [ ] Hover states têm transitions definidas
- [ ] Bordas usam `#353534` ou mais escuro
- [ ] Elementos técnicos usam Space Mono
- [ ] Ambient glows são sutis (< 10% opacity)
- [ ] Layout é responsivo (mobile/tablet/desktop)
- [ ] Z-index está organizado (particles < content < grain)

---

**Última atualização**: Abril 2026  
**Versão**: 1.0  
**Autor**: Felipe R. Leone
