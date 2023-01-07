import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './KnowMe.css';

const KnowMe = () => {
  return (
    <BrowserRouter>
      <h6 className="knowMe-box-header">Education</h6>
      
      <div className="abc">
        <p className="mb-1">B.Tech in Computer Science And Engineering</p>
        <ul>
          <li className="mb-1">Lovely Professional University, Jalandhar (Punjab)</li>
          <li className="mb-1">Aug 2018 - June 2022</li>
          <li className="mb-1">CGPA : 7.50</li>
        </ul>
      </div>
      
      <h6 className="knowMe-box-header">experience</h6>

      <div className="abc">
        <p className="mb-1">Mphasis (July 2022 - current)</p>
        <ul>
          <li className="mb-1">Associate Software engineer</li>
          <li className="mb-1">Trained on Java Full Stack Development</li>
          <li className="mb-1">Core Java, Spring Framework, Spring Boot, HTML, CSS, Bootstrap, Angular</li>
        </ul>
      </div>

      <div className="abc">
        <p className="mb-1">Pathkind Labs (Nov 2021 - May 2022)</p>
        <ul>
          <li className="mb-1">Application Support Engineer (Intern)</li>
          <li className="mb-1">Tested Software in different Test Cases</li>
          <li className="mb-1">Trained Senior doctors and staff role wise about how to use software efficiently</li>
          
        </ul>
      </div>




      <h6 className="knowMe-box-header">More</h6>

      <div className="abc">
        <p>
          I'm an engineer passionate about coding. Always ready to try hands-on new and emerging
          technologies.
        </p>
        <p>
          I have a strong foundation in <span>Java Full Stack Development</span> and I am skilled in creating
          interactive Backend Codes.
        </p>
        <p>
          I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you
          have a good opportunity that matches my skills and experience then don't hesitate to
          <span> contact</span> me.
        </p>
      </div>

      <Link to="#contact" smooth style={{ textDecoration: 'none' }}>
        <button className="css-button-rounded--sky">Contact</button>
      </Link>
    </BrowserRouter>
  );
};

export default KnowMe;
