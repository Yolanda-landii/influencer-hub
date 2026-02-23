import "./Influencer.css";

const influencers = [
  {
    name: "Elijah Shaai",
    handle: "@Elijahshaai",
    followers: "1.5M Followers",
    image: "/src/assets/El.jpeg",
  },
  {
    name: "Creative Bow",
    handle: "@creativebow",
    followers: "742.8K Followers",
    image: "/src/assets/bow.jpeg",
  },
  {
    name: "Rigo Lion",
    handle: "@rigo_lion",
    followers: "443.9K Followers",
    image: "/src/assets/Rigo1.jpeg",
  },
  {
    name: "Amohelang",
    handle: "@amohelang301",
    followers: "428K Followers",
    image: "/src/assets/amo.jpeg",
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
