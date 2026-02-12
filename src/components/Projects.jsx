import React, { Component } from "react";
import SlidingSwiper from "./SlidingSwiper";

import project1 from "../assets/projectImage/1.png";
import project2 from "../assets/projectImage/2.png";
import project3 from "../assets/projectImage/3.png";
import project4 from "../assets/projectImage/4.png";
import project21 from "../assets/projectImage/2.1.png";
import project22 from "../assets/projectImage/2.2.png";
import project23 from "../assets/projectImage/2.3.png";



export default class Projects extends Component {
  render() {
    const bastiImages = [project1, project2, project3, project4];
const agoranet=[project21, project22, project23]
    return (
      <div>
        <section id="projects" className="section">
          <div className="education-container">
            <h3 className="section-title">Projects</h3>

            <div className="education-columns ">
              
              {/* Project 1 */}
              <div className="education-col project-card">
<div className="mobile-swiper">
   <SlidingSwiper images={bastiImages} />
</div>
                <h3>Basti Ki Pathshala – NGO Website</h3>
                <p>
                  Designed and developed a responsive website for the NGO
                  <strong> Basti Ki Pathshala</strong> to support education for
                  underprivileged children.
                </p>
                <p>
                  Built using HTML, CSS, and JavaScript with a focus on clean UI,
                  accessibility, and simple navigation.
                </p>
                <p>
                  🔗 Live:{" "}
                  <a
                    href="https://basti-ki-pathshala-prachi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website Link
                  </a>
                </p>
                <p>
                  📂 GitHub:{" "}
                  <a
                    href="https://github.com/PrachiKumari06/BastiKiPathshala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                </p>
              </div>

              {/* Project 2 */}
              <div className="education-col project-card">
                <div className="mobile-swiper">
   <SlidingSwiper images={agoranet} />
</div>
                <h3>AgoraNet – Video Call & Chat Application</h3>
                <p>
                  Developed a real-time video calling and chat application that
                  allows users to connect with friends.
                </p>
                <p>
                  Implemented video call functionality and live chat using
                  modern web technologies with a React-based frontend.
                </p>
                <p>
                  🔗 Live:{" "}
                  <a
                    href="https://agoranet-videocall.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    App Link
                  </a>
                </p>
                <p>
                  📂 GitHub:{" "}
                  <a
                    href="https://github.com/PrachiKumari06/AgoraNet-videoCall"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}
