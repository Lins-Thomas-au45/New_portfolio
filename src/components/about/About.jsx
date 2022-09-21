import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know </h5>
    <h2>About Me</h2>
  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
        </div>
      </div>
    <div className="about__content">
      <div className="about__cards">
<article className="about__card">
  <FaAward className="about__icon"/>
  <h5>Experience</h5>
  <small>Fresher</small>
</article>

 <article className="about__card">
  <FiUsers className=" about__icon"/>
  <h5>Technology</h5>
  <small>MERN stack</small>
</article> 
  <article className="about__card">
    <VscFolderLibrary className=" about__icon"/>
    <h5>Projects</h5>
    <small>3+ Completed</small>
  </article>
</div>
        <p>
I am Lins Thomas, completed B.tech electrical from College Of Engineering, Kidangoor. I completed training on MERN stack from Attainu and Luminar Technolab. I am capable of working in technologies such as React JS, Node JS, Python. I completed several projects in MERN stack and still continuing doing projects and learning technologies.
        </p>
      <a href="#contacts" className='btn btn-primary'> Let's Talk </a>
    </div>
  </div>
</section>
)
}
export default About