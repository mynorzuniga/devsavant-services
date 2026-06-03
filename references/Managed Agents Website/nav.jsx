// Nav — white pill floating at top, DevSavant + Managed Agents lockup, anchor links, CTAs.
function Nav() {
  const links = [
    { label: 'How it works', href: '#how' },
    { label: 'What\u2019s different', href: '#different' },
    { label: 'Pricing',       href: '#pricing' },
    { label: 'FAQ',           href: '#faq' },
  ];
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 41,
        padding: scrolled ? '12px 0 0' : '18px 0 0',
        background: 'transparent',
        transition: 'padding 200ms cubic-bezier(.2,.7,.1,1)',
        pointerEvents: 'none',
      }}>
        <div style={{ pointerEvents: 'auto' }}>
          <Container max={1260} style={{ pointerEvents: 'auto' }}>
            <nav style={{
              background: '#fff',
              borderRadius: 999,
              boxShadow: scrolled
                ? '0 12px 36px rgba(13,68,42,.10), 0 1px 0 rgba(27,30,28,.04)'
                : '0 8px 30px rgba(13,68,42,.06), 0 1px 0 rgba(27,30,28,.04)',
              display: 'flex', alignItems: 'center', gap: 18,
              padding: '10px 14px 10px 22px',
              transition: 'box-shadow 200ms',
            }}>
              <a href="#top" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', lineHeight: 1 }}>
                <img src="assets/logo-devsavant-isotype-color.png" alt="" style={{ height: 28, width: 'auto', display: 'block' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, lineHeight: 1 }}>
                  <span style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 900, letterSpacing: '.02em',
                    color: 'var(--ds-ink)', fontSize: 15,
                  }}>
                    <span style={{ fontWeight: 900 }}>DEV</span>
                    <span style={{ fontWeight: 500 }}>SAVANT</span>
                  </span>
                  <span aria-hidden="true" style={{ width: 1, height: 12, background: 'var(--ds-ink-12)' }} />
                  <span style={{
                    fontFamily: 'Mulish, sans-serif', fontWeight: 600,
                    fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase',
                    color: 'var(--ds-forest)',
                  }}>Managed Agents</span>
                </div>
              </a>

              {/* Desktop links */}
              <div className="nav-desktop" style={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                {links.map(l => (
                  <a key={l.label} href={l.href}
                    style={{
                      padding: '10px 14px', borderRadius: 999,
                      fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 500,
                      color: 'var(--ds-ink)', textDecoration: 'none',
                      transition: 'background 180ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(81,174,123,.10)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >{l.label}</a>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="nav-desktop" style={{ display: 'flex', gap: 8 }}>
                <Pill variant="outline-dark" size="sm" href="#try" arrow>Try in Slack</Pill>
                <Pill variant="solid-green" size="sm" href="#demo" arrow>Book a demo</Pill>
              </div>

              {/* Mobile hamburger */}
              <button
                className="nav-mobile"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Open menu"
                style={{
                  marginLeft: 'auto',
                  background: 'transparent',
                  border: 'none', cursor: 'pointer',
                  width: 40, height: 40, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6 H17 M3 10 H17 M3 14 H17" stroke="var(--ds-ink)" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </nav>
          </Container>
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        className="nav-mobile"
        onClick={closeMenu}
        style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(8,43,27,.45)',
          backdropFilter: 'blur(2px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 280ms cubic-bezier(.2,.7,.1,1)',
        }}
      />

      {/* Mobile drawer */}
      <div
        className="nav-mobile"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
          width: 280,
          background: '#fff',
          boxShadow: '-8px 0 40px rgba(13,68,42,.18)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 320ms cubic-bezier(.2,.7,.1,1)',
          display: 'flex', flexDirection: 'column',
          padding: '0 0 32px',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 20px 18px 24px',
          borderBottom: '1px solid var(--ds-ink-06)',
        }}>
          <span style={{
            fontFamily: 'Mulish, sans-serif', fontWeight: 700, fontSize: 13,
            letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--ds-forest)',
          }}>Menu</span>
          <button onClick={closeMenu} style={{
            background: 'var(--ds-fog)', border: 'none', cursor: 'pointer',
            width: 36, height: 36, borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3 L13 13 M13 3 L3 13" stroke="var(--ds-ink)" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', flex: 1 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={closeMenu}
              style={{
                padding: '14px 12px', borderRadius: 10,
                fontFamily: 'Mulish, sans-serif', fontSize: 18, fontWeight: 600,
                color: 'var(--ds-ink)', textDecoration: 'none',
                borderBottom: '1px solid var(--ds-ink-06)',
              }}
            >{l.label}</a>
          ))}
        </div>

        {/* Drawer CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 20px' }}>
          <Pill variant="outline-dark" size="sm" href="#try" arrow onClick={closeMenu}>Try in Slack</Pill>
          <Pill variant="solid-green" size="sm" href="#demo" arrow onClick={closeMenu}>Book a demo</Pill>
        </div>
      </div>
    </>
  );
}
Object.assign(window, { Nav });
