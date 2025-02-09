import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
      { to: "/", label: "Home" },
      { to: "/exam", label: "About Exam" },
      { to: "/lessons", label: "Lessons" },
      { to: "/quiz", label: "Quizzes" },
    ];
    const NavItem = ({ to, label }) => {
      const isActive = location.pathname === to;
      return (
        <li className="nav-item">
          <Link className={`nav-link py-2 ${isActive ? 'text-secondary' : 'text-white'}`} style={{ fontSize: '1.125rem' }} to={to}>
            {label}
          </Link>
        </li>
      )
    };
      
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning mb-5 py-4">
      <div className="container">
        <a className="navbar-brand" href="/">AWS Practitioner Prep</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            {/* <ul className={`navbar-nav ms-auto position-absolute`} style={{ top: '10px', right: '0', zIndex: 1000 }}> */}
            <ul className="navbar-nav ms-auto">
              {navLinks.map(link => (
                <NavItem key={link.to} to={link.to} label={link.label} />
              ))}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
