import React from "react";
import profilePic from "../assets/img/profile-pic.JPG";
import experienceIcon from "../assets/img/experience.png";
import educationIcon from "../assets/img/education.png";
import arrowIcon from "../assets/img/arrow.png";

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
              <p>
                3+ years <br />
                Teaching & Software Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>
              Bachelor of Computer Science
                <br />
                {/* M.Sc. Masters Degree */}
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              🚀 Hi, I’m Alfarez Syahputra Kuri! Educator at SMK Muhammadiyah 1
              Sukoharjo, specializing in Software & Game Development. I mentor
              young developers through Mutuharjo GameDev and drive innovation as
              Secretary of the Software Development & Game Department. Beyond
              teaching, I lead M-One Solution Software House, managing tech
              solutions for multiple clients. Let’s build the future—one line of
              code at a time! 💻✨
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
