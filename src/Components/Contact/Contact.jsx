import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j9hau5u', 'template_0rs44ws', form.current, 'uCYAMpo41j7Hrhh9n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>p.rohit.2310@gmail.com</h5>
                        <a href='mailto:p.rohit.2310@gmail.com' target='_blank'>Send a Message</a>
                    </article>

                    <article className="contact_option">
                        <AiFillLinkedin className='contact_option-icon' />
                        <h4>Messanger</h4>
                        <h5>Rohit Patil</h5>
                        <a href='#' target='_blank'>Send a Message</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whats App</h4>
                        <h5>+91 7498682506</h5>
                        <a href='https://api.whatsapp.com/send?phone=+917498682506' target='_blank'>Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact