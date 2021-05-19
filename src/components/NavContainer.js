import React from 'react';
import HomePage from './HomePage';
import NavBar from './NavBar';
import NavLinks from './NavLinks';
import styled from 'styled-components';

const NavContainer = ({ isOpen, setIsOpen }) => {
 console.log(isOpen);
 return (
  <StyledNavContainer isOpen={isOpen}>
   {/* <NavBar /> */}

   <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
   <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
  </StyledNavContainer>
 );
};
const StyledNavContainer = styled.div`
 perspective: 1000px;
 height: 100vh;
 overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'scroll')};

 overflow-x: hidden;
`;

export default NavContainer;
