/* ============================================================
   KPI Dashboard · Asset types · Use cases (with / without)
   ============================================================ */

function Dashboard() {
  const kpis = [
    { label: 'Productivity', t: 'Hours saved per week', d: 'Actual time recovered by department, compared to the manual baseline captured at asset intake.' },
    { label: 'Portfolio', t: 'Active AI assets', d: 'Total approved assets in production, broken down by type, department, and review status.' },
    { label: 'Quality', t: 'Asset maturity score', d: 'Composite score measuring documentation quality, review depth, test coverage, and operational history.' },
    { label: 'Reliability', t: 'Run counts & failure rate', d: 'How often each asset runs, how often it fails, and whether failures are escalating or stable over time.' },
    { label: 'Adoption', t: 'Department distribution', d: 'Which teams are creating and using AI assets, and which are lagging. Informs enablement priorities.' },
    { label: 'Return', t: 'ROI by business unit', d: 'Estimated return based on hours saved, error reduction, and process cycle-time improvement per asset.' },
  ];
  return (
    <section id="dashboard" style={{ background: '#fff', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex' }}><Overline>KPI Dashboard</Overline></div>
            <h2 style={{ ...H2, margin: '0 auto' }}>
              Measure the actual impact of your AI investment.
            </h2>
            <p style={{ ...BodyLg, margin: '20px auto 0' }}>
              Every approved asset captures a baseline at intake and reports against it in
              production. Leadership gets a live view of what AI is doing for the business.
            </p>
          </div>
        </Reveal>

        <div className="kpi-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 48,
        }}>
          {kpis.map((k, i) => (
            <Reveal key={k.t} delay={(i % 3) * 80}>
              <div style={{
                background: '#fff', border: '1px solid var(--ds-ink-06)', borderRadius: 16,
                padding: '24px 24px 22px', height: '100%', boxShadow: '0 6px 20px rgba(13,68,42,.05)',
              }}>
                <div style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
                  letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ds-green)', marginBottom: 12,
                }}>{k.label}</div>
                <h3 style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 18, lineHeight: 1.25, color: 'var(--ds-ink)', margin: '0 0 8px', letterSpacing: '-.01em' }}>{k.t}</h3>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ds-ink-60)', margin: 0, textWrap: 'pretty' }}>{k.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ----- Asset types -----
function AssetTypes() {
  const rows = [
    { ico: 'sliders', t: 'Workflow automations', ex: 'API-connected workflows, data pipelines, event-triggered notifications, report generation, approval routing.' },
    { ico: 'doc', t: 'Business artifacts', ex: 'Process guides, training documents, analysis templates, standard operating procedures, policy drafts.' },
    { ico: 'flask', t: 'Prototypes & microsites', ex: 'Internal tools, dashboards, calculators, form-based utilities, landing pages built with AI assistance.' },
    { ico: 'route', t: 'Shareable AI skills', ex: 'Reusable prompts, AI playbooks, and templates approved and versioned for company-wide distribution.' },
    { ico: 'grad', t: 'Design system assets', ex: 'Component variations, brand-compliant page templates, UI patterns reviewed for design consistency.' },
  ];
  return (
    <section style={{ background: 'var(--ds-fog)', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,.85fr) minmax(0,1.4fr)', gap: 56, alignItems: 'start',
        }}>
          <Reveal>
            <Overline>Asset types</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>
              Every type of AI output, governed the same way.
            </h2>
            <p style={{ ...BodyLg, margin: '20px 0 0' }}>
              From an automation that touches production systems to a one-page brand template:
              all of it enters the same catalog, review path, and measurement model.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rows.map((r, i) => (
              <Reveal key={r.t} delay={i * 60}>
                <div style={{
                  background: '#fff', border: '1px solid var(--ds-ink-06)', borderRadius: 14,
                  padding: '18px 22px', display: 'flex', gap: 18, alignItems: 'flex-start',
                  boxShadow: '0 2px 10px rgba(13,68,42,.04)',
                }} className="asset-row">
                  <span style={{
                    width: 40, height: 40, borderRadius: 10, background: 'var(--ds-green-12)', flexShrink: 0,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Ico name={r.ico} size={20} />
                  </span>
                  <div>
                    <div style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ds-ink)', marginBottom: 4 }}>{r.t}</div>
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ds-ink-60)', margin: 0, textWrap: 'pretty' }}>{r.ex}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ----- Use cases (with / without) -----
function UseCases() {
  const rows = [
    { s: 'Operations builds a Slack automation', wo: 'Lives on one person\u2019s account. No documentation. Breaks silently when they leave.', w: 'Documented, reviewed, team-owned, auditable, and tracked against a time-saved baseline.' },
    { s: 'Marketing creates AI-generated landing pages', wo: 'Unknown tools, inconsistent brand, no review process, no deployment path.', w: 'Approved tools, brand-reviewed, deployed through a controlled and auditable path.' },
    { s: 'HR generates policy documents with AI', wo: 'Stored in personal drives. No version history. No review record. No owner.', w: 'Cataloged, reviewed by the right stakeholder, version-controlled, and searchable.' },
    { s: 'Engineering shares a reusable AI skill', wo: 'Shared via DM. No versioning, no approval, no visibility beyond the original thread.', w: 'Submitted to the catalog, reviewed, versioned, and distributed through approved channels.' },
    { s: 'Leadership asks what AI is doing for the business', wo: 'No answer. No data. Anecdotes only.', w: 'KPI dashboard shows hours saved, active assets, adoption by department, and ROI.' },
  ];
  return (
    <section style={{ background: '#fff', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <Reveal>
          <Overline>Use cases</Overline>
          <h2 style={{ ...H2, maxWidth: 720 }}>What this looks like in practice.</h2>
        </Reveal>

        <Reveal>
          <div style={{
            marginTop: 40, borderRadius: 18, overflow: 'hidden',
            border: '1px solid var(--ds-ink-06)', boxShadow: '0 12px 36px rgba(13,68,42,.08)',
          }}>
            <div className="uc-inner" style={{ minWidth: 720 }}>
              {/* header */}
              <div className="uc-row" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.45fr 1.45fr', background: '#fff' }}>
                <div className="uc-scenario-col" style={{ padding: '16px 22px', fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ds-ink-60)', borderBottom: '1px solid var(--ds-ink-06)' }}>Scenario</div>
                <div className="uc-wo-col" style={{ padding: '16px 22px', fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: '#A8431F', borderBottom: '1px solid var(--ds-ink-06)', borderLeft: '1px solid var(--ds-ink-06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Ico name="ban" size={15} color="#A8431F" /> Without governance
                </div>
                <div style={{ padding: '16px 22px', fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ds-forest)', background: 'linear-gradient(180deg,#ECF7F0,#DFEFE6)', borderBottom: '1px solid var(--ds-ink-06)', borderLeft: '1px solid var(--ds-ink-06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Ico name="check" size={15} color="var(--ds-forest)" /> With AI Governance
                </div>
              </div>
              {rows.map((r, i) => (
                <div key={i} className="uc-row" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.45fr 1.45fr' }}>
                  <div className="uc-scenario-col" style={{ padding: '18px 22px', fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--ds-ink)', borderTop: '1px solid var(--ds-ink-06)', display: 'flex', alignItems: 'center' }}>{r.s}</div>
                  <div className="uc-wo-col" style={{ padding: '18px 22px', fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'var(--ds-ink-60)', borderTop: '1px solid var(--ds-ink-06)', borderLeft: '1px solid var(--ds-ink-06)' }}>{r.wo}</div>
                  <div style={{ padding: '18px 22px', fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: 'var(--ds-ink)', borderTop: '1px solid var(--ds-ink-06)', borderLeft: '1px solid var(--ds-ink-06)', background: 'rgba(81,174,123,.06)' }}>{r.w}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

Object.assign(window, { Dashboard, AssetTypes, UseCases });
