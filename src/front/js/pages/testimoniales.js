import React from "react";
import "../../styles/testimoniales.css";
import avatarImage from "../../img/avatarImage.jpeg";


export const Testimoniales = () => {
  return (
    <section id="testimonials">
      <div className="title">
        <h2>HAPPY CUSTOMERS</h2>
        <p>At Travelo, we value the opinions of our customers and passengers because they matter and help us grow.</p>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p style={{ lineHeight: '1.2' }}>
            Without a doubt, the best agency I could have hired for my trip through Southeast Asia. Highly recommended.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Samuel Cardona</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p style={{ lineHeight: '1.2' }}>
            Choosing this agency for my european journey was truly the best decision. Highly recommend their services!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p style={{ lineHeight: '1.2' }}>
            Hands down the top choice for my Australian adventure. Highly recommend this agency!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Michael Johnson</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}