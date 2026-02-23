import "./Team.css";
import amelia from "../assets/amelia.jpg";
import david from "../assets/david.jpg";
import sofia from "../assets/sofia.jpg";

const team = [
  {
    name: "Amelia Ross",
    role: "Founder & CEO",
    img: amelia,
  },
  {
    name: "David Kim",
    role: "Head of Strategy",
    img: david,
  },
  {
    name: "Sofia Martinez",
    role: "Creative Director",
    img: sofia,
  },
];

export default function Team() {
  return (
    <section className="team">
      <span className="team-tag">+ Meet Team</span>
      <h2>Experts Behind Every Successful<br />Campaign</h2>

      <p className="team-desc">
        Our passionate team brings together creativity, data, and strategy
        to build meaningful influencer partnerships that drive results.
      </p>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} />

            <h4>{member.name}</h4>
            <span>{member.role}</span>

            <p>
              Hoc augue massa consectetur potenti hac. Ante lobortis
              auctor vulputate sit nisl. Tempor diam ornare risus.
            </p>

            <div className="team-socials">
              <span>●</span>
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}