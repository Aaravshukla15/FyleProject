import { useState } from "react";
import Himage from "../assets/main-img.png";
import "./Home.css";
import ContactUsPopup from "./Contactus"; // Adjust the path if necessary

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="home">
      <div className="home-left">
        <h3 className="home-stitle">AWARD WINNING</h3>
        <h1 className="home-title">DIGITAL MARKETING AGENCY</h1>
        <p className="home-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempora
          ius eos nostrum optio iste laboriosam, quisquam ducimus, vel
          laudantium beatae omnis. Vel velit sint rerum minima illo!
        </p>
        <button onClick={openPopup}>Contact Us</button>
      </div>
      <div className="home-right">
        <img src={Himage} alt="" />
      </div>
      <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Home;
