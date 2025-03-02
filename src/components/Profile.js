import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import profilePic from '../assets/img/profile-pic-2.JPG';
import linkedinIcon from '../assets/img/linkedin.png';
import githubIcon from '../assets/img/github.png';
import resumePdf from '../assets/porto/resume-example.pdf';

const Profile = () => {
  const profileData = {
    name: 'Alfarez Syahputra Kuri',
    role: 'Frontend Developer',
    resumeLink: resumePdf,
    socialLinks: [
      {
        icon: linkedinIcon,
        alt: 'My LinkedIn profile',
        url: 'https://linkedin.com/',
      },
      {
        icon: githubIcon,
        alt: 'My Github profile',
        url: 'https://github.com/',
      },
    ],
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt={`${profileData.name} profile picture`} />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">{profileData.name}</h1>
        <p className="section__text__p2">{profileData.role}</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(profileData.resumeLink)}
          >
            Download CV
          </button>
          <a href="#contact">
            <button className="btn btn-color-1">Contact Info</button>
          </a>
        </div>
        <div id="socials-container">
          {profileData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt={social.alt} className="icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;