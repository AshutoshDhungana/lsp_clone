import React, { useState } from "react";
import './Finalsection.css';

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "Why Student Partnership Program?",
        answer: "Over the years, we have onboarded thousands of students into our fellowship programs and hired them as designers, engineers, managers, and more. And through all these years, we have seen the challenges that students, as well as colleges in Nepal, face to prepare graduates for real professional work. The Student Partnership Program invests in you to close the gap between academics and industry by offering real work-life experiences to students. We believe your ideas have the power to lead the way and help us build future leaders and join the profession confidently."
    },
    {
        question: "What are the key dates for application?",
        answer: "The application for 2026 is now open! The deadline is on February 27, 2026."
    },
    {
        question: "Who can participate?",
        answer: "One must be an undergraduate student from Nepal who wants to grow their career in technology or is enrolled in a similar degree."
    },
    {
        question: "What are the traits we value?",
        answer: "Embracing openness, Active engagement, Solution oriented, Team work, Pursuit of excellence"
    },
    {
        question: "What is the cost of participation?",
        answer: "There is no cost in joining this program."
    },
    {
        question: "Is there any compensation?",
        answer: "As a part of the Leapfrog Student Partnership Program, you will get professional exposure as well as various tech and non-tech training opportunities to enhance your skill."
    },
    {
        question: "How much time do I have to commit?",
        answer: "The program requires a commitment of two sessions per month, each approximately 2–3 hours long. This includes one on-site monthly meetup and one virtual session. Applicants must attend all sessions, be present on-site for the monthly meetups, and organize KSS in their colleges or communities."
    },
    {
        question: "What happens at the end of the program?",
        answer: "The program concludes with a Graduation Day celebration, where participants receive a certificate of completion, an experience letter, and some cool SWAGs to acknowledge their journey and achievements."
    },
    {
        question: "How does the selection process work?",
        answer: "The selection process involves an online application, followed by technical and behavioral assessments. Shortlisted candidates go through an interview round before final selection."
    },
    {
        question: "I have a question, what should I do?",
        answer: "If you have any questions, feel free to reach out to us through our official email or social media channels. Our team will be happy to assist you."
    },
    {
        question: "What qualities do you look for in a successful applicant?",
        answer: "We look for applicants who demonstrate technical aptitude, strong communication skills, problem-solving abilities, and a genuine passion for learning and contributing to meaningful projects."
    },
    {
        question: "What is the total duration of the Leapfrog Student Partnership Program (LSPP)?",
        answer: "The Leapfrog Student Partnership Program (LSPP) typically runs for one academic semester, spanning approximately 3-4 months of active participation."
    },
    {
        question: "Is the program open to students from outside the Kathmandu Valley?",
        answer: "Yes, the program is open to students from across Nepal. While in-person activities are based in Kathmandu, we also offer remote participation opportunities for eligible candidates."
    }
];

const ChevronIcon = () => (
    <svg
        className="faq-chevron"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

function Finalsection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="final-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item${activeIndex === index ? ' active' : ''}`}
                    >
                        <div
                            className="faq-header"
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className="faq-question">{item.question}</h3>
                            <ChevronIcon />
                        </div>
                        <div className="faq-answer-wrapper">
                            <div className="faq-answer-inner">
                                <p className="faq-answer">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Finalsection;
