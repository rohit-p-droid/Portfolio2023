import React from 'react';
import './about.css';
import ME from '../../Assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About me</h2>

        <div className="container about_container">
            <div className='about_me'>
                <div className="about_me-image">
                    <img src={ME} alt='me'></img>
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Exeperience</h5>
                        <small>Work exeperinece</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Clients</h5>
                        <small>Work exeperinece</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Projects</h5>
                        <small>Work exeperinece</small>
                    </article>
                </div>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis libero harum 
                    accusantium, nihil porro nulla iure vel natus adipisci ab ex ut facilis reiciendis, 
                    ducimus magni et expedita dolorem quod!
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>

    </section>
  )
}

export default About