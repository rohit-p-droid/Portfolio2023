import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi';
import { BsPatchCheckFill } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='service'>
      <h5>My Experinece</h5>
      <h2>Resume</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h2>Education</h2>
          </div>
          <ul className="service_list">
            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>B.Tech. - Computer Engineering</h3>
              </li>
              <li>
                <h5>R. C. Patel Institute of Technology, Shirpur (2021 - 2024)</h5>
              </li>
              <li>
                <h5><i>7.54 CGPA</i></h5>
              </li>
              <br />
            </div>

            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>HSC Board</h3>
              </li>
              <li>
                <h5><b>Pratap Vidya Mandir, Chopda (2018 - 2020)</b></h5>
              </li>
              <li>
                <h5><i>68.92 %</i></h5>
              </li>
              <br />
            </div>

            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>SSC Board</h3>
              </li>
              <li>
                <h5>Shri. Chhatrapati Shivaji High School, Kathora (2018)</h5>
              </li>
              <li>
                <h5><i>92.20 %</i></h5>
              </li>
              <br />
            </div>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h2>Achievements</h2>
          </div>
          <ul className="service_list">
            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>Internship in Java</h3>
              </li>
              <li>
                <h4>R3 Systems India Pvt. Ltd.</h4>
              </li>
              <li>
                <h5>One Month training and internship in Core Java, Advanced Java & Spring Framework
                  with grade A+ (August 2022)
                </h5>
              </li>
              <br />
            </div>

            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>Internship in MERN Stack</h3>
              </li>
              <li>
                <h4>R3 Systems India Pvt. Ltd.</h4>
              </li>
              <li>
                <h5>Internship in MERN Stack (Feb 2023)
                </h5>
              </li>
              <br />
            </div>

            <div>
              <li>
                <BsPatchCheckFill className='service_list-icon' />
                <h3>Wipro Talent Next</h3>
              </li>
              <li>
                <h4>Wipro Technologies India Pvt. Ltd.</h4>
              </li>
              <li>
                <h5>Training program offered by wipro on Core Java, Advanced Java and Spring Boot (July-2023 - August-2023)
                </h5>
              </li>
              <br />
            </div>



          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services