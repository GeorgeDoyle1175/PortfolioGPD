import React, { useState } from 'react';
import '../style/home.css';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  function handleViewWorkClick() {
    setShowProjects((prev) => !prev);
  }

  const padding = showProjects ? '200px' : '50px';

  return (
    <div className="home" style={{ paddingTop: padding }}>
      <div className="home__text-container">
        <h1 className="home__heading">Hello I'm Patrick Doyle</h1>
        <p className="home__paragraph">
          I'm a front end developer with a passion for creating
          beautiful, responsive web experiences. Take a look at my work below,
          and feel free to get in touch if you'd like to collaborate on a
          project.
        </p>
        <button className="home__cta-button" onClick={handleViewWorkClick}>
          View My Work
        </button>
      </div>

      {showProjects && (
        <div id="projects-container" className="projects">
          <h2 className="projects__heading">My Projects</h2>
          <div className="projects__card-container">
            <div className="card">
              <img src="https://via.placeholder.com/350x200" alt="placeholder" />
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/350x200" alt="placeholder" />
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/350x200" alt="placeholder" />
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
