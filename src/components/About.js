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
      description: '2+ years\nFrontend Development',
    },
    education: {
      icon: educationIcon,
      title: 'Education',
      description: 'B.Sc. Bachelors Degree\nM.Sc. Masters Degree',
    },
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!',
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
          <img src={aboutData.profilePic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {details.map((detail) => (
              <div key={detail.id} className="details-container">
                <img src={detail.icon} alt={detail.title} className="icon" />
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="text-container">
            <p>{aboutData.bio}</p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src={arrowIcon} alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default About;