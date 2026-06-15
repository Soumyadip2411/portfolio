import "./Experience.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="title">
        <p className="section-kicker">Experience</p>
        <h2>Professional Experience</h2>
      </div>

      <div className="experience-container">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <div className="experience-header">
              <h3>AI Engineer Intern</h3>
              <span className="company">EY (Ernst & Young)</span>
            </div>

            <div className="experience-meta">
              <span className="duration">
                <FaCalendarAlt /> Jan 2026 - May 2026
              </span>
              <span className="location">
                <FaMapMarkerAlt /> Kolkata, India
              </span>
            </div>

            <ul className="experience-details">
              <li>
                Built enterprise AI workflows with the US BCM team at EY, translating business review processes into usable internal tools.
              </li>
              <li>
                Automated EUC sheet-wise analysis, governance checks, and structured documentation generation.
              </li>
              <li>
                Created document ingestion and retrieval workflows using LLMs and RAG patterns.
              </li>
              <li>
                Added Human-In-The-Loop checkpoints and chatbot interfaces to keep outputs reviewable and practical.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
