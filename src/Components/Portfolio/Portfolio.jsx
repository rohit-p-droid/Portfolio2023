import React from 'react'
import './portfolio.css'
import img1 from '../../Assets/portfolio.png'
import img2 from '../../Assets/portfolio2.jpg'
import img3 from '../../Assets/constructionERP.jpeg'
import img4 from '../../Assets/EmployeeManagement.png'
import img5 from '../../Assets/portfolio5.png'
import img6 from '../../Assets/portfolio6.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image: img1,
            title: "Portfolio using React",
            desc: "This is the dynamic portfolio website created using React-js hosted on vercel",
            github: "https://github.com/rohit-p-droid/MERN-LaptopShopping-website.git",
            demo: "https://portfolio2023-gamma.vercel.app/"
        },
        {
            id: 2,
            image: img2,
            title: "Laptop Shopping Website",
            desc: "It is the online laptop shopping website build using React as a frontend and NodeJS, ExpressJS for backend and MongoDB for database",
            github: "https://github.com/rohit-p-droid/MERN-LaptopShopping-website.git",
            demo: "#"
        },
        {
            id: 3,
            image: img3,
            title: "Construction ERP",
            desc: "This is a dynamic web application made using using JDBC, Servlet for backend and JSP, HTML, CSS for frontend and Mysql for database.",
            github: "https://github.com/rohit-p-droid/Constrution-ERP.git",
            demo: "#"
        },
        {
            id: 4,
            image: img4,
            title: "Employee Management System",
            desc: "This is a project build using JDBC and servelet for backend and Mysql for database and frontend using scene builder in Netbeans IDE.",
            github: "https://github.com/rohit-p-droid/Emplloyee-Management-System.git",
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