import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__workFloat">
        <p>W</p>
        <p>O</p>
        <p>R</p>
        <p>K</p>
      </div>
      <h1>Experience</h1>
      <div className="experience__cards">
        {/* <a href="https://freeimage.host/i/2XTcqx"><img src="https://iili.io/2XTcqx.md.png" alt="2XTcqx.md.png" border="0"></a> */}
        <ExperienceCard
          title="Freelance"
          description="I made a portfolio website for a client in architecture field and the client was happy with my work."
          url="https://iili.io/2XTcqx.md.png"
        />
        <ExperienceCard
          title="IdealVillage"
          description="I was a Backend API Developer at IdealVillage. I made APIs using PHP and MySQL"
          url="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
      </div>
    </div>
  );
}

export default Experience;
