import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__wrapper">
          <h3>Fontend Development</h3>
          <div className="skills__container">
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>    

        <div className="experience__wrapper">
          <h3>Backend Development</h3>
          <div className="skills__container">
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>Golang</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__wrapper">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>   
      </div>
    </section>
  )
}

export default Experience