import React from 'react';
import './Footer.css';
import Instagram from './../../assests/instagram.png';
import Linkedin from './../../assests/linkedin.png';
import GitHubL from './../../assests/github-logo.png';

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="footer-col-1">
          <h3 className="footer-my-name">Baljeet Singh</h3>
          <p>
            Tech is my first love followed by coding! Love Tech as much as I do? Let's talk
            about how awesome it is! We can code and talk about Tech!
          </p>
          <a href="https://www.linkedin.com/in/baljeetsingh99/">
            <img src={Linkedin} className="social-media" alt="linkedin"></img>
          </a>
          <a href="https://github.com/baljeet-singh97">
            <img src={GitHubL} className="social-media git-hub" alt="githublogo"></img>
          </a>
          <a href="https://www.instagram.com/baljeet_kuntal/">
            <img src={Instagram} className="social-media" alt="Instgram"></img>
          </a>
        </div>
        <hr></hr>
        <p className="copyright">Copyright © Baljeet Singh 2023.</p>
      </div>
    </>
  );
};

export default Footer;
