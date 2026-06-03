// PilotCTA + Footer sections.

// ─── Pilot CTA ────────────────────────────────────────────────────────────────
function PilotCTA() {
  const steps = [
    {
      num: '01',
      title: 'Book a discovery session',
      desc: 'A focused conversation to understand your goals, map your current state, and identify the highest-leverage starting point.',
    },
    {
      num: '02',
      title: 'We scope a pilot',
      desc: 'A tight, two-week engagement delivering a working solution on your real data — so you see results before committing.',
    },
    {
      num: '03',
      title: 'You decide what\'s next',
      desc: 'Keep building, move to managed operations, or govern what you\'ve already built. You choose the pace.',
    },
  ];

  return (
    <section id="contact" style={{
      position: 'relative',
      background: 'var(--ds-forest)',
      padding: '88px 0 96px',
      overflow: 'hidden',
    }}>
      {/* Dot-grid overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(81,174,123,.12) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <Container>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--ds-green)', marginBottom: 22,
            }}>
              <span style={{ width: 22, height: 1.5, background: 'var(--ds-green)', display: 'inline-block' }} />
              Start today
              <span style={{ width: 22, height: 1.5, background: 'var(--ds-green)', display: 'inline-block' }} />
            </div>

            <h2 style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 62px)',
              lineHeight: 1.04, letterSpacing: '-0.030em',
              color: '#fff', margin: '0 auto 22px',
              textWrap: 'balance', maxWidth: '18ch',
            }}>
              Start with one{' '}
              <span style={{ color: 'var(--ds-green)' }}>conversation.</span>
            </h2>

            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 18,
              lineHeight: 1.65, color: 'rgba(255,255,255,.70)',
              maxWidth: 540, margin: '0 auto 40px', textWrap: 'pretty',
            }}>
              From a single proof of concept to a fully governed, managed AI operation —
              you are never locked in. Every engagement starts with clarity.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Pill
                variant="solid-green"
                size="lg"
                href="mailto:product@devsavant.com?subject=Discovery Session Request"
                arrow
              >
                Book a discovery session
              </Pill>
              <Pill
                variant="outline-white"
                size="lg"
                href="https://devsavant.com"
              >
                Visit devsavant.com
              </Pill>
            </div>
          </Reveal>

          {/* 3-step process */}
          <div className="steps-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24, alignItems: 'start',
          }}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div style={{
                  background: 'rgba(255,255,255,.06)',
                  borderRadius: 18, padding: '26px 24px 28px',
                  border: '1px solid rgba(255,255,255,.10)',
                  position: 'relative',
                }}>
                  <div style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 900,
                    fontSize: 42, lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: 'rgba(81,174,123,.25)',
                    marginBottom: 12,
                  }}>{s.num}</div>
                  <h4 style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                    fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.012em',
                    color: '#fff', margin: '0 0 10px',
                  }}>{s.title}</h4>
                  <p style={{
                    fontFamily: 'Roboto, sans-serif', fontSize: 14,
                    lineHeight: 1.65, color: 'rgba(255,255,255,.62)', margin: 0,
                  }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact info bar */}
          <Reveal delay={200}>
            <div style={{
              marginTop: 48, padding: '20px 28px',
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 10, flexWrap: 'wrap',
              fontFamily: 'Mulish, sans-serif', fontSize: 14, fontWeight: 600,
              color: 'rgba(255,255,255,.55)',
              letterSpacing: '.04em',
            }}>
              <a href="mailto:product@devsavant.com" style={{
                color: 'var(--ds-green)', textDecoration: 'none', borderBottom: 'none',
                fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', fontSize: 12,
              }}>
                product@devsavant.com
              </a>
              <span style={{ opacity: .4 }}>·</span>
              <a href="https://devsavant.com" style={{
                color: 'rgba(255,255,255,.72)', textDecoration: 'none', borderBottom: 'none',
              }}>
                devsavant.com
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const services = [
    { label: 'AI & Product Engineering', href: '#build' },
    { label: 'AI Consultancy & Managed Agents', href: '#operate' },
    { label: 'AI Governance as a Service', href: '#govern' },
  ];

  const nav = [
    { label: 'Services',    href: '#services' },
    { label: 'How we work', href: '#process'  },
    { label: 'Why us',      href: '#why'      },
    { label: 'Contact',     href: '#contact'  },
  ];

  return (
    <footer style={{
      background: '#111714',
      padding: '56px 0 36px',
      borderTop: '1px solid rgba(255,255,255,.06)',
    }}>
      <Container>
        {/* Top row */}
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 40, marginBottom: 52,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="assets/logo-devsavant-isotype-color.png" alt="DevSavant" style={{ height: 28, width: 'auto' }} />
              <span style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 900,
                fontSize: 15, letterSpacing: '.04em', color: '#fff',
              }}>
                <span style={{ fontWeight: 900 }}>DEV</span>
                <span style={{ fontWeight: 400 }}>SAVANT</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 14,
              lineHeight: 1.65, color: 'rgba(255,255,255,.45)',
              margin: '0 0 20px', maxWidth: 280, textWrap: 'pretty',
            }}>
              An embedded product team for funded startups and growth-stage companies.
              Build, operate, and govern — one partner, full lifecycle.
            </p>
            <a href="mailto:product@devsavant.com" style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
              letterSpacing: '.12em', textTransform: 'uppercase',
              color: 'var(--ds-green)', textDecoration: 'none', borderBottom: 'none',
            }}>
              product@devsavant.com
            </a>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,.35)', marginBottom: 18,
            }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map(l => (
                <a key={l.label} href={l.href} style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 14,
                  color: 'rgba(255,255,255,.60)', textDecoration: 'none', borderBottom: 'none',
                  transition: 'color 160ms',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.60)'}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10,
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,.35)', marginBottom: 18,
            }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {nav.map(l => (
                <a key={l.label} href={l.href} style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 14,
                  color: 'rgba(255,255,255,.60)', textDecoration: 'none', borderBottom: 'none',
                  transition: 'color 160ms',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.60)'}
                >{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{
            fontFamily: 'Roboto, sans-serif', fontSize: 12,
            color: 'rgba(255,255,255,.28)',
          }}>
            © {new Date().getFullYear()} DevSavant. All rights reserved.
          </span>
          <a href="https://devsavant.com" style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
            letterSpacing: '.08em',
            color: 'rgba(255,255,255,.32)', textDecoration: 'none', borderBottom: 'none',
            transition: 'color 160ms',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ds-green)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.32)'}
          >
            devsavant.com
          </a>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { PilotCTA, Footer });
