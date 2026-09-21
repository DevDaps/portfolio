# 🔧 Troubleshooting - Problema de Navegação Entre Cases

## Problema Relatado
Quando você clica em **SoulCode** ou **Petropólis**, as **imagens da Refuturiza** aparecem abaixo do footer.

## Causa Possível
1. **Cache do navegador** armazenando versão antiga dos arquivos
2. **Parâmetros de query** na URL (vindos do formulário) interferndo na navegação
3. **Múltiplas páginas visíveis simultaneamente** (CSS ou JavaScript não removendo corretamente)

---

## ✅ Solução - Passo a Passo

### PASSO 1: Limpar Cache do Navegador

#### Firefox:
1. Pressione **Ctrl + Shift + Delete**
2. Selecione "Todos" em "Intervalo de tempo"
3. Marque "Cache"
4. Clique em "Limpar"
5. Feche e reabra o navegador

#### Chrome / Chromium:
1. Pressione **Ctrl + Shift + Delete**
2. Selecione "Todos os tempos" em "Intervalo de tempo"
3. Marque "Cookies e outros dados de sites" e "Imagens e arquivos em cache"
4. Clique em "Limpar dados"
5. Feche e reabra o navegador

#### Safari:
1. Vá para **Safari → Preferências → Privacidade**
2. Clique em "Gerenciar dados do website"
3. Selecione o domínio `portfolio-dapsux.vercel.app`
4. Clique em "Remover"

---

### PASSO 2: Fazer Deploy dos Arquivos Corrigidos

Os arquivos foram atualizados com melhorias:

**Arquivos a fazer upload/deploy:**
- `index.html` ✅ (sem mudanças críticas)
- `style.css` ✅ (CSS mais robusto com `!important` e `visibility`)
- `script.js` ✅ (navegação melhorada)

**Para fazer deploy no Vercel:**

```bash
git add .
git commit -m "fix: improve page navigation and CSS robustness"
git push origin main
```

---

### PASSO 3: Testar no Navegador

1. Abra: https://portfolio-dapsux.vercel.app/
2. Clique em **SoulCode** na home
   - ✅ Deve mostrar apenas o conteúdo do SoulCode
   - ✅ Título: "SoulCode Academy"
   - ✅ Subtítulo: "LMS Redesign · Mobile First + Gamificação"
   - ✅ Imagens reais dos screens

3. Clique em **← Voltar**
   - ✅ Volta para home

4. Clique em **Refuturiza**
   - ✅ Deve mostrar apenas o conteúdo do Refuturiza
   - ✅ Título: "Refuturiza"
   - ✅ Subtitle: "Redesign da Home + Design System"
   - ✅ Placeholders de telas (sem imagens)

5. Clique em **Petropólis**
   - ✅ Deve mostrar apenas o conteúdo do Petropólis
   - ✅ Título: "Grupo Petropólis"
   - ✅ Subtítulo: "Web Design · Website Corporativo"

---

## 🐛 Debugging - Se o problema persistir

### 1. Verificar Console (F12)
Abra o DevTools:
```
F12 → Console
```

Procure por mensagens como:
```
✅ Navegado para: soulcode
✅ Navegado para: refuturiza
```

Se ver `❌ Página não encontrada`, contate o desenvolvedor.

### 2. Verificar Elementos (F12 → Elements)
Procure pelos IDs:
- `id="home-page"`
- `id="refuturiza-page"`
- `id="soulcode-page"`
- `id="petropolis-page"`

Cada uma deve ter a classe `active` quando visível.

### 3. Usar Arquivo de Debug
Abra o arquivo `debug.html` para testes interativos (veja os arquivos de download).

---

## 📋 Checklist de Verificação

- [ ] Cache do navegador limpo
- [ ] Novos arquivos (index.html, style.css, script.js) fizeram deploy
- [ ] Console do DevTools não mostra erros
- [ ] Clique em cada case mostra conteúdo correto
- [ ] URL está correta: `#soulcode`, `#refuturiza`, `#petropolis`
- [ ] Imagens aparecem normalmente (SoulCode) ou como placeholders (Refuturiza/Petropólis)

---

## ⚠️ Problemas Conhecidos e Soluções

### Imagens Não Carregam
**Solução:** Certifique-se de que os arquivos de imagem estão em:
```
/assets/images/SoulCode/
  - Area logada Carreiras.png
  - Página do Curso.png
  - Página da Aula.png
  - Ranking.png
  - Perfil.png
```

### Formulário Adiciona Parâmetros na URL
**Solução:** Já foi corrigido! O script agora limpa a URL após enviar.

### Duas Páginas Visíveis ao Mesmo Tempo
**Solução:** CSS atualizado com `!important`, `visibility: hidden` e `pointer-events: none`.

---

## 📞 Precisa de Ajuda?

Se o problema persistir após seguir todos os passos:
1. Abra o DevTools (F12)
2. Console
3. Copie as mensagens de erro
4. Compartilhe conosco

**Arquivo de debug:** `debug.html` (veja os downloads)

---

**Última atualização:** 2026-09-21
