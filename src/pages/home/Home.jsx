import "./Home.css";
import Me2 from "../../assets/images/Me2.png";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="valide">
                        <img src={Me2} alt="Atmaja" />
                        <p>"Avoid or just undertoke it"</p>
                    </div>
                    <div className="text-info">
                        <div className="title1">
                            <h1>Hi, I'm <span>Wignyo PriAtmaja</span></h1>
                        </div>
                        <div className="paraga">
                            <p>
                                Mahasiswa Akuntansi di Universitas Negeri Semarang (UNNES) yang aktif berorganisasi, khususnya di UKM Kader Konservasi FEB. Saya memiliki ketertarikan dan pengalaman mendalam di bidang media dokumentasi, videografi, serta desain kreatif untuk mendukung publikasi dan kesuksesan sebuah acara kepanitiaan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn1">
                    <a href="#project">Explore My Projects</a>
                </div>
            </div>
            <div className="photo">
                    <img src={Me2} alt="Atmaja" />
            </div>
        </div>
    )
}
export default Home;