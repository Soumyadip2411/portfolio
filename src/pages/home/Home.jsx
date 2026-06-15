import "./Home.css";
import Me2 from "../../assets/images/Me2.png";
import resumePdf from "../../assets/SOUMYADIP_PRAMANIK.pdf";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="valide">
          <img src={Me2} alt="Soumyadip Pramanik" />
          <p>Building efficient software and intelligent AI solutions.</p>
        </div>

        <div className="text-info">
          <div className="title1">
            <p className="eyebrow">AI Engineer Intern at EY | CSE @ Jadavpur University</p>
            <h1>
              Hi, I'm <span>Soumyadip Pramanik</span>
            </h1>
          </div>
          <div className="paraga">
            <p>
              I build practical AI systems, full-stack products, and data-driven tools with a focus on
              LLM/RAG workflows, machine learning pipelines, and reliable MERN applications.
            </p>
          </div>
        </div>

        <div className="btn1">
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="#project">Explore Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="photo">
        <img src={Me2} alt="Soumyadip Pramanik" />
      </div>
    </section>
  );
}

export default Home;
