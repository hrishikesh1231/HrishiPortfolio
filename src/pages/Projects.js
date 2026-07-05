import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css"

const projects = [
  {
    title: "TaskOra",
    image: "media/taskora.png",
    description:
      "AI-powered MERN marketplace connecting users with local workers using OpenAI, Razorpay, Cloudinary and OTP authentication.",
    tech: "MERN • AI • OpenAI",
    link: "/taskora",
  },

  {
    title: "GavathiPoint",
    image: "media/gavathi.png",
    description:
      "Hyperlocal ecommerce marketplace for Konkan products featuring seller dashboard, JWT authentication and custom order workflow.",
    tech: "MERN • JWT • Tailwind",
    link: "/gavathi",
  },

  {
    title: "Vitto Loan Portal",
    image: "media/vitto.png",
    description:
      "Full Stack Engineer assessment project featuring loan application, admin dashboard, PostgreSQL and production deployment.",
    tech: "React • Node • PostgreSQL",
    link: "/vitto",
  },

  {
    title: "LocalCart",
    image: "media/localcart.png",
    description:
      "Medicine ordering platform with prescription upload, Cloudinary storage and WhatsApp order workflow.",
    tech: "MERN • Cloudinary",
    link: "/localcart",
  },

  {
    title: "WanderLust",
    image: "media/wanderlust.png",
    description:
      "Airbnb-inspired hotel booking platform with authentication, property listing and booking management.",
    tech: "Node • MongoDB • EJS",
    link: "/wanderlust",
  },

  {
    title: "Zerodha Clone",
    image: "media/zerodha.png",
    description:
      "Stock trading platform inspired by Zerodha with portfolio management and real-time order tracking.",
    tech: "MERN Stack",
    link: "/zerodha",
  },

  {
    title: "Forever Ecommerce",
    image: "media/forever.png",
    description:
      "Modern clothing ecommerce website with shopping cart, authentication and product management.",
    tech: "React • Express • MongoDB",
    link: "/forever",
  },

  {
    title: "Weather App",
    image: "media/weatherApp.png",
    description:
      "Weather forecasting application using React and external Weather APIs.",
    tech: "React • API",
    link: "/weather",
  },
];

const Projects = () => {
  return (
    <section className="container project-section">

      <div className="text-center mb-5">

        <span className="section-tag">
          PORTFOLIO
        </span>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-subtitle">
          A collection of full-stack applications built using modern web
          technologies with a focus on scalability, security and user
          experience.
        </p>

      </div>

      <div className="row g-4">

        {projects.map((project, index) => (

          <div className="col-lg-4 col-md-6" key={index}>

            <div className="project-card h-100">

              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />

              <div className="p-4">

                <span className="tech-badge">
                  {project.tech}
                </span>

                <h4 className="mt-3">
                  {project.title}
                </h4>

                <p>
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  onClick={() => window.scrollTo(0, 0)}
                  className="project-btn"
                >
                  View Details →
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;