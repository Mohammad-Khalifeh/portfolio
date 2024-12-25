import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';

export default function Works() {
  const openSiteInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img
          src={portfolio1}
          alt=""
          className="worksImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-tic-tac-toe.000webhostapp.com/')
          }
        />
        <img
          src={portfolio2}
          alt=""
          className="worksImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-movies-app.000webhostapp.com/')
          }
        />
        <img
          src={portfolio3}
          alt=""
          className="worksImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-login-animation.netlify.app/')
          }
        />
        <img
          src={portfolio4}
          alt=""
          className="worksImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-battery-charging.netlify.app/')
          }
        />
        <img
          src={portfolio5}
          alt=""
          className="worksImg"
          onClick={() =>
            openSiteInNewTab('https://khalifeh-specific-list.netlify.app/')
          }
        />
      </div>
    </section>
  );
}
