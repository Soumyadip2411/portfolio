import "./Projects.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Cap.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";
import { FaKaggle } from "react-icons/fa";

const projects = [
  {
    title: "EUC Analysis & Doc Generation",
    img: img1,
    desc: "An AI-powered enterprise solution automating sheet-wise EUC analysis, documentation generation, with HITL review and conversational chatbot features.",
    skills: ["Python", "LLMs", "RAG", "Azure"],
    github: "https://github.com/Soumyadip2411",
    live: "#"
  },
  {
    title: "Crowdsourced Home Services Platform",
    img: img2,
    desc: "MERN Stack platform with AI service recommendations, facial recognition authentication, location services, and real-time chat.",
    skills: ["MERN", "OpenCage API", "Machine Learning", "Socket.io"],
    github: "https://github.com/Soumyadip2411",
    live: "https://home-service-35wj.vercel.app/login"
  },
  {
    title: "Skin Lesion Classification",
    img: img3,
    desc: "Deep learning framework combining dermoscopic image classifiers (EfficientNet-B3) with clinical patient metadata to enhance accuracy.",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "Python"],
    FaKaggle: "https://github.com/Soumyadip2411",
    live: "https://github.com/Soumyadip2411" // links to Kaggle/Github
  },
  {
    title: "ML-Based Fraud Detection",
    img: img4,
    desc: "A machine learning pipeline for detecting fraudulent transactions, featuring automated preprocessing, feature engineering, and streamlit UI.",
    skills: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    github: "https://github.com/Soumyadip2411",
    live: "https://github.com/Soumyadip2411"
  }
];

export default function Project() {
  return (
    <section className="project reveal" id="project">
      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3 style={{ padding: "10px 10px", margin: "8px 10px 4px", textAlign: "center" }}>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i} onClick={(e) => e.preventDefault()}>{skill}</a>
              ))}
            </div>
            <div className="btns">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
                  <i className="fas fa-external-link-alt"></i> Live Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}