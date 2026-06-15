import { useEffect, useState } from "react";
import "./Intro.css";

const text = "AI Engineer. Full-Stack Developer.";

function Intro({ onFinish }) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 150),
      setTimeout(() => setPhase(2), 650),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1450),
      setTimeout(() => {
        setPhase(5);
        setTimeout(onFinish, 600);
      }, 3100)
    ];

    let i = 0;
    const typing = setInterval(() => {
      setTyped(text.slice(0, i));
      i += 1;
      if (i > text.length) clearInterval(typing);
    }, 40);

    return () => {
      clearInterval(typing);
      timers.forEach(clearTimeout);
    };
  }, [onFinish]);

  return (
    <div className={`intro phase-${phase}`}>
      <div className="portal"></div>
      <h1 className="logo">SOUMYADIP</h1>
      <h1 className="main-text">
        {typed}
        <span className="cursor">|</span>
      </h1>
      <button className="skip-intro" type="button" onClick={onFinish}>
        Skip
      </button>
    </div>
  );
}

export default Intro;
