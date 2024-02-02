import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

export default function Navbar() {
  const [showMenu, setShowNenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"></img>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="educations"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="trainings"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Training
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        {/* <Link className="desktopMenuListItem">Clients</Link> */}
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img className="desktopMenuImg" src={contactImg} alt=""></img>
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowNenu(!showMenu)}
      ></img>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="educations"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="trainings"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          Training
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowNenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
