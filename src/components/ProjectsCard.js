import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ProjectsCard = ({ name }) => {
 const clickOnCardImages = () => {
  let trigger = true;

  const allCardImages = document.querySelectorAll('.card-header img');
  allCardImages.forEach((image) => {
   image.addEventListener('mouseover', () => {
    if (trigger === true && !image.classList.contains('fixed')) {
     image.style.transform = 'translateZ(1000px)';
     trigger = false;
    }
    setTimeout(() => {
     trigger = true;
    }, 300);
   });
  });
 };
 const removeHoverEffect = () => {
  const card = document.querySelector('.project-card');
  const cardHeaderImage = document.querySelector('.card-header img');
  const projectTitle = document.querySelector('.card-info>h4');
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const projectDescription = document.querySelector('.card-info');
  const firstPhoto = document.getElementById('first-image');
  const secondPhoto = document.getElementById('second-image');
  const thirdPhoto = document.getElementById('third-image');
  const fourthPhoto = document.getElementById('fourth-image');
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  card.style.transition = 'all 0.5s ease';
  projectTitle.style.transform = 'translateZ(0px)';
  projectDescription.style.transform = 'translateZ(0px)';
  seeMoreBtn.style.transform = 'translateZ(0px)';
  cardHeaderImage.style.transform = 'translateZ(0px)';
  firstPhoto.style.transform = 'translateZ(4px) ';
  secondPhoto.style.transform = 'translateZ(3px) ';
  thirdPhoto.style.transform = 'translateZ(2px) ';
  fourthPhoto.style.transform = 'translateZ(1px) ';
 };
 const addHoverEffect = () => {
  const card = document.querySelector('.project-card');
  const projectTitle = document.querySelector('.card-info>h4');
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const projectDescription = document.querySelector('.card-info');
  const firstPhoto = document.getElementById('first-image');
  const secondPhoto = document.getElementById('second-image');
  const thirdPhoto = document.getElementById('third-image');
  const fourthPhoto = document.getElementById('fourth-image');

  card.style.transition = 'all 0.5s ease';
  setTimeout(() => {
   card.style.transition = 'none';
  }, 1000);
  projectTitle.style.transform = 'translateZ(300px)';
  projectDescription.style.transform = 'translateZ(90px)';

  seeMoreBtn.style.transform = 'translateZ(90px)';
  firstPhoto.style.transform = 'translateZ(200px) rotate(-5deg) ';

  secondPhoto.style.transform = 'translateZ(150px) rotate(-10deg) ';

  thirdPhoto.style.transform = 'translateZ(100px) rotate(-15deg) ';

  fourthPhoto.style.transform = 'translateZ(50px)  rotate(-20deg)';
 };
 //moving animation
 const animateProjectCard = () => {
  let carouselContainer = document.querySelector('.projects-carousel-container');
  const card = document.querySelector('.project-card');

  carouselContainer.addEventListener('mousemove', (e) => {
   let xAxis = (carouselContainer.getBoundingClientRect().width / 1 - e.pageX) / 25;
   let yAxis = (carouselContainer.getBoundingClientRect().height / 2 - e.pageY) / 15;

   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  carouselContainer.addEventListener('mouseenter', () => {
   addHoverEffect();
   clickOnCardImages();
  });
  carouselContainer.addEventListener('mouseleave', (e) => {
   removeHoverEffect();
  });
 };
 setTimeout(() => {
  animateProjectCard();
 }, 1000);

 return (
  <ProjectCarousel className='projects-carousel-container'>
   <ProjectCard className='project-card'>
    <Header className='card-header'>
     <Photo
      id='first-image'
      src='https://images.unsplash.com/photo-1552980870-89c64b079e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
     />
     <Photo
      id='second-image'
      src='https://images.unsplash.com/photo-1552980870-89c64b079e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
     />
     <Photo
      id='third-image'
      src='https://images.unsplash.com/photo-1552980870-89c64b079e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
     />
     <Photo
      id='fourth-image'
      src='https://images.unsplash.com/photo-1552980870-89c64b079e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
     />
    </Header>
    <Info className='card-info'>
     <h4>Title</h4>
     <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt cum perspiciatis quaerat recusandae ad corrupti
      vel tenetur! Veritatis incidunt ad explicabo officia expedita officiis sequi eos iste? Deserunt, repellat sint voluptatum
      esse accusantium vitae cum nisi amet blanditiis incidunt!
     </p>
    </Info>
    <SeeMoreBtn className='see-more-btn'> See more</SeeMoreBtn>
    <FaAngleRight className='right-arrow' />
    <FaAngleLeft className='left-arrow' />
   </ProjectCard>
  </ProjectCarousel>
 );
};

const ProjectCarousel = styled.div`
 width: 70%;
 height: 100%;
 padding: 10rem 0;
 margin: 10rem 0;
 right: 0;
 position: relative;
 top: 0rem;
 display: flex;
 justify-content: center;
 align-items: center;
 perspective: 1000px;
 background: lime;

 @media screen and (max-width: 1000px) {
  width: 100%;
  top: 30rem;
 }
`;
const ProjectCard = styled.div`
 min-height: 60vh;
 background: #e9e9e9;
 /* -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d; */
 transform-style: preserve-3d;
 .left-arrow,
 .right-arrow {
  font-size: 3rem;
  color: #cecece;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
 }
 .left-arrow {
  left: -5rem;
 }
 .right-arrow {
  right: -5rem;
 }
 @media (max-width: 600px) {
  .left-arrow,
  .right-arrow {
   top: 41%;
   font-size: 2rem;
  }
  .left-arrow {
   left: 1rem;
  }
  .right-arrow {
   right: 1rem;
  }
 }
 .left-arrow:hover,
 .right-arrow:hover {
  filter: brightness(150%);
 }
 width: 22rem;
 box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
 border-radius: 10px;
 padding: 0rem 2rem 1rem 2rem;
 position: relative;
`;
const Header = styled.div`
 min-height: 3rem;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Photo = styled.img`
 width: 90%;
 transform-origin: bottom left;
 box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
 border-radius: 5px;
 transition: all 1s ease-out;
 position: absolute;
 #first-image {
  z-index: 4;
 }
 #second-image {
  z-index: 3;
 }
 #third-image {
  z-index: 2;
 }
 #fourth-image {
  z-index: 1;
 }
`;
const Info = styled.section`
 position: relative;
 h4 {
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  padding: 6rem 0rem 1rem 0rem;
  transition: all 1s ease-out;
  color: var(--accent-color);
  position: relative;
 }
 p {
  font-size: 1rem;
  padding: 1rem 0rem;
  color: #585858;
  font-weight: light;
  text-indent: 2rem;
  transition: all 1s ease-out;
 }
`;
const SeeMoreBtn = styled.button`
 cursor: pointer;
 font-size: 1.2rem;
 width: 100%;
 padding: 1rem 0rem;
 background-color: var(--accent-color);
 transition: background-color 1s ease-out;
 color: rgb(31, 31, 31);
 border: 0;
 transform-style: preserve-3d;
 -webkit-transform-style: preserve-3d;
 -moz-transform-style: preserve-3d;
 border-radius: 5px;
 transition: all 1s ease-out;
 :hover,
 :focus,
 :active {
  filter: brightness(150%);
  border: 0im !important;
 }
`;
export default ProjectsCard;
