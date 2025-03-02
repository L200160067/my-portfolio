import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import project1 from '../assets/porto/project-1.png';
import project2 from '../assets/porto/project-2.png';
import project3 from '../assets/porto/project-3.png';
import arrowIcon from '../assets/img/arrow.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: 'Project One',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
    {
      id: 2,
      image: project2,
      title: 'Project Two',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
    {
      id: 3,
      image: project3,
      title: 'Project Three',
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/',
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.id} className="details-container color-container">
              <div className="article-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-color-2 project-btn">Github</button>
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-color-2 project-btn">Live Demo</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
    </section>
  );
};

export default Projects;