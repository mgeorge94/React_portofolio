import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const NavLinks = ({ isOpen, setIsOpen }) => {
 return (
  <LinksContainer isOpen={isOpen}>
   <Links isOpen={isOpen}>
    <FaTimes
     onClick={() => {
      setIsOpen(false);
     }}
     className='close-btn'
    />
    <ul>
     <li>The Past</li>
     <li>The Bet</li>
     <li>The Present</li>
     <li>The Curriculum</li>
     <li>The Experience</li>
     <li>The End</li>
    </ul>
   </Links>
  </LinksContainer>
 );
};
const LinksContainer = styled.aside`
 width: var(--nav-drawer-width);
 position: fixed;
 top: 0rem;
 right: 0;
 bottom: 0;
 height: 100%;
 perspective: 1000px;

 /* z-index: ${({ isOpen }) => (!isOpen ? 1 : 0)}; */
 z-index: -1;
`;
const Links = styled.div`
 transform: ${({ isOpen }) => (isOpen ? `rotateY(-30deg)` : `rotateY(-100deg)`)};
 transform-style: preserve-3d;
 transform-origin: right;

 /* position: relative; */
 height: 100%;
 width: 100%;
 color: white;
 background-color: black;
 transition: transform var(--transition-length) ease-in-out;
 padding: 5rem 0;
 box-shadow: -5px 2px 5px 1px rgba(22, 22, 22, 0.5);
 display: flex;
 flex-direction: column;
 align-items: center;
 ul {
  list-style: none;
  text-align: right;
  font-size: 2rem;
  margin: 0 3rem;
 }
 li {
  margin-bottom: 2rem;
  transition: 0.2s ease-in-out;

  transform: ${({ isOpen }) => (isOpen ? `translateZ(70px)` : `translateZ(0px)`)};

  :hover {
   transform: translateX(-10px);
   cursor: pointer;
   color: var(--accent-color);
  }
 }
 a {
  color: inherit;
  text-decoration: none;
 }
 .close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  color: var(--accent-color);
  :hover {
   filter: brightness(170%);

   /* transition: var(--transition-length) ease-in-out; */
   transform: rotate(180deg) scale(1.2);
  }
 }
`;

export default NavLinks;
