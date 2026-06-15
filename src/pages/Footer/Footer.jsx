import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Soumyadip2411" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/soumyadip-pramanik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      <p>&copy; 2026 Soumyadip Pramanik. All rights reserved.</p>

      <ul className="link">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#serv">Strengths</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
