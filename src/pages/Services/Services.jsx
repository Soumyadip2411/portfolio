import "./Services.css"
import { FaCode, FaBrain, FaDatabase } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Expertise & Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaBrain className="service-icon"/>
          <h3>AI & Machine Learning</h3>
          <p>Developing enterprise-grade AI solutions, Retrieval-Augmented Generation (RAG), and advanced Deep Learning classifiers.</p>
        </div>

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>Full-Stack Development</h3>
          <p>Building high-performance, real-time web applications using the MERN stack with modern responsive designs.</p>
        </div>

        <div className="service-card">
          <FaDatabase className="service-icon"/>
          <h3>Data Science & Analytics</h3>
          <p>Designing robust data pipelines, feature engineering, statistical modeling, and interactive dashboards.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;