import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <div className="footer">
        <div className="social-icons">
          <a href="https://github.com/Soumyadip2411" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://linkedin.com/in/soumyadip-pramanik" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        </div>
        <p>&copy; 2026 Soumyadip Pramanik. All rights reserved.</p>
        <ul className="link">
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

export default Footer;