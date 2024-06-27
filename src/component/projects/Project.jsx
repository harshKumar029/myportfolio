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
    description: 'This is a description for Project 1. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/Anylatics',
    demo: 'https://anylatics.vercel.app/'
  },
  {
    id: 2,
    image: fitness,
    title: 'Fitness',
    description: 'This is a description for Project 2. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/fitnness-website',
    demo: 'https://github.com/harshKumar029/fitnness-website'
  },
  {
    id: 3,
    image: online_shop,
    title: 'online_shop',
    description: 'This is a description for Project 3. It is an amazing project that showcases some interesting features and functionalities.',
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: Search,
    title: 'Search Engine',
    description: 'This is a description for Project 3. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/Search_engine',
    demo: 'https://questfind.vercel.app/'
  },
  {
    id: 5,
    image: Rezorpay,
    title: 'Rezorpay_clone',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/rezorpayX',
    demo: 'https://rezorpay-x.vercel.app/'
  },
  {
    id: 6,
    image: Task_manager,
    title: 'Task Manager',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/PriorityPulse_taskmanager_MERN',
    demo: 'https://github.com/harshKumar029/PriorityPulse_taskmanager_MERN'
  },
  {
    id: 7,
    image: network_anylatics,
    title: 'Network security Anylatics',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/network-security-monitoring-systems',
    demo: 'https://network-security-monitoring-systems.vercel.app/'
  },
  {
    id: 8,
    image: fastfood,
    title: 'Fastfood',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/cloudkitchen_mern',
    demo: 'https://fastfood-nu.vercel.app/'
  },
  {
    id: 9,
    image: puppyworld,
    title: 'Puppyworld',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://puppytheworld.in/',
    demo: 'https://puppytheworld.in/'
  },
  {
    id: 10,
    image: netflixCloneImage,
    title: 'Netflix',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.',
    github: 'https://github.com/harshKumar029/netflixui',
    demo: 'https://netflixuiclone-jecbzpb34-harsh-kumars-projects-93aba863.vercel.app/'
  },
  {
    id: 11,
    image: url_short,
    title: 'Url shortner',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.',
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
