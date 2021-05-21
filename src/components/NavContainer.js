import React from 'react';
import HomePage from './HomePage';
import NavBar from './NavBar';
import NavLinks from './NavLinks';
import styled from 'styled-components';

const NavContainer = ({ isOpen, setIsOpen }) => {
 return (
  <StyledNavContainer isOpen={isOpen}>
   {/* <NavBar /> */}
   <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />

   <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
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
