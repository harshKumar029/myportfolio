import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isBiggerScreen = window.innerWidth < 550;
      setIsOpen(!isBiggerScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    const isBiggerScreen = window.innerWidth < 550;
    if (isOpen && isBiggerScreen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className='nv_container'>
        <nav>
          <div className='nav-logo'>
            <RouterLink to="#"><img className='logo-img' src="./assets/img/Name.png" alt="icon" /></RouterLink>
            <h4>Harsh</h4>
            <h5>Web Developer</h5>
          </div>
          <div className='menu-link'>
            {isOpen && (
              <ul>
                <li><Link smooth to="#hero" onClick={handleLinkClick}>Home</Link></li>
                <li><Link smooth to="#aboutme" onClick={handleLinkClick}>About</Link></li>
                <li><Link smooth to="#myskill" onClick={handleLinkClick}>My skill</Link></li>
                <li><Link smooth to="#portfolio" onClick={handleLinkClick}>Work</Link></li>
              </ul>
            )}
          </div>
          <div className='social-media'>
            <a href="https://www.linkedin.com/in/harsh-kumar-4b37311a2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="icon-ln" />
            </a>
            <a href="https://www.instagram.com/harsh.harshkumar.79/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon-in" />
            </a>
            <a href="https://github.com/harshKumar029" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon-gh" />
            </a>
          </div>
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
