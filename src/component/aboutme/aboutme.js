import React from 'react'
import './aboutme.css';

const aboutme = () => {
  return (
    <>
      <div className='aboutme' id='aboutme'>
        <div >
          <p className="eleven">&lt;h2&gt;</p>
          <p className="portfolio_one">About Me</p>
          <p className="twelve">&lt;/h2&gt;</p>
          <p className="thirteen">&lt;p&gt;</p>
          <p className="content_two">
          "I'm a passionate and creative web developer specializing in front-end development.
           I take pleasure in transforming concepts into stunning and functional websites
            that deliver exceptional user experiences. With a solid grasp of HTML, CSS, 
            JavaScript, React JS, and Bootstrap, I keep pace with the ever-evolving
            world of web development, staying current with the latest technologies and 
            trends.<br/>I have hands-on experience with frameworks like React and leverage 
            responsive design principles to craft mobile-friendly websites."
          </p>
          <p className="fourteen">&lt;/p&gt;</p>
          <p className='imgtag'>&lt;img&gt;</p>
          <img className='gifimg' src='./assets/gif/journy.gif' alt='gif' />
          <p className='imgtag'>&lt;/img&gt;</p>
        </div >
        <div className='right'>
          <img className="persion_img" src="./assets/img/userimg.png" alt="" />
        </div>

      </div>
    </>
  )
}

export default aboutme