import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import profilePic from '../assets/img/profile-pic.JPG';
import experienceIcon from '../assets/img/experience.png';
import educationIcon from '../assets/img/education.png';
import arrowIcon from '../assets/img/arrow.png';

const About = () => {
  const aboutData = {
    profilePic: profilePic,
    experience: {
      icon: experienceIcon,
      title: 'Experience',
      description: '3+ years\nTeaching & Software Development',
    },
    education: {
      icon: educationIcon,
      title: 'Education',
      description: 'B.Sc. Bachelors Degree\n',
    },
    bio: '🚀 Hi, I’m Alfarez Syahputra Kuri! Educator at SMK Muhammadiyah 1 Sukoharjo, specializing in Software & Game Development. I mentor young developers through Mutuharjo GameDev and drive innovation as Secretary of the Software Development & Game Department. Beyond teaching, I lead M-One Solution Software House, managing tech solutions for multiple clients. Let’s build the future—one line of code at a time! 💻✨',
  };

  const details = [
    {
      id: 1,
      icon: aboutData.experience.icon,
      title: aboutData.experience.title,
      description: aboutData.experience.description,
    },
    {
      id: 2,
      icon: aboutData.education.icon,
      title: aboutData.education.title,
      description: aboutData.education.description,
    },
  ];

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutData.profilePic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {details.map((detail) => (
              <div key={detail.id} className="details-container">
                <img src={detail.icon} alt={detail.title} className="icon" />
                <h3>{detail.title}</h3>
                <p>
                  {detail.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="text-container">
            <p>{aboutData.bio}</p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src={arrowIcon} alt="Arrow" className="icon arrow" />
      </a>
    </section>
  );
};

export default About;