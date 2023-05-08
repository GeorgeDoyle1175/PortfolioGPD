import React from 'react';
import '../style/home.css';
import LinkedinLogo from '../assets/linkedin-icon.png';
import TwitterLogo from '../assets/twitter-icon.png';
import GithubLogo from '../assets/github-logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="social-buttons">
              <li className="list-inline-item">
                <a href="https://github.com/GeorgeDoyle1175">
                  <img src={GithubLogo} alt="GithubLogo Logo" />
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/patrick-doyle-22863a196">
                  <img src={LinkedinLogo} alt="Linkedin Logo" />
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/PatrickDoyleIV">
                  <img src={TwitterLogo} alt="Twitter Logo" />
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="social-buttons text-right">
            <p className="m-0 text-right">Patrick Doyle&copy; {new Date().getFullYear()}</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
