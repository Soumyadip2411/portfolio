import "./Services.css";
import { FaBrain, FaCode, FaDatabase } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="serv">
      <div className="title">
        <p className="section-kicker">Core Strengths</p>
        <h2>What I build best</h2>
      </div>

      <div className="services-container">
        <article className="service-card">
          <FaBrain className="service-icon" />
          <h3>Applied AI Systems</h3>
          <p>LLM/RAG workflows, document intelligence, ML pipelines, and review-friendly AI interfaces.</p>
        </article>

        <article className="service-card">
          <FaCode className="service-icon" />
          <h3>Full-Stack Products</h3>
          <p>Responsive MERN applications with authentication, dashboards, APIs, and real-time collaboration.</p>
        </article>

        <article className="service-card">
          <FaDatabase className="service-icon" />
          <h3>Data & Automation</h3>
          <p>Data cleaning, feature engineering, analytics dashboards, and workflow automation for practical decisions.</p>
        </article>
      </div>
    </section>
  );
}

export default Services;
