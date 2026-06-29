import React, { useState, useEffect } from "react";
import './Testimonials.css';

const testimonials = [
  {
    name: "Aakash Rana",
    batch: "Batch of 2025",
    text: "LSPP was a turning point that transformed not just my skills, but me as a person. It bridged every gap I had, from communication to confidence, from being a learner to becoming a mentor. What I love most about this program is the people and environment — a community that constantly pushes you to grow, where everyone celebrates your wins and supports you through challenges. LSPP didn't just make me a better engineer, it made me a confident leader ready to take on the world.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  },
  {
    name: "Suparna Neupone",
    batch: "Batch of 2025",
    text: "It's amazing how much you can grow professionally and technically in just six months. LSPP is a fantastic opportunity to explore your tech career, build networks, and gain industry relevant skills. The highlight is the constant optimism and support from facilitators and mentors.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  },
  {
    name: "Aashra Pradhan",
    batch: "Batch of 2024",
    text: "LSPP gave me the chance to learn from industry seasoned professionals, build confidence, and develop my skills in leadership and professionalism. I felt the growth firsthand—it was practical and meaningful. One of the highlights was being able to share what I learnt, by leading sessions for thousands of peers, which felt incredible. It wasn't just about personal growth but also contributing to Nepal's tech ecosystem.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  },
  {
    name: "Priti Ranabhat",
    batch: "Batch of 2024",
    text: "The program has been a transformative experience that pushed me out of my comfort zone and helped me grow as a leader. As someone attending from outside the Kathmandu Valley, I found the program incredibly inclusive and empowering. It gave me the confidence to take bold steps, the courage to embrace responsibilities, and the determination to make a real impact.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  },
  {
    name: "Purna Shrestha",
    batch: "Batch of 2023",
    text: "From day one, I felt like I'd found my tribe—a community buzzing with growth, laughter, growth, and the occasional tech-related pun. LSPP sharpened my skills, boosted my confidence, and ultimately paved the way for me to become an Associate Software Engineer at Leapfrog. Working alongside such talented people, so early in my career, is both humbling and inspiring—reminding me that growth is a continuous process.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  },
  {
    name: "Gaurav Pratap Shrestha",
    batch: "Batch of 2022",
    text: "I am grateful to the LSP Program for offering the fantastic platform and mentorships that enhanced both my soft and technical skills which has led to the exponential growth of my tech career.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    color: "#f97316"
  }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const currentTestimonials = testimonials.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section className="testimonials">
            <h2 className="testimonials-title">
                Hear it from our former<br />
                Student Partners
            </h2>
            <div className="testimonials-grid">
                {currentTestimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={`${currentIndex}-${index}`}>
                        <div className="testimonial-image-wrapper" style={{ backgroundColor: testimonial.color }}>
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="testimonial-image"
                            />
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-batch">{testimonial.batch}</p>
                    </div>
                ))}
            </div>
            <div className="testimonials-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
