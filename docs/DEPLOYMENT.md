# 🚀 Guia de Deployment

## Opções de Deployment

### 1. GitHub Pages ⭐ (Gratuito)

**Pré-requisitos**
- Repositório GitHub público
- Branch main com arquivos

**Configuração (5 minutos)**

1. Vá para: `https://github.com/DevDaps/portfolio/settings/pages`
2. Source: Selecione `main` branch
3. Clique Save
4. Aguarde a build (2-5 minutos)
5. Site disponível em: `https://devdaps.github.io/portfolio`

**Pros**
- Totalmente gratuito
- Integrado com GitHub
- HTTPS automático
- Sem limite de bandwidth

**Contras**
- Sem CDN global
- Build um pouco mais lenta
- Customização limitada

**Arquivo de Configuração**
Nenhum necessário! GitHub Pages detecta automaticamente.

---

### 2. Vercel 🚀 (Recomendado)

**Pré-requisitos**
- Conta Vercel (grátis)
- Repositório GitHub conectado

**Configuração (2 minutos)**

1. Vá para: https://vercel.com
2. Clique "Import Project"
3. Selecione GitHub → seu repo
4. Deixe as configurações padrão
5. Clique "Deploy"
6. Pronto! Site em: `https://seu-portfolio.vercel.app`

**Configuração Automática**
Já incluído: `vercel.json`

```json
{
  "buildCommand": "echo 'Static build'",
  "outputDirectory": ".",
  "framework": "static"
}
```

**Pros**
- CDN global super rápido
- Deploys instantâneos
- Preview URLs automáticas
- Analytics integrado
- Edge Functions (avançado)

**Contras**
- Requer conta
- Algumas features premium

**Deployment Automático**
Qualquer push para `main` faz deploy automático!

---

### 3. Netlify 🎯

**Pré-requisitos**
- Conta Netlify (grátis)
- Repositório GitHub conectado

**Configuração (2 minutos)**

1. Vá para: https://netlify.com
2. Clique "Connect GitHub"
3. Autorize o acesso
4. Selecione seu repositório
5. Deixe as configurações padrão
6. Clique "Deploy"
7. Pronto! Site em: `https://seu-portfolio.netlify.app`

**Configuração Automática**
Já incluído: `netlify.toml`

```toml
[build]
  publish = "."
  command = "echo 'Building...'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Pros**
- Muito fácil de usar
- Bom painel de controle
- Formulários integrados
- Analytics
- Função lambda (avançado)

**Contras**
- Limite de bandwidth no plano free
- CDN menos rápido que Vercel

**Deployment Automático**
Qualquer push para `main` faz deploy automático!

---

### 4. GitHub Actions (Avançado)

Para CI/CD adicional:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Pages
        run: echo "Deployed!"
```

---

## Comparação Rápida

| Plataforma | Preço | Velocidade | CDN | Setup |
|------------|-------|------------|-----|-------|
| GitHub Pages | Grátis | Bom | Não | 5 min |
| Vercel | Grátis | Excelente | Sim | 2 min |
| Netlify | Grátis | Ótimo | Sim | 2 min |
| AWS S3 | Pago | Excelente | Sim | 30 min |
| Heroku | Pago | Bom | Sim | 10 min |

## 🎯 Recomendação

**Use Vercel** por:
- ⚡ Mais rápido
- 🚀 Melhor performance
- 🌍 CDN global
- 📈 Analytics grátis
- 🔄 Deploys instantâneos

---

## Pré-Deploy Checklist

Antes de fazer deploy, verifique:

- [ ] `index.html` tem estrutura correta
- [ ] `css/styles.css` está carregando
- [ ] `js/script.js` está carregando
- [ ] Imagens têm caminho relativo (`/assets/`)
- [ ] Links funcionam (teste local)
- [ ] Responsividade OK (teste mobile)
- [ ] Acessibilidade OK (teste alto contraste)
- [ ] Performance OK (sem erros console)

**Teste Local**
```bash
python -m http.server 8000
# Visite: http://localhost:8000
```

---

## Domínio Customizado

### GitHub Pages
```
Settings → Pages → Custom domain
```

### Vercel
```
Project Settings → Domains → Add Domain
```

### Netlify
```
Site settings → Domain Management → Add Custom Domain
```

---

## HTTPS/SSL

**Todos os serviços fornecem HTTPS grátis automaticamente!**

- GitHub Pages: ✅ Automático
- Vercel: ✅ Automático
- Netlify: ✅ Automático

---

## Performance

### Lighthouse Score

**Local Test**
```bash
# Chrome DevTools → Lighthouse
# Expect: 90+ score
```

**Métricas**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## Debugging

### GitHub Pages
1. Vá para: Settings → Pages
2. Veja o status do build
3. Clique em "View deployment"

### Vercel
1. Dashboard → seu projeto
2. Deployments tab
3. Clique no deploy para logs

### Netlify
1. Deploy logs → clique no deploy
2. Veja o build log completo
3. Procure por erros

---

## Troubleshooting

### Erro: 404 ao recarregar página

**Solução**: Configurar SPA redirects

Já está configurado em `vercel.json` e `netlify.toml`

### Erro: CSS/JS não carregam

**Solução**: Verificar caminhos relativos

```html
<!-- ❌ Errado -->
<link rel="stylesheet" href="css/styles.css">

<!-- ✅ Certo -->
<link rel="stylesheet" href="/css/styles.css">
```

### Erro: Imagens não aparecem

**Solução**: Usar caminhos relativos

```html
<!-- ✅ Certo -->
<img src="/assets/images/image.png" alt="">
```

### Deploy muito lento

**Solução**: Usar CDN (Vercel/Netlify já fazem)

### Ambiente não consegue encontrar variáveis

**Não temos variáveis de ambiente!**
Este é um site estático puro.

---

## Monitoramento

### Uptime
- UptimeRobot: https://uptimerobot.com (grátis)
- Pingdom: https://www.pingdom.com

### Analytics
- Vercel Analytics: Incluído
- Netlify Analytics: Incluído
- Google Analytics: Adicione manualmente

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Segurança

### Headers Inclusos

Ambos `vercel.json` e `netlify.toml` incluem:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Cache Headers

- HTML: 1 hora
- CSS/JS: 1 ano (imutável)
- Assets: 1 ano (imutável)

---

## Próximos Passos

1. **Deploy em Vercel** (recomendado)
   - Vá para: https://vercel.com
   - Import → Select repo
   - Deploy

2. **Adicione domínio customizado** (opcional)
   - Compre em: namecheap.com ou google domains
   - Configure DNS
   - Aponte para seu deploy

3. **Configure análiticas** (opcional)
   - Google Analytics
   - Vercel Analytics (automático)

4. **Configure Email** (opcional)
   - Formspree: https://formspree.io
   - EmailJS: https://www.emailjs.com/

---

**Versão**: 1.0  
**Atualizado**: Setembro 2026
