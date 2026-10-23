import './Footer.css'

const FOOTER_LINKS = {
  Info: [
    { label: 'About',   href: '#about' },
    { label: 'Privacy', href: '/privacy' },  // dummy — replace with real route
  ],
  Support: [
    { label: 'Donate',    href: '#donate' },
    { label: 'Join Team', href: '#volunteer' },
  ],
}

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner container">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-brand-icon" aria-hidden="true">⚖</span>
          <div className="footer-brand-text">
            <span className="footer-brand-name">Brandon Oliver</span>
            <span className="footer-brand-sub">for Judge</span>
          </div>
          <p className="footer-tagline">
            Integrity. Experience. Justice for All.
          </p>
        </div>

        {/* Link columns */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="footer-col">
              <h3 className="footer-col-heading">{group}</h3>
              <ul className="footer-col-list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="footer-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-legal">
            Paid for by Brandon Oliver for Judge.{' '}
            &copy; {CURRENT_YEAR} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
