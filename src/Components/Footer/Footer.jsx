import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {FaHackerrank} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>Rohit Patil</a>

        <ul className="permalinks">
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#exeperience'>Exeperience</a></li>
            <li><a href='#Services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer_socials">
            <a href='https://www.linkedin.com/in/prohit23/' target='_blank'><AiFillLinkedin/></a>
            <a href='https://github.com/rohit-p-droid' target='_blank'><BsGithub/></a>
            <a href='https://leetcode.com/RohitPatil23/' target='_blank'><SiLeetcode/></a>
            <a href='https://auth.geeksforgeeks.org/user/prohit9k4s' target='_blank'><SiGeeksforgeeks/></a>
            <a href='https://www.hackerrank.com/p_rohit_2310' target='_blank'><FaHackerrank/></a>
            <a href='https://www.codechef.com/users/sesrc2_419' target='_blank'><SiCodechef/></a>
        </div>
    </footer>
  )
}

export default Footer