import React from 'react';
import '../style/home.css';
import harvardLogo from '../assets/harvardlogo.png';
import empireLogo from '../assets/Empire_Today-Logo.wine.png';
import golfLogo from '../assets/golf.png';
import headShot from '../assets/IMG_0038.jpeg';

export default function About() {
  return (
    <div className="home">
  <div className="home__text-container">
    <h1 className="about__heading">About Me</h1>
    <p className="home__paragraph">
      I am a recent graduate of Harvard University, where I obtained my degree in chemistry in 2015. After graduation, I worked as a management consultant for DB&A, where I helped clients in various industries improve their business operations and strategies. In addition to my experience in consulting, I have always had an interest in technology and web development. As a result, I decided to pursue a career in the tech industry and am now a full-stack web developer.
    </p>
    <img className="headshot" src={headShot} alt="Professional Headshot" />
    <p></p>
    <div className="projects__card-container">
      <div className="card">
        <h3>University</h3>
        <img src={harvardLogo} alt="Harvard Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla orci et lectus posuere, vel pharetra dui feugiat.
        </p>
      </div>
      <div className="card">
        <h3>Work Experience</h3>
        <img src={empireLogo} alt="Empire Today Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla orci et lectus posuere, vel pharetra dui feugiat. Nunc
        </p>
      </div>
      <div className="card">
        <h3>Hobbies</h3>
        <img src={golfLogo} alt="Golf Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla orci et lectus posuere, vel pharetra dui feugiat.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
