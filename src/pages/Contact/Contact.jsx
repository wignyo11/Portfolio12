import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Mari Berkolaborasi!</h3>
          <p>
            Jika Anda ingin berdiskusi mengenai proyek media, kolaborasi kepanitiaan, 
            atau memiliki pertanyaan lainnya, jangan ragu untuk menghubungi saya.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>wignyopriatmaja@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+62 858 6603 8513</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Batang, Jawa Tengah Indonesia</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <input
            type="text"
            placeholder="Nama Anda"
            required
          />
          <input
            type="email"
            placeholder="Email Anda"
            required
          />
          <textarea
            placeholder="Pesan Anda"
            rows="6"
            required
          ></textarea>
          <button type="submit">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;