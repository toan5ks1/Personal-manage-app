import React from 'react'
import CV from '../../assets/my-cv.pdf'

const Description = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Description