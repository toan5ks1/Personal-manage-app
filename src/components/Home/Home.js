/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Header from './Portfolio/Header/Header';
import Nav from './Portfolio/Nav/Nav';
import About from './Portfolio/About/About';
import Experience from './Portfolio/Experience/Experience';
import Profile from './Portfolio/Profile/Profile';
import Testimonials from './Portfolio/Testimonials/Testimonials';
import Contact from './Portfolio/Contact/Contact';
import Footer from './Portfolio/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Profile />
      <Testimonials />
      <Contact />
    </div>
  )};

export default Home;
