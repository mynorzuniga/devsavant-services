// Shared primitives for the DevSavant AI Governance as a Service site.
// Built on the DevSavant Design System; matches the Managed Agents marketing kit.
const { useState, useRef, useEffect } = React;

// ----- Layout -----
function Container({ children, max = 1180, style }) {
  return (
    <div style={{ maxWidth: max, margin: '0 auto', padding: '0 28px', ...style }}>
      {children}
    </div>
  );
}

// ----- Isotype (leaf mark), small SVG recreation of the brand isotype -----
function Isotype({ size = 28, color = '#51AE7B', style }) {
  return (
    <svg width={size} height={size * (40 / 34)} viewBox="0 0 34 40" fill="none" style={style} aria-hidden="true">
      <defs>
        <linearGradient id="iso-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#76C4B1" />
          <stop offset="1" stopColor="#0D442A" />
        </linearGradient>
      </defs>
      <path
        d="M17 1 C6 12, 1 20, 1 27 C1 34, 8 39, 17 39 C26 39, 33 34, 33 27 C33 20, 28 12, 17 1 Z"
        fill={color === 'gradient' ? 'url(#iso-g)' : color}
      />
      <path d="M17 9 C12 14, 10 19, 13 23 L17 20 L21 23 C24 19, 22 14, 17 9 Z" fill="#fff" opacity=".92" />
      <path d="M13 25 L17 22 L21 25 L21 31 L17 28 L13 31 Z" fill="#fff" opacity=".92" />
    </svg>
  );
}

// ----- Pill button (arrow optional) -----
function Pill({
  children, variant = 'outline-dark', arrow = false, onClick,
  href, size = 'md', style,
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { padding: '10px 20px', fontSize: 13 },
    md: { padding: '14px 28px', fontSize: 14 },
    lg: { padding: '16px 34px', fontSize: 15 },
  };
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'Mulish, system-ui, sans-serif',
    fontWeight: 600, lineHeight: 1, letterSpacing: '0',
    borderRadius: 999, cursor: 'pointer', textDecoration: 'none',
    transition: 'all 200ms cubic-bezier(.2,.7,.1,1)',
    border: '1px solid transparent',
    ...sizes[size],
  };
  const variants = {
    'outline-dark': {
      background: hover ? '#1B1E1C' : 'transparent',
      color: hover ? '#fff' : '#1B1E1C',
      borderColor: '#1B1E1C',
    },
    'outline-green': {
      background: hover ? 'rgba(81,174,123,.08)' : 'transparent',
      color: '#0D442A',
      borderColor: '#51AE7B',
    },
    'solid-green': {
      background: hover
        ? 'linear-gradient(135deg,#3C9466 0%,#0D442A 100%)'
        : 'linear-gradient(135deg,#51AE7B 0%,#0D442A 100%)',
      color: '#fff',
      border: 'none',
      boxShadow: hover ? '0 10px 26px rgba(81,174,123,.28)' : '0 4px 14px rgba(81,174,123,.18)',
    },
    'outline-white': {
      background: hover ? 'rgba(255,255,255,.08)' : 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,.75)',
    },
  };
  const props = {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: { ...base, ...variants[variant], ...style },
  };
  const content = (
    <>
      {children}
      {arrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3.5 10.5 L10.5 3.5 M4.5 3.5 H10.5 V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
  if (href) return <a href={href} {...props}>{content}</a>;
  return <button {...props}>{content}</button>;
}

// ----- Overline (eyebrow) -----
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

// ----- Reveal-on-scroll wrapper -----
function Reveal({ children, delay = 0, style, as = 'div', className = '' }) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); ob.disconnect(); }
    }, { threshold: 0.15 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(18px)',
      transition: `opacity 700ms cubic-bezier(.2,.7,.1,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.1,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </Tag>
  );
}

// ----- Shared text styles -----
const H2 = {
  fontFamily: 'Mulish, sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(32px, 4vw, 52px)',
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

Object.assign(window, { Container, Isotype, Pill, Overline, Reveal, H2, BodyLg });
