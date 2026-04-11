import "./Home.css";
import Me2 from "../../assets/images/Me2.png";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="valide">
                        <img src={Me2} alt="Amine" />
                        <p>"Avoid or just undertoke it"</p>
                    </div>
                    <div className="text-info">
                        <div className="title1">
                            <h1>Hi, I'm <span>Amine</span></h1>
                        </div>
                        <div className="paraga">
                            <p>
                                Computer Science student passionate about web development and modern technologies.
                                 I build responsive and high-performance
                                 applications and continuously improve my skills in software development and AI.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn1">
                    <a href="#">Download CV</a>
                    <a href="#project">Explore My Projects</a>
                </div>
            </div>
            <div className="photo">
                    <img src={Me2} alt="Amine" />
            </div>
        </div>
    )
}
export default Home;