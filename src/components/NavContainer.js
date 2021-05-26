import React from 'react';
import HomePage from '../pages/HomePage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import NavBar from './NavBar';
import NavLinks from './NavLinks';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CertificatesPage from '../pages/CertificatesPage';
import TestimonialPage from '../pages/TestimonialPage';

const NavContainer = ({ isOpen, setIsOpen }) => {
 const showChapters = () => {
  const chapters = Array.from(document.querySelectorAll('.chapter'));
  const triggerBottom = (window.innerHeight / 9) * 6;

  chapters.forEach((chapter) => {
   const chapterTop = chapter.getBoundingClientRect().top;

   if (chapterTop < triggerBottom) {
    chapter.classList.add('show');
   } else {
    chapter.classList.remove('show');
   }
  });
 };
 return (
  <StyledNavContainer isOpen={isOpen}>
   <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
   <NavLinks showChapters={showChapters} isOpen={isOpen} setIsOpen={setIsOpen} />
   <Switch>
    <Route path='/testimonials'>
     <TestimonialPage isOpen={isOpen} setIsOpen={setIsOpen} />
    </Route>
    <Route path='/certifications'>
     <CertificatesPage isOpen={isOpen} setIsOpen={setIsOpen} />
    </Route>

    <Route path='/details/:id'>
     <ProjectDetailsPage isOpen={isOpen} setIsOpen={setIsOpen} />
    </Route>

    <Route path='/' exact>
     <HomePage showChapters={showChapters} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Route>
   </Switch>
  </StyledNavContainer>
 );
};
const StyledNavContainer = styled.div`
 perspective: 900px;
 height: 100vh;

 display: flex;
 flex-direction: column;
 overflow: hidden;
`;

export default NavContainer;
