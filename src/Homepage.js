// import React from 'react'
// import Portfolio from './component/myportfolio/portfolio';
// import Aboutme from './component/aboutme/aboutme';
// import Myskill from './component/myskills/myskill';
// import Hero from './component/heropage/hero';

// const Homepage = () => {
//   return (
//     <div>
//       <Hero />
//       <Portfolio />
//       <Aboutme />
//       <Myskill />
//     </div>
//   )
// }

// export default Homepage


import React from 'react';
import Portfolio from './component/myportfolio/portfolio';
import Aboutme from './component/aboutme/aboutme';
import Myskill from './component/myskills/myskill';
import Hero from './component/heropage/hero';

const Homepage = () => {
  return (
    <div>
      <section id="hero-section"><Hero /></section>
      <section id="portfolio-section"><Portfolio /></section>
      <section id="aboutme-section"><Aboutme /></section>
      <section id="skills-section"><Myskill /></section>
    </div>
  );
}

export default Homepage;
