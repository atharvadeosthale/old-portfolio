import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [overlay1, setOverlay1] = useState(false);
  const [overlay2, setOverlay2] = useState(false);
  const [overlay3, setOverlay3] = useState(false);
  const [overlay4, setOverlay4] = useState(false);

  const showOverlay1 = () => {
    setOverlay1(true);
  };

  return (
    <div className="projects" id="projects">
      <div className="projects__row">
        <div
          className="projects__project"
          data-aos="fade-right"
          onMouseOver={showOverlay1}
          onMouseLeave={() => setOverlay1(false)}
        >
          {/* Amazon */}
          <img
            src="https://iili.io/2XoEtj.md.png"
            alt=""
            className={overlay1 && "project__imageZoomed"}
          />
          <p className={overlay1 && "projects__showOverlay"}>
            <h1>Amazon Clone</h1>
            <p>I made a fully functional clone of Amazon!</p>
          </p>
        </div>
        <div
          className="projects__project"
          data-aos="fade-left"
          onMouseOver={() => setOverlay4(true)}
          onMouseLeave={() => setOverlay4(false)}
        >
          {/* Twitter */}

          <img
            src="https://iili.io/2XokNa.md.png"
            alt=""
            className={overlay4 && "project__imageZoomed"}
          />
          <p className={overlay4 && "projects__showOverlay"}>
            <h1>Twitter Clone</h1>
            <p>I made a Twitter Clone using React and Firebase.</p>
          </p>
        </div>
      </div>
      <div className="projects__row">
        <div
          className="projects__project"
          data-aos="fade-right"
          onMouseOver={() => setOverlay2(true)}
          onMouseLeave={() => setOverlay2(false)}
        >
          {/* Spotify */}

          <img
            src="https://iili.io/2XoQNs.md.png"
            alt=""
            className={overlay2 && "project__imageZoomed"}
          />
          <p className={overlay2 && "projects__showOverlay"}>
            <h1>Spotify Clone</h1>
            <p>I made the Spotify Clone using React and Spotify Web API</p>
          </p>
        </div>
        <div
          className="projects__project"
          data-aos="fade-left"
          onMouseOver={() => setOverlay3(true)}
          onMouseLeave={() => setOverlay3(false)}
        >
          {/* Facebook */}

          <img
            src="https://iili.io/2XxqWx.md.png"
            alt=""
            className={overlay3 && "project__imageZoomed"}
          />
          <p className={overlay3 && "projects__showOverlay"}>
            <h1>Facebook Clone</h1>
            <p>I made the Facebook Clone using MERN Stack</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
