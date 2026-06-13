import "./Home.css";
import Me2 from "../../assets/images/Me2.png";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="valide">
                        <img src={Me2} alt="Soumyadip Pramanik" />
                        <p>"Building efficient software and intelligent AI solutions."</p>
                    </div>
                    <div className="text-info">
                        <div className="title1">
                            <h1>Hi, I'm <span>Soumyadip</span></h1>
                        </div>
                        <div className="paraga">
                            <p>
                                Final-year Computer Science and Engineering student at Jadavpur University, Kolkata.
                                Former AI Engineer Intern at EY, specializing in building robust software solutions,
                                advanced Machine Learning pipelines, and enterprise-scale LLM/RAG systems.
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
                    <img src={Me2} alt="Soumyadip Pramanik" />
            </div>
        </div>
    )
}
export default Home;