import heroImg from "../../assets/hero.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-content">
          <p className="hero-eyebrow">Candidate for Judge</p>
          <h1 className="hero-heading">
            Meet <span className="hero-name">Brandon Oliver</span>
          </h1>
          <p className="hero-tagline">
            Integrity. Experience. Justice for All.
          </p>
        </div>
        <div className="hero-photo-wrap">
          <img
            src={heroImg}
            alt="Brandon Oliver, candidate for Judge"
            className="hero-photo"
            width={420}
            height={520}
          />
          <div className="hero-photo-ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
