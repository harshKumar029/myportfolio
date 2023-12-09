import React from 'react'
import './portfolio.css';

const portfolio = () => {
    return (
        <>
            <div className='portfolio' id='portfolio'>
                <p className="seven">&lt;h2&gt;</p>
                <p className="myportfolio">My Portfolio</p>
                <p className="eight">&lt;/h2&gt;</p>
                <p className="nine">&lt;p&gt;</p>
                <p className="content_one">Here's a glimpse of a small gallery showcasing recent projects I've undertaken
                 single-handedly. While this represents just a fraction of my work, it's a testament to my capabilities.
                </p>

                <p className="ten">&lt;/p&gt;</p>
                <p className="sec_start">&lt;section&gt;</p>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <a href="https://harshkumar029.github.io/email_featching/">
                                <img src="./assets/img/contactform.png" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://leatheringo.000webhostapp.com/">
                                <img src="./assets/img/online-shop.png" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://netflix-clone-ui-design-app.netlify.app/">
                                <img src="./assets/img/netfixclone.png" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://puppytheworld.in/">
                                <img src="./assets/img/puppyworld.png" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://harshkumar029.github.io/Ai-responsive-website/">
                                <img src="./assets/img/vizon.jpg" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://harshkumar029.github.io/Price-card/">
                                <img src="./assets/img/price_card.jpg" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://harshkumar029.github.io/Login-page/">
                                <img src="./assets/img/login_ui.jpg" alt="" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://harshkumar029.github.io/fitnness-website/">
                                <img src="./assets/img/fitness.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <p className="sec_end">&lt;/section&gt;</p>

            </div>
        </>
    )
}

export default portfolio