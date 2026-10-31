// contato real: WhatsApp +55 51 99548-2776
const WHATSAPP = 'https://wa.me/5551995482776'
const EMAIL = 'dyego.santos.alves@gmail.com'

const servicos = [
  {
    titulo: 'Consultoria',
    texto:
      'Mapa dos seus 10 processos, com as 3 automações de maior retorno priorizadas. Você sai com plano e ordem de execução, não com relatório bonito.',
    tags: ['Diagnóstico', 'Prioridades', 'Roteiro'],
    icone: 'M12 6.25v13M12 6.25C10.8 5.5 9.2 5 7.5 5S4.2 5.5 3 6.25v13C4.2 18.5 5.8 18 7.5 18s3.3.5 4.5 1.25M12 6.25C13.2 5.5 14.8 5 16.5 5s3.3.5 4.5 1.25v13c-1.2-.75-2.8-1.25-4.5-1.25s-3.3.5-4.5 1.25',
  },
  {
    titulo: 'TI e suporte',
    texto:
      'Até 5 máquinas monitoradas: backup, atualização e suporte remoto com prazo. Peça e licença ficam no seu nome — você compra, a gente opera.',
    tags: ['Backup', 'Rede', 'SLA'],
    icone: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    titulo: 'Automação',
    texto:
      'Fluxo em n8n com tratamento de erro, idempotência e fallback humano. Falha avisa no nosso WhatsApp antes de o cliente reclamar.',
    tags: ['n8n', 'WhatsApp', 'Integrações'],
    icone: 'M13 3v7h7L11 21v-7H4l9-11z',
  },
  {
    titulo: 'Desenvolvimento',
    texto:
      'Site, sistema sob medida e integrações entre ERP, CRM, planilha e WhatsApp. Escopo e prazo por escrito, entrega versionada no seu repositório.',
    tags: ['Web', 'Sistemas', 'APIs'],
    icone: 'M8 9l-4 3 4 3m8-6l4 3-4 3M13 4l-2 16',
  },
]

const niveis = [
  {
    nome: 'Diagnóstico',
    preco: 'R$ 300',
    nota: 'Pagamento único · creditado no projeto',
    itens: ['Mapa dos 10 processos', 'Prioridades de automação definidas', 'Plano de 90 dias', '~5h de trabalho'],
  },
  {
    nome: 'Essencial',
    preco: 'R$ 500',
    sufixo: '/mês',
    nota: 'SLA 24h',
    itens: [
      'Tudo do Diagnóstico',
      'Suporte remoto até 5 máquinas',
      'Monitoramento + backup configurado',
      '1 automação simples inclusa',
      'Relatório mensal',
    ],
  },
  {
    nome: 'Operação',
    preco: 'R$ 1.690',
    sufixo: '/mês',
    nota: 'SLA 8h úteis',
    destaque: true,
    itens: [
      'Tudo do Essencial',
      'Até 3 automações gerenciadas',
      'Até 10 máquinas monitoradas',
      'Ajustes mensais inclusos',
      '15% de desconto em projetos',
    ],
  },
  {
    nome: 'Parceiro',
    preco: 'R$ 3.290',
    sufixo: '/mês',
    nota: 'SLA 2h',
    itens: [
      'Tudo da Operação',
      'DevOps e cloud',
      '20h de desenvolvimento por mês',
      'Revisão trimestral de roadmap',
      '15% de desconto em projetos',
    ],
  },
]

const numeros = [
  { valor: 'TI', rotulo: 'equipe especializada' },
  { valor: '4', rotulo: 'frentes de serviço' },
  { valor: '7', rotulo: 'dias para implantar' },
  { valor: '48h', rotulo: 'para a proposta' },
]

const etapas = ['Diagnóstico e proposta em 48h', 'Implantação em até 7 dias', 'Treinamento da equipe', 'Acompanhamento e relatório']

export default function App() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-glow shadow-glow">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3M13 4l-2 16" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-lg font-bold leading-none tracking-wide text-gray-900">DYSAIT</span>
              <span className="hidden text-[10px] uppercase tracking-widest text-gray-500 md:block">Web e Sistemas</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <li><a className="transition-colors hover:text-brand" href="#servicos">Serviços</a></li>
            <li><a className="transition-colors hover:text-brand" href="#niveis">Níveis</a></li>
            <li><a className="transition-colors hover:text-brand" href="#como-funciona">Como funciona</a></li>
            <li><a className="transition-colors hover:text-brand" href="#contato">Contato</a></li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            Falar agora
          </a>
        </nav>
      </header>

      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,hsl(174_60%_7%)_0%,hsl(174_84%_15%)_55%,hsl(174_84%_24%)_100%)]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-brand-glow/25 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-float rounded-full bg-accent/20 blur-3xl [animation-delay:1.5s]" />
            <div className="absolute right-1/3 top-1/2 h-64 w-64 animate-float rounded-full bg-brand-glow/15 blur-2xl [animation-delay:3s]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:pt-40">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-8 inline-flex animate-slide-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Consultoria · Automação · TI · Desenvolvimento
              </span>
              <h1 className="animate-slide-up font-display text-4xl font-bold leading-tight text-white [animation-delay:0.1s] md:text-5xl lg:text-7xl">
                A tecnologia da sua empresa <span className="text-gradient">com uma equipe especializada</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-lg text-white/70 [animation-delay:0.2s] md:text-xl">
                Desenvolvimento de sistemas Web e Sites, automação de processos e suporte de TI para pequenas e médias
                empresas que se cansaram de fornecedor que só aparece na cobrança.
              </p>
              <div className="mt-8 flex animate-slide-up flex-col items-center justify-center gap-4 [animation-delay:0.3s] sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-gray-900 shadow-accent transition-transform hover:scale-105"
                >
                  Falar no WhatsApp
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="#niveis"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  Ver níveis
                </a>
              </div>

              <dl className="mt-16 grid animate-slide-up grid-cols-2 gap-4 [animation-delay:0.4s] md:grid-cols-4 md:gap-6">
                {numeros.map((n) => (
                  <div key={n.rotulo} className="glass rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105 md:p-6">
                    <dt className="font-display text-2xl font-bold text-white md:text-3xl">{n.valor}</dt>
                    <dd className="mt-1 text-xs text-white/60 md:text-sm">{n.rotulo}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="servicos" className="relative bg-[hsl(180_25%_97%)] py-20 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                O que você contrata
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
                Quatro frentes, <span className="text-brand">uma empresa responsável por tudo</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Equipe especializada em TI, com experiência em suporte, automação e desenvolvimento de sistemas. Um
                único ponto de contato para você — e um time inteiro resolvendo por trás.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicos.map((s) => (
                <article
                  key={s.titulo}
                  className="group rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-glow text-white shadow-glow">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icone} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-900">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.texto}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="niveis" className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-medium text-amber-700">
                Níveis de atendimento
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">Comece pelo diagnóstico</h2>
              <p className="mt-4 text-gray-600">Cada nível inclui o anterior: você sobe, não troca de fornecedor.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {niveis.map((n) => (
                <article
                  key={n.nome}
                  className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    n.destaque
                      ? 'border-brand/40 bg-gradient-to-b from-brand/5 to-white shadow-glow'
                      : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
                  }`}
                >
                  {n.destaque && (
                    <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      Mais escolhido
                    </span>
                  )}
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">{n.nome}</h3>
                  <p className="mt-3 font-display text-3xl font-bold text-gray-900">
                    {n.preco}
                    {n.sufixo && <span className="text-base font-medium text-gray-500">{n.sufixo}</span>}
                  </p>
                  {n.sub && <p className="mt-1 text-xs text-gray-500">{n.sub}</p>}
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600">
                    {n.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-none text-brand"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-brand">{n.nota}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Trabalho técnico e desenvolvimento fora dos níveis:{' '}
              <strong className="text-gray-900">R$ 120–150/h</strong>, conforme complexidade.
            </p>
          </div>
        </section>

        <section id="como-funciona" className="bg-[hsl(180_25%_97%)] py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center font-display text-3xl font-bold text-gray-900 md:text-4xl">Como funciona</h2>
            <p className="mt-4 text-center text-gray-600">Sem projeto eterno: diagnóstico, entrega e acompanhamento.</p>
            <ol className="mt-12 space-y-4">
              {etapas.map((etapa, i) => (
                <li
                  key={etapa}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/80 p-4 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-glow font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{etapa}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contato"
          className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(174_60%_7%)_0%,hsl(174_84%_20%)_100%)] py-20 md:py-28"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 animate-float rounded-full bg-brand-glow/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Comece pelo <span className="text-gradient">diagnóstico</span>
            </h2>
            <p className="mt-4 text-white/70">Uma conversa basta para saber o que vale automatizar primeiro.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-gray-900 shadow-accent transition-transform hover:scale-105"
            >
              Falar no WhatsApp
            </a>
            <p className="mt-5 text-sm text-white/60">
              ou <a className="underline decoration-white/30 underline-offset-4 hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 px-4 py-8 text-center text-sm text-gray-500 md:px-8">
        © {new Date().getFullYear()} DYSAIT · Desenvolvimento de sistemas Web e Sites · Cachoeirinha, RS
      </footer>
    </>
  )
}
