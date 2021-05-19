import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Data from './ChaptersData';
import ChapterLeft from './ChapterLeft';
import Header from './Header';
import ChapterRight from './ChapterRight';
const HomePage = ({ isOpen, setIsOpen }) => {
 return (
  <HomePageContainer
   onClick={() => {
    setIsOpen(false);
   }}
   isOpen={isOpen}
  >
   <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

   <Header />
   <ChapterLeft />
   <ChapterRight />
   <Header />
  </HomePageContainer>
 );
};
const HomePageContainer = styled.section`
 min-height: 100vh;
 width: 100%;
 position: relative;
 transition: transform var(--transition-length) ease-in-out;
 background: black;
 color: white;
 transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-350px)' : 'rotateY(0deg) translateX(0)')};
 @media screen and (max-width: 1000px) {
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-500px)' : 'rotateY(0deg) translateX(0)')};
 }
`;
export default HomePage;
