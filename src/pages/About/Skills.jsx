import "./Skills.css";
import { 
  FaVideo, 
  FaCamera, 
  FaFilm, 
  FaPalette, 
  FaLaptopCode, 
  FaFigma, 
  FaGithub 
} from "react-icons/fa";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">
          
          {/* Kelompok 1 */}
          <FaVideo />
          <FaCamera />
          <FaFilm />
          <FaPalette />
          <FaLaptopCode />
          <FaFigma />
          <FaGithub />

          {/* Kelompok 2 (Duplikat agar animasi tidak terputus) */}
          <FaVideo />
          <FaCamera />
          <FaFilm />
          <FaPalette />
          <FaLaptopCode />
          <FaFigma />
          <FaGithub />

        </div>
      </div>
    </div>
  );
}

export default Skills;