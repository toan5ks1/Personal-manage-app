import React from 'react';

import { Layout } from 'antd';
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <Layout.Footer style={{
      textAlign: 'center',
      background: '#1a132f',
      color: 'var(--color-white)',
      padding: '3rem 0',
      }}>
      <div style={{borderTop: '1px solid var(--color-light)', margin: '0 20%', paddingTop: '2rem'}}>
      <a href='#' className='footer__logo'>TOAN NGUYEN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Portfolio</a></li>
        <li><a href='#Testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>  

      <div className="footer__socials">
        <a href="https://facebook.com"><BsLinkedin /></a>
        <a href="https://linkedin.com"><BsFacebook /></a>
        <a href="https://github.com"><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; toannguyenUIT - No Limitation</small>
      </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
