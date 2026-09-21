# AUDITORIA DE RESPONSIVIDADE - Portfolio Douglas Pereira

## Breakpoints Definidos

```
- 375px:   iPhone SE / iPhone 12 mini (small mobile)
- 480px:   Larger phones
- 768px:   Tablets
- 1024px:  Large tablets / small desktop
- 1440px:  Desktop
```

## Checklist por Breakpoint (375px - CRÍTICO)

### HERO SECTION
- [ ] Título (hero-title): deve usar `clamp()` responsivo
- [ ] Descrição (hero-description): legível, font-size > 14px
- [ ] Imagem (hero-image): deve ser 100% width ou desaparecer
- [ ] Meta items (hero-meta): flex-direction: column, espaçamento
- [ ] Botão (btn-primary): full-width ou 100% do container

### ESPECIALIDADES SECTION
- [ ] Grid: 1 coluna (4 → 2 → 1)
- [ ] Cards: border-right → border-bottom em mobile
- [ ] Icons: tamanho reduzido em mobile
- [ ] Descrição: texto legível, sem overflow

### TRABALHOS RECENTES (CASES)
- [ ] Grid: 1 coluna em mobile
- [ ] Case card: imagem escala bem
- [ ] Espaçamento: não apertado demais

### CONTATO
- [ ] Título centralizado
- [ ] Form: max-width 100% em mobile
- [ ] Labels: tamanho adequado
- [ ] Inputs: full-width, padding apropriado

### FOOTER
- [ ] Links: stack vertical se necessário
- [ ] Texto: tamanho legível

### GERAL
- [ ] Container padding: 20px em 375px (não 32px)
- [ ] Gaps: reduzir em mobile (32px → 16px)
- [ ] Font sizes: usar clamp() quando possível
- [ ] Images: max-width: 100%, responsive

## Problemas Encontrados (375px)

1. ❌ Especialidades ainda em múltiplas colunas
2. ❌ Container padding muito grande (32px)
3. ❌ Alguns gaps muito grandes para mobile
4. ❌ Hero meta items não estão em coluna

## Fix Priority

1. 🔴 CRÍTICO: Especialidades grid em 375px
2. 🔴 CRÍTICO: Container padding em 375px
3. 🟠 ALTO: Hero layout em 375px
4. 🟠 ALTO: Font sizes responsivas
5. 🟡 MÉDIO: Espaçamento geral
