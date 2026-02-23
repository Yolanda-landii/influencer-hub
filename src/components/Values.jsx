import "./Values.css";
import valuesImage from "../assets/berry.jpeg"; 

export default function Values() {
  return (
    <section className="values">
      <div className="values-content">
        <span className="values-tag">+ Our Values</span>
        <h2>Guiding Principles For<br />Every Collaboration</h2>

        <p>
          We believe that strong partnerships are built on clear values.
          These principles guide how we connect brands with influencers,
          ensuring authenticity and measurable success.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="icon">✓</div>
            <h4>Integrity</h4>
            <p>
              We ensure every collaboration is transparent and built on honesty.
            </p>
          </div>

          <div className="value-card">
            <div className="icon">★</div>
            <h4>Diversity</h4>
            <p>
              We embrace different voices and perspectives in campaigns.
            </p>
          </div>
        </div>

        <button className="primary-btn">Explore Our Values</button>
      </div>

      <div className="values-image">
        <img src={valuesImage} alt="Content creator" />
      </div>
    </section>
  );
}
