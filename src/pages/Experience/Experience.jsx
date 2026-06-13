import React from "react";
import "./Experience.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="title">
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
                <FaCalendarAlt /> 01/2026 – 05/2026
              </span>
              <span className="location">
                <FaMapMarkerAlt /> Kolkata, India
              </span>
            </div>

            <ul className="experience-details">
              <li>
                Worked directly with the US BCM team at EY to develop enterprise-scale AI solutions.
              </li>
              <li>
                Automated EUC (End-User Computing) sheet-wise analysis and governance.
              </li>
              <li>
                Built robust document ingestion and well-structured documentation generation pipelines using LLMs and RAG frameworks.
              </li>
              <li>
                Designed systems featuring Human-In-The-Loop (HITL) checkpoints and interactive chatbot interfaces.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
