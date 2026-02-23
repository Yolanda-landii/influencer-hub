// src/components/Hero.jsx
import "./Hero.css";
import heroImage from "../assets/El1.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Connect Brands With Real Impact</h1>
        <p>
          We help brands build authentic connections through
          powerful influencer campaigns.
        </p>
        <button className="primary-btn">Start a Campaign</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Influencers" />
      </div>
    </section>
  );
}
