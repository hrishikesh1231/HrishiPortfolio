import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='container mt-5'>
        <div className='row p-5'>
            <div style={{marginTop:"3rem"}} className='col-6 p-5'>
                <h3 >Hello</h3>
                <h1 style={{fontSize:"4rem"}}>I am <span style={{color:"yellow"}} >Hrishikesh</span> Gaonkar</h1>
                {/* <h1>Gaonkar</h1> */}
                <p style={{fontSize:"2rem",fontFamily:"fantacy",color:"#90e0ef"}}>Software Developer</p>
                <div className='social-icons'style={{textDecoration:"none"}}>
                  <a  href='https://www.linkedin.com/in/hrishikesh-gaonkar-64519631b' target="_blank" style={{textDecoration:"none"}}><i style={{marginRight:"1.4rem"}} className="fa-brands fa-linkedin fs-1" ></i></a>
                  <a href='https://github.com/hrishikesh1231' target="_blank" style={{textDecoration:"none"}} ><i className="fa-brands fa-github fs-1"></i></a>
                </div>
            </div>
            <div className='col-6 p-5'>
                <img style={{width:"20rem",borderRadius:"30px",marginLeft:"3rem"}} src='hrishi.jpg'/>
            </div>
        </div>       
    </div>
  )
}

export default Hero
