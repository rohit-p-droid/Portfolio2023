import React from 'react'
import './experience.css'
// import { BsFillPatchCheckFill } from 'react-icons/bs'
import { PiFileHtmlBold } from 'react-icons/pi'
import { PiFileCssDuotone } from 'react-icons/pi'
import { SiJavascript } from 'react-icons/si'
import { BiLogoBootstrap } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BiLogoNodejs } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { BiLogoMongodb } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'
import { BiLogoDjango } from 'react-icons/bi'
import { BiLogoJava } from 'react-icons/bi'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Exeperties</h2>

            <div className="container exeperience_container">
                <div className="exeperience_frontend">
                    <h3>Frontend Developement</h3>
                    <div className="exeperience_content">
                        <article className="exeprience_details">
                            <PiFileHtmlBold className='exeperinece_details-icon'/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <PiFileCssDuotone className='exeperinece_details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <SiJavascript className='exeperinece_details-icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <BiLogoBootstrap className='exeperinece_details-icon'/>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <BiLogoReact className='exeperinece_details-icon'/>
                           <div>
                           <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                    </div>
                </div>


                <div className="exeperience_backend">
                    <h3>Backend Developement</h3>
                    <div className="exeperience_content">
                        <article className="exeprience_details">
                            <BiLogoNodejs className='exeperinece_details-icon'/>
                            <div>
                            <h4>Node JS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <SiExpress className='exeperinece_details-icon'/>
                            <div>
                            <h4>Express JS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <BiLogoMongodb className='exeperinece_details-icon'/>
                            <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <SiMysql className='exeperinece_details-icon'/>
                            <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <BiLogoDjango className='exeperinece_details-icon'/>
                            <div>
                            <h4>Python Django</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="exeprience_details">
                            <BiLogoJava className='exeperinece_details-icon'/>
                            <div>
                            <h4>Java</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience