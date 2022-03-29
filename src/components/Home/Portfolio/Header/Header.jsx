import React from 'react'
import './Header.css'
import Description from './Description'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Henry Nguyen</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <Description />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <HeaderSocials/>
        <a href="#contact" className='scroll__down'>Scroll Down<BsFillArrowDownCircleFill /></a>
      </div>
    </header>
  )
}

export default Header