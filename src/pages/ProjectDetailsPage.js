import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProjectsData } from '../components/ProjectsData';
import { useHistory } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import { pageAnimation, Fade, TitleAnimation } from '../components/Animation';
import { motion } from 'framer-motion';
const ProjectDetailsPage = ({ isOpen, setIsOpen }) => {
 //get url location
 const history = useHistory();
 const url = history.location.pathname;
 const [theProjects, setTheProjects] = useState(ProjectsData);
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
  //   <Fragment isOpen={isOpen} variants={pageAnimation} initial='hidden' animate='show'>
  <>
   {project && (
    <ProjectDetailsContainer
     onClick={() => {
      setIsOpen(false);
     }}
     isOpen={isOpen}
    >
     <h2>{project.name}</h2>
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
    </ProjectDetailsContainer>
   )}
  </>
  //   </Fragment>
 );
};
export const ProjectDetailsContainer = styled.body`
 background: #3a3a3a;
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
const Fragment = styled(motion.div)`
 flex-grow: 1;
 overflow-y: auto;
 overflow-x: hidden;
`;
const CarouselCountainer = styled.div`
 margin: 5rem auto;
`;
export default ProjectDetailsPage;
