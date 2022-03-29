import React from 'react'
import './Profile.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const Profile = () => {
    const profileData = [
        {
            id: 1,
            image: Img1,
            title: 'Delivery App',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
        {
            id: 2,
            image: Img2,
            title: 'FocusWork Chrome Extension',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
        {
            id: 3,
            image: Img3,
            title: 'Personal App',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
        {
            id: 4,
            image: Img4,
            title: 'Chat App',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
        {
            id: 5,
            image: Img5,
            title: 'Blank',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
        {
            id: 6,
            image: Img6,
            title: 'Blank',
            github: 'https://github.com',
            demo: 'https://abc.com'
        },
    ]
  return (
    <section id="services">
        <h5>My Recent Work</h5>
        <h2>Profile</h2>

        <div className="container portfolio__container">
            {profileData.map((item => {
                return(
                    <article className="portfolio__item" id={item.id}>
                        <div className="portfolio__item-image">
                            <img src={item.image} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="btn-wrapper">
                            <a href={item.github} className='btn btn-custom-1' target='_blank'>Github</a>
                            <a href={item.demo} className='btn btn-primary btn-custom-2' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )
            }))}
        </div>
        
    </section>
  )
}

export default Profile