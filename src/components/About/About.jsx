import React from 'react'
import './about.css'
import profileImg from '../../assets/about_section.jpeg'

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-title">
                    <h1>About Me</h1>
                </div>

                <div className="about-section">
                    <div className="about-left">
                        <img src={profileImg} alt="" />
                    </div>

                    <div className="about-right">
                        <div className="about-para">
                            <p>Hello there, <br />Hope you are doing well!</p>
                            <p>So as you know, myself Kshitija Savairam. I'm from Pune.</p>
                            <p>I've completed my Master's Degree in Computer Science from the Savitribai Phule Pune University, Pune in the year 2024. I also pursued a Full Stack Web Development Course [MERN] from FelixIT Systems, Pune.</p>
                            <p>I have the knowledge of Frontend technologies, Backend technologies and Database. Frontend technologies includes HTML5, CSS3, Bootstrap, JavaScript, React.js, Redux and Tailwind CSS. Backend technologies includes Node.js and Express.js. Database includes MongoDB. Currently I'm grasping the knowledge of Python Programming Language.</p>
                            <p>I've done 6 month internship program at Webhub Technology, Pune as a "Frontend Developer (React.js)".</p>
                            <p>My hobbies are playing card games and playing badminton. I also like to draw and paint.</p>
                        </div>

                        {/* <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML and CSS</p>
                                <hr style={{width: "50%"}} />
                            </div>
                            <div className="about-skill">
                                <p>JavaScript</p>
                                <hr style={{width: "50%"}} />
                            </div>
                            <div className="about-skill">
                                <p>ReactJS</p>
                                <hr style={{width: "50%"}} />
                            </div>
                            <div className="about-skill">
                                <p>NodeJS and ExpressJS</p>
                                <hr style={{width: "50%"}} />
                            </div>
                            <div className="about-skill">
                                <p>MongoDB</p>
                                <hr style={{width: "50%"}} />
                            </div>
                            <div className="about-skill">
                                <p>Python</p>
                                <hr style={{width: "50%"}} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
