// Hero — split layout. Left: bold headline + subhead + dual CTA. Right: Slack thread mock.
// Social proof strip follows directly underneath as a quiet, fog-toned band.

function Hero() {
  return (
    <section id="top" className="hero-section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #F2F7F5 0%, #E8F0EE 100%)',
      padding: '40px 0 90px',
      overflow: 'hidden',
    }}>
      {/* Soft accent shapes (isotype-y, sparse) */}
      <DecorBlobs />

      <Container max={1260}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, .7fr)',
          gap: 56,
          alignItems: 'center',
          marginTop: 40,
        }}>
          <div className="reveal">
            {/* Headline + subhead + dual CTA */}
            <h1 className="hero-h1" style={{
              fontFamily: 'Mulish, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 5.4vw, 72px)',
              lineHeight: 1.04,
              letterSpacing: '-.02em',
              margin: '60px 0 0 0',
              color: 'var(--ds-ink)',
              textWrap: 'balance',
            }}>
              A Company Brain<br/>
              <span style={{ color: 'var(--ds-forest)' }}>your team can talk to.</span>
            </h1>

            <p style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 'clamp(17px, 1.4vw, 19px)',
              lineHeight: 1.55,
              color: 'var(--ds-ink-90)',
              margin: '26px 0 36px',
              maxWidth: 560,
              textWrap: 'pretty',
            }}>
              Custom AI agents built on a graph architecture that maps how your people,
              systems, knowledge, and decisions connect. Not isolated chatbots —
              a connected intelligence layer. Built, deployed, and operated by us.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <Pill variant="solid-green" size="lg" href="#demo" arrow>Book a 20-minute demo</Pill>
              <Pill variant="outline-dark" size="lg" href="#try">Try a live agent in Slack</Pill>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              marginTop: 28,
              fontFamily: 'Roboto, sans-serif', fontSize: 13.5,
              color: 'var(--ds-ink-60)',
            }}>
              <CheckTick /> 2-week pilot · no lock-in
              <span style={{ opacity: .35 }}>·</span>
              <CheckTick /> Pilot fee credited to month one
            </div>
          </div>

          <div className="reveal hero-slack-outer" style={{ animationDelay: '120ms', position: 'relative' }}>
            <SlackMock />
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
      {/* Rhombus, top-right */}
      <div style={{
        position: 'absolute', top: 90, right: -60, width: 220, height: 220,
        background: 'linear-gradient(135deg, rgba(118,196,177,.30), rgba(81,174,123,.10))',
        transform: 'rotate(45deg)', borderRadius: 22,
      }} />
    </div>
  );
}

/* ----- Slack thread mock ----- */
function SlackMock() {
  // Static realistic exchange: user gives an outcome; agent works across tools; reports back.
  const channel = '#ops-renewals';
  return (
    <div style={{
      position: 'absolute',
      right: 20,
      top: -180,
      width: 'clamp(280px, 35vw, 420px)',
      background: '#fff',
      borderRadius: 14,
      boxShadow: '0 40px 80px rgba(13,68,42,.25), 0 8px 24px rgba(13,68,42,.12)',
      overflow: 'hidden',
      border: '1px solid var(--ds-ink-06)',
      transform: 'perspective(1200px) rotateY(-8deg) rotateX(2deg) skewY(-1deg) rotate(2deg)',
      transformStyle: 'preserve-3d',
    }} className="hero-slack-panel">
      {/* Window chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px',
        background: '#F6F6F6',
        borderBottom: '1px solid var(--ds-ink-06)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
        </div>
        <div style={{
          marginLeft: 14, display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'Roboto, sans-serif', fontSize: 13, color: 'var(--ds-ink-90)',
        }}>
          <SlackHash />
          <strong style={{ fontWeight: 700 }}>{channel.replace('#','')}</strong>
          <span style={{ color: 'var(--ds-ink-60)', fontWeight: 400 }}>·  2 members</span>
        </div>
        <span style={{ marginLeft: 'auto', fontFamily: 'Roboto, sans-serif', fontSize: 12, color: 'var(--ds-ink-60)' }}>
          Slack
        </span>
      </div>

      {/* Thread */}
      <div style={{ padding: '20px 22px 22px', background: '#fff' }}>

        {/* User: outcome request */}
        <div className="slack-msg slack-msg-1">
          <SlackRow
            avatar={<Avatar initials="MR" bg="#E8B5C2" fg="#7A2B40" />}
            name="Maria R."
            time="9:02 AM"
            delay="0ms"
          >
            <p style={{ margin: 0 }}>
              Hey Atlas — make sure none of our top-20 accounts churn this month.
              Renewals start Friday.
            </p>
          </SlackRow>
        </div>

        {/* Agent: acknowledges + plan */}
        <div className="slack-msg slack-msg-2">
          <SlackRow
            avatar={<AgentAvatar />}
            name={<>Atlas <AgentTag /></>}
            time="9:02 AM"
            delay="0ms"
          >
            <p style={{ margin: '0 0 8px' }}>On it. Pulling renewal dates from HubSpot and last 30 days of activity from Gong + Zendesk.</p>
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2,
            }}>
              <ToolChip>HubSpot</ToolChip>
              <ToolChip>Gong</ToolChip>
              <ToolChip>Zendesk</ToolChip>
              <ToolChip>Gmail</ToolChip>
            </div>
          </SlackRow>
        </div>

        {/* Agent: result block — report card */}
        <div className="slack-msg slack-msg-3">
          <SlackRow
            avatar={<AgentAvatar />}
            name={<>Atlas <AgentTag /></>}
            time="9:14 AM"
            delay="0ms"
          >
            <p style={{ margin: '0 0 10px' }}>
              Scanned 20 accounts. <strong>3 at risk</strong> — drafted outreach for each,
              looped owners in, and put follow-ups on the calendar.
            </p>
            <ReportCard />
          </SlackRow>
        </div>

        {/* User: quick reaction */}
        <div className="slack-msg slack-msg-4">
          <SlackRow
            avatar={<Avatar initials="MR" bg="#E8B5C2" fg="#7A2B40" />}
            name="Maria R."
            time="9:16 AM"
            delay="0ms"
          >
            <p style={{ margin: 0 }}>
              Perfect. Send Northstar Logistics the case study from Q3 too.
            </p>
          </SlackRow>
        </div>

        <SlackRow
          avatar={<AgentAvatar />}
          name={<>Atlas <AgentTag /></>}
          time="9:16 AM"
          delay="720ms"
          last
        >
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckTick /> Done. Added to the Northstar thread &amp; logged in HubSpot.
          </p>
        </SlackRow>

        {/* Composer */}
        <div style={{
          marginTop: 12,
          border: '1px solid var(--ds-ink-12)',
          borderRadius: 10,
          padding: '10px 12px',
          color: 'var(--ds-ink-30)',
          fontFamily: 'Roboto, sans-serif', fontSize: 13.5,
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#fff',
        }}>
          <span>Message Atlas</span>
          <span style={{ marginLeft: 'auto' }}>
            <span style={{
              display: 'inline-block', width: 8, height: 14, background: 'var(--ds-ink-30)',
              verticalAlign: 'middle',
              animation: 'hb-pulse 1.2s ease-in-out infinite',
            }} />
          </span>
        </div>
      </div>
    </div>
  );
}

function SlackRow({ avatar, name, time, children, delay = '0ms', last = false }) {
  const msgIndex = delay === '0ms' ? 1 : delay === '180ms' ? 2 : delay === '360ms' ? 3 : 4;
  return (
    <div className={`slack-row slack-msg-${msgIndex}`} style={{
      display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12,
      marginBottom: last ? 4 : 14,
    }}>
      <div>{avatar}</div>
      <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, color: 'var(--ds-ink)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--ds-ink)' }}>{name}</span>
          <span style={{ fontSize: 11.5, color: 'var(--ds-ink-60)' }}>{time}</span>
        </div>
        <div style={{ lineHeight: 1.5, color: 'var(--ds-ink-90)' }}>{children}</div>
      </div>
    </div>
  );
}

function Avatar({ initials, bg, fg }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 8,
      background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 14,
      letterSpacing: '.02em',
    }}>{initials}</div>
  );
}

function AgentAvatar() {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 8,
      background: 'linear-gradient(135deg, #76C4B1 0%, #0D442A 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <img src="assets/logo-devsavant-light.png" alt="" style={{ height: 22, width: 'auto', filter: 'brightness(0) invert(1)' }} />
    </div>
  );
}

function AgentTag() {
  return (
    <span style={{
      fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 9.5,
      letterSpacing: '.10em', textTransform: 'uppercase',
      padding: '2px 6px', borderRadius: 4,
      background: 'var(--ds-green-12)', color: 'var(--ds-forest)',
      marginLeft: 6, verticalAlign: 'middle',
    }}>Agent</span>
  );
}

function ToolChip({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 10px', borderRadius: 999,
      background: '#F2F7F5', border: '1px solid var(--ds-ink-06)',
      fontFamily: 'Roboto, sans-serif', fontSize: 12, color: 'var(--ds-forest)',
      fontWeight: 500,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ds-green)' }} />
      {children}
    </span>
  );
}

function ReportCard() {
  const rows = [
    { co: 'Northstar Logistics', risk: 'High',   note: 'Champion left · usage ↓ 38%' },
    { co: 'Wendover Analytics',  risk: 'Medium', note: '2 unresolved tickets · slow response' },
    { co: 'Halcyon Foods',       risk: 'Medium', note: 'Renewal silence · last call 41d ago' },
  ];
  const riskStyle = (r) => r === 'High'
    ? { bg: '#FCE9E7', fg: '#A8311D' }
    : { bg: '#FFF4D6', fg: '#8A6500' };
  return (
    <div style={{
      border: '1px solid var(--ds-ink-12)',
      borderRadius: 12,
      overflow: 'hidden',
      background: '#fff',
      maxWidth: 380,
    }}>
      <div style={{
        padding: '10px 14px',
        background: 'linear-gradient(180deg, #F2F7F5, #ECF2EF)',
        borderBottom: '1px solid var(--ds-ink-06)',
        fontFamily: 'Mulish, sans-serif', fontSize: 12, fontWeight: 700,
        letterSpacing: '.10em', textTransform: 'uppercase',
        color: 'var(--ds-forest)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        Renewal risk report
        <span style={{
          marginLeft: 'auto',
          fontFamily: 'Roboto, sans-serif', fontWeight: 400, textTransform: 'none', letterSpacing: 0,
          color: 'var(--ds-ink-60)', fontSize: 11,
        }}>top-20 · refreshed 9:14 AM</span>
      </div>
      {rows.map((r, i) => {
        const s = riskStyle(r.risk);
        return (
          <div key={r.co} style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: 12, padding: '11px 14px',
            borderTop: i === 0 ? 'none' : '1px solid var(--ds-ink-06)',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 13.5,
                color: 'var(--ds-ink)',
              }}>{r.co}</div>
              <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, color: 'var(--ds-ink-60)' }}>
                {r.note}
              </div>
            </div>
            <span style={{
              fontFamily: 'Mulish, sans-serif', fontSize: 11, fontWeight: 700,
              letterSpacing: '.06em',
              padding: '3px 8px', borderRadius: 999,
              background: s.bg, color: s.fg,
            }}>{r.risk}</span>
          </div>
        );
      })}
    </div>
  );
}

function SlackHash() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 2 L4 12 M10 2 L9 12 M2 5 H12 M2 9 H12" stroke="var(--ds-ink)" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

/* ----- Social proof strip (sits under hero) ----- */
function SocialProof() {
  return (
    <section style={{
      background: '#fff',
      padding: '38px 0 28px',
      borderBottom: '1px solid var(--ds-ink-06)',
    }}>
      <Container max={1180}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <p style={{
            margin: 0,
            fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 15,
            letterSpacing: '.04em', color: 'var(--ds-ink-90)',
          }}>
            Running real AI agents in production since early 2026.
          </p>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            <Stat label="Agents in production" value="12+" />
            <Stat label="Workflows automated" value="180+" />
            <Stat label="Uptime, monitored 24/7" value="99.9%" />
            <Stat label="Avg. time to first agent" value="2 wks" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 22,
        letterSpacing: '-.01em', color: 'var(--ds-forest)', lineHeight: 1,
      }}>{value}</div>
      <div style={{
        marginTop: 4,
        fontFamily: 'Roboto, sans-serif', fontSize: 12,
        color: 'var(--ds-ink-60)',
      }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Hero, SocialProof });
