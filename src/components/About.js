import React from 'react';
import profilePic from '../assets/img/profile-pic.JPG';
import experienceIcon from '../assets/img/experience.png';
import educationIcon from '../assets/img/education.png';
import arrowIcon from '../assets/img/arrow.png';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={profilePic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => window.location.href='./#experience'}
      />
    </section>
  );
};

export default About;