import React from "react";
import "./ExperienceCard.css";

function ExperienceCard({ url, title, description }) {
  return (
    <div className="experienceCard">
      <div className="about__container">
        <div className="about__image" data-aos="fade-right">
          <img src={url} alt="Atharva Deosthale" />
        </div>
        <div className="about__description" data-aos="fade-left">
          <h2>{title}</h2>
          {description}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
