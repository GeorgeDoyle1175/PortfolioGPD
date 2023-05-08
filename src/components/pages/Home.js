import React, { useState } from 'react';
import '../style/home.css';
import sosRecipes from '../assets/sosrecipes.png';
import brewVentMaster from '../assets/BrewVentMaster.png';

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
          View My Portfolio
        </button>
      </div>

      {showProjects && (
        <div id="projects-container" className="projects">
          <h2 className="projects__heading">My Projects</h2>
          <div className="projects__card-container">
            <a href="https://georgedoyle1175.github.io/BeerEventFinder/" target="_blank" rel="noreferrer" className="card">
              <h3>BrewVentMaster</h3>
              <img src={brewVentMaster} alt="BrewVentMaster Screenshot" />
              <p>Description of Project 1</p>
            </a>
            <a href="https://sosrecipes.herokuapp.com/" target="_blank" rel="noreferrer" className="card">
              <h3>SOS Recipes</h3>
              <img src={sosRecipes} alt="SOS Recipes Screenshot" />
              <p>Description of Project 2</p>
            </a>
            <div className="card">
              <h3>Project 3</h3>
              <img src="https://via.placeholder.com/350x200" alt="placeholder" />
              <p>Description of Project 3</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
