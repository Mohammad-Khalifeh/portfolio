import React from 'react';
import './skills.css';
import MERN from '../../assets/MERN.png';

export default function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        My skills include HTML, CSS, JavaScript, PHP, and MySQL. During my
        academic journey, I had the opportunity to develop an accounting
        software using these languages, which provided me with hands-on
        experience in building robust and efficient applications.
      </span>
      <span className="skillDesc2">
        Currently, I'm dedicated to expanding my skill set and knowledge by
        learning the MERN stack (MongoDB, Express.js, React, and Node.js). This
        technology stack aligns perfectly with my goal of becoming a full stack
        developer, and I'm excited about the endless possibilities it offers.
      </span>
      <span className="skillDesc3">
        My goal is to secure an internship in full stack development to further
        enhance my skills and contribute to a dynamic team. I thrive in
        collaborative environments and enjoy working on challenging projects
        that push me to think creatively and problem-solve effectively.
      </span>
      <div>
        <img src={MERN} alt="MERN" className="skillBarImg"></img>
      </div>
    </section>
  );
}
