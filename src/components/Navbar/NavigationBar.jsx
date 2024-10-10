import React, { useRef, useState } from 'react'
import './navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const NavigationBar = () => {

  const [menu, setMenu] = useState("home")

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <>
      <div className="navbar">
        <p><span>KSHITIJA SAVAIRAM</span></p>
        <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />

        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close' />
          <li>
            <AnchorLink className='anchor-link' href='#home'>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p onClick={() => setMenu("about")}>About</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#skills'>
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
            {menu === "skills" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
              <p onClick={() => setMenu("work")}>Work</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#project'>
              <p onClick={() => setMenu("project")}>Project</p>
            </AnchorLink>
            {menu === "project" ? <img src={underline} alt="" /> : <></>}
          </li>
        </ul>

        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me!
          </AnchorLink>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
