import React from 'react'

const Zerodha = () => {
  return (
    <div className='container p-5 text-center mt-5'>
  <h1 className='mb-4'>Zerodha Clone</h1>
  <img
    src='media/zerodha.png' // Make sure this path is correct
    style={{
      width: "50rem",
      borderRadius: "1rem",
      marginTop: "2rem"
    }}
    alt="Zerodha Clone Screenshot"
  />

  <p
    style={{
      marginTop: "4rem",
      fontSize: "1.1rem",
      lineHeight: "2rem"
    }}
  >
    Zerodha Clone is a full-stack stock trading platform inspired by Zerodha. It allows users to sign up, log in,
    buy and sell stocks,<br/> view their holdings, and track their order history in real-time. The project includes a
    modern frontend built with <br/>React.js and a backend powered by Node.js and Express.js. It uses MongoDB for
    data storage and features session-based <br/>authentication for secure login. The platform is deployed using both
    Render (for the backend) and <br/> Vercel (for the frontend and dashboard), enabling seamless user experience.
  </p>

  <p style={{ fontFamily: "Georgia", fontSize: "1.2rem" }}>Live Link :- </p>
  <a href='https://zerodha-clone-frontend.vercel.app' target='_blank' rel='noopener noreferrer'>
    https://zerodha-clone-frontend.vercel.app
  </a>
</div>

  )
}

export default Zerodha
