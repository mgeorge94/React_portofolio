import React, { useState } from 'react';
import styled from 'styled-components';

import Typewriter from 'typewriter-effect';
import ProjectsCard from './ProjectsCard';
// intersection observer
const ChapterLeft = ({ id, name, paragraph, image, bg, top }) => {
 let [typing, setTyping] = useState(false);

 const setTypingTRUE = () => {
  setTyping(true);
 };

 return (
  <ChapterContainer onMouseEnter={setTypingTRUE} className='chapter chapter-left' top={top} bg={bg}>
   {name !== 'The Experience' ? (
    <TextContainer>
     <h2 id={id}>{name}</h2>

     {typing && paragraph !== undefined ? (
      <Typewriter
       onInit={(typewriter) => {
        typewriter
         .changeDelay(30)
         .typeString(`${paragraph}`)

         // .deleteChars()

         .start();
       }}
      />
     ) : null}
    </TextContainer>
   ) : (
    <>
     {' '}
     <TextContainer>
      <h2 id={id}>{name}</h2>
     </TextContainer>
     <ProjectsCard name={name} />
    </>
   )}
   {image === undefined ? '' : <ImageContainer image={image} />}
  </ChapterContainer>
 );
};
export const ChapterContainer = styled.div`
 background-attachment: fixed;
 min-height: 100vh;
 width: 100vw;
 transition: transform 0.4s ease-in-out;
 position: relative;

 position: relative;
 z-index: ${(props) => props.z};
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
  position: relative;
  min-width: 100%;
 }
`;
export const TextContainer = styled.aside`
 margin: 8rem 0 8rem 8rem;
 /* transform: ${({ isOpen }) => (isOpen ? `translateZ(100px) rotate(-15deg)` : `translateZ(0px)`)}; */

 div {
  width: 30rem;
  margin-top: 10vh;
  font-size: 1.4rem;
  font-style: oblique;
  min-height: 11rem;
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
 background-color: inherit;
 background-size: 40%;
 background-attachment: fixed;
 background-position: right center;
 background-repeat: no-repeat;
 background-blend-mode: lighten;

 width: 40%;

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
