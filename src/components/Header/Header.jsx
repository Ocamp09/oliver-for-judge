import { useState, useEffect, useRef } from "react";
import "./Header.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  /* Close menu when clicking outside */
  useEffect(() => {
    function handleClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  /* Close menu on Escape */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner container">
        {/* Brand */}
        <a
          href="#top"
          className="brand"
          aria-label="Brandon Oliver for Judge — home"
        >
          <span className="brand-icon" aria-hidden="true">
            ⚖
          </span>
          <span className="brand-text">
            <span className="brand-name">Brandon Oliver</span>
            <span className="brand-title">for Judge</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          ref={triggerRef}
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#donate"
          className="mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Donate
        </a>
      </nav>
    </header>
  );
}
