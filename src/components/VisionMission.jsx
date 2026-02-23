import "./VisionMission.css";
import centerImage from "../assets/El.jpeg";
import LeftImage from "../assets/wagon.jpeg";

export default function VisionMission() {
  return (
    <section className="vision-mission">
      {/* LEFT – VISION */}
      <div className="vision-col">
        <span className="tag">Our Vision</span>
        <p>
          To redefine influencer marketing by creating authentic,
          transparent, and impactful collaborations that inspire trust
          and drive measurable results worldwide.
        </p>

        <img
          src={LeftImage}
          alt="Vision visual"
          className="vision-img"
        />
      </div>

      {/* CENTER – IMAGE */}
      <div className="center-image">
        <img src={centerImage} alt="Influencer creator" />
      </div>

      {/* RIGHT – MISSION */}
      <div className="mission-col">
        <span className="tag mission">+ Our Mission</span>
        <h2>Shaping The Future Of<br />Influencer Marketing</h2>

        <p className="mission-desc">
          At Socianza, we focus on creating meaningful bridges between
          brands and audiences by aligning shared values and impactful
          campaigns.
        </p>

        <div className="mission-list">
          <div className="mission-item">
            <span className="icon">👥</span>
            <div>
              <h4>Connect Smart</h4>
              <p>Match brands with the right influencers efficiently.</p>
            </div>
          </div>

          <div className="mission-item">
            <span className="icon">✔</span>
            <div>
              <h4>Ensure Quality</h4>
              <p>Maintain high standards in every campaign execution.</p>
            </div>
          </div>

          <div className="mission-item">
            <span className="icon">🚀</span>
            <div>
              <h4>Innovate Constantly</h4>
              <p>Evolve with digital trends to stay ahead.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
