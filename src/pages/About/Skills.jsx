import "./Skills.css";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiKubernetes,
  SiGooglecloud,
  SiTensorflow,
  SiKeras,
  SiFlask
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">
          {/* Languages & Core */}
          <SiCplusplus title="C++" />
          <FaPython title="Python" />
          <FaJs title="JavaScript" />
          <FaJava title="Java" />

          {/* Web / Full-Stack */}
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <SiExpress title="Express" />
          <SiMongodb title="MongoDB" />

          {/* AI / ML */}
          <SiTensorflow title="TensorFlow" />
          <SiKeras title="Keras" />
          <SiFlask title="Flask" />

          {/* Databases & Tools */}
          <SiMysql title="MySQL" />
          <SiPostgresql title="PostgreSQL" />
          <SiSqlite title="SQLite" />
          <FaDocker title="Docker" />
          <SiKubernetes title="Kubernetes" />

          {/* Cloud & Version Control */}
          <VscAzure title="Azure" />
          <FaAws title="AWS" />
          <SiGooglecloud title="GCP" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
        </div>
      </div>
    </div>
  );
}

export default Skills;