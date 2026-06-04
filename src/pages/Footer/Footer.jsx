import "./Footer.css"
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer(){

  return(

    <div className="footer">
        <div className="social-icons">
          <a href="https://github.com/wignyo11" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://wa.me/6285866038513" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
          <a href="https://www.instagram.com/wickypickless?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
        <p>&copy; 2026 Wignyo Pri Atmaja. All rights reserved.</p>
        <ul className="link">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#serv">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div>

  )

}

export default Footer;