import "./Whyus.css";
import lg1 from "../assets/1.svg";
import lg2 from "../assets/2.svg";
import lg3 from "../assets/3.svg";
import lg4 from "../assets/4.svg";

const wuCards = [
  {
    id: 0,
    logo: lg1,
    text: "Clarified Vision & Target",
    par: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    id: 1,
    logo: lg2,
    text: "Enhanced Strategies",
    par: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    id: 2,
    logo: lg3,
    text: "Innovative Solutions",
    par: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    id: 3,
    logo: lg4,
    text: "Proven Results",
    par: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
];

const Whyus = () => {
  return (
    <div className="wu-main">
      <h3>Why Choose Us</h3>
      <h1>We are the Best</h1>
      <div className="wu-card-container">
        {wuCards.map((card) => (
          <div key={card.id} className="wu-card">
            <img src={card.logo} alt={card.text} className="wu-card-logo" />
            <h4>{card.text}</h4>
            <p>{card.par}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
