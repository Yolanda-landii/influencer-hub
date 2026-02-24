import "./Influencer.css";


import El from "../assets/El.jpeg";
import Bow from "../assets/bow.jpeg";
import Rigo from "../assets/Rigo1.jpeg";
import Amo from "../assets/amo.jpeg";

const influencers = [
  {
    name: "Elijah Shaai",
    handle: "@Elijahshaai",
    followers: "1.5M Followers",
    image: El, // Imported image
  },
  {
    name: "Creative Bow",
    handle: "@creativebow",
    followers: "742.8K Followers",
    image: Bow, // Imported image
  },
  {
    name: "Rigo Lion",
    handle: "@rigo_lion",
    followers: "443.9K Followers",
    image: Rigo, // Imported image
  },
  {
    name: "Amohelang",
    handle: "@amohelang301",
    followers: "428K Followers",
    image: Amo, // Imported image
  },
];

export default function Influencers() {
  return (
    <section className="influencer">
      <h2>Influencers</h2>

      <div className="influencer-grid">
        {influencers.map((item, index) => (
          <div className="influencer-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="badge">
              <span>{item.followers}</span>
            </div>

            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
