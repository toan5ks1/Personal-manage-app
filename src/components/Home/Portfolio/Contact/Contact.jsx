import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiSkypeLine, RiMessengerLine, RiPhoneLine} from 'react-icons/ri'
import emailjs, {init} from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

init("YCp94ky4x7BHFbvJ-")

const Contact = () => {
  const form = useRef();
  const notify = () => toast("Successfully!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67lmpgn', 'template_xt041tg', form.current, 'YCp94ky4x7BHFbvJ-');
    notify();

    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>toannguyenluongUIT@gmail.com</h5>
            <a href="mailto:toannguyenluongUIT@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Nguyen Luong Toan</h5>
            <a href="https://m.me/toanproc8" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiSkypeLine className='contact_option-icon'/>
            <h4>Skype</h4>
            <h5><RiPhoneLine />033 278 3503</h5>
            <a href="https://join.skype.com/invite/wqmhqbh9Sm4d" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary btn-custom">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact