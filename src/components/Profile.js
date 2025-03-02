import React from 'react';
import profilePic from '../assets/img/profile-pic-2.JPG';
import linkedinIcon from '../assets/img/linkedin.png';
import githubIcon from '../assets/img/github.png';
import resumePdf from '../assets/porto/resume-example.pdf';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Alfarez Syahputra Kuri</h1>
        <p className="section__text__p2">Software and Game Development Educator💻</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resumePdf)}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="icon"
            onClick={() => window.location.href='https://www.linkedin.com/in/alfarez-syahputra-kuri-b53bab231'}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="icon"
            onClick={() => window.location.href='https://github.com/L200160067'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;