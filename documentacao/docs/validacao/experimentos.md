---
title: Experimentos
description: Concierge, pré-venda e piloto medido
---

# Experimentos

## Concierge MVP — validar entrega sem construir produto

Antes de escrever uma linha de SaaS multi-tenant:
1. Escolha 2 negócios simpáticos.
2. Você opera o "bot" manualmente por 5 dias: recebe a mensagem, responde em < 2 min com texto pronto, agenda na mão.
3. Meça: tempo de resposta, quantas viraram agendamento, quantas você não soube responder.

**Isso prova 3 coisas de graça:** (a) o fluxo de conversa funciona, (b) quais perguntas se repetem → viram FAQ, (c) se o dono valoriza o resultado.

Só depois automatize. O manual vira o roteiro do bot.

## Pré-venda — o teste decisivo

Oferta: *"Vou montar isso para vocês. `R$ 400` de sinal agora, entrego em 7 dias, e a mensalidade começa no 8º dia. Se não entregar no prazo, devolvo o sinal."*

| Resultado em 15 abordagens | Leitura | Ação |
|---|---|---|
| 3+ pagam sinal | Demanda validada | Construa |
| 1–2 pagam | Sinal fraco | Ajuste oferta/preço e repita com 15 novos |
| 0 pagam, mas 5+ elogiam | **Falso positivo** — dor não é cara | Troque nicho ou dor |
| 0 pagam, ninguém responde | Oferta/canal errado | Troque canal (indicação/parceria) |

**Nunca** aceite "vou pensar" como validação. Só dinheiro ou data marcada conta.

## Piloto medido (coorte antes/depois)

Para cada piloto, coletar 2 semanas antes e 2 depois:

| Métrica | Como medir | Meta |
|---|---|---|
| Tempo médio de 1ª resposta | exportar conversas | de horas → < 1 min |
| Conversas fora do horário | contagem manual | 100% atendidas |
| Agendamentos/semana | agenda do cliente | +10% |
| No-show | faltas/agendados | –30% |
| Taxa de resolução sem humano | conversas fechadas pelo bot | > 60% |

Esse quadro vira **case** e **argumento de renovação**. Sem número, a mensalidade vira "gasto" no mês 3 e o cliente cancela.

---


> **Nota:** o negócio é de serviços. Esta parte é o desenho do produto que só deve ser construído depois de 10+ clientes com a mesma necessidade repetida (ver [Por que serviços, não produto](../negocio/escada.md#por-que-servicos-nao-produto-decisao-registrada)). Até lá, o mesmo atendimento é entregue como **serviço** (setup + mensalidade).

> Você gostou da mensalidade. Então o destino é **produto**, não serviço: serviço tem teto (suas horas), produto escala. Caminho: começar como serviço produtizado → virar SaaS vertical.

## Experimento único para as próximas 2 semanas

Uma hipótese, um teste, um número:

> **Hipótese:** donos de clínica odontológica pequena pagam `R$ 400`/mês para reduzir no-show e responder fora do horário.
> **Teste:** 15 entrevistas de descoberta + oferta de pré-venda de sinal `R$ 400` para 5 delas.
> **Critério de sucesso:** 3 entrevistas com 8+ pontos **e** 2 sinais pagos.
> **Critério de falha:** < 5 entrevistas com 6+ pontos → trocar nicho.
> **Prazo:** 14 dias. Sem prorrogação.

---

---


> Esta parte consolida o negócio. As Partes I–III continuam válidas como detalhamento do produto de entrada (bot de WhatsApp), que aqui é **uma linha** do catálogo.
