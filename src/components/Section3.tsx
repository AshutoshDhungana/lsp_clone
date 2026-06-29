import React from "react";
import "./Section3.css"
import pic1 from "../assets/image77.jpg"
import pic2 from "../assets/2025_2.webp"
import pic3 from "../assets/2025_3.webp"
import pic4 from "../assets/image44.jpg"
import pic5 from "../assets/FBN_NEW.webp"
import pic6 from "../assets/2025_6.webp"
import pic7 from "../assets/2025_5.webp"


function Section3(): React.JSX.Element {
    return (
        <section className="section3">
            <div className="section3-title">
                <h2 className="section3-title-head">Pixel-Perfect Highlights</h2>
                <p className="section3-title-body">Some nostalgic memoREELs from the Student Partnership Program.</p>
            </div>
            <div className="highlight-grid">
                <div className="highlight-card-1">
                    <img src={pic1} alt="Event highlight 1" />
                </div>
                <div className="highlight-card-2">
                    <img src={pic2} alt="Event highlight 2" />
                </div>
                <div className="highlight-card-3">
                    <img src={pic3} alt="Event highlight 3" />
                </div>
                <div className="highlight-card-4">
                    <img src={pic4} alt="Event highlight 4" />
                </div>
                <div className="highlight-card-5">
                    <img src={pic5} alt="Event highlight 5" />
                </div>
            </div>
            <div className="highlight-grid-bottom">
                <div className="highlight-card-6">
                    <img src={pic6} alt="Event highlight 6" />
                </div>
                <div className="highlight-card-7">
                    <img src={pic7} alt="Event highlight 7" />
                </div>
            </div>
        </section>
    )
}

export default Section3;