import React from 'react';
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
    description: 'This is a description for Project 1. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 2,
    image: fitness,
    title: 'Fitness',
    description: 'This is a description for Project 2. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 3,
    image: online_shop,
    title: 'online_shop',
    description: 'This is a description for Project 3. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 4,
    image: Search,
    title: 'Search Engine',
    description: 'This is a description for Project 3. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 5,
    image: Rezorpay,
    title: 'Rezorpay_clone',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 6,
    image: Task_manager,
    title: 'Task Manager',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 7,
    image: network_anylatics,
    title: 'Network Anylatics',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 8,
    image: fastfood,
    title: 'Fastfood',
    description: 'This is a description for Project 4. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 9,
    image: puppyworld,
    title: 'Puppyworld',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 10,
    image: netflixCloneImage,
    title: 'Netflix',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.'
  },
  {
    id: 11,
    image: url_short,
    title: 'Url shortner',
    description: 'This is a description for Project 5. It is an amazing project that showcases some interesting features and functionalities.'
  }
];

const Project = () => {
  return (
    <div className="project-container">
      <p className="project_h2">&lt;h2&gt;</p>
      <h2 className='pro_heading'>Projects</h2>
      <p className="project_h2">&lt;/h2&gt;</p>
      <p className="project_h2">&lt;Div&gt;</p>
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
          </div>
        )).reverse()}
      </div>
      <p className="project_h2">&lt;/div&gt;</p>
    </div>
  );
}

export default Project;
