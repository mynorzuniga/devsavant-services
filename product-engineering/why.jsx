// Why DevSavant section: social proof metrics + 4 differentiator cards.

function WhyDevSavant() {
  const metrics = [
    { value: '12+',    label: 'Agents in production' },
    { value: '99.9%',  label: 'Agent uptime SLA' },
    { value: '2 wks',  label: 'To your first working agent' },
    { value: '180+',   label: 'Automated workflows' },
  ];

  const differentiators = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      title: 'Discovery-first delivery',
      desc: "We don't write a line of code until we understand the problem. Upfront clarity prevents expensive rework and keeps PoC quality consistent with production.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
      title: 'Senior leadership on every engagement',
      desc: 'No juniors running your critical projects. Senior engineers and product leads are present from kickoff through delivery — not just during sales.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
      title: 'One partner, full lifecycle',
      desc: 'Build it. Operate it. Govern it. You never hand off to a different vendor mid-journey. DevSavant carries the context across every phase.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
      title: 'LATAM & Asia talent network',
      desc: "Access a vetted, senior global talent pool through Savant Growth — DevSavant's staffing arm. Scale your team without scaling overhead.",
    },
  ];

  return (
    <section id="why" style={{
      background: 'var(--bg-subtle)',
      padding: '88px 0 96px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container>
        <Reveal style={{ marginBottom: 60 }}>
          <Overline>Why DevSavant</Overline>
          <h2 style={{
            ...H2,
            fontSize: 'clamp(30px, 3.8vw, 50px)',
            maxWidth: '18ch', marginBottom: 18,
          }}>
            An embedded team that{' '}
            <span style={{ color: 'var(--ds-green)' }}>owns outcomes.</span>
          </h2>
          <p style={{
            ...BodyLg, fontSize: 16, color: 'var(--ds-ink-60)',
            maxWidth: 540, textWrap: 'pretty', margin: 0,
          }}>
            We measure ourselves by what you ship and operate — not by hours logged.
          </p>
        </Reveal>

        {/* Social proof metrics */}
        <div className="metrics-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16, marginBottom: 56,
        }}>
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div style={{
                background: '#fff',
                borderRadius: 18, padding: '28px 24px 26px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(27,30,28,.04)',
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <div style={{
                  fontFamily: 'Mulish, sans-serif', fontWeight: 900,
                  fontSize: 'clamp(32px, 3.6vw, 44px)',
                  lineHeight: 1, letterSpacing: '-0.03em',
                  color: 'var(--ds-forest)',
                }}>{m.value}</div>
                <div style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 14,
                  lineHeight: 1.4, color: 'var(--ds-ink-60)',
                }}>{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Differentiators */}
        <div className="why-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div style={{
                background: '#fff',
                borderRadius: 18, padding: '28px 26px 26px',
                border: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(81,174,123,.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--ds-forest)',
                }} dangerouslySetInnerHTML={{ __html: d.icon }} />
                <div>
                  <h4 style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                    fontSize: 18, letterSpacing: '-0.012em',
                    color: 'var(--ds-ink)', margin: '0 0 8px',
                  }}>{d.title}</h4>
                  <p style={{
                    fontFamily: 'Roboto, sans-serif', fontSize: 15,
                    lineHeight: 1.65, color: 'var(--ds-ink-60)', margin: 0,
                  }}>{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { WhyDevSavant });
