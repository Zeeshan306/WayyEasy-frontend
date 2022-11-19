import React from "react";
import TestimonialCards from "../../components/cards/testimonials/TestimonialsCard.jsx";

import home from "./home.module.css";

const Testimonial = () => {
  return (
    <div className={home.pTContainer}>
      <h1>Patients Testimonial</h1>
      <p>Let’s see what our happy patients says</p>
      <TestimonialCards />
    </div>
  );
};

export default Testimonial;
