import React from 'react'
import './hero.css'
import profileImg from '../../assets/hero_section.jpg'

const Hero = () => {
  return (
    <>
      <div className="hero" id='home'>
        <img src={profileImg} alt="" />
        <h1>Hey, I'm <span>Kshitija</span> <br />A Full Stack Developer ! &#128522;</h1>

        <div className="hero-action">
          <div className="hero-resume">
            <li><a href="https://drive.google.com/drive/folders/1AOdC6VAxxOfvjqutKUvb6UhmNEOPf8Mm">My Resume</a></li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
