import Header    from './components/Header/Header'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Volunteer from './components/Volunteer/Volunteer'
import Footer    from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Hero />
        <About />

        <Volunteer />

        {/* ── Donate placeholder ────────────────────────────
            Replace this section with a real donation widget
            or payment integration when ready.
        ─────────────────────────────────────────────────── */}
        <section
          id="donate"
          style={{
            padding: '80px 24px',
            textAlign: 'center',
            background: 'var(--bg-surface)',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '14px',
            }}
          >
            Donate
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--text-heading)',
              marginBottom: '16px',
            }}
          >
            Support the Campaign
          </h2>
          <p
            style={{
              color: 'var(--text)',
              maxWidth: '480px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Your contribution helps us reach more voters and spread the message
            of fair, impartial justice for everyone.
          </p>
          <a
            href="#donate"
            style={{
              display: 'inline-flex',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '15px',
              background: 'var(--gold)',
              color: '#0d0f14',
              textDecoration: 'none',
            }}
          >
            Donate Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
