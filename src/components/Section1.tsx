import React from "react";
import "./Section1.css";
import leader from "../assets/become-a-leader.svg"
import brand from "../assets/brand-evangelist.svg"
import growth from "../assets/personal-growth.svg"
import steps from "../assets/take-a-step.svg"
import rewards from "../assets/esquisite-rewards.svg"

const perksData = [
  {
    icon: leader,
    title: "Become a leader and empower your peers",
    points: [
      "Mentorship from industry experts",
      "Empower your peers by facilitating knowledge sharing sessions",
    ],
  },
  {
    icon: steps,
    title: "Take a step into the professional world",
    points: [
      "Professional growth and exposure",
      "Opportunity to network with Leapfrogers",
    ],
  },
  {
    icon: rewards,
    title: "Be eligible for exquisite rewards",
    points: [
      "Access to curated trainings, courses and resources",
      "Customized goodies, recommendation letters and certificates",
    ],
  },
  {
    icon: growth,
    title: "All-round learning and personal growth",
    points: [
      "Guidance and support for your projects",
      "Development of essential soft skills",
    ],
  },
];

const contributionData = [
  {
    icon: leader,
    title: "Learn, lead, grow with us",
    points: [
      "Build tech communities by bringing your peers together",
      "Host regular workshops and events focused on accelerating skill building",
      "Learn and develop design, technology, and business skills from industry professionals",
    ],
  },
  {
    icon: brand,
    title: "Make a difference",
    points: [
      "Close the gap between industry and academia by taking charge of your learning",
      "Take new learnings to build solutions for real life problems",
      "Strengthen your own skill set while building future leaders",
    ],
  },
];

function Section1(): React.JSX.Element {
  return (
    <section className="section1">
      <div className="perks">
        <h2 className="section-title perks-title">What are the perks?</h2>
        <div className="perks-cards">
          {perksData.map((perk, index) => (
            <div className="card perk-card" key={index}>
              <div className="card-icon orange-icon">
                <img src={perk.icon} alt={perk.title} />
              </div>
              <h3 className="card-title">{perk.title}</h3>
              <ul className="card-points">
                {perk.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="contribution">
        <h2 className="section-title contribution-title">
          How will you be contributing?
        </h2>
        <div className="contribution-cards">
          {contributionData.map((item, index) => (
            <div className="card contribution-card" key={index}>
              <div className="card-icon blue-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <ul className="card-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section1;