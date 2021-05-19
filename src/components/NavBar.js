import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/logo.png';

const NavBar = ({ isOpen, setIsOpen }) => {
 return (
  <Nav>
   <Img src={logo} alt='logo' />
   <HamburgerMenu
    onClick={(event) => {
     event.stopPropagation();
     setIsOpen(!isOpen);
    }}
   >
    <Bar className='bar' />
   </HamburgerMenu>
  </Nav>
 );
};
const Nav = styled.nav`
 position: sticky;
 height: 80px;
 width: 100%;
 background: rgba(0, 0, 0, 0.5);
 display: flex;
 z-index: 100;
 align-items: center;
 justify-content: space-between;
 padding: 0 1rem;

 top: 0;
 left: 0;
`;
const Img = styled.img`
 height: 80%;
 width: auto;
 @media screen and (max-width: 500px) {
  height: 60%;
 }
`;
const HamburgerMenu = styled.div`
 height: 3rem;
 width: 3rem;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: flex-end;

 :hover,
 :focus {
  .bar,
  .bar:before,
  .bar:after {
   width: 2rem;
   transform: all 0.2s ease;
   filter: brightness(170%);
  }
 }
`;
const Bar = styled.div`
 width: 1.9rem;
 height: 4px;
 border-radius: 10px;
 background-color: var(--accent-color);

 transition: all 0.4s ease-in-out;
 position: relative;
 &:before,
 :after {
  border-radius: 10px;

  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  background: inherit;
  filter: brightness(150%);
 }
 &:before {
  transform: translateY(-9px);
  width: 1.2rem;
  transition: all 0.2s ease-in-out;
 }

 &:after {
  transform: translateY(9px);
  width: 1.6rem;
  transition: all 0.6s ease-in-out;
 }
`;
export default NavBar;
