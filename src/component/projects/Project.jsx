import React from 'react';
import { FaGithub } from 'react-icons/fa';
import netflixCloneImage from '../../assetss/img/netfixclone.png';
import fastfood from '../../assetss/img/fastfood.png';
import chartjs from '../../assetss/img/chartjs.png';
import fitness from '../../assetss/img/fitness.png';
import puppyworld from '../../assetss/img/puppyworld.png';
import online_shop from '../../assetss/img/online-shop.png';
import Rezorpay from '../../assetss/img/Rezorpay.png';
import Search from '../../assetss/img/Search.png';
import network_anylatics from '../../assetss/img/network_anylatics.png';
import url_short from '../../assetss/img/url_short.png';
import Task_manager from '../../assetss/img/Task manager.png';
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
    image: fastfood,
    title: 'Fastfood',
    description: 'Fastfood is a cloud kitchen management system that streamlines the operations of fast-food restaurants. It includes features such as order management, order status history, enhancing the efficiency of food service operations.',
    github: 'https://github.com/harshKumar029/cloudkitchen_mern',
    demo: 'https://fastfood-nu.vercel.app/'
  },
  {
    id: 9,
    image: puppyworld,
    title: 'Puppyworld',
    description: 'Puppyworld is an online freelance project where I designed the system and developed the UI/UX. It offers a variety of products and services for pets, including pet training and a community forum for sharing experiences and tips. This website is also top-ranked in Google search results.',
    github: 'https://puppytheworld.in/',
    demo: 'https://puppytheworld.in/'
  },
  {
    id: 10,
    image: netflixCloneImage,
    title: 'Netflix',
    description: 'Netflix Clone is a web application inspired by the popular streaming service Netflix. It features a user-friendly interface for browsing movies and TV shows, complete with search functionality using the TMDB API.',
    github: 'https://github.com/harshKumar029/netflixui',
    demo: 'https://netflixuiclone-jecbzpb34-harsh-kumars-projects-93aba863.vercel.app/'
  },
  {
    id: 11,
    image: url_short,
    title: 'Url shortner',
    description: 'URL Shortener is a web application that allows users to shorten long URLs for easier sharing. It includes features such as click tracking, and analytics, providing a efficient solution for managing links. The technology used includes AWS EC2 for hosting the Node.js server and a custom domain.',
    github: 'https://github.com/harshKumar029/url_shortener_app',
    demo: 'https://linked-mu.vercel.app/'
  }
];

const Project = () => {
  return (
    <div className="project-container">
      <p className="project_h2">&lt;h2&gt;</p>
      <h2 className='pro_heading'>Projects</h2>
      <p className="project_h2">&lt;/h2&gt;</p>
      <p className="project_h2">&lt;div&gt;</p>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className='card_icon'>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon-gh" />
              </a>
              <a className='demo_link' href={project.demo} target="_blank" rel="noopener noreferrer">
                <svg className='demo_link' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </a>
            </div>
          </div>
        )).reverse()}
      </div>
      <p className="project_h2">&lt;/div&gt;</p>
    </div>
  );
}

export default Project;
