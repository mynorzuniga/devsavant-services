/* ============================================================
   FAQ + Final CTA + Footer
   ============================================================ */

// ----- FAQ -----
function FAQ() {
  const items = [
    {
      q: 'How is this different from ChatGPT or Copilot?',
      a: 'Those answer questions. A managed agent acts — across your tools, on its own schedule — remembers your business, and is run for you so it stays reliable.',
    },
    {
      q: 'Where does my data live? Is it secure?',
      a: "On a dedicated, isolated environment — your data never mingles with another client's — behind a five-layer security architecture. Your data and your agent's memory are yours and exportable any time.",
    },
    {
      q: 'What if I want to leave, or DevSavant stops?',
      a: 'Your data, memory, and configuration are exportable on request, and the agent is built on open-source OpenClaw — you are never technically locked to us.',
    },
    {
      q: 'Why not just build this ourselves?',
      a: "You can. Expect months of engineering and a permanent operations burden — the agent breaks on every framework update if no one's maintaining it. We've already built and productized that operations layer.",
    },
    {
      q: 'How much of our time does it take?',
      a: 'A few hours during the first week — access, a walkthrough of your workflows, a review. After that, it runs.',
    },
    {
      q: 'Which AI model does it use?',
      a: 'A current frontier model, included in the price. If you need a specific model, we support that, billed at usage.',
    },
    {
      q: 'Can we try it before committing?',
      a: 'Yes. Try a live demo agent in Slack, then run a focused 2-week pilot — a custom agent for your own use case. If you continue, your pilot fee is credited to your first month. No lock-in.',
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" style={{ background: 'var(--ds-fog)', padding: '120px 0' }}>
      <Container max={980}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
          gap: 64, alignItems: 'start',
        }}>
          <div style={{ position: 'sticky', top: 100 }} className="faq-sticky">
            <Overline>FAQ</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>
              The real questions buyers ask.
            </h2>
            <p style={{ ...BodyLg, margin: '20px 0 0' }}>
              No marketing hand-waving. Short answers, written by the people who run the agents.
            </p>
          </div>

          <div style={{
            background: '#fff',
            borderRadius: 18,
            border: '1px solid var(--ds-ink-06)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(13,68,42,.06)',
          }}>
            {items.map((it, i) => (
              <FAQItem
                key={i}
                {...it}
                isOpen={open === i}
                first={i === 0}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onToggle, first }) {
  return (
    <div
      className={isOpen ? 'faq-open' : ''}
      style={{
        borderTop: first ? 'none' : '1px solid var(--ds-ink-06)',
      }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left',
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '22px 26px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>
        <span style={{
          fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 17,
          color: 'var(--ds-ink)', letterSpacing: '-.005em',
        }}>{q}</span>
        <span className="faq-chev" style={{
          width: 28, height: 28, borderRadius: '50%',
          background: isOpen ? 'var(--ds-forest)' : 'var(--ds-green-12)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background 200ms',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3 4.5 L6 7.5 L9 4.5"
              stroke={isOpen ? '#fff' : 'var(--ds-forest)'}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: isOpen ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height 300ms cubic-bezier(.2,.7,.1,1)',
      }}>
        <div style={{ padding: '0 26px 24px', maxWidth: 640 }}>
          <p style={{
            fontFamily: 'Roboto, sans-serif', fontSize: 15, lineHeight: 1.6,
            color: 'var(--ds-ink-90)', margin: 0,
          }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

// ----- Final CTA -----
function FinalCTA() {
  return (
    <section id="demo" style={{
      background: 'linear-gradient(180deg, #0E2B1C 0%, #051a10 100%)',
      color: '#fff',
      padding: '120px 0 130px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* sparse accent shapes */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 40, right: '8%', opacity: .14,
      }}>
        <Isotype size={140} color="#fff" />
      </div>
      <svg aria-hidden="true" style={{
        position: 'absolute', left: 0, bottom: 0, opacity: .25,
      }} width="280" height="180" viewBox="0 0 280 180">
        <defs>
          <pattern id="cta-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="rgba(168,224,192,.35)" />
          </pattern>
        </defs>
        <rect width="280" height="180" fill="url(#cta-dots)" />
      </svg>

      <Container max={980} style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', borderRadius: 999,
            background: 'rgba(168,224,192,.10)',
            border: '1px solid rgba(168,224,192,.20)',
            marginBottom: 24,
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11,
            letterSpacing: '.18em', textTransform: 'uppercase',
            color: '#A8E0C0',
          }}>
            <HeartbeatDot />
            Ready when you are
          </div>

          <h2 style={{
            ...H2,
            color: '#fff',
            margin: '0 auto 16px', maxWidth: 820,
          }}>
            Meet your <span style={{ color: '#A8E0C0' }}>Company Brain.</span>
          </h2>
          <p style={{
            ...BodyLg,
            color: 'rgba(255,255,255,.78)',
            maxWidth: 600, margin: '0 auto 36px',
            textAlign: 'center',
          }}>
            Talk to one in 20 minutes. We'll show you what a managed agent actually does — and what it would do for you.
          </p>

          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            <Pill variant="solid-green" size="lg" href="#" arrow>Book a 20-minute demo</Pill>
            <Pill variant="outline-white" size="lg" href="#">Try a live agent in Slack</Pill>
          </div>

          <p style={{
            marginTop: 28,
            fontFamily: 'Roboto, sans-serif', fontSize: 13,
            color: 'rgba(255,255,255,.5)',
          }}>
            No lock-in. Pilot fee credited to your first month.
          </p>
        </div>
      </Container>
    </section>
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

// ----- Footer -----
function Footer() {
  const cols = [
    {
      title: 'Managed Agents',
      links: ['How it works', "What's different", 'Pricing', 'Security', 'FAQ'],
    },
    {
      title: 'DevSavant',
      links: ['Product Engineering', 'Global Staffing', 'VC Partnerships', 'Careers', 'Blog'],
    },
    {
      title: 'Company',
      links: ['About', 'Contact', 'Privacy Policy', 'Terms'],
    },
  ];

  return (
    <footer style={{
      background: 'var(--ds-ink)',
      color: '#fff',
      padding: '80px 0 40px',
    }}>
      <Container max={1180}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))',
          gap: 48, marginBottom: 56,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <img src="assets/logo-devsavant-light.png" alt=""
                style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              <span style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 900, letterSpacing: '.02em',
                color: '#fff', fontSize: 15,
              }}>
                <span style={{ fontWeight: 900 }}>DEV</span>
                <span style={{ fontWeight: 500 }}>SAVANT</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6,
              color: 'rgba(255,255,255,.65)', margin: '0 0 22px', maxWidth: 320,
            }}>
              Managed Agents is built and operated by DevSavant — a boutique product-engineering firm.
              Part of the Savant Growth ecosystem.
            </p>
            <Pill variant="outline-white" size="sm" href="#demo" arrow>Book a demo</Pill>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12,
                letterSpacing: '.14em', textTransform: 'uppercase',
                color: '#A8E0C0', marginBottom: 16,
              }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      fontFamily: 'Roboto, sans-serif', fontSize: 14,
                      color: 'rgba(255,255,255,.75)', textDecoration: 'none',
                      transition: 'color 160ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.75)'}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.10)',
          fontFamily: 'Roboto, sans-serif', fontSize: 12.5,
          color: 'rgba(255,255,255,.55)', flexWrap: 'wrap', gap: 12,
        }}>
          <div>© {new Date().getFullYear()} DevSavant. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 18 }}>
            <span>Built on open-source OpenClaw</span>
            <span style={{ opacity: .4 }}>·</span>
            <span>5-layer security architecture</span>
            <span style={{ opacity: .4 }}>·</span>
            <span>99.9% monitored uptime</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { FAQ, FinalCTA, Footer });
