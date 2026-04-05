import "./Services.css";
import influencerImg from "../assets/rigo.jpeg";
import contentImg from "../assets/Tfour.jpeg";
import talentImg from "../assets/El2.jpeg";

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        {/* Header */}
        <div className="services-header">
          <div className="services-left">
            <span className="tag">+ What We Do</span>
            <h2>
              Building Connections <br />
              That Truly Matter
            </h2>
          </div>

          <div className="services-right">
            <p>
              InfluencerHub specializes in influencer marketing campaigns, 
              content creation, and artist management that elevate brand 
              visibility and deliver measurable business outcomes.
            </p>

            {/* <button className="services-btn">
              EXPLORE ALL SERVICES
            </button> */}
          </div>
        </div>

        {/* Cards */}
        <div className="services-cards">

          <div className="card">
            <img src={influencerImg} alt="Influencer Campaigns" />
            <h3>Influencer Campaigns</h3>
            <p>
              Launch impactful campaigns with influencers who align with your 
              brand, driving awareness and engagement.
            </p>
          </div>

          <div className="card">
            <img src={contentImg} alt="Content Creation" />
            <h3>Content Creation</h3>
            <p>
              Professional influencer-led content tailored to boost your 
              brand’s visibility across social platforms.
            </p>
          </div>

          <div className="card">
            <img src={talentImg} alt="Talent Management" />
            <h3>Artist Management</h3>
            <p>
              Comprehensive artist management services focused on career 
              development, brand partnerships, and long-term growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
