import "./Services.css"
import { FaCamera, FaFilm, FaPalette } from "react-icons/fa"; // Pastikan import ini benar

function Services(){
  return(
    <div className="services" id="service">
      <div className="title">
        <h2>Service</h2>
      </div>

      <div className="services-container">
        <div className="service-card">
          <FaCamera className="service-icon"/>
          <h3>Videografi & Fotografi</h3>
          <p>Mengonsep, mengarahkan, dan mengeksekusi pengambilan gambar (dokumentasi) untuk menangkap momen krusial kegiatan organisasi agar menghasilkan visual yang estetis dan komunikatif.</p>
        </div>

        <div className="service-card">
          <FaFilm className="service-icon"/>
          <h3>Video Editing</h3>
          <p>Menyusun footage, menyelaraskan audio, dan meracik efek transisi menggunakan CapCut maupun integrasi AI (seperti Gemini Veo) untuk menciptakan aftermovie dan video teaser yang interaktif.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>Desain & Vibe Coding</h3>
          <p>Mendesain kebutuhan publikasi menggunakan Canva dan Figma. Saya juga mampu mengelola proyek perangkat lunak dengan memahami logika kode dan memanfaatkan bantuan AI untuk scripting (vibe coding).</p>
        </div>
      </div>
    </div>
  )
}

export default Services;