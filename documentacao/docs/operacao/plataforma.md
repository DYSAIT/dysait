---
title: Stack e plataforma
description: Ferramentas e portal do cliente
---

# Stack e plataforma

## Stack técnica (custo zero inicial)

| Camada | Ferramenta | Plano | Custo |
|---|---|---|---|
| Orquestração | n8n self-host (Docker) | Community | `R$ 0` |
| WhatsApp | Meta Cloud API | 1.000 conversas/mês grátis | `R$ 0` |
| LLM | API (modelo pequeno/médio) | pay-per-use | `R$ 3–15`/cliente |
| Banco/agenda | Supabase | Free | `R$ 0` |
| Landing + painel | Next.js + Cloudflare Pages | Free | `R$ 0` |
| Automação de agenda | Google Calendar API | Free | `R$ 0` |
| Monitoramento | UptimeRobot | Free | `R$ 0` |
| VPS (só na fase 2) | Hetzner/Contabo | 2 vCPU/4GB | ~`R$ 25–35`/mês |

**Regra de ouro:** nada de VPS, domínio, logo ou CNPJ antes do 1º pagamento. Rode na sua máquina + túnel (Cloudflare Tunnel free) enquanto são ≤3 clientes.

**Arquitetura mínima:**
```
WhatsApp (Meta Cloud API) → webhook n8n → normaliza mensagem
  → LLM (prompt com contexto do negócio + base de FAQ) 
  → intenção: dúvida | agendar | humano
  → Supabase (histórico, leads, agendamentos) + Google Calendar
  → resposta + handoff humano
```

**Prompt do bot — estrutura fixa:**
- Persona: assistente do `<nome do negócio>`, tom `<formal/descontraído>`.
- Contexto: serviços, preços públicos, endereço, horários, convênios, políticas.
- Regras: nunca inventar preço; nunca dar diagnóstico médico; máximo 3 perguntas por mensagem; pedir nome antes de agendar.
- Fallback: se confiança baixa ou tema clínico/legal → "vou chamar alguém da equipe" + handoff.
- Guardrails: limite de mensagens/dia, janela de horário, bloqueio de assunto fora do escopo.

## Plataforma (quando e o que)

**Plataforma = um lugar só** onde o cliente abre chamado, vê o que contratou, vê o relatório do mês e paga.

**Não construa antes de 5 clientes.** Antes: WhatsApp + Notion/ClickUp free + planilha + gateway de cobrança. Custo zero.

Quando construir (5+ clientes), mínimo:
- login do cliente (Supabase Auth)
- chamados + SLA visível
- faturas e status de pagamento
- relatório mensal automático (uptime, horas usadas, automações ativas)
- painel seu: cliente, contrato, horas restantes, vencimento

Não é produto — é **ferramenta de retenção**. O que retém é o relatório, não o login.
