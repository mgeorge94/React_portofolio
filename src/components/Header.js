import React from 'react';
import styled from 'styled-components';
const Header = () => {
 return (
  <HeaderContainer>
   <TitleContainer>
    <h1>My name is Murgoci George</h1>
    <h2>
     and this is my <span>story!</span>
    </h2>
   </TitleContainer>
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
 @media screen and (max-width: 750px) {
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
 }
`;
const TitleContainer = styled.div`
 padding-left: 2rem;
 position: absolute;
 padding-top: 8rem;

 display: flex;
 flex-direction: column;
 h1,
 h2 {
  font-family: 'Six Caps';
  color: rgb(255, 255, 255);
  font-size: 8rem;
  font-weight: 200;

  animation: showTitle 2s ease-in-out forwards;
  display: flex;

  white-space: nowrap;
 }
 h2 {
  position: relative;
  top: 50%;
  transform: translateY(-60%);
  margin-left: 6rem;
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
 @media screen and (max-width: 750px) {
  width: 100%;
  padding: 0;

  h1 {
   font-size: 17vw;
   align-self: center;
  }
  h2 {
   font-size: 16vw;
   margin: 0 auto;
  }
 }
`;
export default Header;
