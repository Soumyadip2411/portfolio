import { useState } from "react";
import "./Header.css";
import { FaBars, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo1">
        <a href="#home" onClick={closeMenu}>
          <span>S</span>oumyadip
        </a>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="social-links">
        <a href="https://github.com/Soumyadip2411" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/soumyadip-pramanik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:soumyadip2411@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <nav aria-label="Primary navigation">
        <ul className={`links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#project" onClick={closeMenu}>Projects</a></li>
          <li><a href="#serv" onClick={closeMenu}>Strengths</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
