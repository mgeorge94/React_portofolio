import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerAnimation } from '../components/Animation';
import img from '../images/header-image/header-bg.gif';
import Particles from './Particles.js';
const Header = () => {
 return (
  <HeaderContainer>
   <Particles />
   <TitleContainer>
    <motion.h1 variants={containerAnimation} initial='hidden' animate='show'>
     My name is Murgoci George
    </motion.h1>
    <h2>
     and this is my <span>story!</span>
    </h2>
   </TitleContainer>
  </HeaderContainer>
 );
};
export const HeaderContainer = styled.header`
 height: 60vh;
 display: block;
 background-color: #080a0f;
 /* background-image: url(${img});
 background-repeat: no-repeat;
 background-position: right center;
 background-blend-mode: lighten; */
 min-height: 80vh;
 width: 100vw;
 overflow: hidden;
 @media screen and (max-width: 1350px) {
  background-image: url('');
 }
 @media screen and (max-width: 750px) {
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
 }
`;
const TitleContainer = styled.div`
 padding-left: 7vw;
 position: absolute;
 padding-top: 8rem;
 z-index: 9;
 display: flex;
 flex-direction: column;
 pointer-events: none;
 top: 0;
 left: 0;
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
