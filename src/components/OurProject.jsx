import { useState } from "react";
import "./OurProject.css";
import img1 from "../assets/image.png";
import img2 from "../assets/our-proj.jpg";
import img3 from "../assets/card-1.jpg";

const projectArray = [
  {
    id: 0,
    image: img1,
    heading: "Genderless Kei – Japan’s Hot",
    para: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
  {
    id: 1,
    image: img2,
    heading: "Better Strategy & Quality",
    para: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
  {
    id: 2,
    image: img3,
    heading: "Genderless Kei-Japan’s Hot",
    para: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
  },
];

const OurProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="op-main">
      <h2 className="op-head">Our Projects</h2>
      <div className="op-content">
        <div className="op-carousel">
          {projectArray.map((project, index) => (
            <img
              key={project.id}
              src={project.image}
              alt={`Project ${index + 1}`}
              className={`carousel-image ${
                activeProject === index ? "active" : ""
              }`}
              style={{ display: activeProject === index ? "block" : "none" }}
            />
          ))}
        </div>
        <div className="op-descriptions">
          {projectArray.map((project, index) => (
            <div
              key={project.id}
              className={`description ${
                activeProject === index ? "active" : ""
              }`}
              onClick={() => setActiveProject(index)}
            >
              <h3 className="hhh">{project.heading}</h3>
              <p className="ppp">{project.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
