/* ============================================================
   Core narrative sections:
   - Problem
   - Difference (incl. comparison table + heartbeat callout)
   - WhyManaged (dark band: monitor / recover / update / secure)
   - HowItWorks (3 steps)
   - Included (what's in every managed agent)
   ============================================================ */

// ----- Problem -----
function Problem() {
  return (
    <section style={{ background: '#fff', padding: '80px 0 80px' }}>
      <Container max={1180}>
        <Overline>The gap</Overline>
        <h2 style={H2}>Most AI tools are just<span className="loading-dots"><span>.</span><span>.</span><span>.</span></span> waiting.</h2>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56, marginTop: 36, alignItems: 'start',
        }}>
          <div>
            <p style={{ ...BodyLg, margin: '0 0 18px' }}>
              You open ChatGPT or Claude, you ask something, it answers, you close the tab —
              and it switches off. Nothing else happens. It never acts unless you act first.
              It forgets the conversation by tomorrow. It isn't connected to your tools.
              It's a brilliant assistant that does nothing until poked.
            </p>
            <p style={{ ...BodyLg, margin: 0, color: 'var(--ds-forest)', fontWeight: 500 }}>
              That's fine for answering questions. It's not a teammate.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <PullQuoteBubble>
              Most companies don't fail at AI agents.<br/>
              They fail at <em style={{ fontStyle: 'normal', color: 'var(--ds-green)' }}>running</em> them.
            </PullQuoteBubble>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PullQuoteBubble({ children }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={isVisible ? 'problem-quote in-view' : 'problem-quote'}
      style={{
        padding: '24px 28px',
        background: '#fff',
        border: '1px solid var(--ds-ink-06)',
        borderRadius: 16,
        fontFamily: 'Mulish, sans-serif', fontWeight: 700,
        fontSize: 'clamp(18px, 2vw, 24px)',
        lineHeight: 1.3, letterSpacing: '-.01em',
        color: 'var(--ds-forest)',
        textWrap: 'balance',
        boxShadow: '0 8px 24px rgba(13,68,42,.10)',
      }}>
      {children}
    </div>
  );
}

// ----- Difference -----
function Difference() {
  return (
    <section id="different" style={{ background: 'var(--ds-fog)', padding: '80px 0 80px' }}>
      <Container max={1180}>
        <Overline>A Company Brain</Overline>
        <h2 style={{ ...H2, maxWidth: 880 }}>
          Built on a graph of how your business actually works.
        </h2>
        <p style={{ ...BodyLg, maxWidth: 760, margin: '20px 0 44px' }}>
          Most AI tools retrieve isolated pieces of information. We model the relationships
          between everything that matters — and the agent reasons across them.
        </p>

        {/* Three pillar cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 18,
          marginBottom: 18,
        }}>
          <PillarCard
            n="01"
            title="It acts."
            body="Give it an outcome, not a prompt. It researches, drafts, updates your systems, sends the email, files the ticket — across multiple tools, in one run — and reports back when it's done."
            icon="act"
          />
          <PillarCard
            n="02"
            title="It remembers."
            body="A persistent knowledge graph of your business — your clients, your projects, your decisions. Not a forgetful chat thread."
            icon="memory"
          />
          <PillarCard
            n="03"
            title="It understands."
            body="The graph maps how people, teams, systems, documents, and workflows connect — so the agent reasons across your business, not across isolated snippets."
            icon="graph"
          />
        </div>

        {/* Graph architecture strip */}
        <GraphArchitecture />

        {/* Headless architecture note */}
        <div style={{
          background: '#fff', borderRadius: 14,
          border: '1px solid var(--ds-ink-06)',
          padding: '20px 28px', marginBottom: 18,
          display: 'flex', gap: 16, alignItems: 'flex-start',
          boxShadow: '0 2px 10px rgba(13,68,42,.04)',
        }} className="headless-card">
          <div style={{
            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
            background: 'var(--ds-green-12)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 2,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="6" rx="2" stroke="var(--ds-forest)" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="3" y="14" width="18" height="6" rx="2" stroke="var(--ds-forest)" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="7" cy="7" r="1" fill="var(--ds-green)" />
              <circle cx="7" cy="17" r="1" fill="var(--ds-green)" />
            </svg>
          </div>
          <div>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 15,
              color: 'var(--ds-ink)', marginBottom: 4,
            }}>Headless by design.</div>
            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6,
              color: 'var(--ds-ink-90)', margin: 0, textWrap: 'pretty',
            }}>
              The agent runs as a managed service on a dedicated backend — handling routing, tool calls, integrations, and scheduled jobs. The default surface is conversational (Slack and Teams), because that's where decisions actually get made.
            </p>
          </div>
        </div>

        {/* Heartbeat callout — full width */}
        <HeartbeatCallout />

        {/* Comparison table */}
        <div style={{ marginTop: 64 }}>
          <h3 style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 600,
            fontSize: 26, letterSpacing: '-.01em',
            color: 'var(--ds-ink)', margin: '0 0 22px',
            textAlign: 'center',
          }}>
            This isn't ChatGPT with extra steps.
          </h3>
          <ComparisonTable />
        </div>
      </Container>
    </section>
  );
}

function PillarCard({ n, title, body, icon }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: '32px 28px 30px',
        boxShadow: hover
          ? '0 20px 48px rgba(13,68,42,.14)'
          : '0 8px 24px rgba(13,68,42,.08)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform 220ms cubic-bezier(.2,.7,.1,1), box-shadow 220ms',
        position: 'relative', overflow: 'hidden',
      }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 22,
      }}>
        <PillarIcon kind={icon} />
        <span style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
          letterSpacing: '.16em', color: 'var(--ds-green)',
        }}>{n}</span>
      </div>
      <h3 style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700,
        fontSize: 26, lineHeight: 1.15, letterSpacing: '-.01em',
        color: 'var(--ds-ink)', margin: '0 0 10px',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'Roboto, sans-serif', fontSize: 14.5, lineHeight: 1.6,
        color: 'var(--ds-ink-90)', margin: 0, textWrap: 'pretty',
      }}>{body}</p>
    </div>
  );
}

function PillarIcon({ kind }) {
  const wrap = {
    width: 44, height: 44, borderRadius: 12,
    background: 'var(--ds-green-12)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  };
  const stroke = { stroke: 'var(--ds-forest)', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const svg = {
    act: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        {/* arrows branching out to tools */}
        <circle cx="6" cy="12" r="2.2" {...stroke} />
        <path d="M8.2 12 H13" {...stroke} />
        <path d="M13 12 L18 7" {...stroke} />
        <path d="M13 12 L18 12" {...stroke} />
        <path d="M13 12 L18 17" {...stroke} />
        <circle cx="19" cy="7" r="1.5" {...stroke} />
        <circle cx="19.5" cy="12" r="1.5" {...stroke} />
        <circle cx="19" cy="17" r="1.5" {...stroke} />
      </svg>
    ),
    memory: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        {/* knowledge graph */}
        <circle cx="12" cy="6" r="2.2" {...stroke} />
        <circle cx="6" cy="14" r="2.2" {...stroke} />
        <circle cx="18" cy="14" r="2.2" {...stroke} />
        <circle cx="12" cy="19" r="1.8" {...stroke} />
        <path d="M11 7.6 L7 12.5 M13 7.6 L17 12.5 M7.4 15.6 L11 17.7 M16.6 15.6 L13 17.7 M8 14 H16" {...stroke} />
      </svg>
    ),
    tune: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        {/* sliders */}
        <path d="M5 7 H19 M5 12 H19 M5 17 H19" {...stroke} />
        <circle cx="9" cy="7" r="2" fill="var(--ds-green)" stroke="var(--ds-forest)" strokeWidth="1.4" />
        <circle cx="15" cy="12" r="2" fill="var(--ds-green)" stroke="var(--ds-forest)" strokeWidth="1.4" />
        <circle cx="8" cy="17" r="2" fill="var(--ds-green)" stroke="var(--ds-forest)" strokeWidth="1.4" />
      </svg>
    ),
    graph: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2.2" {...stroke} />
        <circle cx="5" cy="18" r="2.2" {...stroke} />
        <circle cx="19" cy="18" r="2.2" {...stroke} />
        <circle cx="12" cy="13" r="1.8" fill="var(--ds-green)" stroke="var(--ds-forest)" strokeWidth="1.3" />
        <path d="M12 7.2 V11.2 M10.6 14.5 L6.6 16.4 M13.4 14.5 L17.4 16.4" {...stroke} />
      </svg>
    ),
  };
  return <div style={wrap}>{svg[kind]}</div>;
}

function GraphArchitecture() {
  const nodes = [
    { label: 'Nodes', desc: 'Employees, customers, codebases, tickets, contracts, runbooks, SLAs.' },
    { label: 'Edges', desc: 'Who owns what, who decided when, what depends on what.' },
    { label: 'Context', desc: 'Every interaction strengthens the graph and grounds the agent.' },
    { label: 'Output', desc: 'Grounded, explainable answers that improve the more it is used.' },
  ];
  return (
    <div style={{
      background: '#fff', borderRadius: 18,
      border: '1px solid var(--ds-ink-06)',
      padding: '28px 32px', marginBottom: 18,
      boxShadow: '0 4px 16px rgba(13,68,42,.06)',
    }}>
      <div style={{
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
        letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--ds-green)', marginBottom: 20,
      }}>The interaction architecture</div>
      <div className="mobile-stack" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      }}>
        {nodes.map((item, i) => (
          <div key={i} style={{
            paddingRight: 28, paddingLeft: i > 0 ? 28 : 0,
            borderLeft: i > 0 ? '1px solid var(--ds-ink-06)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
              letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--ds-forest)', marginBottom: 6,
            }}>{item.label}</div>
            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55,
              color: 'var(--ds-ink-90)', margin: 0,
            }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeartbeatCallout() {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 22,
      padding: '40px 44px',
      background: 'radial-gradient(120% 240% at 0% 0%, #1A6B40 0%, #0D442A 60%, #082B1B 100%)',
      color: '#fff',
      overflow: 'hidden',
      boxShadow: '0 24px 60px rgba(13,68,42,.30)',
    }} className="heartbeat-callout">
      {/* faint isotype pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: -40, top: -40, opacity: .12, pointerEvents: 'none',
      }}>
        <Isotype size={220} color="#fff" />
      </div>

      <div className="mobile-stack" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 48, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: 'rgba(255,255,255,.10)',
            marginBottom: 16,
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
            letterSpacing: '.16em', textTransform: 'uppercase',
            color: '#A8E0C0',
          }}>
            <HeartbeatDot />
            And the part most products skip
          </div>
          <h3 style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-.02em', margin: '0 0 14px',
            color: '#fff',
          }}>
            It works on its own.
          </h3>
          <p style={{
            fontFamily: 'Roboto, sans-serif', fontSize: 16, lineHeight: 1.6,
            color: 'rgba(255,255,255,.86)', margin: 0, maxWidth: 580,
            textWrap: 'pretty',
          }}>
            Your agent has a <strong style={{ color: '#A8E0C0', fontWeight: 600 }}>heartbeat</strong> —
            on a regular schedule, it wakes up by itself, checks what's happening
            (your inbox, your calendar, what you left unfinished) and takes action.
            It messages <em>you</em>. You don't have to message it.
          </p>
        </div>

        <HeartbeatPanel />
      </div>
    </div>
  );
}

function HeartbeatDot() {
  return (
    <span style={{ position: 'relative', width: 10, height: 10, display: 'inline-block' }}>
      <span className="hb-ring-1" style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'rgba(168,224,192,.35)',
      }} />
      <span className="hb-dot" style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: '#A8E0C0', display: 'block',
      }} />
    </span>
  );
}

function HeartbeatPanel() {
  // mini "schedule" panel showing heartbeats triggering actions
  const beats = [
    { t: '08:00', label: 'Scan overnight email', fired: true },
    { t: '08:30', label: 'Surface blockers for stand-up', fired: true },
    { t: '11:00', label: 'Check renewal pipeline',  fired: true, hi: true },
    { t: '14:00', label: 'Draft EOD summary', fired: false },
    { t: '17:30', label: 'Send daily report', fired: false },
  ];
  return (
    <div style={{
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.10)',
      borderRadius: 16,
      padding: '18px 18px',
      backdropFilter: 'blur(4px)',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 14,
        fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
        letterSpacing: '.16em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,.72)',
      }}>
        <ClockIcon /> Atlas heartbeat — today
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {beats.map((b, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '52px 1fr auto',
            gap: 12, alignItems: 'center',
            padding: '8px 10px', borderRadius: 10,
            background: b.hi ? 'rgba(168,224,192,.10)' : 'transparent',
            border: b.hi ? '1px solid rgba(168,224,192,.30)' : '1px solid transparent',
          }}>
            <span style={{
              fontFamily: 'Roboto Mono, ui-monospace, monospace', fontSize: 11,
              color: 'rgba(255,255,255,.7)', letterSpacing: '.04em',
            }}>{b.t}</span>
            <span style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 13,
              color: 'rgba(255,255,255,.92)',
            }}>{b.label}</span>
            <span>
              {b.fired
                ? <DoneTick />
                : <span style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'rgba(255,255,255,.25)', display: 'inline-block',
                  }} />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.4" stroke="rgba(255,255,255,.6)" strokeWidth="1.3" />
      <path d="M8 4.5 V8 L10.5 9.5" stroke="rgba(255,255,255,.85)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function DoneTick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6.4" fill="rgba(168,224,192,.20)" stroke="#A8E0C0" strokeWidth="1.2" />
      <path d="M4 7.3 L6.2 9.4 L10 5.4" stroke="#A8E0C0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ComparisonTable() {
  const cols = [
    { key: 'chatgpt', label: 'ChatGPT / Copilot' },
    { key: 'platform', label: 'Self-serve agent platforms' },
    { key: 'ds', label: 'Managed Agents by DevSavant', highlight: true },
  ];
  const rows = [
    { metric: 'Does the work',
      chatgpt: 'Answers, then stops',
      platform: 'You build the workflows',
      ds: <strong>Acts across your tools, end to end</strong> },
    { metric: 'Initiative',
      chatgpt: 'Waits for you',
      platform: 'Waits for you',
      ds: <strong>Has a heartbeat — acts on its own</strong> },
    { metric: 'Memory',
      chatgpt: 'Forgets each thread',
      platform: 'Basic',
      ds: <strong>Remembers your business — knowledge graph</strong> },
    { metric: 'Who runs it',
      chatgpt: 'You',
      platform: 'You',
      ds: <strong>We do — fully managed</strong> },
  ];
  return (
    <div className="mobile-scroll" style={{
      background: '#fff', borderRadius: 18,
      boxShadow: '0 12px 36px rgba(13,68,42,.10)',
      border: '1px solid var(--ds-ink-06)',
      overflow: 'hidden',
    }}>
      <div className="compare-inner" style={{
        display: 'grid',
        gridTemplateColumns: '180px repeat(3, 1fr)',
        background: '#fff',
      }}>
        {/* header row */}
        <div />
        {cols.map(c => (
          <div key={c.key} className={c.key !== 'ds' ? 'compare-col-competitor' : ''} style={{
            padding: '18px 18px 16px',
            background: c.highlight
              ? 'linear-gradient(180deg, #ECF7F0, #DFEFE6)'
              : 'transparent',
            borderBottom: '1px solid var(--ds-ink-06)',
            borderLeft: '1px solid var(--ds-ink-06)',
            fontFamily: 'Mulish, sans-serif',
            fontWeight: c.highlight ? 700 : 600,
            fontSize: c.highlight ? 14 : 12.5,
            letterSpacing: c.highlight ? '0' : '.06em',
            textTransform: c.highlight ? 'none' : 'uppercase',
            color: c.highlight ? 'var(--ds-forest)' : 'var(--ds-ink-60)',
          }}>
            {c.label}
            {c.highlight && (
              <div style={{
                fontFamily: 'Roboto, sans-serif', fontSize: 11, fontWeight: 400,
                letterSpacing: 0, textTransform: 'none',
                color: 'var(--ds-ink-60)', marginTop: 2,
              }}>Built and run by us</div>
            )}
          </div>
        ))}

        {rows.map((r, i) => (
          <React.Fragment key={r.metric}>
            <div style={{
              padding: '18px 22px',
              borderTop: '1px solid var(--ds-ink-06)',
              fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 13.5,
              color: 'var(--ds-ink)',
              background: '#fff',
              display: 'flex', alignItems: 'center',
            }}>{r.metric}</div>
            <Cell className="compare-col-competitor">{r.chatgpt}</Cell>
            <Cell className="compare-col-competitor">{r.platform}</Cell>
            <Cell highlight>{r.ds}</Cell>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Cell({ children, highlight, className }) {
  return (
    <div className={className || ''} style={{
      padding: '18px 18px',
      borderTop: '1px solid var(--ds-ink-06)',
      borderLeft: '1px solid var(--ds-ink-06)',
      background: highlight ? 'rgba(81,174,123,.06)' : '#fff',
      fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.45,
      color: highlight ? 'var(--ds-ink)' : 'var(--ds-ink-90)',
    }}>
      {children}
    </div>
  );
}

// ----- WhyManaged -----
function WhyManaged() {
  const items = [
    { icon: 'monitor', t: 'Monitored 24/7',
      d: 'Continuous health checks, latency and error tracking — we see issues before you do.' },
    { icon: 'recover', t: 'Auto-recovery',
      d: 'When something breaks, the system rolls back, retries, and pages a human if needed.' },
    { icon: 'update',  t: 'Tested upgrades',
      d: 'Versioned components, gated upgrades, drift detection. New models, no surprises.' },
    { icon: 'secure',  t: 'Secured in depth',
      d: 'Five-layer security architecture — edge, transport, role, command, extension.' },
  ];
  return (
    <section style={{
      background: 'linear-gradient(180deg, #0E2B1C 0%, #082B1B 100%)',
      color: '#fff',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* subtle grid texture */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .22 }}>
        <defs>
          <pattern id="op-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0 H0 V48" stroke="rgba(168,224,192,.18)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#op-grid)" />
      </svg>

      <Container max={1180} style={{ position: 'relative' }}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56, alignItems: 'start', marginBottom: 56,
        }}>
          <div>
            <Overline color="#A8E0C0">Why managed</Overline>
            <h2 style={{
              ...H2,
              color: '#fff',
              marginTop: 8,
            }}>
              You don't need an AI Ops team.<br/>
              <span style={{ color: '#A8E0C0' }}>You have us.</span>
            </h2>
          </div>
          <div>
            <p style={{ ...BodyLg, color: 'rgba(255,255,255,.86)', margin: 0 }}>
              Spinning up an AI agent is easy. Keeping one <em>reliable</em> — connected,
              secure, recovered when something breaks, and current in a field that changes
              every week — is a full-time discipline. Companies are now hiring "AI Ops"
              people just to keep their agents alive.
            </p>
            <p style={{ ...BodyLg, color: 'rgba(255,255,255,.86)', margin: '18px 0 0' }}>
              You don't have to. We built the operations layer.
              It's the part you can't buy off a shelf and shouldn't have to build.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 1,
          background: 'rgba(168,224,192,.18)',
          borderRadius: 16, overflow: 'hidden',
          border: '1px solid rgba(168,224,192,.18)',
        }}>
          {items.map(it => (
            <div key={it.t} style={{
              background: 'rgba(13,68,42,.55)',
              padding: '28px 26px 28px',
              backdropFilter: 'blur(4px)',
            }}>
              <OpIcon kind={it.icon} />
              <div style={{
                marginTop: 18,
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 18,
                letterSpacing: '-.005em', color: '#fff',
              }}>{it.t}</div>
              <p style={{
                fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55,
                color: 'rgba(255,255,255,.78)', margin: '8px 0 0',
              }}>{it.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OpIcon({ kind }) {
  const wrap = {
    width: 44, height: 44, borderRadius: 10,
    background: 'rgba(168,224,192,.14)',
    border: '1px solid rgba(168,224,192,.30)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  };
  const s = { stroke: '#A8E0C0', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const svg = {
    monitor: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12 H6 L8.5 6 L12 18 L14.5 10 L17 13 H21" {...s} />
      </svg>
    ),
    recover: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12 A7 7 0 1 1 12 19" {...s} />
        <path d="M5 12 V8 M5 12 H9" {...s} />
      </svg>
    ),
    update: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" {...s} />
        <path d="M12 8 V12 L14.5 14.5" {...s} />
      </svg>
    ),
    secure: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 L19 6 V12 C19 16, 15.5 19, 12 21 C8.5 19, 5 16, 5 12 V6 Z" {...s} />
        <path d="M9 12 L11 14 L15.5 9.5" {...s} />
      </svg>
    ),
  };
  return <div style={wrap}>{svg[kind]}</div>;
}

// ----- HowItWorks -----
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Try it.',
      body: 'Talk to a live demo agent in a Slack channel — see what a managed agent actually does.',
      tag: 'Free',
    },
    {
      n: '02',
      title: 'Run a pilot.',
      body: 'We build an agent for your real use case and deploy it — a focused 2-week pilot. Test it on your terms. If you continue, your pilot fee is credited to your first month. No lock-in.',
      tag: '2 weeks',
    },
    {
      n: '03',
      title: 'Go managed.',
      body: 'Convert to a managed subscription — we run, monitor, update, and grow your agent. Need a new capability? Just ask.',
      tag: 'Ongoing',
    },
  ];
  const [inView, setInView] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" ref={sectionRef} style={{ background: '#fff', padding: '120px 0' }}>
      <Container max={1180}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Overline>How it works</Overline>
          <h2 style={{ ...H2, maxWidth: 820, margin: '8px auto 0' }}>
            Three steps to a working digital worker.
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connecting line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: 38, left: '8%', right: '8%', height: 2,
            background: 'repeating-linear-gradient(to right, var(--ds-green-30) 0 6px, transparent 6px 12px)',
            zIndex: 0,
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28,
          }}>
            {steps.map((s, idx) => (
              <div key={s.n} style={{
                textAlign: 'left',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(18px)',
                transition: inView
                  ? `opacity 800ms cubic-bezier(.2,.7,.1,1) ${idx * 160}ms, transform 800ms cubic-bezier(.2,.7,.1,1) ${idx * 160}ms`
                  : 'none',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 18,
                }}>
                  <div style={{
                    width: 76, height: 76, borderRadius: '50%',
                    background: '#fff',
                    border: '2px solid var(--ds-green)',
                    color: 'var(--ds-forest)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 22,
                    letterSpacing: '.02em',
                    boxShadow: '0 6px 18px rgba(13,68,42,.10)',
                  }}>{s.n}</div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10,
                }}>
                  <h3 style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700,
                    fontSize: 26, letterSpacing: '-.01em', lineHeight: 1.15,
                    color: 'var(--ds-ink)', margin: 0,
                  }}>{s.title}</h3>
                  <span style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 11,
                    letterSpacing: '.14em', textTransform: 'uppercase',
                    color: 'var(--ds-green)',
                    padding: '4px 10px', borderRadius: 999,
                    background: 'var(--ds-green-12)',
                    whiteSpace: 'nowrap',
                  }}>{s.tag}</span>
                </div>
                <p style={{
                  fontFamily: 'Roboto, sans-serif', fontSize: 15, lineHeight: 1.6,
                  color: 'var(--ds-ink-90)', margin: 0, maxWidth: 360, textWrap: 'pretty',
                }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ----- Included -----
function Included() {
  const items = [
    { t: 'A dedicated, private agent',
      d: "On isolated infrastructure. Your data never mingles with another client's." },
    { t: 'Home dashboard',
      d: 'Live view of services, integrations, channels, scheduled jobs, and recent activity.' },
    { t: 'Knowledge-graph explorer',
      d: 'Browse every entity, relationship, and decision the agent reasons over.' },
    { t: 'Persistent knowledge graph',
      d: 'Your clients, projects, decisions, and relationships — stored in a connected graph, not a forgetful chat thread.' },
    { t: 'Connection to your tools',
      d: 'Slack, Teams, and 25+ channels — plus email, calendars, CRMs, browsers, and internal APIs.' },
    { t: 'Autonomous, multi-step workflows',
      d: 'Completed end to end across systems.' },
    { t: 'A heartbeat',
      d: 'Proactive, scheduled action — no prompting required.' },
    { t: '24/7 monitoring, recovery, updates',
      d: 'The operations layer running underneath.' },
    { t: '5-layer security architecture',
      d: 'Edge, transport, role, command, extension.' },
    { t: 'SLA-backed support',
      d: 'Dedicated ticketing channel and named human contact.' },
  ];

  return (
    <section style={{ background: 'var(--ds-fog)', padding: '120px 0' }}>
      <Container max={1180}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
          gap: 56, alignItems: 'start',
        }}>
          <div>
            <Overline>What's included</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>
              Everything in every managed agent.
            </h2>
            <p style={{ ...BodyLg, margin: '20px 0 24px' }}>
              No tiered nickel-and-diming. Every managed agent ships with the full stack —
              the worker, the memory, the integrations, and the operations layer.
            </p>
            <div style={{
              background: '#fff',
              borderRadius: 14,
              padding: '20px 22px',
              border: '1px solid var(--ds-ink-06)',
              boxShadow: '0 6px 20px rgba(13,68,42,.06)',
            }}>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: 'var(--ds-green)', marginBottom: 8,
              }}>Grows with you</div>
              <p style={{
                fontFamily: 'Roboto, sans-serif', fontSize: 14.5, lineHeight: 1.55,
                color: 'var(--ds-ink-90)', margin: 0,
              }}>
                Add specialized agents — sales, support, ops — that coordinate with each other.
                New integrations and capabilities, on request.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14,
          }}>
            {items.map(it => (
              <div key={it.t} style={{
                background: '#fff',
                padding: '18px 18px 16px',
                borderRadius: 12,
                border: '1px solid var(--ds-ink-06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{
                    marginTop: 2, flexShrink: 0,
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'var(--ds-green-12)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 6.3 L5 8.3 L9 4" stroke="var(--ds-forest)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 14.5,
                      color: 'var(--ds-ink)', lineHeight: 1.3,
                    }}>{it.t}</div>
                    <p style={{
                      fontFamily: 'Roboto, sans-serif', fontSize: 13, lineHeight: 1.5,
                      color: 'var(--ds-ink-60)', margin: '4px 0 0',
                    }}>{it.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ----- Channels -----
function Channels() {
  const primary = ['Slack', 'Microsoft Teams'];
  const secondary = ['WhatsApp', 'Telegram', 'Discord', 'Google Chat', 'iMessage', 'Signal', 'Matrix', 'Mattermost'];
  const longtail = ['LINE', 'Feishu', 'WeChat', 'Voice Call', 'WebChat'];
  return (
    <section style={{ background: '#fff', padding: '80px 0', borderTop: '1px solid var(--ds-ink-06)' }}>
      <Container max={1180}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
          gap: 64, alignItems: 'start',
        }}>
          <div>
            <Overline>Channels</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>
              Meet your team where they already work.
            </h2>
            <p style={{ ...BodyLg, margin: '20px 0 14px' }}>
              25 channels out of the box. Multiple channels can run simultaneously on the same agent — an exec pings it in Slack while ops monitors from Teams.
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--ds-ink-60)', margin: 0 }}>
              Anything not on the list: if it has an API, we build the adapter in the pilot.
            </p>
          </div>
          <div style={{ paddingTop: 38 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
                letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--ds-green)', marginBottom: 12,
              }}>Enterprise defaults</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {primary.map(ch => (
                  <div key={ch} style={{
                    flex: 1, padding: '16px 20px',
                    background: 'var(--ds-fog)',
                    borderRadius: 12, border: '1px solid var(--ds-ink-06)',
                    fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 16,
                    color: 'var(--ds-ink)',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ds-green)', flexShrink: 0 }} />
                    {ch}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
                letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--ds-ink-60)', marginBottom: 12,
              }}>Also production-ready</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {secondary.map(ch => (
                  <span key={ch} style={{
                    padding: '6px 14px', borderRadius: 999,
                    background: '#fff', border: '1px solid var(--ds-ink-12)',
                    fontFamily: 'Roboto, sans-serif', fontSize: 13.5,
                    color: 'var(--ds-ink-90)',
                  }}>{ch}</span>
                ))}
              </div>
            </div>
            <div style={{
              padding: '14px 18px', borderRadius: 10,
              background: 'var(--ds-fog)', border: '1px solid var(--ds-ink-06)',
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
              <span style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 600, fontSize: 11,
                letterSpacing: '.12em', textTransform: 'uppercase',
                color: 'var(--ds-ink-60)', flexShrink: 0,
              }}>And more:</span>
              <span style={{
                fontFamily: 'Roboto, sans-serif', fontSize: 13,
                color: 'var(--ds-ink-60)',
              }}>{longtail.join(' · ')}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- shared text styles & helpers ---------- */
const H2 = {
  fontFamily: 'Mulish, sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(34px, 4.2vw, 56px)',
  lineHeight: 1.08,
  letterSpacing: '-.02em',
  color: 'var(--ds-ink)',
  margin: 0,
  textWrap: 'balance',
};
const BodyLg = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17,
  lineHeight: 1.65,
  color: 'var(--ds-ink-90)',
  textWrap: 'pretty',
};

function Overline({ children, color = 'var(--ds-green)' }) {
  return (
    <div style={{
      fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
      letterSpacing: '.18em', textTransform: 'uppercase',
      color, marginBottom: 14,
      display: 'inline-flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ width: 22, height: 1.5, background: color, display: 'inline-block' }} />
      {children}
    </div>
  );
}

function PullQuote({ children }) {
  return (
    <blockquote style={{
      margin: 0,
      padding: '20px 22px 22px',
      borderLeft: '3px solid var(--ds-green)',
      background: 'var(--ds-fog)',
      borderRadius: '0 12px 12px 0',
      fontFamily: 'Mulish, sans-serif', fontWeight: 700,
      fontSize: 'clamp(20px, 2vw, 26px)',
      lineHeight: 1.25, letterSpacing: '-.01em',
      color: 'var(--ds-forest)',
      textWrap: 'balance',
    }}>{children}</blockquote>
  );
}

Object.assign(window, {
  Problem, Difference, WhyManaged, HowItWorks, Channels, Included,
  H2, BodyLg, Overline, PullQuote,
});
