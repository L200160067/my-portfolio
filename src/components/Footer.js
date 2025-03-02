import React from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';

const Footer = () => {
  const navLinks = [
    { id: 1, text: 'About', href: '#about' },
    { id: 2, text: 'Experience', href: '#experience' },
    { id: 3, text: 'Projects', href: '#projects' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {currentYear} Alfarez Syahputra Kuri. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;