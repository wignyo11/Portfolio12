import "./About.css";
import Me from "../../assets/images/Me.jpeg";
import Skills from "./Skills";

function About() {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <div className="text">
                    <div className="title2">
                        <h1>About Me</h1>
                    </div>
                    <div className="parag">
                        <p>
                            Saat ini saya diamanahkan sebagai Kepala Departemen Jaringan dan Kerjasama di UKM Kader Konservasi FEB UNNES. Pengalaman berorganisasi telah banyak membentuk kemampuan kepemimpinan dan komunikasi saya, mulai dari menjadi Ketua Pelaksana Ekoquest, Presidium 1 di Musyawarah Besar 2025, hingga tergabung dalam Divisi Pendamping PKMMPD Akuntansi 2025 dan Divisi Acara Feskar UNNES 2025.
                        </p>
                        <br />
                        <p>
                            Di sisi kreatif, saya memiliki jam terbang yang tinggi dalam mengelola media dan publikasi visual. Saya pernah bertugas sebagai Koordinator Divisi Media untuk Pelantikan dan Raker UKM Kader Konservasi 2026, Divisi Media HUT UKM 2025, serta staf PDD (Publikasi, Dekorasi, Dokumentasi) pada ajang G-FEST di SMAN 1 Batang. Rangkaian pengalaman ini memacu saya untuk terus mengeksplorasi penceritaan visual yang menarik, termasuk penerapan elemen sinematik dengan <i>shallow depth of field</i> layaknya setup kamera profesional maupun pemanfaatan <i>AI tools</i> untuk memperkaya karya digital saya.
                        </p>
                    </div>
                    <div className="info">
                        <div className="card">
                            <h3>8<span>+</span></h3>
                            <p>Pengalaman Kepanitiaan</p>
                            <p>Aktif berkontribusi di berbagai event organisasi</p>
                        </div>
                        <div className="card">
                            <h3>10<span>+</span></h3>
                            <p>Proyek Publikasi & Media</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={Me} alt="Wignyo Pri Atmaja" />
                </div>
            </div>
            <Skills/>
        </div>
    )
}

export default About;