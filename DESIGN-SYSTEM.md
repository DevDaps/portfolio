# 🎨 Design System TechNova — Portfólio Douglas Pereira

## Paleta de Cores — Roxo (Purple)

### Cores Principais

**Cores Roxo - Gradação Completa:**
```css
--purple-50:  #F5F3FF    /* Mais claro *)
--purple-100: #EDEBFE
--purple-200: #DDD6FE
--purple-300: #C4B5FD
--purple-400: #A78BFA
--purple-500: #7C3AED   /* Secundária *)
--purple-600: #6D28D9   /* Primária — Botões, Links, Accents *)
--purple-700: #5B21B6
--purple-800: #4C1D95
--purple-900: #380764   /* Mais escuro *)
```

### Cores Semânticas

| Uso | Cor | Código |
|-----|-----|--------|
| **Sucesso** | Verde | #22C55E |
| **Aviso** | Laranja | #F59E0B |
| **Erro** | Vermelho | #EF4444 |
| **Informação** | Azul | #3B82F6 |

---

## Tema Claro (Padrão)

```css
--black-950:  #FFFFFF      /* Background principal *)
--black-900:  #F8FAFC      /* Background secundário *)
--black-800:  #E2E8F0      /* Borders *)
--white-100:  #1E293B      /* Texto primário *)
--gray-400:   #64748B      /* Texto secundário *)
```

---

## Tema Escuro

```css
--black-950:  #0F172A      /* Background principal *)
--black-900:  #1E293B      /* Background secundário *)
--black-800:  #334155      /* Borders *)
--white-100:  #F1F5F9      /* Texto primário *)
--gray-400:   #94A3B8      /* Texto secundário *)
```

---

## Elementos Visuais

### Botões Primários
- **Background:** `var(--purple-600)`
- **Texto:** Branco (`#FFFFFF`)
- **Hover:** `var(--purple-700)`

### Botões Secundários
- **Background:** `var(--black-800)` (com transparência)
- **Texto:** `var(--gray-400)`
- **Hover:** `var(--white-100)`

### Links
- **Cor:** `var(--purple-600)`
- **Hover:** `var(--purple-700)`

### Badges (Hero)
- **Background:** `rgba(109, 40, 217, 0.1)`
- **Border:** `rgba(109, 40, 217, 0.3)`
- **Texto:** `var(--purple-600)`

### Formulários
- **Sucesso:** `#22C55E` (verde)
- **Erro:** `#EF4444` (vermelho)

---

## Tipografia

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **H1** | 48px | 700 | Títulos principais |
| **H2** | 32px | 700 | Títulos seções |
| **H3** | 24px | 600 | Subtítulos |
| **H4** | 20px | 600 | Card titles |
| **Body** | 16px | 400 | Texto principal |
| **Small** | 14px | 400 | Texto secundário |

**Fontes:**
- **Headings:** `Space Grotesk`
- **Body:** `Inter`

---

## Espaçamento

- **Container:** `max-width: 1440px`
- **Padding horizontal:** `32px` (desktop) / `16px` (mobile)
- **Gap entre elementos:** `32px`, `48px`, `64px`, `96px`

---

## Atualizado em**
**Data:** 21 de Setembro de 2026  
**Versão:** 2.0 (TechNova)  
**Cores Anteriores:** Vermelho (#D71920) e Verde (#596B3A)

---

## Como Usar

Todas as cores estão definidas como **CSS custom properties** (variáveis) no `:root`:

```css
/* Use assim */
background: var(--purple-600);
color: var(--white-100);
border: 1px solid var(--black-800);
```

As cores se adaptam automaticamente ao tema claro/escuro via `localStorage`! 🌓
