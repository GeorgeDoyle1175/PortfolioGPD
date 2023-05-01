import React from 'react';
import '../style/home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home__text-container">
        <h1 className="home__heading">Welcome to my portfolio</h1>
        <p className="home__paragraph">
          Hi, I'm Patrick Doyle, a front end developer with a passion for creating
          beautiful, responsive web experiences. Take a look at my work below,
          and feel free to get in touch if you'd like to collaborate on a
          project.
        </p>
        <button className="home__cta-button">View My Work</button>
      </div>
    </div>
  );
}
