import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand logo" href="/" style={{color:"#162e90ff",fontFamily:"cursive",fontWeight:"bold"}}>Hrishikesh</a>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav Navbar">
                <li class="nav-item">
                {/* <a class="nav-link" href="/">Home</a> */}
                <Link className="nav-link" to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li class="nav-item">
                {/* <a class="nav-link" href="">About</a> */}
                <Link className="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                </li>
                <li class="nav-item">
                {/* <a class="nav-link" href="#">Resume</a> */}
                <Link className="nav-link" to="/resume" onClick={() => window.scrollTo(0, 0)}>Resume</Link>
                </li>
                <li class="nav-item">
                {/* <a class="nav-link" href="#">Projects</a> */}
                <Link className="nav-link" to="/project" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                </li>
                <li class="nav-item">
                {/* <a class="nav-link ">Contact</a> */}
                <Link className="nav-link" to="/contact" nClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
