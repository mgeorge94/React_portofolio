import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import { ChaptersData } from './ChaptersData';
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
   <ChapterLeft
    bg={ChaptersData[0].bg}
    name={ChaptersData[0].name}
    paragraph={ChaptersData[0].paragraph}
    image={ChaptersData[0].image}
   />
   <ChapterRight
    bg={ChaptersData[1].bg}
    name={ChaptersData[1].name}
    paragraph={ChaptersData[1].paragraph}
    image={ChaptersData[1].image}
   />
   <ChapterLeft
    bg={ChaptersData[2].bg}
    name={ChaptersData[2].name}
    paragraph={ChaptersData[2].paragraph}
    image={ChaptersData[2].image}
   />
   <ChapterRight
    bg={ChaptersData[3].bg}
    name={ChaptersData[3].name}
    paragraph={ChaptersData[3].paragraph}
    image={ChaptersData[3].image}
   />
   <ChapterLeft h bg={ChaptersData[4].bg} name={ChaptersData[4].name} />
   <ChapterRight bg={ChaptersData[5].bg} name={ChaptersData[5].name} image={ChaptersData[5].image} />
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
