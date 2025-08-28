// src/components/Education.jsx
import React from 'react';
import './Education.css';

const educationData = [
  {
    level: 'College',
    institute: 'Shri Shankaracharya Technical Campus, Bhilai, CG',
    detail: 'B.Tech in Computer Science',
    score: 'CGPA: 8.6',
  },
  {
    level: 'Class XII',
    institute: 'Ryan International School',
    detail: 'CBSE Board',
    score: 'Percentage: 75%',
  },
  {
    level: 'Class X',
    institute: "St. Xavier’s High School",
    detail: 'ICSE Board',
    score: 'Percentage: 75%',
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.level}</h3>
            <p className="edu-institute">{edu.institute}</p>
            <p className="edu-detail">{edu.detail}</p>
            <p className="edu-score">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
