// Hero : split layout. Left: headline + subhead + CTA + trust ticks.
// Right: a live KPI dashboard mock (hours saved, active assets, ROI).

function Hero() {
  return (
    <section id="top" className="hero-section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #F2F7F5 0%, #E8F0EE 100%)',
      padding: '80px 0 96px',
      overflow: 'hidden',
    }}>
      <DecorBlobs />
      <Container max={1260}>
        <div className="mobile-stack hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.08fr) minmax(0, .92fr)',
          gap: 56, alignItems: 'center', marginTop: 56,
        }}>
          <div className="reveal">
            <h1 className="hero-h1" style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.03,
              letterSpacing: '-.025em', margin: 0, color: 'var(--ds-ink)',
              textWrap: 'balance',
            }}>
              Your teams already<br/>build with AI.<br/>
              <span style={{ color: 'var(--ds-ink-60)', fontWeight: 300 }}>Nobody is </span>
              <span style={{ color: 'var(--ds-forest)' }}>governing it.</span>
            </h1>

            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
              lineHeight: 1.6, color: 'var(--ds-ink-90)',
              margin: '26px 0 34px', maxWidth: 540, textWrap: 'pretty',
            }}>
              Most of it is invisible: no owner, no review, no audit trail, no measurement.
              We give your company a complete operating model to govern every AI asset from
              creation to production. <strong style={{ fontWeight: 600 }}>One model. Every team. Full visibility.</strong>
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Pill variant="solid-green" size="lg" href="#demo" arrow>Book a demo</Pill>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, marginTop: 28, flexWrap: 'wrap',
              fontFamily: 'Roboto, sans-serif', fontSize: 13.5, color: 'var(--ds-ink-60)',
            }}>
              <CheckTick /> Start with one pilot asset
              <span style={{ opacity: .35 }}>·</span>
              <CheckTick /> Prove the model, then scale
            </div>
          </div>

          <div className="reveal hero-dash-outer" style={{ animationDelay: '120ms', position: 'relative' }}>
            <DashboardMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckTick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="6.5" stroke="var(--ds-green)" strokeWidth="1.2" />
      <path d="M4 7.3 L6.2 9.4 L10 5.4" stroke="var(--ds-green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DecorBlobs() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 80, right: -70, width: 230, height: 230,
        background: 'linear-gradient(135deg, rgba(118,196,177,.30), rgba(81,174,123,.10))',
        transform: 'rotate(45deg)', borderRadius: 26,
      }} />
      <div style={{
        position: 'absolute', bottom: -50, left: -60, width: 180, height: 180,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(81,174,123,.16), transparent 70%)',
      }} />
    </div>
  );
}

/* ----- KPI dashboard mock ----- */
// Item indices: 0=tile1, 1=tile2, 2=tile3, 3=chart, 4=deptLabel, 5=row1, 6=row2, 7=row3
const DASH_DELAYS = [480, 740, 1000, 1320, 1700, 1920, 2140, 2360];

function useDashReveal() {
  const [shown, setShown] = React.useState(new Array(DASH_DELAYS.length).fill(false));
  React.useEffect(() => {
    const timers = DASH_DELAYS.map((delay, i) =>
      setTimeout(() => setShown(prev => { const next = [...prev]; next[i] = true; return next; }), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);
  return shown;
}

function dashStyle(shown) {
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? 'translateY(0)' : 'translateY(13px)',
    transition: 'opacity 540ms cubic-bezier(.25,.46,.45,.94), transform 540ms cubic-bezier(.25,.46,.45,.94)',
  };
}

function DashboardMock() {
  const shown = useDashReveal();
  const bars = [
    { d: 'Mon', h: 38 }, { d: 'Tue', h: 52 }, { d: 'Wed', h: 47 },
    { d: 'Thu', h: 66 }, { d: 'Fri', h: 78 }, { d: 'Sat', h: 24 }, { d: 'Sun', h: 18 },
  ];
  const max = Math.max(...bars.map(b => b.h));
  const depts = [
    { name: 'Operations', pct: 88, hrs: '142h' },
    { name: 'Marketing', pct: 64, hrs: '98h' },
    { name: 'Engineering', pct: 52, hrs: '76h' },
  ];
  return (
    <div className="hero-dash-panel" style={{
      position: 'relative',
      background: '#fff', borderRadius: 16,
      boxShadow: '0 40px 80px rgba(13,68,42,.22), 0 8px 24px rgba(13,68,42,.10)',
      border: '1px solid var(--ds-ink-06)', overflow: 'hidden',
      transform: 'perspective(1400px) rotateY(-7deg) rotateX(2deg)',
      transformStyle: 'preserve-3d',
    }}>
      {/* window chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', background: '#F6F8F7',
        borderBottom: '1px solid var(--ds-ink-06)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
        </div>
        <div style={{
          marginLeft: 12, display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'Mulish, sans-serif', fontSize: 12.5, fontWeight: 700, color: 'var(--ds-ink)',
        }}>
          <Isotype size={14} color="gradient" /> AI Governance · KPI Dashboard
        </div>
        <span style={{
          marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: 'Roboto, sans-serif', fontSize: 11, color: 'var(--ds-ink-60)',
        }}>
          <span className="live-dot" style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--ds-green)' }} /> Live
        </span>
      </div>

      <div style={{ padding: '18px 18px 20px' }}>
        {/* top metric tiles — staggered reveal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
          <div style={dashStyle(shown[0])}><MetricTile label="Hours saved / wk" value="316" trend="+12%" /></div>
          <div style={dashStyle(shown[1])}><MetricTile label="Active assets" value="48" trend="+6" /></div>
          <div style={dashStyle(shown[2])}><MetricTile label="ROI (quarter)" value="4.2×" trend="+0.4" /></div>
        </div>

        {/* chart card */}
        <div style={{
          ...dashStyle(shown[3]),
          border: '1px solid var(--ds-ink-06)', borderRadius: 12, padding: '14px 16px 12px', marginBottom: 14,
        }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12,
          }}>
            <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12.5, color: 'var(--ds-ink)' }}>
              Hours recovered
            </span>
            <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 11, color: 'var(--ds-ink-60)' }}>
              this week
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 86 }}>
            {bars.map((b, i) => (
              <div key={b.d} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 6, height: '100%' }}>
                <div className="dash-bar" style={{
                  width: '100%', borderRadius: 5,
                  height: Math.round((b.h / max) * 64),
                  background: i === 4
                    ? 'linear-gradient(180deg,#51AE7B,#0D442A)'
                    : 'var(--ds-green-30)',
                }} />
                <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 9.5, color: 'var(--ds-ink-30)' }}>{b.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* dept distribution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <span style={{
            ...dashStyle(shown[4]),
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ds-ink-60)',
          }}>Adoption by department</span>
          {depts.map((d, i) => (
            <div key={d.name} style={{ ...dashStyle(shown[5 + i]), display: 'grid', gridTemplateColumns: '92px 1fr 38px', gap: 10, alignItems: 'center' }}>
              <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, color: 'var(--ds-ink-90)' }}>{d.name}</span>
              <span style={{ height: 7, borderRadius: 999, background: 'var(--ds-fog)', overflow: 'hidden' }}>
                <span style={{
                  display: 'block', height: '100%', borderRadius: 999,
                  width: `${d.pct}%`, background: 'linear-gradient(90deg,#76C4B1,#51AE7B)',
                }} />
              </span>
              <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11.5, color: 'var(--ds-forest)', textAlign: 'right' }}>{d.hrs}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricTile({ label, value, trend }) {
  return (
    <div style={{
      background: 'var(--ds-fog)', borderRadius: 10, padding: '12px 12px 11px',
    }}>
      <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 10, color: 'var(--ds-ink-60)', marginBottom: 6, letterSpacing: '.02em' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--ds-ink)', lineHeight: 1, letterSpacing: '-.01em' }}>{value}</span>
        <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 10.5, color: 'var(--ds-green)' }}>{trend}</span>
      </div>
    </div>
  );
}

Object.assign(window, { Hero });
