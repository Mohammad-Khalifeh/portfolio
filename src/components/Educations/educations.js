import React from 'react';
import './educations.css';
import logoAmal from '../../assets/logoAmal.png';
import logoMassar from '../../assets/logoMassar.png';

export default function Educations() {
  return (
    <section id="educations">
      <div className="educationTitle">Education</div>
      <div className="educationDesc">
        <div className="educationDesc1">
          <img
            src={logoAmal}
            alt="Al-Amal institute"
            className="instituteLogo"
          ></img>
          <div className="educationDetails">
            <h3 className="instituteName">Al-Amal Technical Institute</h3>
            <h3 className="specialize">Licence Technique (L.T.) Programming</h3>
            <h3 className="year">2020 - 2021</h3>
          </div>
        </div>
        <div className="educationDesc2">
          <img
            src={logoAmal}
            alt="Al-Amal institute"
            className="instituteLogo"
          ></img>
          <div className="educationDetails">
            <h3 className="instituteName">Al-Amal Technical Institute</h3>
            <h3 className="specialize">
              Diplôme de Technicien Superieur (T.S.) Systems and Networks
            </h3>
            <h3 className="year">2018 - 2019</h3>
          </div>
        </div>
        <div className="educationDesc3">
          <img
            src={logoMassar}
            alt="Al-Massar institute"
            className="instituteLogo"
          ></img>
          <div className="educationDetails">
            <h3 className="instituteName">Al-Massar Technical Institute</h3>
            <h3 className="specialize">
              Bachelor of Technology (B.T.) Information Technology
            </h3>
            <h3 className="year">2017 - 2018</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
