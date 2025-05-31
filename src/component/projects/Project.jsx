import React from 'react';
import { FaGithub } from 'react-icons/fa';
import netflixCloneImage from '../../assetss/img/netfixclone.webp';
import fastfood from '../../assetss/img/fastfood.webp';
import chartjs from '../../assetss/img/chartjs.webp';
import fitness from '../../assetss/img/fitness.webp';
import puppyworld from '../../assetss/gif/Puppyworld.gif';
import Apex from '../../assetss/gif/Apex.gif';
import Apex_admin from '../../assetss/gif/Apex_admin.gif';
import online_shop from '../../assetss/img/online-shop.webp';
import Rezorpay from '../../assetss/img/Rezorpay.webp';
import Search from '../../assetss/img/Search.webp';
import network_anylatics from '../../assetss/img/network_anylatics.webp';
import Ecoson from '../../assetss/img/Ecoson.webp';
import url_short from '../../assetss/img/url_short.webp';
import Linked from '../../assetss/gif/Linked.gif';
import Task_manager from '../../assetss/img/Task manager.webp';
import BookMyCollab from '../../assetss/img/influencer.webp';
import Iphone_Titanium_mockup from '../../assetss/gif/Iphone_Titanium_mockup.gif';
import Reduxpay from '../../assetss/gif/Reduxpay.gif';
import './project.css';

const projects = [
  {
    id: 1,
    image: chartjs,
    title: 'Anylatics',
    description: 'Analytics is a comprehensive analytics platform designed to provide detailed insights and data visualizations. It leverages Chart.js for dynamic and interactive charts, enabling users to track and analyze various metrics effectively',
    github: 'https://github.com/harshKumar029/Anylatics',
    demo: 'https://anylatics.vercel.app/'
  },
  {
    id: 2,
    image: fitness,
    title: 'Fitness',
    description: 'Fitness is a web application dedicated to fitness enthusiasts. It features an engaging UI design with added animations, making the user experience visually appealing and interactive.',
    github: 'https://github.com/harshKumar029/fitnness-website',
    demo: 'https://github.com/harshKumar029/fitnness-website'
  },
  {
    id: 3,
    image: online_shop,
    title: 'online_shop',
    description: 'This is a freelance project where I have implemented UI animations and responsiveness on the home page of the website. The project provides a seamless shopping experience, enhancing user engagement through smooth transitions and mobile-friendly design.',
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: Search,
    title: 'Search Engine',
    description: 'This project is a search engine where my main focus was to implement proper functionality and ensure seamless operation. The search engine is designed to provide accurate and efficient search results, enhancing user experience.',
    github: 'https://github.com/harshKumar029/Search_engine',
    demo: 'https://questfind.vercel.app/'
  },
  {
    id: 5,
    image: Rezorpay,
    title: 'Rezorpay_clone',
    description: 'Rezorpay Clone is a replica UI design of the popular payment gateway Razorpay. This project focuses on replicating the user interface to provide a similar look and feel to the original, with added animations for an enhanced user experience.',
    github: 'https://github.com/harshKumar029/rezorpayX',
    demo: 'https://rezorpay-x.vercel.app/'
  },
  {
    id: 6,
    image: Task_manager,
    title: 'Task Manager',
    description: 'Task Manager is a comprehensive project management tool designed to help users organize and prioritize tasks effectively. It includes features for task creation, assignment, and tracking progress. Utilizing Chart.js, it also provides analytics and visual insights into task management and project progress.',
    github: 'https://github.com/harshKumar029/PriorityPulse_taskmanager_MERN',
    demo: 'https://github.com/harshKumar029/PriorityPulse_taskmanager_MERN'
  },
  {
    id: 7,
    image: network_anylatics,
    title: 'Network security Anylatics',
    description: 'Network Security Analytics is a monitoring system designed to track and analyze network security events. It provides real-time alerts and detailed reports based on JSON data, helping server administrator or user to identify and respond to potential security threats.',
    github: 'https://github.com/harshKumar029/network-security-monitoring-systems',
    demo: 'https://network-security-monitoring-systems.vercel.app/'
  },
  {
    id: 8,
    image: Ecoson,
    title: 'EcoSun',
    description: 'Objective is to design and develop a responsive website with animation that sells a single product and here comes Eco Sun a solar panel selling website which is design using Figma and Developed using React tailwind and for animation I have used AOS library',
    github: 'https://github.com/harshKumar029/Solarwebui',
    demo: 'https://solarwebui.vercel.app/',
    figma: 'https://www.figma.com/design/D1IUaP2SGpOVF5Lfw5fyny/Untitled?node-id=47-51&t=9krlVJuji3bwRzAN-0'
  },
  {
    id: 9,
    image: fastfood,
    title: 'Fastfood',
    description: 'Fastfood is a cloud kitchen management system that streamlines the operations of fast-food restaurants. It includes features such as order management, order status history, enhancing the efficiency of food service operations.',
    github: 'https://github.com/harshKumar029/cloudkitchen_mern',
    demo: 'https://fastfood-nu.vercel.app/'
  },
  {
    id: 10,
    image: BookMyCollab,
    title: 'BookMyCollab',
    description: 'BookMyCollab is an online platform that simplifies influencer marketing by acting as a mediator, connecting brands with popular influencers on platforms like YouTube, Instagram, and Facebook to create unique, tailored content for each brand.',
    demo: 'https://influencer-book-my-collab.vercel.app/'
  },

  {
    id: 11,
    image: puppyworld,
    title: 'Puppyworld',
    description: 'Puppyworld is an online freelance project where I designed the system and developed the UI/UX. It offers a variety of products and services for pets, including pet training and a community forum for sharing experiences and tips. This website is also top-ranked in Google search results.',
    github: 'https://puppytheworld.in/',
    demo: 'https://puppytheworld.in/'
  },
  {
    id: 12,
    image: url_short,
    title: 'Url shortner(Old)',
    description: 'URL Shortener is a web application that allows users to shorten long URLs for easier sharing. It includes features such as click tracking, and analytics, providing a efficient solution for managing links. The technology used includes AWS EC2 for hosting the Node.js server and a custom domain.',
    github: 'https://github.com/harshKumar029/url_shortener_app',
    demo: 'https://linked-mu.vercel.app/',
  },
  {
    id: 13,
    image: netflixCloneImage,
    title: 'Netflix',
    description: 'Netflix Clone is a web application inspired by the popular streaming service Netflix. It features a user-friendly interface for browsing movies and TV shows, complete with search functionality using the TMDB API.',
    github: 'https://github.com/harshKumar029/netflixui',
    demo: 'https://netflixuiclone-jecbzpb34-harsh-kumars-projects-93aba863.vercel.app/'
  },
  {
    id: 14,
    image: Apex_admin,
    title: 'Apex_Admin',
    description: 'Apex is a finance platform currently being developed for a client in Noida. The UI/UX designs created by another Junior freelancer. My work involves bringing these designs to life as a functional, reliable web app integrating APIs to ensure smooth financial operations. This project is ongoing, with regular updates to improve functionality, security, and user experience, all tailored to meet the client’s needs.',
    // github: 'https://github.com/harshKumar029/netflixui',
    figma: 'https://www.figma.com/design/0SF1gg5Uyv3ioypJDQP6Wx/Apex-Backend?node-id=0-1&node-type=canvas&t=MnUjJ9kDdqXwSueT-0',
    demo: 'https://apex-admin-five.vercel.app/'
  },
  {
    id: 15,
    image: Apex,
    title: 'Apex_Dashboard',
    description: 'Apex is a finance platform, currently in development phase for a Noida-based company. As a freelancer, I manage frontend development, focusing on creating intuitive UI/UX and integrating APIs for efficient financial operations.',
    // github: 'https://github.com/harshKumar029/netflixui',
    figma: 'https://www.figma.com/design/mX6QIvm9RolD44s7Cmvj0R/Apex-Agent?node-id=0-1&node-type=canvas&t=t0Ry9tgrqcgWCpAb-0',
    demo: 'https://apex-chi.vercel.app/'
  },
  {
    id: 16,
    image: Reduxpay,
    title: 'Reduxpay',
    description: 'In my previous role at StoreShoppy, I developed a payment web app similar to PayPal, Razorpay, and Stripe. This solution targeted B2B businesses and supported multiple payment methods, including bulk and Excel-based payments. It featured transaction analytics using Chart.js, login/signup flows with OTP-based transactions, payout management, form validation, and error handling for a seamless user experience.',
    github: 'https://github.com/harshKumar029/Payment_gateway',
    demo: 'https://payment-gateway-yahz.onrender.com/',
    figma: 'https://www.figma.com/design/eFucBuJkhi9bWoJqEURUFF/Untitled?node-id=0-1&node-type=canvas&t=lczS9IEnz8J8tpYc-0',
    video: 'https://drive.google.com/file/d/1qpq_vbBim19x-uAzggv6CxpbIaOZBJ0z/preview'
  },
  {
    id: 17,
    image: Linked,
    title: 'Linked(New)',
    description: 'An upgraded version of my previous URL shortener project, rebuilt with enhanced features and a refined UI. It shortens long URLs with device- and country-based redirection for targeted sharing. Users can track click performance over the last 30 days through an interactive dashboard featuring world maps, line charts, and summary stats. Includes real-time analytics, click tracking, and link notifications, offering a powerful and efficient solution for managing links.',
    github: 'https://github.com/harshKumar029/Linked',
    demo: 'https://linked-po8h.vercel.app/login',
  },
  {
    id: 18,
    image: Iphone_Titanium_mockup,
    title: 'Iphone_Titanium-mockup',
    description: 'This iPhone Titanium website, crafted with Adobe Premiere Pro, 3D animation, React, and Figma, features a parallax scrolling effect. A 3D model, created with Spline, adds an interactive element, allowing users to explore the product from different angles. The clean and minimalistic design aligns with the brand aesthetics.',
    github: 'https://github.com/harshKumar029/Apple_Mockup',
    // demo: 'https://apple-mockup.onrender.com/',
    figma: 'https://www.figma.com/design/AisVkKrhC93HZQjMAhkWXZ/Untitled?node-id=0-1&t=JYbqNQDzKvZaenC7-0',
    video: 'https://drive.google.com/file/d/1A7inOhuSvkO58HPwKk0ko_lC5oaF_k7A/preview'
  }
];

const Project = () => {
  return (
    // <div className="project-container">
    //   <p className="project_h2">&lt;h2&gt;</p>
    //   <h2 className='pro_heading'>Projects</h2>
    //   <p className="project_h2">&lt;/h2&gt;</p>
    //   <p className="project_h2">&lt;div&gt;</p>
    //   <div className="projects-grid">
    //     {projects.map(project => (
    //       <div className="project-card" key={project.id}>
    //         <div className="project-image">
    //           <img src={project.image} alt={project.title} />
    //         </div>
    //         <div className="project-details">
    //           <h2>{project.title}</h2>
    //           <p>{project.description}</p>
    //         </div>
    //         <div className='card_icon'>
    //           <a href={project.github} target="_blank" rel="noopener noreferrer">
    //             <FaGithub className="icon-gh" />
    //           </a>
    //           {project.figma && (
    //             <a style={{placeSelf:'normal'}} href={project.figma} target="_blank" rel="noopener noreferrer">
    //               <svg   xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 48 48">
    //                 <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
    //               </svg>
    //             </a>
    //           )}
    //           <a className='demo_link' href={project.demo} target="_blank" rel="noopener noreferrer">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     )).reverse()}
    //   </div>
    //   <p className="project_h2">&lt;/div&gt;</p>
    // </div>



    <div className="project-container">
      <p className="project_h2">&lt;h2&gt;</p>
      <h2 className='pro_heading'>Projects</h2>
      <p className="project_h2">&lt;/h2&gt;</p>
      <p className="project_h2">&lt;div&gt;</p>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
              <div className="video-overlay">
                <iframe
                  src={project.video}
                  className="project-video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className='card_icon'>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon-gh" />
                </a>
              )}
              {project.figma && (
                <a style={{ placeSelf: 'normal' }} href={project.figma} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 48 48">
                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                  </svg>
                </a>
              )}
              {project.demo && (
              <a className='demo_link' href={project.demo} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </a>
              )}
            </div>
          </div>
        )).reverse()}
      </div>
      <p className="project_h2">&lt;/div&gt;</p>
    </div>

  );
}

export default Project;
