---
title: Modelo de negócio
description: Camadas, posicionamento e decisão de serviços
---

# Modelo de negócio

## 25. A escada de camadas

| # | Camada | O que vende | Papel no negócio | Recorrente? |
|---|---|---|---|---|
| 1 | **Automação + IA** | Fluxos n8n, agentes, bots, integrações | Cunha de entrada e margem | Parcial (retainer) |
| 2 | **Desenvolvimento** | Site, landing, sistema sob medida | Caixa nos meses sem contrato | Não |
| 3 | **Infra + DevOps** | Cloud, CI/CD, observabilidade, backup | Margem estável | Sim |
| 4 | **Suporte labor-only** | TI do dia a dia (só mão de obra) | Âncora, confiança e radar de oportunidades | Sim, ticket baixo |
| 5 | **Produto SaaS** | Recepção 24h e similares | Opcional, só na fase 3 | Sim, o melhor |

**Regra de sequência:** no máximo **2 camadas ativas por trimestre**. Só empilha quando a anterior estiver estável.

**Regra de fluxo entre camadas:**
```
Suporte (vê processo manual)
   → Diagnóstico R$ 800
      → Automação R$ 1.200–4.000
         → Retainer R$ 600–1.500/mês
            → Sistema/site quando automação não basta
               → Bot/SaaS como produto repetível
```
O suporte é o cavalo de Troia; a automação é o negócio.

## 31. Posicionamento

**Uma marca, uma frase por público.** Nunca um catálogo.

- **Dono de PME:** *"Eu automatizo o trabalho manual da sua empresa — e mantenho funcionando."*
- **Quem precisa de site/sistema:** *"Desenvolvimento e infraestrutura com prazo e responsável técnico."*
- **Parceiro/agência:** *"Sua equipe de TI e DevOps terceirizada."*

Suporte, site e sistema entram como consequência, não como cartão de visita.

## 35. Por que serviços, não produto (decisão registrada)

**Decisão:** o negócio é uma **empresa de serviços**. Produto/SaaS fica fora do escopo até haver caixa e repetição comprovada.

| Critério | Serviço | Produto (SaaS) |
|---|---|---|
| Caixa no mês 1 | Sim, cobra antes | Não, meses sem receita |
| Investimento inicial | `R$ 0` | Alto (dev, suporte, marketing) |
| Velocidade de aprendizado | Rápida, cliente fala na sua frente | Lenta, precisa de muitos usuários |
| Teto de crescimento | Suas horas → precisa de equipe/parceiro | Alto, sem teto de horas |
| Risco principal | Virar gargalo | Nunca achar cliente |
| Momento certo | **Agora** | Depois de 10+ clientes com o mesmo problema |

**Regra:** produto só nasce de serviço repetido. Se você entregou a **mesma** automação 10 vezes do mesmo jeito, isso é produto esperando para existir. Antes disso, é distração.

**Como crescer sem produto:**
1. **Template** — todo fluxo virou base reutilizável (economiza 60% do tempo).
2. **Checklist** — entrega padronizada, menos retrabalho.
3. **Execução terceirizada sob sua marca** — você vende, revisa e responde; o técnico executa (repasse 40–50%). O contrato e o cliente continuam seus.
4. **Preço por resultado** — sobe ticket em vez de aumentar volume.
5. **Contrato anual** — caixa adiantado, churn menor.

**Sinais de que chegou a hora do produto:** 10+ clientes com o mesmo fluxo, onboarding abaixo de 1h, e você recusando cliente por falta de tempo.
