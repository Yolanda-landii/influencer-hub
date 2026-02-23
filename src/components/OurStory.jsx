import "./OurStory.css";
import Amo2 from "../assets/Amo2.jpeg";

export default function OurStory() {
  return (
    <section className="our-story-section">

      <div className="gradient-bg"></div>

      <div className="container">
        <div className="influencer-wrapper">

          {/* Left Image */}
          <div className="influencer-image">
            <img src={Amo2} alt="Influencer" />
          </div>

          {/* Right Content */}
          <div className="influencer-content">
            <span className="section-tag">+ About InfluencerHub</span>
            <h2>Driving Brands With Influencer Power</h2>
            <p>
              We bridge the gap between brands and influencers, creating
              campaigns that inspire trust, spark engagement, and deliver
              measurable impact.
            </p>
          </div>

        </div>

        
      </div>

    </section>
  );
}

