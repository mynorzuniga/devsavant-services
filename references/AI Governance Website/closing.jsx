/* ============================================================
   Business benefits · FAQ · Pilot CTA · Footer
   ============================================================ */

function Benefits() {
  const items = [
    { t: 'Reduce risk', d: 'Eliminate ungoverned AI assets connecting to production systems without review, audit trail, or declared dependencies.' },
    { t: 'Create accountability', d: 'Every AI output has an owner, review history, system dependencies, and status. Always visible, never ambiguous.' },
    { t: 'Accelerate adoption safely', d: 'Employees have a clear, trained path to building with approved tools. Governance enables speed rather than slowing it down.' },
    { t: 'Measure real impact', d: 'Per-asset baselines and production metrics answer the question every leader is asking: what is AI actually doing for the business?' },
    { t: 'Retain knowledge', d: 'When an owner leaves, the asset, its documentation, and its access model transfer cleanly. No orphaned automations, no lost context.' },
    { t: 'Scale with control', d: 'Once the first tools are governed, adding new AI platforms follows the same review model. Expansion is controlled, not chaotic.' },
  ];
  return (
    <section style={{ background: 'var(--ds-fog)', padding: '96px 0 100px' }}>
      <Container max={1180}>
        <Reveal>
          <Overline>Business benefits</Overline>
          <h2 style={{ ...H2, maxWidth: 720 }}>Six reasons this pays for itself.</h2>
        </Reveal>
        <div className="benefit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 44 }}>
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 80}>
              <div style={{
                background: '#fff', borderRadius: 16, padding: '24px 24px 22px', height: '100%',
                border: '1px solid var(--ds-ink-06)', boxShadow: '0 6px 20px rgba(13,68,42,.05)',
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 999, background: 'var(--ds-green-12)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 7.3 L6 9.6 L10.5 4.6" stroke="var(--ds-forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--ds-ink)', margin: '0 0 8px', letterSpacing: '-.01em' }}>{it.t}</h3>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'var(--ds-ink-60)', margin: 0, textWrap: 'pretty' }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ----- FAQ -----
function FAQ() {
  const items = [
    { q: 'How is this different from just writing an AI policy?', a: 'A policy is a document people forget. This is an operating model: a catalog, a review workflow, a permissions layer, and a dashboard. The rules are enforced by the system, not left to good intentions.' },
    { q: 'Do we have to govern everything at once?', a: 'No. You start with one pilot asset your team already wants to build or govern. We design the catalog, review path, and measurement model around it, prove the value, then expand.' },
    { q: 'Will this slow our teams down?', a: 'The training and templates make governance part of the creation experience, not a gate bolted on afterward. Approved tools, guided templates, and a clear intake path mean people move faster, with guardrails.' },
    { q: 'How do you handle assets that touch sensitive systems?', a: 'Every asset declares its connections and access level before review. Assets touching sensitive or classified data follow an elevated review path with designated security approvers, and all access is logged and revocable.' },
    { q: 'What happens when the person who built an asset leaves?', a: 'Ownership, documentation, and access transfer cleanly as part of the asset lifecycle. Nothing is left orphaned in production. No silent breakages, no lost context.' },
    { q: 'Which AI tools and platforms does it support?', a: 'The model is tool-agnostic. Once your first approved tools are governed, adding a new platform follows the same review and catalog process. Controlled expansion, not chaos.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: '#fff', padding: '96px 0 100px' }}>
      <Container max={1000}>
        <div className="mobile-stack" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: 56, alignItems: 'start',
        }}>
          <div className="faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <Overline>FAQ</Overline>
            <h2 style={{ ...H2, marginTop: 8 }}>The questions leaders ask.</h2>
            <p style={{ ...BodyLg, margin: '20px 0 0' }}>
              Short, direct answers, written by the people who design and run the governance model.
            </p>
          </div>
          <div style={{
            background: '#fff', borderRadius: 18, border: '1px solid var(--ds-ink-06)',
            overflow: 'hidden', boxShadow: '0 8px 24px rgba(13,68,42,.06)',
          }}>
            {items.map((it, i) => (
              <FAQItem key={i} {...it} isOpen={open === i} first={i === 0} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onToggle, first }) {
  return (
    <div className={isOpen ? 'faq-open' : ''} style={{ borderTop: first ? 'none' : '1px solid var(--ds-ink-06)' }}>
      <button onClick={onToggle} style={{
        width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--ds-ink)', letterSpacing: '-.005em' }}>{q}</span>
        <span className="faq-chev" style={{
          width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--ds-forest)' : 'var(--ds-green-12)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 200ms',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5 L6 7.5 L9 4.5" stroke={isOpen ? '#fff' : 'var(--ds-forest)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      <div style={{ maxHeight: isOpen ? 320 : 0, overflow: 'hidden', transition: 'max-height 300ms cubic-bezier(.2,.7,.1,1)' }}>
        <div style={{ padding: '0 26px 24px', maxWidth: 680 }}>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--ds-ink-90)', margin: 0 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

// ----- Pilot CTA -----
function PilotCTA() {
  const steps = [
    { n: '1', t: 'Identify', d: 'One real AI asset your team already wants, with a measurable time-saved baseline.' },
    { n: '2', t: 'Govern', d: 'Catalog it, define its review path, assign roles, and declare its connections.' },
    { n: '3', t: 'Measure', d: 'Track it live on the dashboard, then roll the model out across teams.' },
  ];
  return (
    <section id="demo" style={{
      background: 'linear-gradient(180deg, #0E2B1C 0%, #051a10 100%)', color: '#fff',
      padding: '108px 0 116px', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 50, right: '7%', opacity: .12 }}>
        <Isotype size={150} color="#fff" />
      </div>
      <svg aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: 0, opacity: .22 }} width="300" height="190" viewBox="0 0 300 190">
        <defs><pattern id="cta-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="rgba(168,224,192,.35)"/></pattern></defs>
        <rect width="300" height="190" fill="url(#cta-dots)" />
      </svg>

      <Container max={1000} style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px', borderRadius: 999,
            background: 'rgba(168,224,192,.10)', border: '1px solid rgba(168,224,192,.20)', marginBottom: 22,
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '.18em',
            textTransform: 'uppercase', color: '#A8E0C0',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: '#A8E0C0' }} /> Start small, prove it
          </div>
          <h2 style={{ ...H2, color: '#fff', margin: '0 auto 16px' }}>
            Start with one pilot asset.<br/>
            <span style={{ color: '#A8E0C0' }}>Prove the model. Then scale it.</span>
          </h2>
          <p style={{ ...BodyLg, color: 'rgba(255,255,255,.8)', maxWidth: 620, margin: '0 auto 12px' }}>
            We identify one useful AI asset your team already wants to build or govern, and design
            the initial catalog, review path, and measurement model around it, then expand from there.
          </p>
        </div>

        <div className="cta-steps" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, margin: '44px 0 40px',
        }}>
          {steps.map(s => (
            <div key={s.n} style={{
              background: 'rgba(255,255,255,.05)', border: '1px solid rgba(168,224,192,.18)',
              borderRadius: 16, padding: '24px 24px 22px',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999, background: 'rgba(168,224,192,.16)',
                border: '1px solid rgba(168,224,192,.4)', color: '#A8E0C0',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 14,
              }}>{s.n}</div>
              <div style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 6 }}>{s.t}</div>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.74)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Pill variant="solid-green" size="lg" href="mailto:product@devsavant.com" arrow>Book a demo</Pill>
          <Pill variant="outline-white" size="lg" href="https://devsavant.com">Visit devsavant.com</Pill>
        </div>
      </Container>
    </section>
  );
}

// ----- Footer -----
function Footer() {
  const cols = [
    { title: 'AI Governance', links: ['The model', 'Governance layer', 'Security', 'KPI dashboard', 'FAQ'] },
    { title: 'DevSavant', links: ['Product Engineering', 'Global Staffing', 'VC Partnerships', 'Careers', 'Blog'] },
    { title: 'Company', links: ['About', 'Contact', 'Privacy Policy', 'Terms'] },
  ];
  return (
    <footer style={{ background: 'var(--ds-ink)', color: '#fff', padding: '80px 0 40px' }}>
      <Container max={1180}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))', gap: 48, marginBottom: 56,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <img src="assets/logo-devsavant-light.png" alt="" style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 900, letterSpacing: '.02em', color: '#fff', fontSize: 15 }}>
                <span style={{ fontWeight: 900 }}>DEV</span><span style={{ fontWeight: 500 }}>SAVANT</span>
              </span>
            </div>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', margin: '0 0 22px', maxWidth: 340 }}>
              AI Governance as a Service is delivered by DevSavant, a boutique product-engineering
              firm. Part of the Savant Growth ecosystem.
            </p>
            <Pill variant="outline-white" size="sm" href="#demo" arrow>Book a demo</Pill>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#A8E0C0', marginBottom: 16 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, color: 'rgba(255,255,255,.75)', textDecoration: 'none', borderBottom: 'none', transition: 'color 160ms' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.75)'}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,.10)', fontFamily: 'Roboto, sans-serif', fontSize: 12.5,
          color: 'rgba(255,255,255,.55)', flexWrap: 'wrap', gap: 12,
        }}>
          <div>© {new Date().getFullYear()} DevSavant. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <span>Every connection declared</span>
            <span style={{ opacity: .4 }}>·</span>
            <span>Every action logged</span>
            <span style={{ opacity: .4 }}>·</span>
            <span>product@devsavant.com</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Benefits, FAQ, PilotCTA, Footer });
