
import React, { useEffect, useState } from "react";
import profilePhoto from "../assets/profile photo.jpeg";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Flip the card after 2 seconds
    const flipTimer = setTimeout(() => {
      setFlipped(true);
    }, 2000);

    return () => clearTimeout(flipTimer);
  }, []);

  return (
    <div className="flip-card-wrapper">
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={profilePhoto}
              alt="Prachi Kumari"
              className="card-image"
            />
            <h2>Prachi Kumari</h2>
            <p>Simply Developer</p>
            <p>Turning Designs into Code</p>
            <p>Frontend Developer | CSE @ ADGIPS</p>
          </div>
          <div className="flip-card-back">
            <h4>About Me</h4>
            <p>Hello Everyone! I’m Prachi Kumari</p>
            <p>Frontend Developer | CSE @ ADGIPS</p>
            <p>CGPA: 9.5 | Delhi, India</p>
            <h4>Skills</h4>
            <p>HTML | CSS | JavaScript | React</p>
            <p>Node.js | Supabase | Git | Java</p>
            <h4>Get In Touch</h4>
            <p>
              <a href="mailto:prachi.kumari0004@gmail.com">
                prachi.kumari0004@gmail.com
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/prachi-kumari-332468322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Let's Connect</button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
