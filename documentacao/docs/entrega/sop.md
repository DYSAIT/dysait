---
title: Entrega
description: Processo de implantação
---

# Entrega

## Entrega (SOP de 7 dias)

| Dia | Entrega | Saída |
|---|---|---|
| 0 | Kickoff (30 min): negócio, serviços, preços, horários, FAQ, política | Formulário preenchido |
| 1 | Provisiona número/API + cria workspace | Credenciais funcionando |
| 2 | Base de conhecimento + prompt + fluxo de qualificação | Bot responde FAQ corretamente (teste com 20 perguntas) |
| 3 | Agenda + lembretes + handoff humano | Agendamento de teste aprovado |
| 4 | Teste com o dono e 2 funcionários (mín. 30 conversas simuladas) | Lista de correções |
| 5 | Correções + relatório semanal automático | Fluxo congelado |
| 6 | Treinamento de 20 min + entrega do manual de 1 página | Aceite por escrito |
| 7 | Go-live + acompanhamento diário por 7 dias | Primeiras métricas |

**Checklist de qualidade antes do go-live** — nenhum item em aberto:

**Respostas**

- [ ] Bot nunca inventa preço nem prazo

**Dados**

- [ ] Toda conversa é registrada no Supabase
- [ ] Backup e exportação dos dados disponíveis

**Falhas**

- [ ] Fallback para qualquer erro de API (mensagem neutra, sem travar)
- [ ] Handoff humano testado, com notificação no celular do dono

**Custo e LGPD**

- [ ] Limite de gasto de tokens configurado
- [ ] Cliente informado de que está falando com um bot
- [ ] Dados não usados para treinar modelo

**Pós-entrega:**

| Frequência | Entrega |
|---|---|
| Semanal (automático) | Conversas, agendamentos, taxa de resolução, horários de pico |
| Mensal (15 min) | Revisão com o cliente: números, ajustes e prioridades |
