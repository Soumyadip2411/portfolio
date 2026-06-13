import "./Header.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Header() {
    return (
        <div className="header">
            <div className="logo1">
                <h1><span>S</span>oumyadip</h1>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:your.email@example.com"><FaEnvelope /></a>
            </div>

            <ul className="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#serv">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
export default Header;