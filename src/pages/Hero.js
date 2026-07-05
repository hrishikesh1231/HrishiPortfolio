import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* Left */}

          <div className="col-lg-7 order-2 order-lg-1">

            <p className="hero-tag">
              👋 Hello, I'm
            </p>

            <h1 className="hero-title">
              Hrishikesh <span>Gaonkar</span>
            </h1>

            <h3 className="hero-subtitle">
              Software Engineer • MERN Stack Developer
            </h3>

            <p className="hero-description">

              Computer Science (AI & ML) graduate passionate about
              building scalable full-stack web applications.

              Built and deployed <strong>5+ production-ready projects</strong>
              with secure REST APIs, responsive user interfaces,
              and AI-powered solutions.

              Currently learning AWS Cloud, Docker, CI/CD,
              and Python Data Analysis.

            </p>

            <div className="hero-buttons">

              <a
                href="/resume"
                // target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Resume
              </a>

              <a
                href="/project"
                className="btn btn-outline-light"
              >
                Projects
              </a>

            </div>

            <div className="social-icons">

              <a
                href="https://github.com/hrishikesh1231"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/hrishikesh-gaonkar-64519631b"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="mailto:hrishigaonkar2@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="col-lg-5 order-1 order-lg-2 text-center">

            <div className="hero-image">

              <img
                src="/hrishi.jpg"
                alt="Hrishikesh Gaonkar"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;