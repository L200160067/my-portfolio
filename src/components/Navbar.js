import React, { useState, useCallback } from 'react';
import '../assets/css/style.css';
import '../assets/css/mediaqueries.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { id: 1, text: 'About', href: '#about' },
    { id: 2, text: 'Experience', href: '#experience' },
    { id: 3, text: 'Projects', href: '#projects' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  const HamburgerMenu = ({ menuOpen, toggleMenu, navLinks }) => {
    return (
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={toggleMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Alfarez Syahputra Kuri</div>
        <div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Alfarez Syahputra Kuri</div>
        <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} navLinks={navLinks} />
      </nav>
    </>
  );
};

export default Navbar;