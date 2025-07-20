import React from 'react'

const WanderLust = () => {
  return (
    <div className='container p-5 text-center mt-5'>
      <h1 className='mb-4'>WanderLust</h1>
      <img src='media\wanderlust.png' style={{width:"50rem",borderRadius:"1rem" ,marginTop:"2rem"}}/>
      <p  style={{marginTop:"4rem",fontSize:"1.1rem",lineHeight:"2rem"}}>Wanderlust is a full-stack hotel booking web application inspired by Airbnb. It allows users to browse available <br/> rental properties, make bookings, and list their own properties for rent. The platform includes features like user  <br/>authentication, property listing with images and descriptions, and a booking system. It is built using Node.js, <br/>Express.js, MongoDB, MySQL, and EJS templating, with a frontend styled using HTML, CSS, and Bootstrap.  <br/>The application is deployed on Render, making it accessible online for testing and demonstration.</p>
      <p style={{fontFamily:"Georgia",fontSize:"1.2rem"}}>Live Link :- </p> <a href=' https://wanderlust-t9iy.onrender.com'> https://wanderlust-t9iy.onrender.com</a>
    </div>
  )
}

export default WanderLust
