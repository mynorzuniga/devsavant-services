// Three service sections: BuildService, OperateService, GovernService.
// Each follows: header band (service number + headline + lede) →
//               dark pillars band → fog "what we deliver" → white engagement details.

// ─── Shared inner components ──────────────────────────────────────────────────

function SectionHeader({ id, num, eyebrow, h1Left, h1Accent, lede, bg = 'var(--bg-subtle)' }) {
  return (
    <div id={id} style={{
      background: bg,
      padding: '72px 0 60px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container>
        <div className="svc-header" style={{
          display: 'grid',
          gridTemplateColumns: '1.45fr 0.75fr',
          gap: 52, alignItems: 'end',
        }}>
          <Reveal>
            <SvcNum n={num} />
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--ds-forest)', marginBottom: 14,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 22, height: 1.5, background: 'var(--ds-forest)', display: 'inline-block' }} />
              {eyebrow}
            </div>
            <h2 style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 900,
              fontSize: 'clamp(32px, 4.2vw, 54px)',
              lineHeight: 1.04, letterSpacing: '-0.028em',
              color: 'var(--ds-ink)', margin: 0, textWrap: 'balance',
            }}>
              {h1Left}{' '}
              <span style={{ color: 'var(--ds-green)' }}>{h1Accent}</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="svc-lede" style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 16,
              lineHeight: 1.7, color: 'var(--ds-ink-60)',
              margin: 0, paddingLeft: 24,
              borderLeft: '2px solid var(--ds-ink-12)',
              textWrap: 'pretty',
            }}
              dangerouslySetInnerHTML={{ __html: lede }}
            />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}

function DarkBand({ id, overline, h2, soft, pillars }) {
  return (
    <div id={id} style={{
      background: 'var(--ds-forest)',
      padding: '56px 0 60px',
    }}>
      <Container>
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--ds-green)', marginBottom: 10,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 22, height: 1.5, background: 'var(--ds-green)', display: 'inline-block' }} />
              {overline}
            </div>
            <h3 style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700,
              fontSize: 'clamp(24px, 2.6vw, 34px)',
              lineHeight: 1.12, letterSpacing: '-0.018em',
              color: '#fff', margin: 0,
            }}>
              {h2}{' '}
              <span style={{ color: 'rgba(255,255,255,.52)', fontWeight: 300 }}>{soft}</span>
            </h3>
          </div>
        </Reveal>

        <div className="pillars-grid" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${pillars.length}, 1fr)`,
          gap: 0,
        }}>
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div style={{
                paddingRight: i < pillars.length - 1 ? 28 : 0,
                marginRight: i < pillars.length - 1 ? 28 : 0,
                borderRight: i < pillars.length - 1 ? '1px solid rgba(255,255,255,.12)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                  fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'var(--ds-green)', marginBottom: 8,
                }}>{p.label}</div>
                <h4 style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                  fontSize: 17, lineHeight: 1.2, letterSpacing: '-0.012em',
                  color: '#fff', margin: '0 0 8px',
                }}>{p.title}</h4>
                <p style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 14,
                  lineHeight: 1.6, color: 'rgba(255,255,255,.72)',
                  margin: 0,
                }}>{p.desc}</p>
                {p.ref && (
                  <div style={{
                    marginTop: 14, fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                    fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.38)',
                  }}>{p.ref}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}

function FogSection({ overline, h2, soft, cards }) {
  return (
    <div style={{
      background: 'var(--bg-subtle)',
      padding: '56px 0 60px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container>
        <Reveal style={{ marginBottom: 36 }}>
          <Overline>{overline}</Overline>
          <h3 style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 2.6vw, 34px)',
            lineHeight: 1.12, letterSpacing: '-0.018em',
            color: 'var(--ds-ink)', margin: 0,
          }}>
            {h2}{' '}
            <span style={{ color: 'var(--ds-ink-30)', fontWeight: 300 }}>{soft}</span>
          </h3>
        </Reveal>

        <div className="what-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div style={{
                background: '#fff',
                borderRadius: 14,
                padding: '20px 18px 22px',
                borderTop: '2px solid var(--ds-green)',
                boxShadow: '0 2px 6px rgba(27,30,28,.06)',
                display: 'flex', flexDirection: 'column', gap: 7,
              }}>
                {c.icon && (
                  <div style={{ color: 'var(--ds-forest)', width: 22, height: 22 }}
                    dangerouslySetInnerHTML={{ __html: c.icon }} />
                )}
                <div style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                  fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase',
                  color: 'var(--ds-forest)',
                }}>{c.label}</div>
                <h4 style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                  fontSize: 15, lineHeight: 1.25, letterSpacing: '-0.008em',
                  color: 'var(--ds-ink)', margin: 0,
                }}>{c.title}</h4>
                <p style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 13,
                  lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0,
                }}>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}

function StepsSection({ blockLabel, steps, extra }) {
  return (
    <div style={{
      background: '#fff',
      padding: '52px 0 64px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container>
        <Reveal>
          <div style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700,
            fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase',
            color: 'var(--ds-forest)', marginBottom: 24,
          }}>{blockLabel}</div>
        </Reveal>
        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 28, alignItems: 'start',
        }}>
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} style={{ position: 'relative' }}>
              <div style={{
                display: 'inline-block',
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
                letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--ds-forest)',
                background: 'rgba(81,174,123,.10)',
                padding: '4px 14px', borderRadius: 999, marginBottom: 12,
              }}>{s.pill}</div>
              <h4 style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.014em',
                color: 'var(--ds-ink)', margin: '0 0 8px',
              }}>{s.title}</h4>
              <p style={{
                fontFamily: 'Roboto, sans-serif', fontSize: 14,
                lineHeight: 1.6, color: 'var(--ds-ink-60)', margin: 0,
              }}>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="step-connector" style={{
                  position: 'absolute', top: 8, right: -18,
                }}>
                  <ArrowRight />
                </div>
              )}
            </Reveal>
          ))}
        </div>
        {extra}
      </Container>
    </div>
  );
}

// ─── SERVICE 01 — BUILD ───────────────────────────────────────────────────────
function BuildService() {
  const pillars = [
    {
      label: '01 · Discovery',
      title: 'Ground the idea',
      desc: 'Collaborative sessions define the problem, map user needs, and produce a technical blueprint — so development starts with clarity, not guesswork.',
      ref: 'Blueprint · Requirements · Architecture · UI/UX',
    },
    {
      label: '02 · Build',
      title: 'Ship in cycles',
      desc: 'A dedicated pod delivers working software in focused cycles. Weekly demos keep you in the loop and progress measurable.',
      ref: 'Working software · Weekly demos',
    },
    {
      label: '03 · Scale',
      title: 'Grow the team',
      desc: 'Once validated, transition to a dedicated team through Global Staffing across LATAM and Asia, or continue with ongoing maintenance and features.',
      ref: 'Dedicated team · Maintenance · Roadmap',
    },
  ];

  const whatCards = [
    {
      label: 'AI-powered',
      title: 'AI Products',
      desc: 'LLM integrations, speech recognition, and generative AI pipelines.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="m12 3 1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>`,
    },
    {
      label: 'SaaS',
      title: 'Web Platforms',
      desc: 'SaaS applications, self-service tools, and admin portals.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    },
    {
      label: 'iOS / Android',
      title: 'Native Mobile Apps',
      desc: 'Swift, Kotlin, and React Native with modern architectures.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>`,
    },
    {
      label: 'Internal',
      title: 'Automation & Tools',
      desc: 'Support workflows, data pipelines, and operational dashboards.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>`,
    },
  ];

  const engagements = [
    { name: 'Proof of Concept', weeks: '1–4 weeks', desc: 'Validate technical feasibility before committing to a full build.' },
    { name: 'MVP',              weeks: '4–12 weeks', desc: 'Ship core features to real users for market validation.' },
    { name: 'Production-Ready', weeks: '12–20 weeks', desc: 'Enterprise-grade deployment with hardened infrastructure and scale-ready architecture.' },
  ];

  return (
    <>
      <SectionHeader
        id="build"
        num="01"
        eyebrow="AI & Product Engineering"
        h1Left="Your strategic build partner for"
        h1Accent="AI-powered products."
        lede={`Dedicated project pods deliver working software in focused cycles, with weekly demos. <strong>AI is used where it improves speed, quality, or usability — not as a gimmick.</strong> We pair consulting-style discovery with hands-on engineering delivery.`}
      />
      <DarkBand
        id="process"
        overline="How we work"
        h2="Discovery, build, scale."
        soft="Clarity before code."
        pillars={pillars}
      />
      <FogSection
        overline="What we build"
        h2="From AI products to"
        soft="the tools that run your business."
        cards={whatCards}
      />
      <div style={{ background: '#fff', padding: '52px 0 64px', borderBottom: '1px solid var(--ds-ink-06)' }}>
        <Container>
          <Reveal>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
              letterSpacing: '.16em', textTransform: 'uppercase',
              color: 'var(--ds-forest)', marginBottom: 22,
            }}>Engagement types</div>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={i * 60}>
                <div className="eng-grid" style={{
                  display: 'grid', gridTemplateColumns: '200px 1fr',
                  gap: 20, alignItems: 'center',
                  border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 22px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span style={{
                      fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                      fontSize: 15, letterSpacing: '-0.01em', color: 'var(--ds-forest)',
                    }}>{e.name}</span>
                    <span style={{
                      fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                      fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase',
                      color: 'var(--ds-green)',
                    }}>{e.weeks}</span>
                  </div>
                  <p style={{
                    fontFamily: 'Roboto, sans-serif', fontSize: 14,
                    lineHeight: 1.55, color: 'var(--ds-ink)', margin: 0,
                  }}>{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{
            fontFamily: 'Roboto, sans-serif', fontSize: 12,
            color: 'var(--fg-subtle)', margin: '14px 0 0', fontStyle: 'italic',
          }}>
            All timelines subject to refinement based on scope, complexity, and client readiness.
          </p>
        </Container>
      </div>
    </>
  );
}

// ─── SERVICE 02 — OPERATE ─────────────────────────────────────────────────────
function OperateService() {
  const pillars = [
    {
      label: 'We advise',
      title: 'The right AI, in the right place',
      desc: 'A strategy session identifies where AI creates real leverage. Not every problem needs an agent. We help you find the ones that do.',
    },
    {
      label: 'We build',
      title: 'Custom solutions for your operations',
      desc: 'Automations, integrations, and AI agents connected to your real systems and data. Each scoped to a specific, measurable outcome.',
    },
    {
      label: 'We operate',
      title: 'One managed layer, every company',
      desc: 'We run and maintain everything we build. One partner managing the full operational layer, across all of your holdings.',
    },
  ];

  const whatCards = [
    {
      label: 'Operations',
      title: 'Procurement, logistics & vendor management',
      desc: 'Automated and monitored end to end.',
    },
    {
      label: 'Customer ops',
      title: 'Renewals, escalations & account health',
      desc: 'Surfaced before they become problems.',
    },
    {
      label: 'Finance & compliance',
      title: 'Approvals, audit trails & reporting',
      desc: 'Answers in minutes, not weeks.',
    },
    {
      label: 'Knowledge & people',
      title: 'Onboarding & institutional knowledge',
      desc: 'Knowledge that survives turnover.',
    },
  ];

  const managedFeatures = [
    {
      title: 'Always on',
      desc: "Your agents don't go down when the underlying AI model does.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>`,
    },
    {
      title: 'We watch the outputs',
      desc: 'We catch degraded behavior and drift before your team does.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>`,
    },
    {
      title: 'Always current',
      desc: 'New models and capabilities are delivered through a gated upgrade process.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`,
    },
  ];

  const steps = [
    { pill: '01 · Assess',  title: 'Working Session',     desc: 'A focused session to map your operations and identify where AI creates real, measurable leverage.' },
    { pill: '02 · Build',   title: 'Focused Engagement',  desc: 'A two-week build delivering a working solution on your real data and operations.' },
    { pill: '03 · Partner', title: 'Ongoing Partnership', desc: 'We operate everything we build, and extend to new areas as your needs grow.' },
  ];

  return (
    <>
      <SectionHeader
        id="operate"
        num="02"
        eyebrow="AI Consultancy & Managed Agents"
        h1Left="You don't need"
        h1Accent="an internal AI ops team."
        lede={`We work alongside your team to identify the right opportunities, build the solutions, and operate them long-term. <strong>No internal AI team required.</strong> You focus on the business. We handle the rest.`}
        bg="#fff"
      />
      <DarkBand
        overline="How we engage"
        h2="We advise, build, and operate."
        soft="One managed layer."
        pillars={pillars}
      />
      <FogSection
        overline="What we deliver"
        h2="Practical AI applied to"
        soft="the operations that matter."
        cards={whatCards}
      />
      <div style={{ background: '#fff', padding: '52px 0 64px', borderBottom: '1px solid var(--ds-ink-06)' }}>
        <Container>
          <Reveal>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
              letterSpacing: '.16em', textTransform: 'uppercase',
              color: 'var(--ds-forest)', marginBottom: 24,
            }}>Fully managed · Try it, pilot it, go managed</div>
          </Reveal>

          <div className="what-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16, marginBottom: 36,
          }}>
            {managedFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div style={{
                  background: 'var(--bg-subtle)', borderRadius: 14,
                  padding: '20px 18px 22px',
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                  <div style={{ color: 'var(--ds-forest)' }} dangerouslySetInnerHTML={{ __html: f.icon }} />
                  <h4 style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 15,
                    letterSpacing: '-0.01em', color: 'var(--ds-ink)', margin: 0,
                  }}>{f.title}</h4>
                  <p style={{
                    fontFamily: 'Roboto, sans-serif', fontSize: 13,
                    lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0,
                  }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="steps-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28, alignItems: 'start',
          }}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} style={{ position: 'relative' }}>
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
                  letterSpacing: '.16em', textTransform: 'uppercase',
                  color: 'var(--ds-forest)', background: 'rgba(81,174,123,.10)',
                  padding: '4px 14px', borderRadius: 999, marginBottom: 12,
                }}>{s.pill}</div>
                <h4 style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                  fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.014em',
                  color: 'var(--ds-ink)', margin: '0 0 8px',
                }}>{s.title}</h4>
                <p style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 14,
                  lineHeight: 1.6, color: 'var(--ds-ink-60)', margin: 0,
                }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="step-connector" style={{ position: 'absolute', top: 8, right: -18 }}>
                    <ArrowRight />
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div style={{
              marginTop: 32, padding: '16px 22px',
              background: 'rgba(81,174,123,.06)',
              border: '1px solid rgba(81,174,123,.18)',
              borderRadius: 12,
              fontFamily: 'Roboto, sans-serif', fontSize: 14,
              lineHeight: 1.6, color: 'var(--ds-forest)',
            }}>
              <strong style={{ fontWeight: 600 }}>Your data stays isolated, per company, always yours.</strong>{' '}
              Each engagement is scoped, contained, and portable. No lock-in. No shared infrastructure between clients.
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}

// ─── SERVICE 03 — GOVERN ─────────────────────────────────────────────────────
function GovernService() {
  const pillars = [
    {
      label: 'Catalog',
      title: 'Asset Catalog',
      desc: 'A central registry of every AI asset. Nothing reaches production without an entry and a declared owner.',
    },
    {
      label: 'Review',
      title: 'Review Workflow',
      desc: 'Draft, review, approval, and activation are separate stages. Every output has a history.',
    },
    {
      label: 'Security',
      title: 'Security Layer',
      desc: 'Every connection is declared and logged. Auditable at any time, revocable in seconds.',
    },
    {
      label: 'Training',
      title: 'Training Portal',
      desc: 'Approved tools, required training, and guided templates before any asset enters review.',
    },
    {
      label: 'Measure',
      title: 'KPI Dashboard',
      desc: 'Hours saved per week, asset maturity score, adoption by team, and ROI by business unit.',
    },
  ];

  const benefits = [
    {
      title: 'Reduce risk',
      desc: 'No ungoverned assets reaching production without review, audit, or declared dependencies.',
    },
    {
      title: 'Create accountability',
      desc: 'Every output has an owner, a review history, and declared connections.',
    },
    {
      title: 'Accelerate adoption',
      desc: 'Employees get a clear, trained path. Governance enables speed, not friction.',
    },
    {
      title: 'Measure impact',
      desc: 'Per-asset baselines show what AI is actually doing for the business, in real numbers.',
    },
    {
      title: 'Retain knowledge',
      desc: 'Assets and access transfer cleanly when owners move on or teams change.',
    },
    {
      title: 'Scale with control',
      desc: 'Every new AI tool follows the same governed review model — no exceptions.',
    },
  ];

  const steps = [
    { pill: '01 · Identify', title: 'Pick one asset',    desc: 'One real AI asset your team already wants to build or govern, with a measurable baseline.' },
    { pill: '02 · Govern',   title: 'Define the path',   desc: 'Catalog it, define its review path, and declare its connections and owners.' },
    { pill: '03 · Measure',  title: 'Roll it out',       desc: 'Track it live on the dashboard, then apply the same model across all teams.' },
  ];

  return (
    <>
      <SectionHeader
        id="govern"
        num="03"
        eyebrow="AI Governance as a Service"
        h1Left="Your teams build with AI."
        h1Accent="Nobody is governing it."
        lede={`Most of it is invisible: no owner, no review, no audit trail, no measurement. We give your company a complete operating model to govern every AI asset. <strong>One model. Every team. Full visibility.</strong>`}
      />
      <DarkBand
        overline="The operating model"
        h2="Five pillars."
        soft="One governed path to production."
        pillars={pillars}
      />

      {/* Benefits section */}
      <div style={{ background: 'var(--bg-subtle)', padding: '56px 0 60px', borderBottom: '1px solid var(--ds-ink-06)' }}>
        <Container>
          <Reveal style={{ marginBottom: 36 }}>
            <Overline>Why it matters</Overline>
            <h3 style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700,
              fontSize: 'clamp(24px, 2.6vw, 34px)',
              lineHeight: 1.12, letterSpacing: '-0.018em',
              color: 'var(--ds-ink)', margin: 0,
            }}>
              Reduce risk, create accountability,{' '}
              <span style={{ color: 'var(--ds-ink-30)', fontWeight: 300 }}>measure real impact.</span>
            </h3>
          </Reveal>
          <div className="benefit-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px 32px',
          }}>
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div style={{ position: 'relative', paddingLeft: 16 }}>
                  <div style={{
                    position: 'absolute', left: 0, top: 4, bottom: 4,
                    width: 2, borderRadius: 2, background: 'var(--ds-green)',
                  }} />
                  <h4 style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                    fontSize: 15, letterSpacing: '-0.008em',
                    color: 'var(--ds-ink)', margin: '0 0 4px',
                  }}>{b.title}</h4>
                  <p style={{
                    fontFamily: 'Roboto, sans-serif', fontSize: 13,
                    lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0,
                  }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <StepsSection
        blockLabel="Start with one pilot asset · prove the model"
        steps={steps}
      />
    </>
  );
}

Object.assign(window, { BuildService, OperateService, GovernService });
