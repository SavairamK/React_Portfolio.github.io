import React from 'react'
import './work.css'
import companyLogo from '../../assets/webhub.png'

const Work = () => {
  return (
    <>
        <div className="my-work" id='work'>
            <div className="my-work-title">
                <h1>Experience</h1>
            </div>

            <div className="work-details">
                <p><span>Company Name - Webhub Technology, Pune. <br />
                26th February 2024 - 26th August 2024</span></p>
                <br />
                <p>I completed internship program of 6 months as a Frontend Developer (ReactJS) at Webhub Technology, Pune. I gained experience of working on a real time project. <br /> At Webhub Technology, my target was to develop UI for "Health Care System". In this project, two modules are present, User and Doctor. User can login to their account or create their new account. User can search medicines according to their symptoms. User can also search for various doctors by their specialization or name. User can book their appointment according to doctor's availability. Doctor can also login to their account or create their new account. Doctor can see all the appointments booked by the user. Doctor can add new medicines also. Both user and doctor can logout from their device or they can delete their account.</p>
            </div>

            <div className="company-logo">
                <img src={companyLogo} alt="" />
            </div>
        </div>
    </>
  )
}

export default Work
