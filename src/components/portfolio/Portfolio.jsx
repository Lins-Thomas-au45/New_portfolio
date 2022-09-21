import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio6.PNG'
import IMG2 from '../../Assets/portfolio1.PNG'
import IMG3 from '../../Assets/portfolio2.PNG'
import IMG4 from '../../Assets/portfolio3.PNG'
import IMG5 from '../../Assets/portfolio4.PNG'
import IMG6 from '../../Assets/portfolio5.PNG'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/Lins-Thomas-au45/My_portfolio_website" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>

        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>still on going</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Lins-Thomas-au45/My_portfolio_website" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
          </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>still ongoing</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>stil ongoing</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
        </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>still ongoing</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>still on going</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target= '_blank'>Live Demo</a>
          </div>
        </article>
      
      
      </div>
    </section>
  )
}

export default Portfolio