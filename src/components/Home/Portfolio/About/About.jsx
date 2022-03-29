/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './About.css'
import Me from '../../assets/myavt.jpg'
import {FaAward} from 'react-icons/fa'
import {BiFolderOpen} from 'react-icons/bi'
import {MdOutlineLanguage} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={Me} alt="About Image" />
          </div>  
        </div>  

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Month Working</small>
            </article>
            <article className='about__card'>
              <BiFolderOpen className='about__icon'/>
              <h5>Project</h5>
              <small>+5 project completed</small>
            </article>
            <article className='about__card'>
              <MdOutlineLanguage className='about__icon'/>
              <h5>Language</h5>
              <small>Toeic 765 LR</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita provident voluptatibus dignissimos beatae fuga accusamus modi vitae ab, nam sequi deserunt earum repellat fugit, laborum deleniti nulla rerum, voluptatem consequuntur?
          </p>

          <a href="#contact" className='btn btn-primary btn-custom'>Let's Talk</a>
        </div>
      </div>    
    </section>
  )
}

export default About