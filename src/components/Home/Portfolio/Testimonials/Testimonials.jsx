import React from 'react'
import './Testimonials.css'
import cpn1 from '../../assets/cpn1.png';

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: cpn1,
      name: 'VN NgayNay',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum deleniti voluptate, minus molestiae expedita a dolorum vero repudiandae quo aliquid ducimus voluptas eos doloremque laborum dicta corrupti nesciunt nobis.'
    },
    {
      id: 2,
      avatar: cpn1,
      name: 'VN NgayNay',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum deleniti voluptate, minus molestiae expedita a dolorum vero repudiandae quo aliquid ducimus voluptas eos doloremque laborum dicta corrupti nesciunt nobis.'
    },
    {
      id: 3,
      avatar: cpn1,
      name: 'VN NgayNay',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum deleniti voluptate, minus molestiae expedita a dolorum vero repudiandae quo aliquid ducimus voluptas eos doloremque laborum dicta corrupti nesciunt nobis.'
    },
  ]
  return (
    <section id='testimonials'>
      <h5>Carrier Path</h5>
      <h2>Previous Job</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className='testimonials'>
                <div className="company__avatar">
                  <img src={item.avatar} />
                </div>
                <h5 className="company__name">{item.name}</h5>
                <small className="company__detail">{item.detail}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials