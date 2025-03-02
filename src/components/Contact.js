import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';
import emailIcon from '../assets/img/email.png';
import linkedinIcon from '../assets/img/linkedin.png';

const Contact = () => {
  const contactData = [
    {
      id: 1,
      icon: emailIcon,
      alt: 'Email icon',
      text: 'kurialfarez@gmail.com',
      href: 'mailto:kurialfarez@gmail.com',
    },
    {
      id: 2,
      icon: linkedinIcon,
      alt: 'LinkedIn icon',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alfarez-syahputra-kuri-b53bab231',
    },
  ];

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {contactData.map((contact) => (
          <div key={contact.id} className="contact-info-container">
            <img src={contact.icon} alt={contact.alt} className="icon contact-icon" />
            <p>
              <a href={contact.href}>{contact.text}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;