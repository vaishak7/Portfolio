import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import "../styles/Home.css"


function Home() {
  return (
    <div className='Home'>
      <div className="about">
        <h2> Hi, Im vaishak</h2>
        <div className='prompt'>
          <p> An aspiring software developer with a passion for learning and creating </p>
            <TwitterIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
            <MailIcon/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJs, Angular, HTML, CSS, Bootstrap, MaterialUI, Yarn.
            </span>
          </li>
          <li className='item'>
          <h2>Back-End</h2>
          <span>
            Django, NodeJs, MySQL, MongoDB, Xampp, ApacheServer.
            </span>
          </li>
          <li className='item'>
          <h2>Languages</h2>
          <span>
            JavaScript, Python, C, R, Java, SQL, PHP
            </span>
          </li>

        </ol>

      </div>
    </div>
  )
}

export default Home
