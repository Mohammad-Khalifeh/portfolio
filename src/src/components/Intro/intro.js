import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link as ScrollLink } from 'react-scroll';

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Mohammad</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">
          I'm a passionate and motivated IT fresh graduate with a <br /> strong
          foundation in web development.
        </p>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg"></img> Hire Me
          </button>
        </ScrollLink>
      </div>
    </section>
  );
}
