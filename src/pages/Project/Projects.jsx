import "./Projects.css";
import thumb1 from "../../assets/images/proyek1.jpg";
import thumb2 from "../../assets/images/proyek2.jpg";
import thumb3 from "../../assets/images/proyek3.jpg";

const projects = [
  {
    title: "Aftermovie HUT UKM Kader Konservasi 2025",
    img: thumb1,
    desc: "Bertanggung jawab penuh atas pengambilan video (videografi) dan proses penyuntingan (editing) untuk merangkum kemeriahan perayaan HUT UKM.",
    skills: ["CapCut", "PicsArt", "Videography"],
    link: "https://www.instagram.com/reel/DO2urZADFfO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Aftermovie G-FEST 2025",
    img: thumb2,
    desc: "Mendokumentasikan festival universitas di SMAN 1 Batang dan mengemasnya menjadi video aftermovie sinematik dengan bantuan teknologi AI.",
    skills: ["CapCut", "Gemini Veo 3", "Videography"],
    link: "https://www.instagram.com/reel/DFfs14VyPz4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Video Teaser Go Green UNNES 2026",
    img: thumb3,
    desc: "Memproduksi video teaser promosi untuk meningkatkan awareness dan antusiasme audiens terhadap program Go Green UNNES 2026.",
    skills: ["CapCut", "Video Editing", "Videography"],
    link: "https://www.instagram.com/reel/DYyGbFQBJ9y/?utm_source=ig_web_copy_link"
  }
];

function Projects() {
  return (
    <div className="projects" id="project">
      <div className="title">
        <h2>My Project</h2>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
                    <div className="project-img">
              <img 
                src={project.img} 
                alt={project.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} 
              />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Lihat Video
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;