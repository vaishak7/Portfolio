import React from 'react'
import "../styles/Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <TwitterIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
            <MailIcon/>
        </div>
        <p>&copy; vaishak.com</p>
    </div>
  )
}

export default Footer
