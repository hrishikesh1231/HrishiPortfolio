import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scroll ? "scrolled" : ""}`}>
      <div className="container" >

        {/* Logo */}

        <Link
          className="navbar-brand logo"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          Hrishikesh<span>.</span>
        </Link>

        {/* Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/project" className="nav-link">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/resume" className="nav-link">
                Resume
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

          </ul>

          <a
  href="/media/Hrishikesh_Gaonkar_Resume.pdf"
  download="Hrishikesh_Gaonkar_Resume.pdf"
  className="resume-btn"
>
  Download CV
</a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;