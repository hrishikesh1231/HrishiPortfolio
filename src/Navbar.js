import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand logo" href="/" style={{color:"#a2d2ff",fontFamily:"cursive",fontWeight:"bold"}}>Hrishikesh</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav Navbar">
                <li className="nav-item">
                {/* <a className="nav-link" href="/">Home</a> */}
                <Link className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="">About</a> */}
                <Link className="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="#">Resume</a> */}
                <Link className="nav-link" to="/resume" onClick={() => window.scrollTo(0, 0)}>Resume</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="#">Projects</a> */}
                <Link className="nav-link" to="/project" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link ">Contact</a> */}
                <Link className="nav-link" to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
