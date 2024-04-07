import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Testimonials.css';

// Dummy testimonial data
const testimonials = [
  {
    name: 'John Doe',
    rating: 4.5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed justo et libero aliquam ultrices nec sit amet leo.'
  },
  {
    name: 'Jane Smith',
    rating: 5,
    comment: 'Sed auctor turpis sit amet leo tincidunt, sit amet facilisis nisl vestibulum. Nulla facilisi. Aliquam erat volutpat.'
  },
  {
    name: 'Alice Johnson',
    rating: 4,
    comment: 'Vivamus sagittis velit nec est tempor, non facilisis lorem eleifend. Nam congue velit vel justo lacinia, vel cursus justo vestibulum.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Customer Reviews</h2>
      <Carousel itemsToShow={1} className="carousel" autoPlay={true} autoPlaySpeed={5000}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                    <span key={i} className="star">&#9733;</span>
                  ))}
                </div>
                <div className="testimonial-author">{testimonial.name}</div>
              </div>
              <div className="testimonial-comment">{testimonial.comment}</div>
            </div>
          </div>
        ))}
      </Carousel>
      <a href='https://www.google.com/maps/place/Meat+Club+Kitchen/@26.1488617,91.6662527,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMOrWq-WvPrfCsYLElqXuoT9ZirS0YbhPPTINsF!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMOrWq-WvPrfCsYLElqXuoT9ZirS0YbhPPTINsF%3Dw203-h270-k-no!7i3000!8i4000!4m7!3m6!1s0x375a455d5340afa1:0x7002ac745a8a21c8!8m2!3d26.1487562!4d91.6663194!10e5!16s%2Fg%2F11qrnp0cys?entry=ttu' className="give-review-button" target='_blank' rel="noopener noreferrer">Give Review</a>
    </div>
  );
};

export default Testimonials;
