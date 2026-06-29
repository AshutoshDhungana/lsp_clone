import React from "react";
import "./Section2.css";
import stdpartner from "../assets/studentpartner-icon.svg"
import dumbell from "../assets/dumbbell.svg"
import bookmark from "../assets/bookmark.svg"
import book from "../assets/book.svg"

const statsData = [
  {
    icon: stdpartner,
    number: "95",
    label: "Student Partners enrolled",
  },
  {
    icon: dumbell,
    number: "80+",
    label: "Knowledge sharing sessions delivered",
  },
  {
    icon: bookmark,
    number: "5",
    label: "Student Partners hired",
  },
  {
    icon: book,
    number: "2100+",
    label: "Students impacted by LSPs",
  },
];

function Section2(): React.JSX.Element {
  return (
    <section className="section2">
      <h2 className="section2-title">Building it, bit by bit</h2>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index}>
            <img src={stat.icon} className="stat-icon" />
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
