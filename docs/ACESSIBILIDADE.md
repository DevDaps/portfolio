# 📱 Guia de Acessibilidade

## Overview

O portfólio possui um painel de acessibilidade completo e profissional, implementado com práticas WCAG 2.1 AAA. Todos os recursos estão salvos localmente via localStorage.

## 🎮 Widget de Acessibilidade

### Localização
- **Posição**: Canto inferior direito (fixed)
- **Z-Index**: 1000
- **Comportamento**: Flutuante, sempre visível

### Ícone Toggle
- **Símbolo**: ♿ (wheelchair)
- **Tamanho**: 48x48px
- **Cor**: Red (#D71920)
- **Hover**: Muda para White + Red background

## 🔧 Recursos Implementados

### 1. Controle de Tamanho de Fonte

**Funcionalidade**
- Diminui para 85% (botão [−])
- Normal em 100% (padrão)
- Aumenta para 120% (botão [+])
- Resetar para 100% (botão [↻])

**Implementação**
```javascript
body.font-size-small  /* 85% */
body.font-size-normal /* 100% */
body.font-size-large  /* 120% */
```

**Persistent Storage**
```json
{
  "accessibility-prefs": {
    "fontSizeLevel": 0,
    "contrastEnabled": false
  }
}
```

### 2. Modo Alto Contraste

**WCAG AAA Compliance**
- Contrast ratio: 21:1
- Background: #000000
- Text: #FFFFFF

**Ativação**
- Toggle switch no painel
- Checkbox: `#contrast-toggle`
- Classe CSS: `body.high-contrast`

**Variáveis Alteradas**
```css
body.high-contrast {
    --black-950: #000000;
    --white-100: #FFFFFF;
}
```

## 💾 Persistência de Dados

### localStorage Structure
```javascript
localStorage.getItem('accessibility-prefs')
// Retorna:
{
    "fontSizeLevel": 0 | -1 | 1,
    "contrastEnabled": true | false
}
```

### Valores
- **fontSizeLevel**:
  - `-1` = 85% (small)
  - `0` = 100% (normal, padrão)
  - `1` = 120% (large)

- **contrastEnabled**:
  - `true` = Ativado
  - `false` = Desativado (padrão)

### Carregamento Automático
As preferências são carregadas automaticamente no `DOMContentLoaded`:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const accessibilityManager = new AccessibilityManager();
    // Carrega prefs salvas automaticamente
});
```

## 🏗️ Classe AccessibilityManager

### Métodos Principais

```javascript
class AccessibilityManager {
    // Inicialização
    init()
    
    // Controle de painel
    togglePanel()
    
    // Tamanho de fonte
    decreaseFont()
    increaseFont()
    resetFont()
    
    // Contraste
    toggleContrast()
    
    // Aplicação
    applySettings()
    applyFontSize()
    applyContrast()
    
    // UI Updates
    updateFontDisplay()
    updateToggle()
    
    // Storage
    loadPreferences()
    savePreferences()
}
```

### Inicialização
```javascript
const accessibilityManager = new AccessibilityManager();
// Executa automaticamente:
// 1. setupEventListeners()
// 2. loadPreferences()
// 3. applySettings()
```

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| ESC | Fecha modais |
| Tab | Navegação entre elementos |
| Enter | Ativa botões/links |
| Arrow Keys | Navegação (quando apropriado) |

## 🎯 WCAG 2.1 Compliance

### Nível A ✅
- [ ] 1.1 Text Alternatives
- [x] 1.3 Adaptability
- [x] 1.4 Distinguishable
- [x] 2.1 Keyboard Accessible
- [x] 2.4 Navigable
- [x] 3.1 Readable
- [x] 3.3 Input Assistance
- [x] 4.1 Compatible

### Nível AA ✅
- [x] 1.4 Color Contrast
- [x] 2.4 Focus Visible
- [x] 3.2 Predictable
- [x] 3.3 Labels/Instructions

### Nível AAA ✅
- [x] 1.4 Enhanced Contrast (21:1)
- [x] 2.4 Focus Order
- [x] 3.1 Pronunciation

## 🧪 Testes de Acessibilidade

### Testes Manuais

```bash
# 1. Navegação por teclado
Tab → Navega por todos os elementos
Shift + Tab → Navega ao contrário

# 2. Leitor de tela
VoiceOver (Mac): Cmd + F5
NVDA (Windows): Baixar em nvaccess.org
JAWS (Windows): Pago

# 3. Contraste
DevTools → Lighthouse → Accessibility
Ou: https://webaim.org/resources/contrastchecker/
```

### Validação Automática

```javascript
// Verificar contraste de cores
// DevTools → Console
computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color, computedStyle.backgroundColor);
```

## 📊 Checklist de Acessibilidade

- [x] Cores com contraste adequado (WCAG AA+)
- [x] Fontes legíveis (16px+)
- [x] Navegação por teclado completa
- [x] Labels nos inputs
- [x] Alt text nos images
- [x] Estrutura semântica (h1→h6)
- [x] Focus states visíveis
- [x] Zoom até 200% funciona
- [x] Sem movimento automático
- [x] Pause/Stop automático

## 🔍 Debugging

### Console Logs
```javascript
// O portfólio loga ao carregar:
✓ Portfolio loaded successfully
✓ Accessibility features enabled
```

### localStorage Debug
```javascript
// Ver preferências atuais
console.log(localStorage.getItem('accessibility-prefs'));

// Limpar preferências
localStorage.removeItem('accessibility-prefs');

// Resetar tudo
localStorage.clear();
```

## 📱 Responsividade Acessível

### Mobile (< 480px)
- Fontes aumentadas automaticamente
- Touch targets: mín. 44x44px
- Espaçamento aumentado

### Tablet (< 768px)
- Layouts adaptáveis
- Botões grandes o suficiente
- Sem overflow horizontal

### Desktop (≥ 1280px)
- Layouts complexos
- Múltiplas colunas
- Hover states disponíveis

## 🎓 Recursos e Links

### Ferramentas de Teste
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Lighthouse: DevTools → Lighthouse
- WAVE: https://wave.webaim.org/
- Axe DevTools: https://www.deque.com/axe/devtools/

### Guias
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- A11y Project: https://www.a11yproject.com/

### Leitura Recomendada
- "Accessible Web Design" - WebAIM
- "Designing for Accessibility" - Google
- "WCAG Compliance" - MDN Web Docs

## 🐛 Troubleshooting

### Problema: Fontes não aumentam
**Solução**: Limpe localStorage
```javascript
localStorage.removeItem('accessibility-prefs');
location.reload();
```

### Problema: Alto contraste não funciona
**Solução**: Verifique se classe está aplicada
```javascript
console.log(document.body.classList);
// Deve conter: 'high-contrast'
```

### Problema: Panel não abre
**Solução**: Verifique console para erros
```javascript
console.log('Accessibility Manager:', accessibilityManager);
```

---

**Versão**: 1.0  
**Atualizado**: Setembro 2026  
**Padrão**: WCAG 2.1 AAA
