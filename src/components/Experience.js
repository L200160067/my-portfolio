import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import checkmarkIcon from '../assets/img/checkmark.png';
import arrowIcon from '../assets/img/arrow.png';

const Experience = () => {
  const experienceData = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'SASS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Basic' },
        { name: 'TypeScript', level: 'Basic' },
        { name: 'Material UI', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'PostgreSQL', level: 'Basic' },
        { name: 'Node JS', level: 'Intermediate' },
        { name: 'Express JS', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {experienceData.map((category, index) => (
            <div key={index} className="details-container">
              <h2 className="experience-sub-title">{category.category}</h2>
              <div className="article-container">
                {category.skills.map((skill, skillIndex) => (
                  <article key={skillIndex}>
                    <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="#projects">
        <img src={arrowIcon} alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Experience;