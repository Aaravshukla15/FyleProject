import "./Ourgrowth.css";
import Heart from "../assets/heart (2).svg";
import Clock from "../assets/clock (3).svg";
import Tick from "../assets/Path 4402.svg";
import Cup from "../assets/Path 4406.svg";

const ogArray = [
  {
    id: 0,
    logo: Heart,
    nums: "199+",
    para: "Staticfied Customers",
  },
  {
    id: 1,
    logo: Clock,
    nums: "1591+",
    para: "Days Of Operation",
  },
  {
    id: 2,
    logo: Tick,
    nums: "283+",
    para: "Complete Project",
  },
  {
    id: 3,
    logo: Cup,
    nums: "75+",
    para: "Win Awards",
  },
];

const Ourgrowth = () => {
  return (
    <div className="og-main">
      <h4>Experts growths</h4>
      <h2>Our Company Growth</h2>
      <div className="og-card">
        {ogArray.map((item, index) => {
          return (
            <div key={index.id}>
              <img src={item.logo} alt="" />
              <p>{item.nums}</p>
              <p>{item.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ourgrowth;
