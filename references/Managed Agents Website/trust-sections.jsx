/* ============================================================
   Trust / commercial sections:
   - Ownership & security
   - Pricing
   - Why DevSavant
   ============================================================ */

// ----- Ownership -----
function Ownership() {
  const cards = [
    {
      t: 'You own what matters',
      d: "Your data, your agent's memory, and its configuration are yours — exportable any time you ask.",
      icon: 'box',
    },
    {
      t: 'Never locked in',
      d: 'Built on open-source OpenClaw — you are never trapped with us.',
      icon: 'lock-open',
    },
    {
      t: 'Isolated by default',
      d: "A dedicated environment per client. Your data never comingles with another company's.",
      icon: 'shield',
    },
    {
      t: 'Secured in depth',
      d: 'A five-layer security architecture — network edge, TLS, role-based access, strict command policy, locked-down extensions.',
      icon: 'layers',
    },
  ];

  return (
    <section style={{
      background: '#fff', padding: '120px 0',
      borderTop: '1px solid var(--ds-ink-06)',
    }}>
      <Container max={1180}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Overline>Ownership &amp; security</Overline>
          <h2 style={{ ...H2, maxWidth: 820, margin: '8px auto 0' }}>
            It's your agent. Your data. Always.
          </h2>
          <p style={{
            ...BodyLg, maxWidth: 720, margin: '20px auto 0',
            textAlign: 'center',
          }}>
            We host and run your agent, but the parts that matter stay yours.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18,
        }}>
          {cards.map(c => <TrustCard key={c.t} {...c} />)}
        </div>

        <div style={{
          marginTop: 32,
          background: 'linear-gradient(180deg, #0E2B1C 0%, #082B1B 100%)',
          borderRadius: 18,
          padding: '26px 30px',
          display: 'flex', gap: 18, alignItems: 'center',
          flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 24px 56px rgba(13,68,42,.28)',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', right: -20, top: -20, opacity: .10, pointerEvents: 'none',
          }}>
            <Isotype size={160} color="#fff" />
          </div>
          <span style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'rgba(168,224,192,.14)',
            border: '1px solid rgba(168,224,192,.30)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, position: 'relative',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3 L19 6 V12 C19 16, 15.5 19, 12 21 C8.5 19, 5 16, 5 12 V6 Z"
                stroke="#A8E0C0" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 12 L11 14 L15.5 9.5"
                stroke="#A8E0C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div style={{ flex: 1, minWidth: 220, position: 'relative' }}>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 14.5,
              color: '#fff',
            }}>Built on open-source OpenClaw.</div>
            <div style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,.72)',
              marginTop: 3,
            }}>If we stop, you keep going. Export your agent, memory, and configuration on request.</div>
          </div>
          <Pill variant="outline-white" size="sm" href="#" arrow>Read the security overview</Pill>
        </div>
      </Container>
    </section>
  );
}

function TrustCard({ t, d, icon }) {
  const [hover, setHover] = React.useState(false);
  const s = { stroke: 'var(--ds-forest)', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const svg = {
    box: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8 L12 4 L20 8 V16 L12 20 L4 16 Z" {...s} />
        <path d="M4 8 L12 12 L20 8 M12 12 V20" {...s} />
      </svg>
    ),
    'lock-open': (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="11" width="14" height="9" rx="2" {...s} />
        <path d="M8 11 V8 A4 4 0 0 1 16 8" {...s} />
      </svg>
    ),
    shield: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 L19 6 V12 C19 16, 15.5 19, 12 21 C8.5 19, 5 16, 5 12 V6 Z" {...s} />
      </svg>
    ),
    layers: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 L20 8 L12 12 L4 8 Z" {...s} />
        <path d="M4 12 L12 16 L20 12 M4 16 L12 20 L20 16" {...s} />
      </svg>
    ),
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--ds-ink-06)',
        borderRadius: 14,
        padding: '24px 22px 22px',
        boxShadow: hover ? '0 14px 32px rgba(13,68,42,.08)' : '0 2px 10px rgba(13,68,42,.04)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'all 200ms cubic-bezier(.2,.7,.1,1)',
      }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'var(--ds-green-12)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14,
      }}>{svg[icon]}</div>
      <div style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 17,
        color: 'var(--ds-ink)', margin: '0 0 6px', lineHeight: 1.25,
      }}>{t}</div>
      <p style={{
        fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55,
        color: 'var(--ds-ink-90)', margin: 0,
      }}>{d}</p>
    </div>
  );
}

// ----- Pricing -----
function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--ds-fog)', padding: '120px 0' }}>
      <Container max={1180}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Overline>Pricing</Overline>
          <h2 style={{ ...H2, maxWidth: 820, margin: '8px auto 0' }}>
            Simple, predictable pricing.
          </h2>
          <p style={{ ...BodyLg, maxWidth: 640, margin: '20px auto 0', textAlign: 'center' }}>
            One pilot. One subscription. Custom work by the hour. A frontier model is included.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 22,
          alignItems: 'stretch',
        }}>
          <PriceCard
            kicker="Start here"
            name="Pilot"
            price="$3,000"
            unit="one-time"
            credit="Credited to your first month if you continue."
            bullets={[
              'Custom agent for your real use case',
              'Built and run for ~2 weeks',
              'Test on your terms — no lock-in',
              'Includes the full operations layer',
            ]}
            cta={{ label: 'Start a pilot', variant: 'outline-dark' }}
          />

          <PriceCard
            highlight
            kicker="Most clients"
            name="Managed subscription"
            price="From $4,500"
            unit="per agent / month"
            credit="Fully managed. Hosting, monitoring, updates, SLA-backed support."
            bullets={[
              'Dedicated, private, isolated agent',
              '24/7 monitoring &amp; auto-recovery',
              'Tested-and-gated upgrades',
              'Frontier model included — no per-token surprises',
              'SLA-backed support &amp; named contact',
            ]}
            cta={{ label: 'Book a 20-minute demo', variant: 'solid-green' }}
          />

          <PriceCard
            kicker="When you need it"
            name="New capabilities"
            price="$175"
            unit="per hour"
            credit="New integrations and custom capabilities, on request."
            bullets={[
              'New tool integrations',
              'New workflows &amp; agent behaviors',
              'Specialized sub-agents (sales, support, ops)',
              'Estimated and approved up front',
            ]}
            cta={{ label: 'Request a capability', variant: 'outline-dark' }}
          />
        </div>

        <div style={{
          marginTop: 28,
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif', fontSize: 13,
          color: 'var(--ds-ink-60)',
        }}>
          Runs on a frontier AI model, included — no surprise per-token bills.
          Prefer a specific model? Available, billed at usage.
          <br/>
          <span style={{ color: 'var(--ds-ink-30)' }}>
            (Pricing proposed; pending internal sign-off before publish.)
          </span>
        </div>
      </Container>
    </section>
  );
}

function PriceCard({ kicker, name, price, unit, credit, bullets, cta, highlight }) {
  return (
    <div style={{
      background: highlight ? 'linear-gradient(180deg, #0E2B1C 0%, #082B1B 100%)' : '#fff',
      color: highlight ? '#fff' : 'var(--ds-ink)',
      borderRadius: 18,
      padding: '34px 30px 32px',
      border: highlight ? 'none' : '1px solid var(--ds-ink-06)',
      boxShadow: highlight
        ? '0 30px 60px rgba(13,68,42,.30)'
        : '0 6px 20px rgba(13,68,42,.06)',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      {highlight && (
        <div aria-hidden="true" style={{
          position: 'absolute', top: -30, right: -30, opacity: .12,
        }}>
          <Isotype size={180} color="#fff" />
        </div>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8,
      }}>
        <span style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
          letterSpacing: '.16em', textTransform: 'uppercase',
          color: highlight ? '#A8E0C0' : 'var(--ds-green)',
        }}>{kicker}</span>
        {highlight && (
          <span style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: '#082B1B', background: '#A8E0C0',
            padding: '3px 8px', borderRadius: 999,
          }}>Recommended</span>
        )}
      </div>
      <h3 style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700,
        fontSize: 22, letterSpacing: '-.01em', margin: 0,
        color: highlight ? '#fff' : 'var(--ds-ink)',
      }}>{name}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
        <span style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 42,
          letterSpacing: '-.02em',
          color: highlight ? '#fff' : 'var(--ds-forest)',
        }}>{price}</span>
        <span style={{
          fontFamily: 'Roboto, sans-serif', fontSize: 13,
          color: highlight ? 'rgba(255,255,255,.7)' : 'var(--ds-ink-60)',
        }}>{unit}</span>
      </div>
      <p style={{
        fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55,
        margin: '12px 0 22px',
        color: highlight ? 'rgba(255,255,255,.78)' : 'var(--ds-ink-60)',
      }}>{credit}</p>

      <ul style={{
        listStyle: 'none', padding: 0, margin: 0, flex: 1,
        display: 'flex', flexDirection: 'column', gap: 8, position: 'relative',
      }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex', gap: 10, alignItems: 'flex-start',
            fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.5,
            color: highlight ? 'rgba(255,255,255,.92)' : 'var(--ds-ink-90)',
          }}>
            <span style={{ flexShrink: 0, marginTop: 3 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7.3 L5.4 9.7 L11 4"
                  stroke={highlight ? '#A8E0C0' : 'var(--ds-green)'}
                  strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span dangerouslySetInnerHTML={{ __html: b }} />
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 26, position: 'relative' }}>
        <Pill
          variant={highlight ? 'solid-green' : cta.variant}
          size="md"
          href="#demo"
          arrow
          style={highlight ? { width: '100%', justifyContent: 'center' } : { width: '100%', justifyContent: 'center' }}
        >{cta.label}</Pill>
      </div>
    </div>
  );
}

// ----- Why DevSavant -----
function WhyDevSavant() {
  return (
    <section style={{
      background: '#fff', padding: '120px 0 100px',
      borderTop: '1px solid var(--ds-ink-06)',
    }}>
      <Container max={1080}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <Overline>Why DevSavant</Overline>
        </div>
        <h2 style={{
          ...H2, textAlign: 'center', maxWidth: 880, margin: '0 auto 28px',
        }}>
          We don't just deploy agents. <span style={{ color: 'var(--ds-green)' }}>We run them.</span>
        </h2>
        <p style={{
          ...BodyLg, textAlign: 'center', maxWidth: 760, margin: '0 auto 56px',
        }}>
          We've operated AI agents in production since early 2026 — including our own
          business. We built the proprietary system that makes <em>managed</em> agents
          actually work: versioned components, automated drift detection, gated upgrades,
          and a pipeline that keeps every agent current with a field that changes daily.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 18,
          marginBottom: 44,
        }}>
          <ProofCard k="Since" v="Early 2026" d="Running agents in production, including our own." />
          <ProofCard k="Built" v="The Ops layer" d="Versioned components. Drift detection. Gated upgrades." />
          <ProofCard k="Anchored in" v="LATAM + Asia" d="Senior talent across product, AI, and engineering." />
          <ProofCard k="Part of" v="Savant Growth" d="A boutique product-engineering ecosystem." />
        </div>

        <div style={{
          background: 'var(--ds-fog)',
          borderRadius: 18,
          padding: '32px 32px',
          textAlign: 'center',
          maxWidth: 760, margin: '0 auto',
        }}>
          <p style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700,
            fontSize: 'clamp(20px, 1.8vw, 24px)',
            lineHeight: 1.3, letterSpacing: '-.01em',
            color: 'var(--ds-forest)', margin: 0, textWrap: 'balance',
          }}>
            You're not buying an agent. You're buying the team and the system that keep it excellent.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ProofCard({ k, v, d }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--ds-ink-06)',
      borderRadius: 14,
      padding: '20px 22px',
    }}>
      <div style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 11,
        letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--ds-ink-60)', marginBottom: 6,
      }}>{k}</div>
      <div style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 22,
        letterSpacing: '-.01em', color: 'var(--ds-forest)', lineHeight: 1.1,
      }}>{v}</div>
      <p style={{
        fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.5,
        color: 'var(--ds-ink-60)', margin: '8px 0 0',
      }}>{d}</p>
    </div>
  );
}

Object.assign(window, { Ownership, Pricing, WhyDevSavant });
