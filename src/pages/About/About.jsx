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
                        <p>I'm Soumyadip Pramanik, a final-year Computer Science and Engineering student at Jadavpur University, Kolkata.
                            I recently completed an internship as an AI Engineer at EY (Ernst & Young), where I worked with the US BCM team to build enterprise-scale AI solutions.
                            With a strong foundation in algorithm design and problem-solving, I have solved 750+ problems on LeetCode and 500+ on GeeksforGeeks.
                            I am passionate about bridging the gap between cutting-edge Artificial Intelligence research (LLMs, RAG, Deep Learning) and robust, scalable Full-Stack MERN applications.</p>
                    </div>
                    <div className="info">
                        <div className="card">
                            <h3>750<span>+</span></h3>
                            <p>LeetCode Solved</p>
                            <p>Contest Rating: 1550</p>
                        </div>
                        <div className="card">
                            <h3>500<span>+</span></h3>
                            <p>GFG Solved</p>
                            <p>Rating: 1725 | 3* Coder</p>
                        </div>
                        <div className="card">
                            <h3>EY<span></span></h3>
                            <p>AI Engineer Intern</p>
                            <p>US BCM Team</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={Me} alt="Soumyadip Pramanik" />
                </div>
            </div>
            <Skills/>
        </div>
    )
}
export default About;