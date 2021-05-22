import React from 'react';
import HomePage from '../pages/HomePage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import NavBar from './NavBar';
import NavLinks from './NavLinks';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = ({ isOpen, setIsOpen }) => {
 return (
  <StyledNavContainer isOpen={isOpen}>
   <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
   <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />

   <Route path='/' exact>
    <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
   </Route>
   <Route path='/details/:id'>
    <ProjectDetailsPage isOpen={isOpen} setIsOpen={setIsOpen} />
   </Route>
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
