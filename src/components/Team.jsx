import "./Team.css";
import Yolanda from "../assets/Yolanda.jpeg";
import Rigo from "../assets/rigo.jpeg";
import Bow from "../assets/creativebow.jpeg";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const team = [
  {
    name: "King Landii",
    role: "Founder & CEO",
    img: Yolanda,
  },
  {
    name: "Rigo Lion",
    role: "Head of Strategy",
    img: Rigo,
  },
  {
    name: "Creative Bow",
    role: "Creative Director",
    img: Bow,
  },
];

export default function Team() {
  return (
    <section className="team">
      <span className="team-tag">+ Meet Team</span>
      <h2>
        Experts Behind Every Successful
        <br />
        Campaign
      </h2>

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
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}