// src/components/Hero.jsx
import "./Hero.css";
import heroImage from "../assets/El1.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tagline">+ Influence Simplified</span>
        <h1>Connect Brands With Real Impact</h1>
        <p>
          We partner with brands to create authentic connections through 
          thoughtfully crafted influencer campaigns. By combining 
          creativity, strategy, and data-driven insights, we help brands 
          engage audiences, inspire action, and achieve meaningful, 
          measurable growth.
        </p>
        <button type="button" className="primary-btn">
          Start a Campaign
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Influencers" />
      </div>
    </section>
  );
}
