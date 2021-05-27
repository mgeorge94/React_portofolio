import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ProjectsData } from './ProjectsData';
import { Link } from 'react-router-dom';
const ProjectsCard = () => {
 //control what project displays
 let [index, setIndex] = useState(0);

 const nextProject = () => {
  console.log(index);
  if (index >= ProjectsData.length - 1) {
   index = 0;
  }
  setIndex((index = index + 1));

  const container = document.querySelector('.projects-carousel-container');
  container.classList.add('rotate');
  setTimeout(() => {
   container.classList.remove('rotate');
  }, 1000);
 };

 const prevProject = () => {
  const container = document.querySelector('.projects-carousel-container');
  if (index <= 0) {
   index = ProjectsData.length - 1;
  }
  setIndex((index = index - 1));

  container.classList.add('rotate');
  setTimeout(() => {
   container.classList.remove('rotate');
  }, 1000);
 };
 //handelling hover effect
 const removeHoverEffect = () => {
  const card = document.querySelector('.project-card');
  const cardHeaderImage = document.querySelector('.card-header img');
  const projectTitle = document.querySelector('.card-info>h5');
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const projectDescription = document.querySelector('.card-info');
  const firstPhoto = document.getElementById('image-0');
  const secondPhoto = document.getElementById('image-1');
  const thirdPhoto = document.getElementById('image-2');
  const fourthPhoto = document.getElementById('image-3');
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
  const projectTitle = document.querySelector('.card-info>h5');
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const projectDescription = document.querySelector('.card-info');
  const firstPhoto = document.getElementById('image-0');
  const secondPhoto = document.getElementById('image-1');
  const thirdPhoto = document.getElementById('image-2');
  const fourthPhoto = document.getElementById('image-3');

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
   let xAxis = (carouselContainer.getBoundingClientRect().width / 1 - e.pageX) / -20;
   let yAxis = (carouselContainer.getBoundingClientRect().height / 2 - e.pageY) / 10;

   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  carouselContainer.addEventListener('mouseenter', () => {
   addHoverEffect();
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
   <ProjectCard id='project-card' className='project-card '>
    <Header className='card-header'>
     {ProjectsData[index].pictures.map((picture, index) => {
      return <Photo key={index} id={`image-${index}`} src={picture} />;
     })}
    </Header>
    <Info className='card-info'>
     <h5>{ProjectsData[index].name}</h5>
     <p>{ProjectsData[index].paragraphCard}</p>
    </Info>
    <Link to={ProjectsData[index].url}>
     <SeeMoreBtn className='see-more-btn'> See more</SeeMoreBtn>
    </Link>
    <FaAngleRight className='right-arrow' onClick={nextProject} />
    <FaAngleLeft className='left-arrow' onClick={prevProject} />
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

 &.rotate {
  animation: scaledCard 1s ease;
  @keyframes scaledCard {
   0% {
    transform: scale(1);
   }
   10% {
    transform: scale(0.6) rotateX(180deg);
   }
   60% {
    transform: scale(1.2);
   }
   100% {
    transform: scale(1);
   }
  }
 }

 @media screen and (max-width: 1100px) {
  width: 100%;
  margin: 5rem auto;
 }
`;
const ProjectCard = styled.div`
 min-height: 28rem;
 background: #e9e9e9;
 -webkit-transform-style: preserve-3d;
 -moz-transform-style: preserve-3d;
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

 #image-0 {
  z-index: 4;
 }
 #image-1 {
  z-index: 3;
 }
 #image-2 {
  z-index: 2;
 }
 #image-3 {
  z-index: 1;
 }
`;
const Info = styled.section`
 position: relative;
 h5 {
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
