---
title: Suporte de TI
description: Mão de obra, preço e fluxo
---

# Suporte de TI

## 28. Camada 4 — Suporte labor-only (só mão de obra)

Modelo: o cliente compra peça e licença; você opera, mantém e responde.

### Por que está certo para começar

| Ganho | Custo |
|---|---|
| Zero capital de giro, zero estoque | Sem margem de revenda (20–40% do faturamento em modelo tradicional) |
| Zero risco de garantia/DOA no seu bolso | Precisa cobrar mais por hora para compensar |
| Zero nota de produto, zero ICMS | Cliente compra errado → você leva a culpa se não documentar |
| Escala sem inventário | Ticket menor = mais clientes ou preço maior |

### Tabela de preço (sem revenda)

| Item | Preço |
|---|---|
| Pacote remoto — até 5 dispositivos | `R$ 450–600`/mês (monitoramento, backup, atualização, suporte remoto) |
| Pacote remoto — até 10 dispositivos | `R$ 750–1.000`/mês |
| Visita presencial | `R$ 150–200` (inclui 1h; excedente `R$ 120`/h) |
| Diagnóstico avulso (sem contrato) | `R$ 120–180` |
| Formatação/reinstalação com backup | `R$ 250–350` |
| Hora avulsa | `R$ 120–150` |

Referência: 5 dispositivos geram ~2–3h/mês → **`R$ 150–200`/h efetivo**.

**Alavanca única da mão de obra: reduzir horas.** Meta: **70–80% dos chamados resolvidos remoto**. Cada visita presencial come 1h de deslocamento não faturado — agende em bloco, 2 visitas/dia na mesma região.

### 5 regras de ouro

1. **Licença e conta sempre no nome do cliente.** Acesso delegado; nunca dono do billing.
2. **Você especifica, o cliente compra.** Lista com modelo, link e quantidade por escrito.
3. **Se comprar por ele: 100% adiantado + markup 20%.** Nunca do próprio bolso.
4. **SLA pausa enquanto a peça não chega.** Atraso do fornecedor não é sua multa.
5. **Nada de estoque** — nem "um cabinho sobrando".

### Fluxo de atendimento

```
1. Chamado (WhatsApp/portal) → classifica: remoto | presencial | precisa peça
2. Remoto primeiro (RustDesk/MeshCentral) → ~70% resolvem aqui
3. Precisa peça? → você emite especificação (modelo, link, quantidade, prazo)
4. Cliente compra e avisa → SLA retoma
5. Instalação/configuração (sua parte)
6. Registro: feito, horas, próximo passo
7. Relatório mensal: dispositivos, chamados, horas usadas, horas restantes
```

### Ferramentas de operação (custo zero)

| Função | Ferramenta | Custo |
|---|---|---|
| Acesso remoto | RustDesk self-host ou MeshCentral | `R$ 0` |
| Monitoramento/inventário | Tactical RMM (community) ou Uptime Kuma | `R$ 0` |
| Chamados | Chatwoot / Notion / ClickUp free | `R$ 0` |
| Senhas | Vaultwarden | `R$ 0` |
| Documentação do cliente | Docmost / Outline | `R$ 0` |
| Cobrança recorrente | Assaas / Pix | taxa por transação |

Tudo na mesma VPS do n8n — infra compartilhada, custo dividido.

### Contrato — 8 cláusulas que protegem o labor-only

1. Escopo: só mão de obra. Peças, licenças, internet e energia são do cliente.
2. Você **não** responde por defeito, atraso ou incompatibilidade de item adquirido pelo cliente.
3. Compra solicitada a você: pagamento integral antecipado + prazo do fornecedor.
4. SLA: prazo de resposta e de resolução; **suspenso** por falta de peça, acesso ou decisão do cliente.
5. Horas inclusas no pacote + valor da hora excedente.
6. Janela de atendimento (ex.: seg–sex 9h–18h; urgência fora disso = taxa).
7. Acesso: credenciais de administrador delegadas, devolvidas na rescisão. Backup antes de qualquer alteração.
8. Dados e ativos são do cliente; você tem licença de uso das ferramentas que instalar.

Cláusula extra: *"o cliente mantém backup próprio; o serviço de backup contratado não substitui guarda de dados críticos."*
