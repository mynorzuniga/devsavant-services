/* ============================================================
   Problem · Five Pillars · Security
   ============================================================ */

// Shared line icon (lucide-style, stroke 2)
function Ico({ name, size = 22, color = 'var(--ds-forest)', sw = 1.7 }) {
  const p = { fill: 'none', stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    catalog: <><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" {...p}/><path d="M8 3v18M12 8h5M12 12h5M12 16h5" {...p}/></>,
    check: <><path d="M9 12l2 2 4-4" {...p}/><circle cx="12" cy="12" r="9" {...p}/></>,
    shield: <><path d="M12 3 19 6 V12 C19 16 15.5 19 12 21 C8.5 19 5 16 5 12 V6 Z" {...p}/><path d="M9 12 11 14 15 10" {...p}/></>,
    grad: <><path d="M22 10 12 5 2 10l10 5 10-5z" {...p}/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" {...p}/></>,
    chart: <><path d="M3 3v18h18" {...p}/><path d="M7 15l3-4 3 2 4-6" {...p}/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7" {...p}/></>,
    key: <><circle cx="8" cy="15" r="4" {...p}/><path d="M10.8 12.2 20 3M16 7l3 3M14 9l2 2" {...p}/></>,
    log: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...p}/><polyline points="14 2 14 8 20 8" {...p}/><path d="M16 13H8M16 17H8M10 9H8" {...p}/></>,
    revoke: <><circle cx="12" cy="12" r="9" {...p}/><path d="M5.6 5.6 18.4 18.4" {...p}/></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" {...p}/><path d="M8 11V7a4 4 0 0 1 8 0v4" {...p}/></>,
    transfer: <><path d="M16 3l4 4-4 4M20 7H8M8 21l-4-4 4-4M4 17h12" {...p}/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" {...p}/><circle cx="9" cy="7" r="4" {...p}/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" {...p}/></>,
    doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...p}/><polyline points="14 2 14 8 20 8" {...p}/></>,
    sliders: <><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" {...p}/></>,
    ban: <><circle cx="12" cy="12" r="9" {...p}/><path d="M5.6 5.6 18.4 18.4" {...p}/></>,
    search: <><circle cx="11" cy="11" r="7" {...p}/><path d="M21 21l-4.3-4.3" {...p}/></>,
    route: <><circle cx="6" cy="19" r="3" {...p}/><circle cx="18" cy="5" r="3" {...p}/><path d="M9 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8" {...p}/></>,
    flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" {...p}/><path d="M7 16h10" {...p}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

// ----- Problem -----
function Problem() {
  return (
    <section style={{ background: '#fff', padding: '92px 0 84px' }}>
      <Container max={1180}>
        <Reveal>
          <Overline>The problem</Overline>
        </Reveal>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)',
          gap: 56, alignItems: 'start', marginTop: 4,
        }}>
          <Reveal>
            <h2 style={{ ...H2, maxWidth: 560 }}>
              Ungoverned AI is already<br/>in your systems.
            </h2>
            <p style={{ ...BodyLg, fontSize: 19, margin: '24px 0 0', maxWidth: 600 }}>
              Your teams are building with AI. Most of it is invisible: no owner, no review,
              no audit trail, no measurement. When something breaks or someone leaves,
              no one knows what runs, what it touches, or whether it still should.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              padding: '28px 30px',
              background: 'var(--ds-forest)',
              borderRadius: 18, color: '#fff',
              boxShadow: '0 18px 44px rgba(13,68,42,.22)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden="true" style={{ position: 'absolute', right: -30, top: -30, opacity: .1 }}>
                <Isotype size={140} color="#fff" />
              </div>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
                letterSpacing: '.18em', textTransform: 'uppercase', color: '#A8E0C0', marginBottom: 14,
              }}>The real risk</div>
              <p style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                fontSize: 'clamp(20px, 2.1vw, 25px)', lineHeight: 1.3,
                letterSpacing: '-.01em', margin: 0, color: '#fff', textWrap: 'balance',
                position: 'relative',
              }}>
                It's not that your teams are building with AI. It's that they're building{' '}
                <span style={{ color: '#A8E0C0' }}>without governance</span>. That gap widens every week.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ----- Five Pillars -----
function Pillars() {
  const pillars = [
    { ico: 'catalog', name: 'Approved Asset Catalog',
      desc: 'A central registry of every AI asset in the company: owner, purpose, systems touched, credential dependencies, review status, and support contact. Nothing reaches production without a catalog entry.' },
    { ico: 'check', name: 'Review & Publish Workflow',
      desc: 'Draft, review, approval, and activation are separate stages. AI-generated work does not become production work by default. Every asset moves through documented human review before it is activated.' },
    { ico: 'shield', name: 'Security & Credential Layer',
      desc: 'Every asset that touches a system must declare the connection, access level, and credential source. Access is logged, auditable, and revokable. Assets cannot connect to systems not pre-approved.' },
    { ico: 'grad', name: 'Training & Enablement Portal',
      desc: 'Employees start here. Before building, they complete training for the tools they want to use. The portal surfaces approved tools, usage guidelines, creation templates, and the intake path.' },
    { ico: 'chart', name: 'KPI Dashboard',
      desc: 'Real-time visibility into AI adoption and impact: hours saved, active assets, department distribution, asset maturity, run counts, failure rates, and ROI by business unit, all traceable to individual assets.' },
  ];
  return (
    <section id="pillars" style={{ background: 'var(--ds-fog)', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <Reveal>
          <Overline>The product</Overline>
          <h2 style={{ ...H2, maxWidth: 780 }}>
            Five pillars. <span style={{ color: 'var(--ds-ink-60)', fontWeight: 300 }}>One operating model.</span>
          </h2>
          <p style={{ ...BodyLg, maxWidth: 720, margin: '20px 0 0' }}>
            Everything an enterprise needs to govern AI assets from creation to production:
            security, training, review, catalog, and measurement, in a single connected system.
          </p>
        </Reveal>

        <div className="pillar-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 44,
        }}>
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} style={i === 4 ? { gridColumn: 'span 1' } : undefined}>
              <PillarCard {...p} n={String(i + 1).padStart(2, '0')} />
            </Reveal>
          ))}
          <Reveal delay={5 * 80} style={{ display: 'flex' }} className="pillar-cta">
            <div className="pillar-cta-inner" style={{
              flex: 1, borderRadius: 18, padding: '28px 28px',
              background: 'linear-gradient(135deg,#51AE7B 0%,#0D442A 100%)',
              color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 180, boxShadow: '0 14px 36px rgba(13,68,42,.20)',
            }}>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 21,
                lineHeight: 1.2, letterSpacing: '-.01em', textWrap: 'balance',
              }}>One connected system: from first draft to live ROI.</div>
              <a href="#demo" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18,
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 14,
                color: '#fff', textDecoration: 'none', borderBottom: 'none',
              }}>
                Book a demo <Ico name="arrow" size={16} color="#fff" sw={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PillarCard({ ico, name, desc, n }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff', borderRadius: 18, padding: '28px 26px 26px',
        height: '100%',
        boxShadow: hover ? '0 20px 48px rgba(13,68,42,.14)' : '0 8px 24px rgba(13,68,42,.08)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform 220ms cubic-bezier(.2,.7,.1,1), box-shadow 220ms',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{
          width: 46, height: 46, borderRadius: 12, background: 'var(--ds-green-12)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Ico name={ico} />
        </span>
        <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', color: 'var(--ds-green)' }}>{n}</span>
      </div>
      <h3 style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 19,
        lineHeight: 1.2, letterSpacing: '-.01em', color: 'var(--ds-ink)', margin: '0 0 10px',
      }}>{name}</h3>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--ds-ink-90)', margin: 0, textWrap: 'pretty' }}>{desc}</p>
    </div>
  );
}

// ----- Security -----
function Security() {
  const items = [
    { ico: 'arrow', t: 'Declared connections', d: 'Every asset declares which systems it connects to and whether each connection is read-only or can make changes, before review begins.' },
    { ico: 'key', t: 'Issued credentials', d: 'Credentials are issued through an approved process. Assets cannot self-provision access to systems.' },
    { ico: 'log', t: 'Full audit trail', d: 'All system access is logged with asset ID, owner, timestamp, and action type. Available to security and compliance teams.' },
    { ico: 'revoke', t: 'Revokable access', d: 'Access can be revoked at the asset level without touching the underlying system credentials.' },
    { ico: 'lock', t: 'Elevated review path', d: 'Assets that touch sensitive or classified data require an elevated review path with designated security approvers.' },
    { ico: 'transfer', t: 'Lifecycle hand-off', d: 'When an asset is deprecated or an owner leaves, access is transferred or terminated as part of the lifecycle. Never orphaned.' },
  ];
  return (
    <section id="security" style={{ background: '#fff', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.45fr)', gap: 56, alignItems: 'start',
        }}>
          <Reveal>
            <Overline>Security</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>
              Every connection declared. Every action logged.
            </h2>
            <p style={{ ...BodyLg, margin: '22px 0 0' }}>
              AI assets that connect to business systems carry real risk. The governance model
              treats every connection as a declared dependency, not an assumption.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="security-grid">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 60}>
                <div style={{
                  background: '#fff', border: '1px solid var(--ds-ink-06)', borderRadius: 14,
                  padding: '20px 20px 18px', height: '100%', boxShadow: '0 2px 10px rgba(13,68,42,.04)',
                }}>
                  <span style={{
                    width: 38, height: 38, borderRadius: 10, background: 'var(--ds-green-12)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                  }}>
                    <Ico name={it.ico} size={19} />
                  </span>
                  <div style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--ds-ink)', marginBottom: 6 }}>{it.t}</div>
                  <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ds-ink-60)', margin: 0, textWrap: 'pretty' }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Problem, Pillars, Security, Ico });
