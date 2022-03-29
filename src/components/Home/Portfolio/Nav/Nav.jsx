/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActive('home')} className={active === 'home' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''}>
        <AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActive('experience')} className={active === 'experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActive('service')} className={active === 'service' ? 'active' : ''}>
        <RiServiceLine />
        </a>
      <a href="#contact" onClick={() => setActive('contact')} className={active === 'contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav