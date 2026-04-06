import "./Influencer.css";


import El from "../assets/El.jpeg";
import Bow from "../assets/bow.jpeg";
import Rigo from "../assets/Rigo1.jpeg";
import Amo from "../assets/amo.jpeg";
import Berry from "../assets/berrywagon.jpeg";
import Tfour from "../assets/Tfour.jpeg";
import Kiddo from "../assets/kiddo.jpeg";
import Twosix from "../assets/twosix.jpeg";

const influencers = [
  {
    name: "Elijah Shaai",
    handle: "@Elijahshaai",
    // category: "Lifestyle",
    followers: "1.5M Followers",
    image: El, // Imported image
  },
  {
    name: "Creative Bow",
    handle: "@creativebow",
    // category: "Creative",
    followers: "742.8K Followers",
    image: Bow, // Imported image
  },
  {
    name: "Rigo Lion",
    handle: "@rigo_lion",
    // category: "Entertainment",
    followers: "443.9K Followers",
    image: Rigo, // Imported image
  },
  {
    name: "Amohelang",
    handle: "@amohelang301",
    // category: "Lifestyle",
    followers: "428K Followers",
    image: Amo, // Imported image
  },
  {
    name: "Keitu Mahlekgane",
    handle: "@tfourkeitu4",
    // category: "Fashion",
    followers: "694.9K Followers",
    image: Tfour, // Imported image
  },
  {
    name: "Le TwoSix",
    handle: "@le.twosix",
    // category: "Music",
    followers: "54.8K Followers",
    image: Twosix, // Imported image
  },
  {
    name: "Berrywagon ",
    handle: "@berry_wagon",
    // category: "Lifestyle",
    followers: "36.6K Followers",
    image: Berry, // Imported image
  },
  {
    name: "Kiddo Sleezy",
    handle: "@kiddosleezy2",
    // category: "Gaming",
    followers: "35.8K Followers",
    image: Kiddo, // Imported image
  },
];

export default function Influencers() {
  return (
    <section className="influencer">
      <h2>Meet our Influencers</h2>

      <div className="influencer-grid">
        {influencers.map((item, index) => (
          <div className="influencer-card" key={index}>
            <div className="influencer-card-media">
              <img src={item.image} alt={item.name} />

              <div className="badge">
                {/* <span className="badge-category">{item.category}</span> */}
                <span className="badge-followers">{item.followers}</span>
              </div>

              <div className="info">
                <h3>{item.name}</h3>
                <p>{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
