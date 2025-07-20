import React from 'react'

const About = () => {
  return (
    <div  className='container mt-5'>
      <h1 className='text-center' style={{color:"yellow",marginTop:"7rem"}}>About Me</h1>
      <div className='row'>
        <div style={{lineHeight:"2rem"}}  className='col-6 p-5'>
            <h3 style={{color:"#90e0ef"}}>Technical skills:-</h3>
            <p>I possess strong programming skills in Java, C, and Python. On the frontend, I am proficient in HTML, CSS, and JavaScript, allowing me to build responsive and user-friendly interfaces. My backend experience includes working with Node.js, Express, MongoDB, and SQL, and I have hands-on experience creating RESTful APIs for full-stack web applications. I am also well-versed in using Git and GitHub for version control and collaborative development. I enjoy building scalable web applications and deploying them using platforms like Render and Vercel.</p>
            <div>
                <i class="fa-brands fa-html5 fs-1 p-3"></i>
                <i class="fa-brands fa-css fs-1  p-3"></i>
                <i class="fa-brands fa-js fs-1  p-3"></i>
                <i class="fa-brands fa-react fs-1  p-3"></i>
                <i class="fa-brands fa-node fs-1  p-3"></i>
                <i class="fa-solid fa-database fs-1  p-3"></i>
                <i class="fa-brands fa-python fs-1  p-3"></i>
                <i class="fa-brands fa-java fs-1  p-3"></i>
            </div>
        </div>
        <div style={{lineHeight:"2rem"}} className='col-6 p-5'>
           <p> Hello! I'm <strong>Hrishikesh Prabhakar Gaonkar</strong>, a 20-year-old Computer Science & AIML student at
            <strong> Finolex Academy of Management and Technology, Ratnagiri</strong>.</p>
            <p className="text-lg mb-4">
                I'm passionate about full-stack web development and cloud computing. I specialize in building modern, responsive
                websites using the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>. I also work with AWS services like Lambda, S3,
                and RDS for cloud-based apps.
            </p>
            <div>
                <span>Profile</span> : <span>Software engineer</span><br/>
                <span>Experience</span> : <span>Fresher</span><br/>
                <span>Skills</span> : <span>java , C , python , HTML , CSS , Js , Nodejs , Express , MongoDB , SQL, git / github.</span><br/>
                <span>Contact</span> : <span>8010773559</span><br/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
