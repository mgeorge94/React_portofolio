import React from 'react';
import styled from 'styled-components';

import { ChaptersData } from '../components/ChaptersData';
import ChapterLeft from '../components/ChapterLeft';
import Header from '../components/Header';
import ChapterRight from '../components/ChapterRight';

import Footer from '../components/Footer';
const HomePage = ({ isOpen, setIsOpen, showChapters }) => {
 // scroll animation

 return (
  <HomePageContainer
   className='homepage'
   onScroll={showChapters}
   onClick={() => {
    setIsOpen(false);
   }}
   isOpen={isOpen}
  >
   <Header />
   <ChapterLeft
    bg={ChaptersData[0].bg}
    name={ChaptersData[0].name}
    paragraph={ChaptersData[0].paragraph}
    image={ChaptersData[0].image}
    top={ChaptersData[0].top}
    id={ChaptersData[0].id}
   />
   <ChapterRight
    bg={ChaptersData[1].bg}
    name={ChaptersData[1].name}
    paragraph={ChaptersData[1].paragraph}
    image={ChaptersData[1].image}
    top={ChaptersData[1].top}
    id={ChaptersData[1].id}
   />
   <ChapterLeft
    bg={ChaptersData[2].bg}
    name={ChaptersData[2].name}
    paragraph={ChaptersData[2].paragraph}
    image={ChaptersData[2].image}
    top={ChaptersData[2].top}
    id={ChaptersData[2].id}
   />
   <ChapterRight
    bg={ChaptersData[3].bg}
    name={ChaptersData[3].name}
    paragraph={ChaptersData[3].paragraph}
    image={ChaptersData[3].image}
    top={ChaptersData[3].top}
    id={ChaptersData[3].id}
   />
   <ChapterLeft bg={ChaptersData[4].bg} top={ChaptersData[4].top} name={ChaptersData[4].name} id={ChaptersData[4].id} />

   <ChapterRight
    bg={ChaptersData[5].bg}
    top={ChaptersData[5].top}
    name={ChaptersData[5].name}
    image={ChaptersData[5].image}
    id={ChaptersData[5].id}
   />
   <Footer />
  </HomePageContainer>
 );
};
const HomePageContainer = styled.section`
 width: 100%;
 background: #858585;
 transition: transform var(--transition-length) ease-in-out;
 color: white;
 transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-350px)' : 'rotateY(0deg) translateX(0)')};
 @media screen and (max-width: 1000px) {
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(25deg) translateX(-500px)' : 'rotateY(0deg) translateX(0)')};
 }

 flex-grow: 1;
 overflow-y: auto;
 overflow-x: hidden;
`;
export default HomePage;
