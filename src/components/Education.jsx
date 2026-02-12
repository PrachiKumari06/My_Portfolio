import React, { Component } from 'react'
import certificate1 from '../assets/forage-certificate.pdf';
import certificate2 from '../assets/hackindia.jpeg';
import certificate3 from '../assets/isro.jpeg';
import contributorBadge from '../assets/contributor.png'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section id="education" className="section ">
          <div className="education-container">
            <h3 className="section-title">Education</h3>

            <div className="education-columns">
              <div className="education-col">
                <h3>Secondary (10th)</h3>
                <p>Govt. Girls Secondary School, East Delhi</p>
                <p>📅 Apr 2019 – Mar 2021</p>
                <p>📈 Percentage: 95%</p>
                <h3>Secondary (12th)</h3>
                <p>Govt. Girls Secondary School, East Delhi</p>
                <p>📅 Apr 2021 – Mar 2023</p>
                <p>📈 Percentage: 93%</p>
              </div>

              <div className="education-col">
                <h3>Undergraduation</h3>
                <p>B.Tech – Computer Science & Engineering</p>
                <p><a href="https://adgips.ac.in/">Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi</a></p>
                <p>📅  Sep 2023 – Aug 2027</p>
                <p>📈 CGPA: 9.5</p>
              </div>

              <div className="education-col">
                <h3>Certifications & Contributions</h3>


                <ul>
                 
                  <li>
                    Explored data analytics and visualization using Generative AI tools:
                    {" "}
                    <a href={certificate1} target="_blank" rel="noopener noreferrer">
                      Forage Certificate
                    </a>
                  </li>
                  <li>Participated in Hackathons:
                    {" "}
                    <a href={certificate2} target="_blank" rel="noopener noreferrer">
                      Hack With India

                    </a>
                    {" "} and   {" "}
                    <a href={certificate3} target="_blank" rel="noopener noreferrer">
                      Bhartiye Antariksh 2025

                    </a>
                  </li>

                  <li>
  Selected as Open Source Contributor{" "}
  <a
    href={contributorBadge}
    target="_blank"
    rel="noopener noreferrer"
  >
    (Contribution Badge).
  </a>
  {/* <br />
  Currently onboarding and preparing to contribute through GitHub. */}
</li>

                  <li></li>
                </ul>


              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
