# Componentes das páginas de case

Padrões reutilizáveis das páginas de case (Refuturiza, SoulCode, Grupo Petrópolis).
Estilos em `style.css` (classes `cs-*`) e navegação em `script.js` (`showCaseTab`).

## Jornada em telas (`cs-journey`)

Sequência de 5 etapas com a tela real de cada momento, setas entre os cards e a última etapa destacada em roxo.
Usado em: SoulCode (Experiência · 11) e Refuturiza (Solução · Jornada do usuário).

```html
<p class="cs-label">Título da seção</p>
<div class="cs-journey cs-mt-s">
    <div class="cs-journey-step">
        <img class="cs-shot cs-img-top" src="assets/images/PROJETO/tela.png" alt="Descrição da tela" loading="lazy" onclick="openImageModal(this.src, this.alt)">
        <p class="cs-cell-title cs-mt-s">Etapa</p>
        <p class="cs-small cs-mt-xxs">Descrição curta da etapa.</p>
    </div>
    <!-- repetir até 5 etapas -->
    <div class="cs-journey-step cs-journey-last">
        <!-- com tela: use o <img> acima; sem tela: -->
        <div class="cs-journey-loop" aria-hidden="true">↻</div>
        <p class="cs-cell-title cs-mt-s">Última etapa</p>
        <p class="cs-small cs-mt-xxs">Descrição curta.</p>
    </div>
</div>
```

- Para 4 etapas use `cs-journey cs-journey-4` (usado no Grupo Petrópolis · Interface · 10).
- Desktop: 5 colunas · até 1024px: 3 colunas · até 640px: 1 coluna (setas somem).
- `cs-img-top` ancora telas longas no topo; o clique abre a tela inteira no modal.

## Responsivo (`cs-devices`)

Desenho Mobile → Tablet → Desktop.

```html
<div class="cs-devices">
    <div class="cs-device"><span class="cs-device-frame cs-device-mobile"></span><p>Mobile</p></div>
    <span class="cs-arrow">→</span>
    <div class="cs-device"><span class="cs-device-frame cs-device-tablet"></span><p>Tablet</p></div>
    <span class="cs-arrow">→</span>
    <div class="cs-device"><span class="cs-device-frame cs-device-desktop"></span><p>Desktop</p></div>
</div>
```

Com tela real dentro: adicione `cs-device-shot` ao frame e um `<img src="..." alt="">` dentro dele.
