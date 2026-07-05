import React from "react";
import "./Resume.css";
import {
  FaFilePdf,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume-page">

      <div className="container">

        <div className="resume-header">

          <span className="resume-tag">
            MY RESUME
          </span>

          <h1>
            Hrishikesh <span>Gaonkar</span>
          </h1>

          <p>
            Software Engineer specializing in MERN Stack,
            Java, REST APIs, PostgreSQL, MongoDB and modern
            web technologies with a passion for building
            scalable real-world applications.
          </p>

        </div>

        <div className="resume-content">

          {/* Left */}

          <div className="resume-card">

            <img
              src="/hrishi.jpg"
              alt="Hrishikesh Gaonkar"
            />

            <h2>Hrishikesh Prabhakar Gaonkar</h2>

            <p>
              Full Stack Developer
            </p>

            <div className="resume-buttons">

              <a
                href="/media/Hrishikesh_Gaonkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn primary"
              >
                <FaFilePdf />
                View Resume
              </a>

              <a
                href="/media/Hrishikesh_Gaonkar_Resume.pdf"
                download
                className="resume-btn secondary"
              >
                <FaDownload />
                Download
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="resume-highlights">

            <div className="highlight-card">
              <FaBriefcase />
              <h3>Experience</h3>
              <p>Teaching Assistant Intern (DSA)</p>
            </div>

            <div className="highlight-card">
              <FaLaptopCode />
              <h3>Projects</h3>
              <p>7+ Full Stack Projects</p>
            </div>

            <div className="highlight-card">
              <FaGraduationCap />
              <h3>Education</h3>
              <p>B.E. Computer Science (AI & ML)</p>
            </div>

            <div className="highlight-card">
              <FaAward />
              <h3>CGPA</h3>
              <p>8.4 / 10</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Resume;