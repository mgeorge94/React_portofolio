import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { ChaptersData } from '../components/ChaptersData';
import ChapterLeft from '../components/ChapterLeft';
import Header from '../components/Header';
import ChapterRight from '../components/ChapterRight';
import ProjectsCard from '../components/ProjectsCard';
const HomePage = ({ isOpen, setIsOpen }) => {
 // scroll animation

 const showChapters = () => {
  const chapters = Array.from(document.querySelectorAll('.chapter'));
  const triggerBottom = (window.innerHeight / 9) * 6;

  chapters.forEach((chapter) => {
   const chapterTop = chapter.getBoundingClientRect().top;

   if (chapterTop < triggerBottom) {
    chapter.classList.add('show');
   } else {
    chapter.classList.remove('show');
   }

   //   listenForMouseEnter();
  });
 };

 return (
  <HomePageContainer
   onScroll={showChapters}
   onClick={() => {
    setIsOpen(false);
   }}
   isOpen={isOpen}
  >
   {/* <NavBar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

   <Header />
   <ChapterLeft
    bg={ChaptersData[0].bg}
    name={ChaptersData[0].name}
    paragraph={ChaptersData[0].paragraph}
    image={ChaptersData[0].image}
    top={ChaptersData[0].top}
   />
   <ChapterRight
    bg={ChaptersData[1].bg}
    name={ChaptersData[1].name}
    paragraph={ChaptersData[1].paragraph}
    image={ChaptersData[1].image}
    top={ChaptersData[1].top}
   />
   <ChapterLeft
    bg={ChaptersData[2].bg}
    name={ChaptersData[2].name}
    paragraph={ChaptersData[2].paragraph}
    image={ChaptersData[2].image}
    top={ChaptersData[2].top}
   />
   <ChapterRight
    bg={ChaptersData[3].bg}
    name={ChaptersData[3].name}
    paragraph={ChaptersData[3].paragraph}
    image={ChaptersData[3].image}
    top={ChaptersData[3].top}
   />
   <ChapterLeft bg={ChaptersData[4].bg} top={ChaptersData[4].top} name={ChaptersData[4].name} />

   <ChapterRight bg={ChaptersData[5].bg} top={ChaptersData[5].top} name={ChaptersData[5].name} image={ChaptersData[5].image} />
  </HomePageContainer>
 );
};
const HomePageContainer = styled.section`
 width: 100%;
 background: #2a2a2b;
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
