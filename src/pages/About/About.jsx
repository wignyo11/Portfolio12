import "./About.css";
import Me from "../../assets/images/Me.jpg";
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
                        <p>I'm Amine Hamzaoui, a Computer Science student passionate about 
                            building modern, high-performance web applications with clean and intuitive user experiences. 
                            I enjoy working with the latest technologies and continuously improving my skills in web development,
                            problem solving, and Artificial Intelligence, 
                            aiming to create impactful and scalable digital solutions.
                            Driven by curiosity and growth, I focus on turning ideas into 
                            real-world projects that combine functionality, performance, and aesthetic design.</p>
                    </div>
                    <div className="info">
                        <div className="card">
                            <h3>20<span>+</span></h3>
                            <p>Projects Completed</p>
                            <p>Working with modern frameworks and tools</p>
                        </div>
                        <div className="card">
                            <h3>2<span>+</span></h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={Me} alt="Amine Hamzaoui" />
                </div>
            </div>
            <Skills/>
        </div>
    )
}
export default About;