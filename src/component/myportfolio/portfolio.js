import React from 'react'
import './portfolio.css';
import { useNavigate } from 'react-router-dom';
import url_short from '../../assetss/img/url_short.webp';
import fastfood from '../../assets/img/fastfood.webp';
import chartjs from '../../assets/img/chartjs.webp';
import netfixclone from '../../assets/img/netfixclone.webp';
import puppyworld from '../../assets/img/puppyworld.webp';
import onlineShop from '../../assets/img/online-shop.webp';



const Portfolio = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Project');
    };
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
                            <a href="https://anylatics.vercel.app/">
                                <img src={chartjs} alt="chartjs" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://linked-mu.vercel.app/">
                                <img src={url_short} alt="url_short" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://fastfood-nu.vercel.app/">
                                <img src={fastfood} alt="fastfood" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://netflixuiclone-jecbzpb34-harsh-kumars-projects-93aba863.vercel.app/">
                                <img src={netfixclone} alt="netfixclone" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="https://puppytheworld.in/">
                                <img src={puppyworld} alt="puppyworld" />
                            </a>
                        </div>
                        <div className="slide">
                            <a href="#">
                                <img src={onlineShop} alt="" />
                            </a>
                        </div>
                    
                    </div>
                </div>
                <div className='view_Project'>
                    <p
                        className="more_proj"
                        onClick={handleClick}
                    >
                        View More projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </p>
                </div>
                <p className="sec_end">&lt;/section&gt;</p>

            </div>
        </>
    )
}

export default Portfolio