import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

const NavLinks = ({ isOpen, setIsOpen }) => {
 return (
  <LinksContainer className='container' isOpen={isOpen}>
   <Links isOpen={isOpen}>
    <ul>
     <li>
      <Link
       onClick={() => {
        setTimeout(() => {
         setIsOpen(false);
        }, 200);
       }}
       exact={true}
       to='/#past'
      >
       The Past{' '}
      </Link>
     </li>
     <li>
      <Link exact={true} to='/#bet'>
       The Bet{' '}
      </Link>
     </li>
     <li>
      <Link exact={true} to='/#present'>
       The Present{' '}
      </Link>
     </li>
     <li>
      <Link to='/#curriculum'>The Curriculum </Link>
     </li>
     <li>
      <Link to='/#experience'>The Experience </Link>
     </li>
     <li>
      <Link to='/#end'>The End </Link>
     </li>
    </ul>
   </Links>
  </LinksContainer>
 );
};
const LinksContainer = styled.aside`
 width: var(--nav-drawer-width);
 position: fixed;
 top: 80px;
 right: 0;
 bottom: 0;
 height: 90%;
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
`;

export default NavLinks;
