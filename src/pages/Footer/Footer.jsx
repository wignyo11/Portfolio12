import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <div className="footer">
        <div className="social-icons">
          <a href="#"><FaGithub/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaInstagram/></a>
        </div>
        <p>&copy; 2024 Amine Hamzaoui. All rights reserved.</p>
        <ul className="link">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#serv">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div>

  )

}

export default Footer;