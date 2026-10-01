# 📁 Guia de Imagens — Seção "IA no Processo"

## Imagens Necessárias

Você precisa adicionar **7 imagens** na pasta `assets/icons/`:

### Estrutura de Pastas
```
D:\portfolio\
└── assets\
    └── icons\
        ├── voce.png              ← Ícone para "Você"
        ├── chatgpt.png           ← Logo/ícone do ChatGPT
        ├── lovable.png           ← Logo/ícone do Lovable
        ├── github.png            ← Logo/ícone do GitHub
        ├── claude.png            ← Logo/ícone do Claude/Anthropic
        └── produto-final.png     ← Ícone para Produto Final
```

---

## Detalhes de Cada Imagem

### 1️⃣ `voce.png`
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Ícone de pessoa/usuário
- **Sugestão**: Ícone de silhueta de pessoa
- **Cores**: Consistente com o tema (cinza ou roxo suave)

### 2️⃣ `chatgpt.png` (usado 2x)
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Logo oficial do ChatGPT/OpenAI
- **Fonte**: OpenAI website
- **Nota**: Usado em 2 etapas (Organização + Estruturação)

### 3️⃣ `lovable.png`
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Logo oficial do Lovable
- **Fonte**: Lovable website
- **Cores**: Manter consistência com branding

### 4️⃣ `github.png`
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Logo oficial do GitHub
- **Fonte**: GitHub website
- **Nota**: Preferir versão em preto/cinza para funcionar com tema

### 5️⃣ `claude.png`
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Logo oficial Claude/Anthropic
- **Fonte**: Anthropic website
- **Cores**: Preferir versão clara (branca) ou cinza

### 6️⃣ `produto-final.png`
- **Tamanho**: 32x32px ou 48x48px
- **Tipo**: Ícone de checkmark, sparkle ou similarmente significativo
- **Sugestão**: ✓ ou ✨ em forma de ícone SVG/PNG
- **Cores**: Verde ou roxo (cor destaque do projeto)

---

## ✅ Recomendações

- **Formato**: PNG com fundo transparente (recomendado)
- **Tamanho**: 32x32px (melhor) ou 48x48px (mais flexível)
- **Qualidade**: Alta resolução (use SVG exportado como PNG se possível)
- **Contraste**: Funcione bem em tema claro E escuro
- **Consistência**: Ícones alinhados visualmente (mesma "espessura" de linha)

---

## 🌙 Nota sobre Temas

As imagens são exibidas com `filter: brightness(1)` no estado normal e `filter: brightness(1.2)` no hover.

Se as imagens tiverem fundo branco, elas funcionarão bem. Se tiverem cores escuras, pode ser necessário ajustar o filtro.

---

## 📥 Onde Encontrar

### Logos Oficiais
- **ChatGPT**: https://openai.com
- **Lovable**: https://lovable.dev
- **GitHub**: https://github.com
- **Claude/Anthropic**: https://anthropic.com

### Ícones
- **Você/Person**: Flaticon, Heroicons, Feather Icons
- **Produto Final**: Flaticon, Heroicons (checkmark ou sparkle)

---

## ⚠️ Importante

Após adicionar as imagens, **não esqueça de fazer commit**:

```powershell
cd D:\portfolio
git add assets/icons/voce.png assets/icons/chatgpt.png assets/icons/lovable.png assets/icons/github.png assets/icons/claude.png assets/icons/produto-final.png
git add index.html style.css
git commit -m "feat: adicionar seção IA no processo com imagens dos ícones"
git push origin main
```

---

## 🎯 Verificação

Após adicionar as imagens:

1. ✅ Todas as 6 imagens estão em `assets/icons/`
2. ✅ Nomes exatamente como listado acima
3. ✅ Formato PNG com transparência
4. ✅ Tamanho 32x32px ou maior
5. ✅ Commit feito com sucesso
6. ✅ Vercel fez o deploy (aguarde 30-60s)
7. ✅ Imagens aparecem corretamente na seção IA

