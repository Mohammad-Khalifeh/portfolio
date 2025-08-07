import React from 'react';
import './projects.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

export default function projects() {
  const openSiteInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects">
      <h2 className="projectsTitle">My Project</h2>
      <div className="projectsImgs">
        <img
          src={portfolio1}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-tic-tac-toe.netlify.app/')
          }
        />
        <img
          src={portfolio2}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-movies-app.netlify.app/')
          }
        />
        <img
          src={portfolio3}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-login-animation.netlify.app/')
          }
        />
        <img
          src={portfolio4}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-battery-charging.netlify.app/')
          }
        />
        <img
          src={portfolio5}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-specific-list.netlify.app/')
          }
        />
        <img
          src={portfolio6}
          alt=""
          className="projectsImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-todolist.netlify.app/')
          }
        />
      </div>
    </section>
  );
}
