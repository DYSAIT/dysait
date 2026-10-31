---
title: Operação de automação
description: Go-live com n8n e anti-padrões
---

# Operação de automação

## 29. Camada de operação — checklist antes do go-live (n8n)

Isso é **DevOps aplicado a automação** e é o que separa você do "cara que monta fluxo".

1. **Versionamento** — todo workflow exportado em JSON no Git. Histórico é seu.
2. **Ambiente separado** — dev/prod. Testar em prod é testar no cliente.
3. **Error workflow global** — todo fluxo aponta para um handler que notifica você e o cliente.
4. **Idempotência** — rodar duas vezes não duplica pedido/agendamento.
5. **Fallback humano** — falha de IA cai para pessoa, nunca para silêncio.
6. **Secrets no vault** — nunca credencial no nó do n8n.
7. **Limite de execução e de tokens** por fluxo, com alerta em 80%.
8. **Documentação de 1 página** por fluxo: o que faz, o que quebra, quem avisar.

Sem os 8, não vai para produção.

## 30. Anti-padrões que queimam reputação

| Erro | Consequência |
|---|---|
| Vender "AI" como buzzword | Cliente não vê valor, não renova |
| Entregar fluxo sem tratamento de erro | 1 falha apaga 3 meses de confiança |
| Assumir custo de tokens sem teto | Prejuízo silencioso todo mês |
| Automatizar processo que ninguém definiu | Solução certa para o problema errado |
| Não documentar | Você vira único que sabe consertar → gargalo eterno |
| Aceitar "só um ajustinho" grátis | Retainer perde sentido |
| Listar 12 serviços no cartão | Quem faz tudo não é lembrado por nada |
| Suporte virar 60% do tempo e 20% da receita | Teto de horas + preço por pacote |
