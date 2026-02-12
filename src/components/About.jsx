import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.png';
import TechStackLogo from './TechStackLogo'


const About = () => {
  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-text">
          <h3 className="section-title">About Me</h3>
          <div className="para">
            <p>
              Hello! I’m Prachi or Simply Developer. I develop web applications and turn designs into code. 
              Pursuing Bachelors of Engineering in Computer Science from <a href="https://adgips.ac.in/" target="_blank" rel="noopener noreferrer">Dr. Akhilesh Das Gupta Institute Of Professional Studies</a>.
            </p>
            <p>
              Aspiring Frontend Developer with a strong academic background (CGPA: 9.7), hands-on experience in building responsive websites. 
              Proven ability to collaborate in cross-functional teams and lead event initiatives with measurable outcomes. 
participate in social impact initiatives through Enactus and NSS, where I contribute technical and content based solutions.            </p>
            <p>
              Here is a list of the technologies that I'm familiar with!
            </p>
          </div>

          <div className="tech-section">
           <div className="tech-list">

  {isDesktop ? (

    <div className="desktop-skills">

      <div>
        <h4>Frontend</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
       <div>
        <h4>Backend</h4>
        <ul>
          <li>NodeJs</li>
          <li>Express Js</li>
          <li>Rest API</li>
        </ul>
      </div>

      <div>
        <h4>Database</h4>
        <ul>
          <li>Supabase</li>
          <li>Firebase</li>
          <li>MongoDB</li>
                    <li>MySql</li>

        </ul>
      </div>

      <div>
        <h4>Tools</h4>
        <ul>
          <li>Postman</li>
          <li>Git</li>
                    <li>GitHub</li>

        </ul>
      </div>

    </div>

  ) : (

    <>
      <ul>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>Mysql</li>
      </ul>

      <ul>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>Git</li> 
        <li>Supabase</li>
        <li>Java</li>

      </ul>
    </>

  )}

</div>
              <div id='techstacklogo'><TechStackLogo/> </div>


          </div>
        </div>

        <div className="about-image">
          <img src={profile} alt="Profile Picture" />
        </div>
      </div>

    </section>

</>
  );
};

export default About;
