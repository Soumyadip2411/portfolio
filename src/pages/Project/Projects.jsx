import "./Projects.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/cap.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "EUC Analysis & Doc Generation",
    img: img1,
    desc: "Enterprise AI workflow for sheet-wise EUC analysis, document generation, HITL review, and conversational assistance.",
    skills: ["Python", "LLMs", "RAG", "Azure"],
    impact: "Reduced manual review effort by turning scattered workbook checks into structured AI-assisted analysis.",
    github: "https://github.com/Soumyadip2411",
    live: ""
  },
  {
    title: "Crowdsourced Home Services Platform",
    img: img2,
    desc: "MERN platform with AI service recommendations, face authentication, location services, and real-time chat.",
    skills: ["MERN", "OpenCage API", "Machine Learning", "Socket.io"],
    impact: "Designed the core booking flow from discovery to provider communication.",
    github: "https://github.com/Soumyadip2411",
    live: "https://home-service-35wj.vercel.app/login"
  },
  {
    title: "Skin Lesion Classification",
    img: img3,
    desc: "Deep learning framework combining dermoscopic image classifiers with clinical metadata for better prediction context.",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "Python"],
    impact: "Explored model performance improvements through image and tabular feature fusion.",
    github: "https://github.com/Soumyadip2411",
    live: "https://github.com/Soumyadip2411"
  },
  {
    title: "ML-Based Fraud Detection",
    img: img4,
    desc: "Fraud detection pipeline with preprocessing, feature engineering, model evaluation, and a Streamlit interface.",
    skills: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    impact: "Packaged the ML workflow into an interface that makes predictions easier to test and explain.",
    github: "https://github.com/Soumyadip2411",
    live: "https://github.com/Soumyadip2411"
  }
];

export default function Projects() {
  return (
    <section className="project reveal" id="project">
      <div className="title">
        <p className="section-kicker">Selected Work</p>
        <h2>Projects with product thinking</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.img} alt={`${project.title} preview`} />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p className="project-impact">{project.impact}</p>
            </div>
            <div className="project-skills">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="btns">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <FaGithub /> Code
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
