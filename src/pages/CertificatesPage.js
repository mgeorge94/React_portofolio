import React from 'react';
import styled from 'styled-components';
import { Carousel } from '3d-react-carousal';
import { motion } from 'framer-motion';
import { containerAnimation } from '../components/Animation';
import { certificates, logoArrSmall as logoArr } from '../components/CurriculumData';
import Footer from '../components/Footer';

const CertificatesPage = ({ isOpen, setIsOpen }) => {
 let slides = certificates.map((certificate) => {
  return <img src={certificate} alt='html-diploma' />;
 });
 //display logos in random order
 const styles = {
  width: ['1rem', '2rem', '14rem', '6rem', '3rem', '10rem', '8rem'],
 };

 //randomise
 let trigger = false;
 let index = 0;

 (function randomise(styles) {
  // get dom elements
  const logos = Array.from(document.querySelectorAll('.logo'));
  const container = document.querySelector('.logos-container');

  logos.forEach((logo) => {
   index++;

   logo.style.top = (container.clientHeight - 100) * Math.random() + 'px';
   console.log(logo.style.top);
   logo.style.left = (container.clientWidth - 100) * Math.random() + 'px';
   logo.style.maxWidth = styles.width[index];

   for (let key in styles) {
    if (index > key.length) index = 0;
   }
  });

  if (trigger === false) {
   setTimeout(() => {
    randomise(styles);
   }, 0);
   trigger = true;
  } else {
   setTimeout(() => {
    randomise(styles);
   }, 10000);
  }
 })(styles);

 return (
  <CertificatesContainer
   isOpen={isOpen}
   onClick={() => {
    setIsOpen(false);
   }}
  >
   <CarouselContainer>
    <motion.h2 variants={containerAnimation} initial='hidden' animate='show'>
     The Certifications
    </motion.h2>
    <Carousel slides={slides} autoplay={true} interval={5000} />
   </CarouselContainer>

   <LogosContainer className='logos-container'>
    <ul>
     {logoArr.map((logo, index) => {
      return (
       <li key={index} className='logo'>
        <img className='logo' src={logo} alt='logo' />
       </li>
      );
     })}
    </ul>
   </LogosContainer>
   <Footer />
  </CertificatesContainer>
 );
};
const CertificatesContainer = styled.body`
 background: #1c1f2d;
 width: 100%;
 flex-grow: 1;
 overflow-y: auto;
 overflow-x: hidden;
 transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-350px)' : 'rotateY(0deg) translateX(0)')};
 @media screen and (max-width: 1000px) {
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-500px)' : 'rotateY(0deg) translateX(0)')};
 }
 transition: transform var(--transition-length) ease-in-out;
 h2 {
  margin-left: 5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 600px) {
   font-size: 18vw;
   margin: 3rem auto;
  }
 }
`;
const CarouselContainer = styled.div`
 margin: 10rem auto;
 width: 80%;
 min-height: 70vh;
 @media screen and (max-width: 900px) {
  width: 100%;
 }
`;
const LogosContainer = styled.section`
 height: 50vh;

 width: 80%;
 margin: 5rem auto;
 padding: 2rem;
 position: relative;
 ul {
  list-style: none;
 }
 li {
  transition: all 5s ease;
  white-space: nowrap;
  position: absolute;
  img {
   transition: all 5s ease;
  }
 }
`;

export default CertificatesPage;
