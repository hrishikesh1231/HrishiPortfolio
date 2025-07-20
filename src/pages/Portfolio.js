import React from "react";

const Portfolio = () => {
  return (
    <div className="container p-5 text-center mt-5">
      <h1 className="mb-4">Personal Portfolio</h1>

      <img
        src="media/portFolio.png" // update this path to your actual screenshot
        style={{ width: "50rem", borderRadius: "1rem", marginTop: "2rem" ,border:"1px solid white"}}
        alt="Portfolio Screenshot"
      />

      <p
        style={{
          marginTop: "4rem",
          fontSize: "1.1rem",
          lineHeight: "2rem",
        }}
      >
        This is my personal portfolio website built using{" "}
        <strong>React.js</strong>. It showcases <br />
        my skills, education, projects, and contact information in a clean,
        modern layout. <br />
        The site includes interactive navigation, responsive design, and is
        fully mobile-friendly. <br />
        It's a central place where I highlight my web development journey,
        technical expertise, <br />
        and academic background. The project is deployed online for easy access
        and sharing.
      </p>

      <p style={{ fontFamily: "Georgia", fontSize: "1.2rem" }}>Live Link :- </p>
      <a
        href="https://hrishi-portfolio-sigma.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://hrishi-portfolio-sigma.vercel.app/
      </a>
    </div>
  );
};

export default Portfolio;
