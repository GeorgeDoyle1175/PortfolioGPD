import React from 'react';
import resumePdf from '../assets/Resume2023.pdf';
import '../style/home.css';

export default function Resume() {
  return (
    <div className="resume-home">
      <div className="resume-home__text-container">
        <h1 className="resume-home__heading">Resume</h1>
        <p className="resume-home__paragraph">
          I am an experienced full-stack developer with a passion for building
          elegant and efficient web applications. I specialize in React, Node.js,
          and Express, and have experience with a wide range of web development
          technologies. I am committed to delivering high-quality code and
          exceptional user experiences.
        </p>
        <a href={resumePdf} download className="resume-home__link">
          Download Resume (PDF)
        </a>
        <p></p>
        <h2 className="resume-home__subheading">Proficiencies</h2>
        <ul className="resume-home__list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
};
