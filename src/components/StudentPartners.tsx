import React, { useState } from "react";
import "./StudentPartners.css";

import img1 from "../assets/partner/partner1.jpeg";
import img2 from "../assets/partner/partner2.jpg";
import img3 from "../assets/partner/partner3.png";
import img4 from "../assets/partner/partner4.jpeg";
import img5 from "../assets/partner/partner5.png";
import img6 from "../assets/partner/partner6.jpg";
import img7 from "../assets/partner/partner7.jpg";
import img8 from "../assets/partner/partner8.jpg";
import img9 from "../assets/partner/partner9.jpg";
import img10 from "../assets/partner/partner10.png";
import img11 from "../assets/partner/partner11.jpg";
import img12 from "../assets/partner/partner12.jpg";
import img13 from "../assets/partner/partner13.png" ;
import img14 from "../assets/partner/partner14.jpg";
import img15 from "../assets/partner/partner15.png";
import img16 from "../assets/partner/partner16.jpg";
import img17 from "../assets/partner/partner17.jpeg";
import img18 from "../assets/partner/partner18.jpeg";
import img19 from "../assets/partner/partner19.jpg";
import img20 from "../assets/partner/partner20.jpg";

const studentImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

interface Student {
  name: string;
  college: string;
  year: number;
  description: string;
  linkedin: string;
}

const students: Student[] = [
  { name: "Aakriti Pandey", college: "Kathmandu University", year: 2026, description: "A Computer Engineering student at KU with a passion for AI, product design, and entrepreneurship. Beyond coding and building ideas, she enjoys writing poetry, exploring philosophy and engaging in long tea-fueled conversations. An adventure seeker at heart, recharging through hiking and chasing adrenaline.", linkedin: "https://linkedin.com/in/" },
  { name: "Arekh Shrestha", college: "Kathmandu University School of Engineering", year: 2026, description: "A Computer Engineering student passionate about design and visual storytelling, focused on building visually engaging and functional digital products. Has developed platforms like wePay, Lekha, and Sangam, and enjoy blending creativity with technology to craft meaningful user experiences and support impactful ideas.", linkedin: "https://linkedin.com/in/" },
  { name: "Nirika Lamichhane", college: "IOE, Thapathali Campus", year: 2026, description: "A Computer Engineering student focused on Data Science and NLP, who has built an end-to-end Nepali sentiment analysis system on socio-political data. She is interested in applying AI to real-world problems. Beyond tech and coding, she enjoys reading books and listening to insightful podcasts.", linkedin: "https://linkedin.com/in/" },
  { name: "Sworna Dhan Tuladhar", college: "Islington College", year: 2026, description: "A web development enthusiast exploring low-level system design and how AI works under the hood. Actively involved in organizing and participating in tech events, building strong leadership and teamwork skills. Also interested in global affairs, diplomacy, and public speaking. Outside of tech, plays and composes western classical piano and enjoys occasional dad jokes.", linkedin: "https://linkedin.com/in/" },
  { name: "Ayam Kattel", college: "Pulchowk Campus", year: 2026, description: "An engineering student specializing in Electronics, Communication, and Information Engineering with a strong interest in AI, Machine Learning, and Computer Vision. Has hands-on experience in web development, and enjoys exploring new technologies and innovations. Outside of tech, they spend time listening to music and exploring new places.", linkedin: "https://linkedin.com/in/" },
  { name: "Nozomi Giri", college: "Kathmandu Engineering College", year: 2026, description: "Engineering student exploring tech, actively teaching and likes to paint.", linkedin: "https://linkedin.com/in/" },
  { name: "Priyanka Khatri", college: "Sunway College", year: 2026, description: "Aspiring software engineer building web-based solutions through projects and hackathons. Exploring AI and love to share insights through content. Either experimenting with new tech or diving into ideas that can create real-world impact.", linkedin: "https://linkedin.com/in/" },
  { name: "Yojana Ghimire", college: "IOE WRC", year: 2026, description: "AWS Cloud Club Captain, Aspiring Cloud Engineer. She's either learning something new, casually being the funniest, or yelling at questionable F1 pit wall decisions.", linkedin: "https://linkedin.com/in/" },
  { name: "Shreyam Regmi", college: "Pulchowk Campus", year: 2026, description: "Fullstack developer who is shifting from fullstack to data science and machine learning. Constanly growing skills on both fields often combines both skills to make projects.", linkedin: "https://linkedin.com/in/" },
  { name: "Smriti Adhikari", college: "Deerwalk Institute of Technology", year: 2026, description: "A unique blend of creativity and technical skill, she is passionate about UI/UX design and frontend development. Works with Python, C, and HTML/CSS/React to build user-friendly, intuitive digital experiences. Alongside her technical pursuits, she enjoys drawing, sketching, and illustrating, and actively organizes student learning activities. Continuously seeks opportunities to learn, create, and grow.", linkedin: "https://linkedin.com/in/" },
  { name: "Viraj Sawad", college: "Kantipur Engineering College", year: 2026, description: "Computer Engineering student at KEC, deep into AI/ML. Hooked ever since realizing you could get math to mimic something like thought. Spends most of the time learning, building, and doing AI research. Outside of that, coffee and music. Curious by default, comfortable with uncertainty.", linkedin: "https://linkedin.com/in/" },
  { name: "Shaswat Sharma", college: "IOE Thapathali Campus", year: 2026, description: "A Computer Engineering student diving into data science and quantitative analysis. When not working, he’s either yearning while listening to Emraan Hashmi’s songs, questioning Guardiola’s tactics, or making highly controversial dessert rankings.", linkedin: "https://linkedin.com/in/" },
  { name: "Srijit Gyawali", college: "Nepathya College", year: 2026, description: "A BCA student focused on blockchain development and decentralized systems, building smart contracts and full-stack Web3 applications on Ethereum and Solana. Has experience with AI agent frameworks, working on DeFi, IoT-blockchain integrations, and multi-agent systems. Beyond tech, he mentors junior students, works in motion graphics and video editing, and enjoys cinematography, travel, cricket, and gaming.", linkedin: "https://linkedin.com/in/" },
  { name: "Aaditya Raj Uprety", college: "Pulchowk Campus", year: 2026, description: "A Pulchowk Campus student, passionate about learning, music, and anime, with a strong interest in growing in the field of tech and building meaningful connections.", linkedin: "https://linkedin.com/in/" },
  { name: "Drishya Karki", college: "Deerwalk Institute of Technology", year: 2026, description: "A Videography enthusiast who is currently exploring in tech space and event management. Very adventurous, loves exploring and a video gamer.", linkedin: "https://linkedin.com/in/" },
  { name: "Ashutosh Dhungana", college: "Khwopa Engineering College", year: 2026, description: "Computer Engineering student fascinated by data and everything around it. You’ll either find him deep in code or out exploring new places and experiences. Has a knack for entrepreneurship and community building— lowkey trying to assemble the next “PayPal Mafia” (minus the mafia part, plus better ideas). Rarely focused on just one thing, always jumping across domains to see what clicks next.", linkedin: "https://linkedin.com/in/" },
  { name: "Kriyesh Aryal", college: "Patan Multiple Campus", year: 2026, description: "A Computer Science student passionate about AI/ML and Data Science, constantly exploring the intersection of technology, creativity, and problem-solving. He enjoys learning new tools, building ideas, and staying curious about the future of tech. When he’s not exploring tech, you’ll probably find him around football or lost in music.", linkedin: "https://linkedin.com/in/" },
  { name: "Ayusha Shrestha", college: "Khwopa College of Engineering", year: 2026, description: "Computer engineering student with a growing interest in AI/ML and data engineering. Curious and driven to continuously learn and explore new ideas. She's passionate about continuous learning, meaningful connections, and new experiences and always seeking opportunities to learn, build, and grow both technically and personally.", linkedin: "https://linkedin.com/in/" },
  { name: "Mashiha Krishna Shrestha", college: "Sagarmatha Engineering College", year: 2026, description: "Computer Engineering student with a growing interest in AI and software development. He's currently exploring NLP research and trying to figure out this whole tech world one project at a time. When he's not studying, he's either running half marathons, watching films, or lost in a good book.", linkedin: "https://linkedin.com/in/" },
  { name: "Raksha Karn", college: "Patan Multiple Campus", year: 2026, description: "Software developer by day, and bookworm by heart. When she's not debugging code or experimenting with new tech, you'll find her lost in a novel, sleeping to a lo-fi playlist, or chasing sunsets on a trail somewhere far from Wi-Fi. Best ideas? They usually arrive with a warm cup of tea in hand.", linkedin: "https://linkedin.com/in/" },
];

const years = [2022, 2023, 2024, 2025, 2026];

function StudentPartners(): React.JSX.Element {
  const [selectedYear, setSelectedYear] = useState(2026);

  const filteredStudents = students.filter((s) => s.year === selectedYear);

  return (
    <section className="student-partners">
      <h2 className="stdpart-title">Meet the Student Partners</h2>
      <p className="stdpart-description">Get to know our future leaders!</p>

      <div className="stdpart-year-filters">
        {years.map((year) => (
          <button
            key={year}
            className={`stdpart-year-btn ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="stdpart-grid">
        {filteredStudents.map((student, index) => (
          <div key={student.name} className="stdpart-card">
            <img
              src={studentImages[index % studentImages.length]}
              alt={student.name}
              className="stdpart-card-image"
            />
            <p className="stdpart-card-name">{student.name}</p>
            <p className="stdpart-card-college">{student.college}</p>

            <div className="card__overlay">
              <p className="card__overlay-name">{student.name}</p>
              <p className="card__overlay-college">{student.college}</p>
              <p className="card__overlay-desc">{student.description}</p>
              <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="card__overlay-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentPartners;
