import React from 'react';
import styled from 'styled-components';
const Header = () => {
 return (
  <HeaderContainer>
   <h1>My name is Murgoci George</h1>
   <h2>
    and this is my <span>story!</span>
   </h2>
  </HeaderContainer>
 );
};
export const HeaderContainer = styled.header`
 clip-path: polygon(0 0, 100% 0, 100% 100%, 0% calc(100% - 6vw));
 height: 60vh;
 display: block;
 background-color: rgb(40, 43, 40);
 min-height: 80vh;
 width: 100vw;

 h1,
 h2 {
  font-family: 'Six Caps';
  color: rgb(255, 255, 255);
  font-size: 8rem;
  font-weight: 200;
  padding-left: 2rem;
  position: absolute;
  padding-top: 8rem;
  animation: showTitle 2s ease-in-out forwards;
  display: flex;
  position: absolute;
 }
 h2 {
  padding-top: 13rem;
  margin-left: 2rem;
  color: #616161;
  z-index: 10;
  animation: showTitle 2s ease-in-out forwards;
  animation-delay: 1s;
  display: flex;
  opacity: 0;
  span {
   color: var(--accent-color);
   transition: color 1s ease-in-out;
  }
 }
 @keyframes showTitle {
  0% {
   opacity: 0;

   left: -2rem;
  }

  100% {
   opacity: 1;

   left: 0rem;
  }
 }
`;
export default Header;
