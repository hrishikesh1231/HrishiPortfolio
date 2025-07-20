import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-center' style={{color:"yellow",marginTop:"7rem"}}> My Projects</h1>
      <div className='Cards'>
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"2rem"}}>
          <img style={{height:"10rem",objectFit:"cover", borderBottom:"2px solid black"}} src='media\wanderlust.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">WanderLust</h5>
            <p class="card-text">An online hotel booking system where users can book stays and list their own properties.</p>
            {/* <a href="/wanderlust" class="btn btn-primary">Read More </a> */}
            <Link to="/wanderlust"  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary'>Read More</Link>
          </div>
        </div>
        
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"2rem"}}>
          <img style={{height:"10rem",objectFit:"cover"}} src='media\zerodha.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Zerodha Clone</h5>
            <p class="card-text">A full-stack stock trading platform inspired by Zerodha, where users can buy/sell stocks, view their holdings, and track order history in real-time</p>
            {/* <a href="/zerodha" class="btn btn-primary">Read More </a> */}
            <Link to="/zerodha"  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary'>Read More</Link>
          </div>
        </div>
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"2rem"}}>
          <img style={{height:"10rem",objectFit:"cover", borderBottom:"1px solid black"}} src='media\forever.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Forever | E-commerce</h5>
            <p class="card-text">An online clothing e-commerce platform for browsing and ordering products.</p>
            {/* <a href="/forever" class="btn btn-primary">Read More </a> */}
            <Link to="/forever"  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary'>Read More</Link>
          </div>
        </div>
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"5rem"}}>
          <img style={{height:"10rem",objectFit:"cover", borderBottom:"1px solid black"}} src='media\weatherApp.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Weather App</h5>
            <p class="card-text">React app that allows users to check the current weather of any city in real time.</p>
            <Link to="/weather"  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary'>Read More</Link>
            
          </div>
        </div>
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"5rem"}}>
          <img style={{height:"10rem",objectFit:"cover"}} src='media\portFolio.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">My portfolio</h5>
            <p class="card-text">A responsive personal portfolio built using React.js to showcase my skills, education, and projects.</p>
            {/* <a href="#" class="btn btn-primary">read more</a> */}
            <Link to="/portfolio"  onClick={() => window.scrollTo(0, 0)} className='btn btn-primary'>Read More</Link>
          </div>
        </div>
        <div class="card" style={{width: "18rem",marginRight:"2rem",marginTop:"5rem"}}>
          <img style={{height:"10rem",objectFit:"cover"}} src='media\codeEditor.png' class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Code Editor</h5>
            <p class="card-text">It is a Vs-code Clone build by using html,css,js.</p>
            {/* <a href="#" class="btn btn-primary"></a> */}
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Projects
