// Hero: dark forest cover + FullSpectrum overview cards.
// Hero is centered, full-width, dark forest bg with dot-grid texture.
// FullSpectrum immediately below: white bg, 3 service preview cards.

function Hero() {
  return (
    <section id="top" className="hero-section" style={{
      position: 'relative',
      background: 'var(--ds-forest)',
      padding: '120px 0 96px',
      overflow: 'hidden',
    }}>
      <DotGrid />
      <CircleAccent />

      <Container max={1100}>
        <Reveal style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
            letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--ds-green)', marginBottom: 26,
          }}>
            <span style={{ width: 22, height: 1.5, background: 'var(--ds-green)', display: 'inline-block' }} />
            Product Engineering
            <span style={{ width: 22, height: 1.5, background: 'var(--ds-green)', display: 'inline-block' }} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-h1" style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 900,
            fontSize: 'clamp(42px, 6vw, 76px)',
            lineHeight: 1.03, letterSpacing: '-0.034em',
            color: '#fff', textWrap: 'balance',
            margin: '0 auto 28px',
            textAlign: 'center',
            maxWidth: '14ch',
          }}>
            Your operating partner from{' '}
            <span style={{ color: 'var(--ds-green)' }}>prototype to scale.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            lineHeight: 1.65, textAlign: 'center',
            color: 'rgba(255,255,255,.78)',
            margin: '0 auto 40px',
            maxWidth: 620, textWrap: 'pretty',
          }}>
            We help funded startups and growth-stage companies turn ideas into working software,
            fast — then operate and govern what we build.{' '}
            <strong style={{ color: 'rgba(255,255,255,.95)', fontWeight: 600 }}>
              We are not a dev shop. We are an embedded product team that owns outcomes.
            </strong>
          </p>
        </Reveal>

        <Reveal delay={240} style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
          <Pill variant="solid-green" size="lg" href="#contact" arrow>Book a discovery session</Pill>
          <Pill variant="outline-white" size="lg" href="#services">Explore services</Pill>
        </Reveal>

        <Reveal delay={340} style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 20, flexWrap: 'wrap',
          fontFamily: 'Roboto, sans-serif', fontSize: 13.5,
          color: 'rgba(255,255,255,.50)',
        }}>
          {['No lock-in', 'Senior team on every engagement', 'From PoC to production'].map((t, i) => (
            <React.Fragment key={t}>
              {i > 0 && <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,.25)' }} />}
              <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <CheckTick dark />
                <span style={{ color: 'rgba(255,255,255,.62)' }}>{t}</span>
              </span>
            </React.Fragment>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

// Dot-grid texture overlay
function DotGrid() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle, rgba(81,174,123,.14) 1.5px, transparent 1.5px)',
      backgroundSize: '28px 28px',
      pointerEvents: 'none',
    }} />
  );
}

// Large circle arc — bottom right
function CircleAccent() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      right: '-12%', bottom: '-40%',
      width: '55vw', height: '55vw', maxWidth: 700, maxHeight: 700,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.06)',
      boxShadow: '0 0 0 60px rgba(255,255,255,.02)',
      pointerEvents: 'none',
    }} />
  );
}

// ─── Full Spectrum section ────────────────────────────────────────────────────
function FullSpectrum() {
  const cards = [
    {
      glyph: '◈',
      verb: 'Build',
      title: 'AI & Product Engineering',
      desc: 'Dedicated engineering pods that deliver AI-first MVPs, proofs of concept, and production software with a discovery-first approach.',
      href: '#build',
      accent: 'var(--ds-green)',
    },
    {
      glyph: '◊',
      verb: 'Operate',
      title: 'AI Consultancy & Managed Agents',
      desc: 'We advise, build, and run AI agents connected to your real systems and data. No internal AI team required.',
      href: '#operate',
      accent: 'var(--ds-teal)',
    },
    {
      glyph: '◉',
      verb: 'Govern',
      title: 'AI Governance as a Service',
      desc: 'One operating model to catalog, review, secure, and measure every AI asset — from creation to production.',
      href: '#govern',
      accent: 'var(--ds-forest)',
    },
  ];

  return (
    <section id="services" style={{
      background: '#fff',
      padding: '80px 0 88px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container>
        <Reveal style={{ textAlign: 'center', marginBottom: 52 }}>
          <Overline>The full spectrum</Overline>
          <h2 style={{ ...H2, fontSize: 'clamp(32px, 4vw, 52px)', textAlign: 'center', marginBottom: 16 }}>
            Build.{' '}
            <span style={{ color: 'var(--ds-ink-30)' }}>Operate.</span>{' '}
            <span style={{ color: 'var(--ds-ink-30)' }}>Govern.</span>
          </h2>
          <p style={{
            ...BodyLg, textAlign: 'center', maxWidth: 560,
            margin: '0 auto', fontSize: 16, color: 'var(--ds-ink-60)',
          }}>
            One embedded partner for the entire lifecycle of your AI products.
          </p>
        </Reveal>

        <div className="spectrum-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          {cards.map((c, i) => (
            <SpectrumCard key={c.verb} card={c} delay={i * 90} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SpectrumCard({ card, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay}>
      <a
        href={card.href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex', flexDirection: 'column',
          background: hover ? 'var(--ds-forest)' : 'var(--surface-muted)',
          border: '1px solid var(--border)',
          borderRadius: 22, padding: '28px 26px 24px',
          textDecoration: 'none',
          transition: 'background 220ms cubic-bezier(.2,.7,.1,1), box-shadow 220ms, transform 220ms',
          boxShadow: hover ? '0 20px 48px rgba(13,68,42,.20)' : 'none',
          transform: hover ? 'translateY(-3px)' : 'none',
          cursor: 'pointer',
        }}
      >
        <div style={{
          fontSize: 20, color: hover ? 'var(--ds-green)' : card.accent,
          marginBottom: 14, transition: 'color 200ms',
        }}>{card.glyph}</div>

        <div style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700,
          fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase',
          color: hover ? 'var(--ds-green)' : 'var(--ds-green)',
          marginBottom: 8, transition: 'color 200ms',
        }}>{card.verb}</div>

        <h3 style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700,
          fontSize: 18, letterSpacing: '-0.012em', lineHeight: 1.22,
          color: hover ? '#fff' : 'var(--ds-ink)',
          margin: '0 0 12px', transition: 'color 200ms',
          textWrap: 'balance',
        }}>{card.title}</h3>

        <p style={{
          fontFamily: 'Roboto, sans-serif', fontSize: 14,
          lineHeight: 1.6, color: hover ? 'rgba(255,255,255,.72)' : 'var(--fg-muted)',
          margin: '0 0 20px', flex: 1, transition: 'color 200ms',
        }}>{card.desc}</p>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 13,
          color: hover ? 'var(--ds-green)' : 'var(--ds-forest)',
          transition: 'color 200ms',
        }}>
          Learn more
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M3 10 L10 3 M4 3 H10 V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </Reveal>
  );
}

Object.assign(window, { Hero, FullSpectrum });
