import React, { useState } from 'react';
import styled from 'styled-components';

import Typewriter from 'typewriter-effect';
import ProjectsCard from './ProjectsCard';
// intersection observer
const ChapterLeft = ({ name, paragraph, image, bg, top }) => {
 let [typing, setTyping] = useState(false);

 const setTypingTRUE = () => {
  setTyping(true);
 };
 const setTypingFALSE = () => {
  setTyping(!typing);
 };

 return (
  <ChapterContainer onMouseEnter={setTypingTRUE} className='chapter chapter-left' top={top} bg={bg}>
   {name !== 'The Experience' ? (
    <TextContainer>
     <h2>{name}</h2>

     {typing && paragraph !== undefined ? (
      <Typewriter
       onInit={(typewriter) => {
        typewriter
         .changeDelay(50)
         .typeString(`${paragraph}`)

         // .deleteChars()

         .start();
       }}
      />
     ) : null}

     {/* <Typewriter
    onInit={(typewriter) => {
     typewriter
      .typeString(`${paragraph}`)
      

      .pauseFor(2500)
      .deleteAll()

      .start();
    }}
   /> */}
    </TextContainer>
   ) : (
    <>
     {' '}
     <TextContainer>
      <h2>{name}</h2>
     </TextContainer>
     <ProjectsCard name={name} />
    </>
   )}
   {image === undefined ? '' : <ImageContainer image={image} />}
  </ChapterContainer>
 );
};
export const ChapterContainer = styled.div`
 clip-path: polygon(0 0, 100% calc(6vw), 100% calc(100% - 6vw), 0% 100%);

 background-attachment: fixed;
 min-height: 100vh;
 transition: transform 0.4s ease-in-out;
 position: relative;
 top: ${(props) => props.top};
 position: relative;

 background: ${(props) => props.bg};
 display: flex;
 justify-content: space-between;

 @media screen and (max-width: 1100px) {
  flex-direction: column;
 }

 &.chapter-left {
  transform: translateX(-400%);
 }
 &.show {
  transform: translateX(0%);
 }
`;
export const TextContainer = styled.aside`
 margin: 8rem 0 8rem 8rem;
 /* transform: ${({ isOpen }) => (isOpen ? `translateZ(100px) rotate(-15deg)` : `translateZ(0px)`)}; */

 h2 {
  font-family: 'Six Caps';
  white-space: nowrap;
  color: var(--accent-color);
  transition: color 1s ease-in-out;
  font-size: 8rem;
  font-weight: 200;

  animation: showTitle 2s ease-in-out forwards;

  animation: showTitle 2s ease-in-out forwards;
 }
 div {
  width: 30rem;
  margin-top: 10vh;
  font-size: 1.4rem;
  font-style: oblique;
 }
 @media screen and (max-width: 1100px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0;
  padding: 5rem;
  margin-top: 10vh;
  h2 {
   align-self: flex-start;
  }
  div {
   flex-basis: auto;
   width: 100%;
  }
 }
 @media screen and (max-width: 500px) {
  padding: 2rem;
  h2 {
   font-size: 6rem;
  }
 }
`;

export const ImageContainer = styled.div`
 background-image: url(${(props) => props.image});

 background-size: 40%;
 background-attachment: fixed;
 background-position: right center;
 background-repeat: no-repeat;

 width: 40%;
 /* box-shadow: inset 0px 0px 28px 35px ${(props) => props.bg}; */

 right: 0;
 @media screen and (max-width: 1100px) {
  width: 100%;
  height: 20rem;
  bottom: 0;
  background-size: 100%;
  /* background: lime; */
 }
`;

export default ChapterLeft;
