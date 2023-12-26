import React from 'react'
import './hero.css'
import heroanimation from './heroanimation.json';
import scrollanimation from './scrollanimation.json';
import Lottie from 'lottie-react';
const Hero = () => {
  return (
    <>
      <div className='abc' id='hero' >
        <div>
          <p className='one' >&lt;html&gt;</p>
          <p className='two'>&lt;body&gt;</p>
          <p class="three">&lt;h1&gt;</p>
          <p className="blastroot">
            <b> Hi, <br /> I’m

              <span className="waviy">
                <span className="wav1">H</span>
                <span>a</span>
                <span>r</span>
                <span>s</span>
                <span>h</span>
                <span>,</span>
              </span>
            </b>
          </p>
          <p className="word">
            <b> Web Developer <span className="four">&lt;/h&gt;</span> </b>
          </p>
          <p className="five">&lt;p&gt;</p>
          <p className="para2"> <b> FRONTEND & BACKEND DEVELOPER </b> </p>
          <p className="six">&lt;/p&gt;</p>
          <a className='resum' href="https://drive.google.com/file/d/1Q0f-ftO_awIjzMakkLPTi6QmhU_VSgNC/view?usp=sharing" target="_blank">
            <button className="resume"> <span>Resume</span> </button>
          </a>
        </div>
        <div className='heroanimation'>
          <Lottie className='dextanimation' animationData={heroanimation} />
        </div>
        <div >
          <Lottie className='scrollanimation' animationData={scrollanimation} />
        </div>
      </div>
    </>
  )
}

export default Hero