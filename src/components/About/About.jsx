import "./About.css";

/* ── Bio content ─────────────────────────────────────────────
   Replace these paragraphs with Brandon's actual biography.
   Each object maps to a rendered <p> tag inside the section.
   ─────────────────────────────────────────────────────────── */
const BIO_PARAGRAPHS = [
  `Brandon Oliver has dedicated his career to upholding the principles of fairness,
   impartiality, and equal justice under the law. With over 15 years of experience as
   a practicing attorney and community advocate, Brandon brings a deep understanding of
   the legal system and an unwavering commitment to the people he serves.`,

  `Born and raised in this community, Brandon understands firsthand the challenges
   families face when navigating the court system. He has spent his career fighting for
   those who need it most — representing individuals in civil rights cases, family law
   disputes, and criminal defense matters — always with compassion and professionalism.`,

  `As a Judge, Brandon Oliver will bring that same dedication to the bench. He believes
   that every person who walks into a courtroom deserves to be heard, treated with dignity,
   and given a fair chance. He is committed to a justice system that works for everyone,
   not just the privileged few.`,

  `Brandon holds a Juris Doctor from [Law School Name] and a Bachelor of Arts in Political
   Science from [University Name]. He has served on the board of [Local Legal Aid
   Organization] and has been recognized by [Bar Association] for his outstanding
   service to the community. He and his family are proud to call this community home.`,
];

const HIGHLIGHTS = [
  { stat: "15+", label: "Years in Practice" },
  { stat: "500+", label: "Cases Handled" },
  { stat: "1.5", label: "Grandkids" },
];

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-inner container">
        {/* Section label */}
        <div className="section-label" aria-hidden="true">
          About
        </div>

        <h2 className="about-heading" id="about-heading">
          A Career Built on <span className="accent">Justice</span>
        </h2>

        {/* Stats row */}
        <div className="about-highlights" role="list">
          {HIGHLIGHTS.map(({ stat, label }) => (
            <div key={label} className="highlight-item" role="listitem">
              <span className="highlight-stat">{stat}</span>
              <span className="highlight-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="about-divider" aria-hidden="true" />

        {/* Bio */}
        <div className="about-bio">
          {BIO_PARAGRAPHS.map((text, i) => (
            <p key={i} className="about-paragraph">
              {text.trim()}
            </p>
          ))}
        </div>

        {/* CTA row */}
        <div className="about-cta-row">
          <a href="#volunteer" className="btn btn-outline">
            Join Our Team
          </a>
          <a href="#donate" className="btn btn-primary">
            Support Brandon
          </a>
        </div>
      </div>
    </section>
  );
}
