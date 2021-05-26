import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProjectsData } from '../components/ProjectsData';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerAnimation } from '../components/Animation';
import { useHistory } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';

import Footer from '../components/Footer';
const ProjectDetailsPage = ({ isOpen, setIsOpen }) => {
 //get url location
 const history = useHistory();
 const url = history.location.pathname;
 const [theProjects] = useState(ProjectsData);
 const [project, setProject] = useState(null);

 useEffect(() => {
  const currentProject = theProjects.filter((projects) => projects.url === url);

  setProject(currentProject[0]);
 }, [theProjects, url]);

 let slides;
 if (project !== null) {
  slides = project.pictures.map((img) => {
   return <img src={img} alt={project.name} />;
  });
 }
 return (
  <>
   {project && (
    <ProjectDetailsContainer
     onClick={() => {
      setIsOpen(false);
     }}
     isOpen={isOpen}
    >
     <motion.h2 variants={containerAnimation} initial='hidden' animate='show'>
      {project.name}
     </motion.h2>
     <p>
      {project.descriptionParagraph}
      <span>
       <a href={project.link}>here</a>
      </span>
      .
     </p>

     <CarouselCountainer>
      <Carousel slides={slides} autoplay={true} interval={5000} />
     </CarouselCountainer>
     <p>{project.p0}</p>

     <h4>{project.subtitle1}</h4>
     <p>{project.p1}</p>
     <h4>{project.subtitle2}</h4>
     <p>{project.p2}</p>
     <h4>Best Features</h4>
     <ul>
      {project.bestFeatures.map((feature) => {
       return <li>-{feature}</li>;
      })}
     </ul>
     <GitIconContainer>
      <a href={project.github} target='_black'>
       <FaGithub />
      </a>
     </GitIconContainer>

     <Footer />
    </ProjectDetailsContainer>
   )}
  </>
 );
};
export const ProjectDetailsContainer = styled.section`
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

 h2,
 h4 {
  margin: 5rem;
 }
 p {
  font-size: 1.4rem;
  color: white;
  margin: 5rem;
 }
 ul {
  color: white;
  font-size: 1.4rem;
  margin: 1rem 5rem;
  list-style: none;
  li {
   padding-top: 5px;
  }
 }
`;

const CarouselCountainer = styled.div`
 margin: 5rem auto;
 min-height: 20rem;
`;
const GitIconContainer = styled.a`
 display: flex;
 width: 100%;
 justify-content: flex-end;
 font-size: 6rem;
 color: var(--accent-color);
 margin: 2rem auto;
 padding-right: 2rem;
`;
export default ProjectDetailsPage;
