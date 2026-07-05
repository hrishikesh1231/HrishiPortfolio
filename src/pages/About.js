import React from "react";
import "./About.css"

const About = () => {
  return (
    <section className="about-section container">

      <div className="text-center mb-5">

        <span className="section-tag">
          ABOUT ME
        </span>

        <h2 className="section-title">
          Building Modern Web Experiences
        </h2>

        <p className="section-subtitle">
          Passionate Software Engineer focused on scalable web applications,
          clean architecture and user-centric design.
        </p>

      </div>

      <div className="row align-items-center gy-5">

        {/* LEFT */}

        <div className="col-lg-6">

          <div className="about-card">

            <h3>Who I Am</h3>

            <p>
              I'm <strong>Hrishikesh Gaonkar</strong>, a Computer Science (AI &
              ML) graduate passionate about building scalable, real-world web
              applications using the MERN Stack.
            </p>

            <p>
              I have built and deployed <strong>5+ full-stack projects</strong>
              featuring secure authentication, REST APIs, payment integration,
              cloud deployment, and responsive user interfaces.
            </p>

            <p>
              I'm currently strengthening my skills in
              <strong> AWS Cloud, Docker, CI/CD, Python, Data Analytics</strong>
              while preparing for Software Engineer opportunities.
            </p>

            <div className="row mt-4">

              <div className="col-6">

                <div className="info-box">
                  <small>Role</small>
                  <h6>Software Engineer</h6>
                </div>

              </div>

              <div className="col-6">

                <div className="info-box">
                  <small>Experience</small>
                  <h6>Fresher</h6>
                </div>

              </div>

              <div className="col-6 mt-3">

                <div className="info-box">
                  <small>Projects</small>
                  <h6>5+</h6>
                </div>

              </div>

              <div className="col-6 mt-3">

                <div className="info-box">
                  <small>Location</small>
                  <h6>India</h6>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="col-lg-6">

          <div className="about-card">

            <h3>Tech Stack</h3>

            <p className="mb-4">
              Technologies I use to build scalable applications.
            </p>

            <div className="tech-icons">

              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-js"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-node-js"></i>
              <i className="fa-solid fa-database"></i>
              <i className="fa-brands fa-python"></i>
              <i className="fa-brands fa-java"></i>
              <i className="fa-brands fa-git-alt"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-docker"></i>
              <i className="fa-brands fa-aws"></i>

            </div>

            <hr />

            <div className="skill-grid">

              <span>MERN Stack</span>
              <span>Java</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Git & GitHub</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>CI/CD</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;