import React, { Component } from "react";
import offerLetter from "../assets/OFFER LETTER.pdf";
import certificate from "../assets/certificate.pdf";

export default class Internship extends Component {
  render() {
    return (
      <div>
        <section id="internship" className="section">
          <div className="internship-text">
            <h3 className="section-title">Internship Experience</h3>

            {/* Internship 1 */}
            <h3>
              Content Writing & Teaching Intern –{" "}
              <a
                href="https://pehchaanstreetschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pehchaan The Street School
              </a>{" "}
              (Ongoing)
            </h3>
            <p>📅 Dec 2025 – Present</p>
            <p>
              Working as a content writing and teaching intern with a focus on
              supporting the education of underprivileged children.
              Contributing educational content, assisting in teaching sessions,
              and helping with basic learning materials.
              Gaining experience in communication, content creation, and
              community-driven education initiatives.
            </p>

            <br />

            {/* Internship 2 */}
            <h3>
              Web Development Intern –{" "}
              <a
                href="https://www.vaultofcodes.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VaultofCode
              </a>{" "}
              (Virtual)
            </h3>
            <p>📅 Jul 2025 – Aug 2025</p>
            <p>
              Developed responsive web components improving layout consistency and user interaction across multiple screen sizes.

              Worked on layout design, form handling, and basic website
              deployment.
              Strengthened frontend fundamentals and followed standard web
              development practices.
              Received an official offer letter and internship certificate on
              successful completion.
            </p>

            <h4>
              <a href={offerLetter} target="_blank" rel="noopener noreferrer">
                Offer Letter
              </a>{" "}
              |{" "}
              <a href={certificate} target="_blank" rel="noopener noreferrer">
                Certificate
              </a>
            </h4>
          </div>
        </section>
      </div>
    );
  }
}
