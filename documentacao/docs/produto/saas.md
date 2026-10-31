---
title: Produto SaaS (opcional)
description: Recepção 24h
---

# Produto SaaS (opcional)

## 23. Produto: "Recepção 24h" — micro-SaaS vertical para clínicas

**Uma frase:** o sistema operacional da recepção de clínicas pequenas — atende, qualifica, agenda, lembra e relata, no WhatsApp que o paciente já usa.

**Por que vertical e não genérico:** genérico (ManyChat, Blip) exige que o cliente monte o fluxo. Vertical entrega pronto, com FAQ do setor, vocabulário do setor e métrica do setor. Você cobra por **resultado específico**, não por "automação".

### 23.1 Escopo do MVP (6 coisas, nada além)

1. **Onboarding guiado** (15 min): o cliente responde 12 perguntas e o sistema gera o bot dele.
2. **Bot de atendimento** com FAQ + qualificação + handoff humano.
3. **Agenda** (slots, confirmação, lembrete 24h/2h).
4. **Caixa de entrada** (humano assume a conversa no meio, com histórico).
5. **Relatório semanal** automático (conversas, agendamentos, horário de pico, tempo de resposta).
6. **Cobrança recorrente** (Pix/cartão, Assaas ou Stripe) + bloqueio automático por inadimplência.

**Fora do MVP (não construir):** app mobile, multi-idioma, integração com 5 sistemas de gestão, dashboard analítico avançado, IA que "dá diagnóstico". Nada disso vende no começo.

### 23.2 Planos (mensalidade como núcleo)

| Plano | Preço | Inclui | Alvo |
|---|---|---|---|
| **Essencial** | `R$ 197`/mês | 1 número, 500 conversas/mês, FAQ, agendamento, lembrete, relatório | consultório 1 cadeira |
| **Clínica** | `R$ 397`/mês | 1.500 conversas, 2 usuários, handoff, relatório + revisão mensal | 2–4 cadeiras |
| **Rede** | `R$ 697`/mês | 3.000 conversas, multi-unidade, integração simples, suporte prioritário | 2+ unidades |

**Setup:** `R$ 0` no self-serve (você quer ativação rápida) · `R$ 497` no "implantação assistida" (você configura junto).

**Anual:** 2 meses grátis (`R$ 1.970` / `R$ 3.970`) → caixa adiantado e churn menor.

**Add-ons:** número extra `R$ 97`/mês · Instagram DM `R$ 147`/mês · campanha de reativação `R$ 300` · integração com sistema de gestão `R$ 600–1.200` (única).

**Regra de precificação:** nunca cobrar por "hora de bot". Cobrar por **conversa incluída** + **número de unidades**. Escala com o cliente, não com seu tempo.

### 23.3 Stack do produto (o que muda em relação ao serviço)

| Camada | Escolha | Por quê |
|---|---|---|
| Front + API | Next.js (App Router) + TypeScript | um repo, deploy Cloudflare/Vercel free tier |
| Banco + Auth + Storage | Supabase (RLS por tenant) | multi-tenant sem escrever auth |
| Fila/orquestração | n8n por tenant ou worker Node próprio | começar com n8n, migrar quando passar de ~10 tenants |
| WhatsApp | Meta Cloud API + Embedded Signup | cliente conecta o número sem você tocar em credencial |
| LLM | modelo pequeno para FAQ + médio para negociação | custo controlado, roteamento por complexidade |
| Billing | Assaas (Pix recorrente) ou Stripe | Pix é decisivo no Brasil |
| Observabilidade | Sentry free + logs no Supabase | achar falha antes do cliente reclamar |

**Decisão técnica central:** um único deployment, `tenant_id` em tudo, RLS no Supabase, credenciais de WhatsApp por tenant criptografadas. Não faça 1 instância por cliente — isso mata margem e tempo.

### 23.4 Ativação (o que define churn)

Meta: **primeiro valor em < 24h**. Checklist:
- [ ] Conectou número (Embedded Signup)
- [ ] Respondeu as 12 perguntas de configuração
- [ ] Recebeu 1 mensagem de teste do próprio bot
- [ ] Criou 1 agendamento real
- [ ] Recebeu o 1º relatório semanal

Se o cliente não completa isso em 7 dias, ele cancela no mês 2. **Onboarding é o produto.**

### 23.5 Retenção (mensalidade só sobrevive com prova mensal)

- Relatório semanal com **1 número que importa**: "`R$ X` em agendamentos recuperados fora do horário".
- Revisão mensal de 15 min (vídeo gravado, não call) apontando 1 melhoria.
- Comparativo mês a mês ("você atendeu 38 conversas a mais que em setembro").
- Aviso proativo quando algo quebra — nunca espere o cliente notar.
- Anual com desconto a partir do 3º mês.

**Sinais de churn antecipado:** queda de uso 2 semanas seguidas, 0 agendamentos no relatório, dono parou de responder o relatório. Aja nesse sinal, não no cancelamento.

### 23.6 Unit economics do SaaS

| Métrica | Valor alvo |
|---|---|
| Ticket médio (ARPU) | `R$ 330`/mês |
| Custo variável/cliente | `R$ 18–30`/mês (tokens + infra + WhatsApp) |
| Margem bruta | ~92% |
| CAC (orgânico, sem ads) | `R$ 40–120` (tempo) |
| Payback | < 1 mês |
| LTV (churn 4%/mês) | ~`R$ 8.250` |
| LTV/CAC | > 20× (é o que justifica não gastar em ads no início) |
| Churn alvo | < 4%/mês |

**Breakeven do produto:** ~`R$ 250`/mês de infra → 1 cliente cobre. 30 clientes ≈ **`R$ 9.900`/mês** de MRR com ~10h/semana.

### 23.7 Roadmap serviço → produto (não pule etapa)

| Fase | Período | O que é | Receita | Objetivo |
|---|---|---|---|---|
| 0 | Semana 1–2 | Concierge manual | `R$ 0` | Descobrir o fluxo real |
| 1 | Semana 3–8 | Serviço produtizado (n8n, 1 tenant por cliente) | setup + mensalidade | Caixa e 3–5 cases |
| 2 | Mês 3–5 | SaaS vertical, onboarding self-serve, billing | mensalidade | Reduzir seu tempo por cliente |
| 3 | Mês 6–12 | Add-ons, integrações, 2º nicho (salão/academia) | mensalidade + add-ons | Escala |

**Gatilho para virar SaaS:** quando o **mesmo** fluxo for entregue 3 vezes sem alteração e o tempo de entrega cair abaixo de 3h. Antes disso, produto é distração.

### 23.8 Riscos específicos do produto

| Risco | Mitigação |
|---|---|
| Meta muda preço/política de mensagens | Acompanhar tabela vigente; precificar com folga; manter camada de abstração do canal |
| Multi-tenant vaza dados entre clínicas | RLS testado por teste automatizado obrigatório antes do 2º cliente |
| Custo de LLM explode com cliente grande | Limite de tokens por tenant + alerta + fallback para resposta pronta |
| Produto fica raso e vira "chatbot genérico" | Nunca remover o relatório de resultado; é o que diferencia |
| Você vira suporte do SaaS | Base de ajuda + onboarding assíncrono antes do 10º cliente |
