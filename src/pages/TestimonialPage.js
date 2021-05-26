import React from 'react';
import styled from 'styled-components';
import { Carousel } from '3d-react-carousal';
import { Testimonials } from '../components/TestimonialsData';
import { motion } from 'framer-motion';
import { containerAnimation } from '../components/Animation';
import Footer from '../components/Footer';
const TestimonialPage = ({ isOpen, setIsOpen }) => {
 let slides = Testimonials.map((testimonial) => {
  return (
   <div className='review-slide'>
    <h5>{testimonial.client}</h5>
    <a href={testimonial.website}> {testimonial.website}</a>
    <p>{testimonial.review}</p>
   </div>
  );
 });
 return (
  <TestimonialsContainer isOpen={isOpen} setIsOpen={setIsOpen}>
   <motion.h2 variants={containerAnimation} initial='hidden' animate='show'>
    Testimonials
   </motion.h2>
   <CarouselCountainer>
    <Carousel slides={slides} autoplay={true} interval={12000} />
   </CarouselCountainer>
   <Footer />
  </TestimonialsContainer>
 );
};
const TestimonialsContainer = styled.section`
 width: 100%;
 flex-grow: 1;
 overflow-y: auto;
 overflow-x: hidden;
 background: #1c1f2d;
 box-shadow: 0px 9px 15px 5px #000000;

 transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-350px)' : 'rotateY(0deg) translateX(0)')};
 @media screen and (max-width: 1000px) {
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-500px)' : 'rotateY(0deg) translateX(0)')};
 }
 transition: transform var(--transition-length) ease-in-out;
 color: white;
 h2 {
  padding: 5rem;
 }
`;
const CarouselCountainer = styled.div`
 margin:  5rem auto;
 min-height:60vh;
 .review-slide {
  background: rgba(0, 0, 0, 0.6);

  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  h5 {
   font-size: 2rem;
  }
  p {
   font-style: italic;
   text-indent: 50px;
  a {
   font-size: 1rem;
   padding: 1rem 0rem;
  }
 }
`;
export default TestimonialPage;
