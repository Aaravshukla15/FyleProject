import { useState } from "react";
import "./OurWorks.css";
import im1 from "../assets/1.png";
import im2 from "../assets/2.png";
import im3 from "../assets/3.png";
import logos from "../assets/icon.svg"; // Example import for logo 4

const OurWorks = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cardDetails = [
    {
      id: 0,
      image: im1,
      logo: logos, // Use imported logo image directly
      heading: "Web Development",
      text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
      readMore: "Read more",
    },
    {
      id: 1,
      image: im2,
      logo: logos, // Use imported logo image directly
      heading: "App Development",
      text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
      readMore: "Read more",
    },
    {
      id: 2,
      image: im3,
      logo: logos, // Use imported logo image directly
      heading: "Machine Learning",
      text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
      readMore: "Read more",
    },
    {
      id: 3,
      image: im3, // Placeholder path (update with actual path)
      logo: logos, // Example usage of imported logo image
      heading: "Cyber Security",
      text: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
      readMore: "Read more",
    },
  ];

  return (
    <div className="ow-main">
      <div className="ow-next">
        <div className="ow-top">
          <div className="top-left">
            <h3>What We Do</h3>
            <h1>Services provide for you</h1>
          </div>
          <div className="top-right">
            <p>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
          </div>
        </div>
        <div className="ow-btm">
          <div className="cards-container">
            {cardDetails.map((card, index) => (
              <div
                key={card.id}
                className={`card ${index === activeCard ? "active" : ""}`}
                onClick={() => setActiveCard(index)}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id + 1}`}
                  className="card-image"
                />
                <div className="card-details">
                  <img
                    src={card.logo}
                    alt={`Logo ${card.id + 1}`}
                    className="card-logo"
                  />
                  <div className="card-text">{card.heading}</div>
                  <div className="card-text">{card.text}</div>
                  <button className="read-more">{card.readMore}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="pointers-container">
            {cardDetails.map((card, index) => (
              <div
                key={card.id}
                className={`pointer ${index === activeCard ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
