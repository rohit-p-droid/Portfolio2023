import React from 'react'
import './portfolio.css'
import img1 from '../../Assets/portfolio1.jpg'
import img2 from '../../Assets/portfolio2.jpg'
import img3 from '../../Assets/portfolio3.jpg'
import img4 from '../../Assets/portfolio4.jpg'
import img5 from '../../Assets/portfolio5.png'
import img6 from '../../Assets/portfolio6.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image: img1,
            title: "Portfolio using React",
            desc: "This is the dynamic portfolio website created using React-js hosted on vercel",
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            image: img2,
            title: "project2",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vitae praesentium libero saepe nemo laboriosam quae, debitis facilis repudiandae atque.",
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            image: img3,
            title: "project3",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vitae praesentium libero saepe nemo laboriosam quae, debitis facilis repudiandae atque.",
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            image: img4,
            title: "project4",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vitae praesentium libero saepe nemo laboriosam quae, debitis facilis repudiandae atque.",
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            image: img5,
            title: "project5",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vitae praesentium libero saepe nemo laboriosam quae, debitis facilis repudiandae atque.",
            github: "#",
            demo: "#"
        },
        {
            id: 6,
            image: img6,
            title: "project6",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vitae praesentium libero saepe nemo laboriosam quae, debitis facilis repudiandae atque.",
            github: "#",
            demo: "#"
        }
    ]

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                {
                    projects.map(({ id, image, title, desc, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}></img>
                                </div>
                                <h3>{title}</h3>
                                <p>{desc}</p><br/>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio