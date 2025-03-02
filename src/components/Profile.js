import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/img/profile-pic-2.JPG" alt="Alfarez Syahputra Kuri profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Alfarez Syahputra Kuri</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/img/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href='https://linkedin.com/'}
          />
          <img
            src="./assets/img/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href='https://github.com/'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;