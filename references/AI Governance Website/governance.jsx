/* ============================================================
   Governance layer (roles, code of conduct, permissions,
   allowed/forbidden actions) + a permissions matrix · Training
   ============================================================ */

function Governance() {
  const cards = [
    { ico: 'doc', t: 'Code of Conduct', d: 'Created, versioned, and distributed. Every team member knows what AI use is permitted, encouraged, or prohibited. In writing, not by assumption.' },
    { ico: 'users', t: 'Role monitoring', d: 'Owners, reviewers, and approvers are assigned per asset. All activity is logged against a named role, so accountability is never ambiguous.' },
    { ico: 'lock', t: 'Permissions', d: 'Access is scoped by role. No blanket credentials. Permissions are explicit, auditable, and revocable at any time, down to the individual asset.' },
    { ico: 'ban', t: 'Allowed & forbidden actions', d: 'Clear guardrails for every approved AI tool. Boundaries are defined once and enforced consistently across all teams.' },
  ];
  return (
    <section id="governance" style={{
      background: 'linear-gradient(180deg, #0E2B1C 0%, #082B1B 100%)',
      color: '#fff', padding: '108px 0 112px', position: 'relative', overflow: 'hidden',
    }}>
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .18 }}>
        <defs>
          <pattern id="gov-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0 H0 V48" stroke="rgba(168,224,192,.18)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gov-grid)" />
      </svg>

      <Container max={1180} style={{ position: 'relative' }}>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 56, alignItems: 'start', marginBottom: 52,
        }}>
          <Reveal>
            <Overline color="#A8E0C0">The governance layer</Overline>
            <h2 style={{ ...H2, color: '#fff', marginTop: 8, maxWidth: 720 }}>
              Roles, rules, and permissions:<br/>
              <span style={{ color: '#A8E0C0' }}>defined once, enforced everywhere.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} style={{ paddingTop: 42 }} className="gov-body-col">
            <p style={{ ...BodyLg, color: 'rgba(255,255,255,.86)', margin: 0, maxWidth: 700 }}>
              A catalog and a review queue only work if everyone knows the rules and who is
              accountable. The governance layer makes the human structure explicit: who may build,
              who reviews, who approves, and exactly what each role is allowed to do.
            </p>
            <p style={{ ...BodyLg, color: 'rgba(255,255,255,.86)', margin: '16px 0 0', maxWidth: 700 }}>
              It is the connective tissue behind every other pillar, and the part most AI rollouts skip.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'rgba(168,224,192,.18)', borderRadius: 16, overflow: 'hidden',
          border: '1px solid rgba(168,224,192,.18)', marginBottom: 22,
        }} className="gov-card-grid">
          {cards.map((c, i) => (
            <div key={c.t} style={{ background: 'rgba(13,68,42,.55)', padding: '26px 24px 26px', backdropFilter: 'blur(4px)' }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(168,224,192,.14)', border: '1px solid rgba(168,224,192,.30)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Ico name={c.ico} size={21} color="#A8E0C0" />
              </span>
              <div style={{ marginTop: 16, fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-.005em' }}>{c.t}</div>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.78)', margin: '8px 0 0', textWrap: 'pretty' }}>{c.d}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

// ----- Training & enablement -----
function Training() {
  const steps = [
    { n: '01', t: 'Discover approved tools', d: 'The portal shows only approved platforms. Employees see what is available and what each tool is authorized for.' },
    { n: '02', t: 'Complete required training', d: 'Tool-specific training is required before an employee can submit assets in that category. No exceptions.' },
    { n: '03', t: 'Build with guided templates', d: 'Creation templates guide through documentation, dependency declarations, and the review checklist, before submission.' },
    { n: '04', t: 'Submit for review', d: 'The intake assistant routes the asset to the right reviewers based on type, systems touched, and data classification.' },
  ];
  return (
    <section id="training" style={{ background: 'var(--ds-fog)', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <Reveal>
          <Overline>Training & enablement</Overline>
          <h2 style={{ ...H2, maxWidth: 760 }}>
            Governance that is accessible, <span style={{ color: 'var(--ds-ink-60)', fontWeight: 300 }}>not bureaucratic.</span>
          </h2>
          <p style={{ ...BodyLg, maxWidth: 720, margin: '20px 0 0' }}>
            Employees cannot build governed AI assets if they do not know the approved tools,
            the rules, or the intake process. The training layer makes governance part of the
            creation experience.
          </p>
        </Reveal>

        <div style={{ position: 'relative', marginTop: 48 }}>
          <div aria-hidden="true" className="train-line" style={{
            position: 'absolute', top: 26, left: 27, right: 'calc(25% - 44px)', height: 2,
            background: 'repeating-linear-gradient(to right, var(--ds-green-30) 0 6px, transparent 6px 12px)',
          }} />
          <div className="train-grid" style={{
            position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22,
          }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div>
                  <div style={{
                    width: 54, height: 54, borderRadius: '50%', background: '#fff',
                    border: '2px solid var(--ds-green)', color: 'var(--ds-forest)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 16,
                    boxShadow: '0 6px 18px rgba(13,68,42,.10)', marginBottom: 18,
                  }}>{s.n}</div>
                  <h3 style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 17.5, lineHeight: 1.2, letterSpacing: '-.01em', color: 'var(--ds-ink)', margin: '0 0 8px' }}>{s.t}</h3>
                  <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--ds-ink-90)', margin: 0, textWrap: 'pretty' }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Governance, Training });
