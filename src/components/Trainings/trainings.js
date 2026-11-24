import './training.css';

const trainings = [
  {
    id: 1,
    supervisor: 'Mohammad Jezeineh',
    place: 'Al-Massar Technical Institute',
    type: ['(A++) Maintenance for computer hardware'],
    period: '2017 - 2018',
  },
  {
    id: 2,
    supervisor: 'Salman Hussein',
    place: 'Al-Amal Technical Institute',
    type: ['(CCNA) Routing and Switching "Introduction to Networks"'],
    period: '2019 - 2020',
  },
  {
    id: 3,
    supervisor: 'Rony Rizk',
    place: 'Online Course',
    type: [
      'Html, Css, Js',
      'Node.js, Express API',
      'Git, Github',
      'Hosting on GitHub Pages',
      'Hosting on Render.com',
    ],
    period: '2022 - 2023',
  },
  {
    id: 4,
    supervisor: 'Ali Mantache',
    place: 'Institute de Français',
    type: ['Html, Css, Js', 'PHP, MySQL', 'MERNSTACK'],
    period: '2023 - 2024',
  },
  {
    id: 5,
    supervisor: 'Charbel Daoud',
    place: 'Online Course',
    type: ['Machine Learning', 'Ops Series'],
    period: '2024 - 2025',
  },
  {
    id: 6,
    supervisor: 'Jane Abi Saad',
    place: 'Online Course',
    type: ['Time Management'],
    period: '2024 - 2025',
  },
  {
    id: 7,
    supervisor: 'Roy Baladi',
    place: 'Online Course',
    type: ['AI Training Hackathon'],
    period: '2025 - 2026',
  },
];

export default function Trainings() {
  return (
    <section id="trainings">
      <h2 className="training__title">Training</h2>

      <div className="training__grid">
        {trainings.map(({ id, supervisor, place, type, period }) => (
          <article key={id} className="training__card">
            <header className="training__card-header">
              <h3 className="training__period">{period}</h3>
              <p className="training__place">{place}</p>
            </header>

            <ul className="training__details">
              <li>
                <span className="training__label">Supervisor:</span>{' '}
                {supervisor}
              </li>
              <li>
                <span className="training__label">Training type:</span>
              </li>
            </ul>

            <ul className="training__topics">
              {type.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// import React from 'react';
// import './training.css';

// export default function Trainings() {
//   return (
//     <section id="trainings">
//       <div className="trainingTitle">Training</div>

//       <div className="trainingDesc1">
//         <h3>
//           <span>Supervisor : </span> Mohammad Jezeineh
//         </h3>
//         <h3>
//           <span>Training place : </span>
//           Al-Massar Technical Institute
//         </h3>
//         <h3>
//           <span>Training type : </span>
//           (A++) Maintenance for computer hardware
//         </h3>
//         <h3>2017 - 2018</h3>
//       </div>

//       <div className="trainingDesc2">
//         <h3>
//           <span>Supervisor : </span>
//           Salman Hussein
//         </h3>
//         <h3>
//           <span>Training place : </span>
//           Al-Amal Technical Institute
//         </h3>
//         <h3>
//           <span>Training type : </span>
//           (CCNA) Routing and Switching "Introduction to Networks"
//         </h3>
//         <h3>2019 - 2020</h3>
//       </div>

//       <div className="trainingDesc3">
//         <h3>
//           <span>Supervisor : </span>
//           Rony Rizk
//         </h3>
//         <h3>
//           <span>Training place : </span>
//           Online Course
//         </h3>
//         <h3>
//           <span>Training type : </span>
//           - Html, Css, Js
//           <br />
//           - Node.js, Express API
//           <br />
//           - Git, Github
//           <br />
//           - Hosting on GitHub Pages
//           <br />- Hosting on Render.com
//         </h3>
//         <h3>2022 - 2023</h3>
//       </div>

//       <div className="trainingDesc3">
//         <h3>
//           <span>Supervisor : </span>
//           Ali Mantache
//         </h3>
//         <h3>
//           <span>Training place : </span>
//           Institute de Français
//         </h3>
//         <h3>
//           <span>Training type : </span>
//           - Html, Css, Js
//           <br />
//           - PHP, MySQL
//           <br />- MERNSTACK
//         </h3>
//         <h3>2023 - 2024</h3>
//       </div>
//     </section>
//   );
// }
