import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__image" data-aos="fade-right">
          <img
            src="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/s150x150/120302686_635672390672734_802612746922788777_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_ohc=XhjzNZ_8R6EAX-xOVkg&oh=32e346dca93379a1686ed2fdb9e9d2d4&oe=5F9DC8BD"
            alt="Atharva Deosthale"
          />
        </div>
        <div className="about__description" data-aos="fade-left">
          <h1>About Me</h1>
          Hello! My name is Atharva Deosthale, living in Nagpur. I love
          programming and gaming. I have been programming since I was 10 and
          never given up since. I have a very positive approach towards things
          and I love to express my creativity through things I'm making. I'm
          experienced specially in Web Development. I am good at HTML, CSS,
          JavaScript and it's libraries like React.
          <div className="about__social">
            <a href="mailto:atharva.deosthale17@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://instagram.com/atharvadeosthale" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/atharva.roxx.7" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/atharvadeosthale/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
