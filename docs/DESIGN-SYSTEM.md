# Design System - Industrial Digital

## 📐 Overview

O Design System "Industrial Digital" é um sistema de design profissional e escalável, criado para o portfólio de Douglas Pereira. Combina elementos industriais com uma abordagem moderna e digital.

## 🎨 Paleta de Cores

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Black 950 | #080808 | (8, 8, 8) | Background principal |
| Black 900 | #111111 | (17, 17, 17) | Cards/Superfícies |
| Black 800 | #1A1A1A | (26, 26, 26) | Borders/Dividers |
| Black 700 | #232323 | (35, 35, 35) | Variações |
| White 100 | #F2F2F2 | (242, 242, 242) | Textos principais |
| Gray 400 | #969696 | (150, 150, 150) | Textos secundários |
| Red | #D71920 | (215, 25, 32) | Energia/Ação/Assinatura |
| Moss | #596B3A | (89, 107, 58) | Humano/Orgânico |
| Blue | #2457E6 | (36, 87, 230) | Tecnologia |

### Variações de Cor

#### Red (Assinatura)
- Hover: Passa para White 100
- Focus: Border vermelho
- Disabled: Gray 400

#### Gray 400 (Textos secundários)
- Hover: White 100
- Focus: Red
- Disabled: Black 800

## 🔤 Tipografia

### Famílias de Fontes

**Display & Headings**
- Font: Space Grotesk
- Weights: 400, 500, 600, 700
- Letter-spacing: -0.02em
- Source: Google Fonts

**Body & Interface**
- Font: Inter
- Weights: 400, 500, 600
- Source: Google Fonts

### Escala de Tamanhos

| Classe | Tamanho | Line Height | Uso |
|--------|---------|------------|-----|
| text-xs | 12px | - | Labels, badges |
| text-sm | 14px | - | Small text |
| text-base | 16px | 1.6 | Body text |
| text-lg | 18px | - | Subheadings |
| text-xl | 20px | - | Headings |
| text-2xl | 28px | - | Section titles |
| text-3xl | 36px | 1.2 | Page titles |
| text-4xl | 48px | - | Display (desktop) |
| text-5xl | 64px | 1.1 | Display (hero) |

### Peso das Fontes

- **400 (Regular)**: Textos corpo
- **500 (Medium)**: Ênfase em corpo
- **600 (Semibold)**: Headings
- **700 (Bold)**: Headings grandes

## 📏 Espaçamento

Escala modular baseada em 4px:

| Nome | Valor | Uso |
|------|-------|-----|
| spacing-xs | 4px | Gaps mínimos |
| spacing-sm | 8px | Small gaps |
| spacing-md | 16px | Default |
| spacing-lg | 24px | Large sections |
| spacing-xl | 32px | Component padding |
| spacing-2xl | 48px | Section padding |
| spacing-3xl | 64px | Page padding |

## 🎯 Border Radius

| Classe | Valor | Uso |
|--------|-------|-----|
| radius-sm | 3px | Tags, small elements |
| radius-md | 6px | Buttons |
| radius-lg | 8px | Cards |
| radius-xl | 12px | Large components |

## 🧩 Componentes

### Badges
- Background: Red (#D71920)
- Color: White 100 (#F2F2F2)
- Padding: 4px 16px
- Border Radius: 3px
- Font Size: 12px
- Font Weight: 500

```html
<span class="badge">Product Design</span>
```

### Tags
- Variações: Small (6px), Large (12px)
- Estilos: Filled (Red), Outlined
- Padding: 4px-16px

### Buttons
- Padding: 16px 24px
- Border Radius: 8px
- Font Weight: 600
- Transição: 0.3s ease
- Hover: Inverte cores

### Cards
- Background: Black 900
- Border: 1px solid Black 800
- Border Radius: 12px
- Padding: 24px
- Hover: Border red, shadow, translateY(-8px)

## 🎬 Animações

### Timing
- Duration: 0.3s, 0.5s, 0.8s
- Easing: ease, ease-in, ease-out

### Presets

**fadeIn**
```css
animation: fadeIn 0.3s ease;
```

**slideUp**
```css
animation: slideUp 0.3s ease;
```

**zoomIn**
```css
animation: zoomIn 0.3s ease;
```

**fadeInUp**
```css
animation: fadeInUp 0.8s ease;
```

## ♿ Acessibilidade

### Contrast
- Normal: WCAG AA (4.5:1 minimum)
- High Contrast Mode: WCAG AAA (21:1)

### Cores de Contraste
- Text on backgrounds: Black 950 + White 100 (15:1)
- Text on accents: Red + White 100 (4.5:1)

### Focus States
- Outline: 2px solid Red
- Offset: 2px

## 📱 Breakpoints

```css
/* Mobile First */
@media (max-width: 480px) { }
@media (max-width: 768px) { }
@media (min-width: 1280px) { }
```

## 🔧 Variáveis CSS

Todas as cores, espaçamentos e tamanhos estão definidos como variáveis CSS em `:root`:

```css
:root {
    --black-950: #080808;
    --red: #D71920;
    --spacing-lg: 24px;
    --text-3xl: 36px;
    /* ... */
}
```

## 🎓 Boas Práticas

1. **Use as variáveis CSS**: Nunca hardcode cores ou tamanhos
2. **Siga a escala**: Use apenas valores pré-definidos
3. **Mantenha a consistência**: Use as mesmas estruturas
4. **Teste acessibilidade**: Sempre valide contraste
5. **Mobile first**: Sempre comece pelo mobile

## 📚 Referências

- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- Inter: https://fonts.google.com/specimen/Inter
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Versão**: 1.0  
**Atualizado**: Setembro 2026
