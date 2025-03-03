import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import checkmarkIcon from '../assets/img/checkmark.png';
import arrowIcon from '../assets/img/arrow.png';

const Experience = () => {
  const experienceData = [
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML, CSS, JS, Figma', level: 'Experienced' },
        { name: 'Laravel', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
      ],
    },
    {
      category: 'Game Development',
      skills: [
        { name: 'Consturct', level: 'Experienced' },
        { name: 'Unity', level: 'Intermediate' },
        { name: 'Blender', level: 'Intermediate' },
      ],
    },

    {
      category: 'Data Scientist',
      skills: [
        { name: 'Excel', level: 'Experienced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
      ],
    },
    
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <p className="section__text__p2 desc-align">I have experience teaching in various technologies and tools. Here are some of them:</p>
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