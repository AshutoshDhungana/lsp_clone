import React from "react";
import './Mentors.css';
import img1 from '../assets/mentor/mentor1.jpg'
import img2 from '../assets/mentor/mentor2.png'
import img3 from '../assets/mentor/mentor3.jpg'
import img4 from '../assets/mentor/mentor4.jpg'
import img5 from '../assets/mentor/mentor5.jpg'
import img6 from '../assets/mentor/mentor6.jpg'
import img7 from '../assets/mentor/mentor7.png'
import img8 from '../assets/mentor/mentor8.jpg'
import img9 from '../assets/mentor/mentor9.png'
import img10 from '../assets/mentor/mentor10.jpg'
import img11 from '../assets/mentor/mentor11.jpg'
import img12 from '../assets/mentor/mentor12.png'
import img13 from '../assets/mentor/mentor13.jpg'
import img14 from '../assets/mentor/mentor14.jpg'



interface Mentor {
  name: string;
  title: string;
  image: string;
}

const mentors: Mentor[] = [
  { name: "Adarsha Regmi", title: "Senior Software Engineer", image: img1 },
  { name: "Ayush Bajracharya", title: "Senior Software Engineer", image: img2 },
  { name: "Bijen Shrestha", title: "Software Engineer", image: img3 },
  { name: "Dimple Saraogi", title: "Software Engineer", image: img4 },
  { name: "Jenish Twayana", title: "Software Engineer, AI", image: img5 },
  { name: "Khem Raj Upreti", title: "Senior Software Engineer", image: img6 },
  { name: "Pranav Dhoj Joshi", title: "Senior QA Engineer", image: img7  },
  { name: "Priyanka Tuladhar", title: "Software Engineer, DevOps", image: img8 },
  { name: "Purna Shrestha", title: "Associate Software Engineer", image: img9 },
  { name: "Sandriya Malla", title: "Project Manager", image: img10 },
  { name: "Saru Manandhar", title: "Software Engineer", image: img11 },
  { name: "Sayomi Prajapati", title: "Associate Manager, Marketing & Communications", image: img12 },
  { name: "Siza Adhikari", title: "Senior Software Engineer", image: img13 },
  { name: "Suichhya Tamrakar", title: "Officer, Marketing & Communications", image: img14 },
];

function Mentors(): React.JSX.Element {
  return (
    <section className="mentors">
      <h2 className="mentors-title">Meet our mentors</h2>
      <p className="mentors-description">
        The industry experts shaping the student partners to learn, lead and grow.
      </p>

      <div className="mentors-grid">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="mentor-card">
            <div className="mentor-card-image">
              <div className="mentor-placeholder-image"></div>
            </div>
            <p className="mentor-card-name">{mentor.name}</p>
            <p className="mentor-card-title">{mentor.title}</p>

            <div className="mentor-overlay">
              <p className="mentor-overlay-name">{mentor.name}</p>
              <p className="mentor-overlay-title">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;