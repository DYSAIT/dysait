---
title: Site de apresentação
description: Stack, estrutura, conteúdo e deploy do site institucional
---

# Site de apresentação

Site institucional da DYSAIT, separado da documentação. Publicado em servidor e domínio
próprios — não usa o GitHub Pages do MkDocs.

## Stack

| Item | Escolha | Motivo |
|---|---|---|
| Build | Vite 6 | dev server rápido, build estático |
| UI | React 19 | reaproveitamento e evolução para app |
| Estilo | Tailwind CSS v4 (`@tailwindcss/vite`) | utilitários, sem CSS morto |
| Componentes | classes padrão Flowbite | visual conhecido, sem pacote JS extra |
| Fontes | Space Grotesk (títulos) + Inter (texto) | contraste editorial |
| Ícones | SVG inline (paths Lucide) | zero dependência, zero requisição |

Referência visual: `sapien-learning-nexus.lovable.app` — hero escuro com gradiente,
blobs desfocados animados, glass cards, texto em gradiente.

## Estrutura

```
site/
├── index.html          meta tags + favicon SVG inline
├── package.json        scripts: dev, build, preview
├── vite.config.js      react() + tailwindcss(), base './'
├── .gitignore          node_modules/, dist/
└── src/
    ├── main.jsx        entrada React
    ├── App.jsx         conteúdo e seções (dados no topo do arquivo)
    └── styles.css      @theme (cores, fontes, sombras, keyframes) + utilities
```

## Rodar

`npm` vem do nvm, não está no PATH por padrão:

```bash
export NVM_DIR=$HOME/.nvm; . $NVM_DIR/nvm.sh
cd site
npm install      # só na primeira vez
npm run dev      # http://localhost:5173
npm run build    # gera site/dist/
```

## Deploy

1. `npm run build`
2. copiar o conteúdo de `site/dist/` para o servidor (qualquer host estático: nginx, Apache, S3, Netlify).
3. `base: './'` no `vite.config.js` mantém os assets relativos — funciona em subpasta ou raiz.

Página única (`/index.html`), sem roteamento no cliente: nenhuma regra de rewrite é necessária.

## Seções da página

| Seção | Conteúdo |
|---|---|
| Hero | promessa ("equipe especializada"), 2 CTAs, 4 números (TI · 4 frentes · 7 dias · 48h) |
| Serviços | 4 cards, ordem do mais simples ao mais avançado: Consultoria, TI e suporte, Automação, Desenvolvimento |
| Níveis | 4 planos cumulativos com checklist do que cada um entrega |
| Como funciona | 4 etapas (diagnóstico/proposta 48h → implantação 7 dias → treinamento → acompanhamento) |
| Contato | CTA WhatsApp + e-mail |
| Rodapé | © DYSAIT · Desenvolvimento de sistemas Web e Sites · Cachoeirinha, RS |

## Preços vigentes

Planos cumulativos: cada nível inclui o anterior.

| Plano | Preço | SLA | O que entrega |
|---|---|---|---|
| Diagnóstico | `R$ 300` único, creditado no projeto | — | mapa de processos, prioridades de automação, plano de 90 dias, relatório final (~5h) |
| Essencial | `R$ 500`/mês | 24h | suporte remoto até 5 máquinas, monitoramento + backup, 1 automação simples, relatório mensal |
| Operação | `R$ 1.690`/mês | 8h úteis | até 3 automações gerenciadas, até 10 máquinas, ajustes mensais, 15% off em projetos |
| Parceiro | `R$ 3.290`/mês | 2h | DevOps/cloud, 20h de desenvolvimento/mês, revisão trimestral de roadmap, 15% off em projetos |

Fora dos planos: hora técnica `R$ 120–150/h`, conforme complexidade.

### Racional dos preços

- Hora técnica de referência: `R$ 120–150/h`.
- Diagnóstico: `R$ 300` por ~5h (`R$ 60/h`) — preço de entrada, compensado pelo crédito no projeto seguinte.
- Essencial: `R$ 500`/mês cobre 2–3h/mês de suporte (`R$ 165–250/h`), mas o mês 1 tem margem baixa por incluir 1 automação simples (6–10h). **Vender com expectativa de permanência.**
- Operação: 8h/mês → `R$ 211/h`.
- Parceiro: 20h/mês → `R$ 164/h` (20h é teto de contrato; uso médio menor mantém a margem).
- Salto Essencial → Operação é de 3,4x; se o cliente travar no Essencial, criar degrau intermediário antes de mexer no Parceiro.

## Copy e tom

Regras aplicadas aos textos do site (ficheiro `site/src/App.jsx`):

1. **Sem quantidade nos cards de serviço** — quantidade ("até 5 máquinas", "até 10") aparece só no checklist dos planos, onde é escopo contratado.
2. **Foco em escopo e entrega** — cada card diz o que o cliente recebe, não o que a empresa "é".
3. **Tom sóbrio** — sem superlativos, sem "não é relatório bonito", sem promessa de resultado.
4. **Empresa, não indivíduo** — "equipe especializada", "time inteiro por trás"; nunca "eu" ou profissional solo.

Texto atual dos cards:

| Card | Texto |
|---|---|
| Consultoria | Mapeamento dos processos do dia a dia, com as automações de maior retorno apontadas. Você recebe um plano simples, com a ordem de execução. |
| TI e suporte | Monitoramento das máquinas: backup, atualização e suporte remoto com prazo. Peça e licença ficam no seu nome — você compra, a gente opera. |
| Automação | Fluxo em n8n com tratamento de erro, idempotência e fallback humano. Falha avisa no nosso WhatsApp antes de o cliente reclamar. |
| Desenvolvimento | Site, sistema sob medida e integrações entre ERP, CRM, planilha e WhatsApp. Escopo e prazo por escrito, entrega versionada no seu repositório. |

## Pendências antes de publicar

- [x] `WHATSAPP` em `site/src/App.jsx` — `https://wa.me/5551995482776`
- [x] `EMAIL` em `site/src/App.jsx` — `dyego.santos.alves@gmail.com`
- [ ] `og:title` / `og:image` no `site/index.html` (SEO e compartilhamento)
- [ ] domínio definitivo (nada no código depende dele)

## Decisões registradas

1. **React desde o início** — troca de stack custa mais depois; hoje é uma página, amanhã pode ser app.
2. **Tailwind puro com classes Flowbite** — o pacote `flowbite` v3 traz tokens próprios (`bg-neutral-primary`, `rounded-base`) e CSS inteiro; não compensa para uma página.
3. **Deploy fora do GitHub Pages** — o Pages já serve o MkDocs em `/dysait/`; misturar os dois builds exigiria cópia manual e regra de rewrite.
4. **Planos cumulativos e explícitos** — "Tudo do anterior" + checklist evita dúvida de escopo e sustenta upgrade.
5. **Ordem dos serviços do simples ao avançado** — mesma lógica da escada de camadas em [Modelo de negócio](../negocio/escada.md).
