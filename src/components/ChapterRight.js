import React, { useState } from 'react';
import styled from 'styled-components';
import { ChapterContainer, TextContainer, ImageContainer } from './ChapterLeft';
import Typewriter from 'typewriter-effect';
import Skills from './Skills';
const ChapterRight = ({ name, paragraph, image, bg, top }) => {
 let [typing, setTyping] = useState(false);

 const setTypingTRUE = () => {
  setTyping(true);
 };
 const setTypingFALSE = () => {
  setTyping(!typing);
 };
 return (
  <ChapterContainerR onMouseEnter={setTypingTRUE} className='chapter chapter-right' top={top} bg={bg}>
   {name === 'The Curriculum' ? (
    <>
     <TextContainerR>
      <h2>{name}</h2>

      <Typewriter
       onInit={(typewriter) => {
        typewriter
         .changeDelay(50)
         .typeString(`${paragraph}`)

         // .deleteChars()

         .start();
       }}
      />
     </TextContainerR>
     <Skills />
    </>
   ) : (
    <TextContainerR>
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
    </TextContainerR>
   )}
   {image === undefined ? '' : <ImageContainerR image={image}></ImageContainerR>}
  </ChapterContainerR>
 );
};
const ChapterContainerR = styled(ChapterContainer)`
 &.chapter-right {
  transform: translateX(400%);
  background: ${(props) => props.bg};
  overflow: hidden;
 }
 &.show {
  transform: translateX(0%) scaleX(-1);
 }
`;
const TextContainerR = styled(TextContainer)`
 transform: scaleX(-1);
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 /* text-align: right; */
 @media screen and (max-width: 1100px) {
  text-align: left;
 }
 @media screen and (max-width: 500px) {
  padding: 2rem;
  h2 {
   font-size: 6rem;
  }
 }
`;
const ImageContainerR = styled(ImageContainer)`
 transform: scaleX(-1);

 background-image: ${({ image }) => (image ? `url(({image}))` : `url("")`)};
`;
export default ChapterRight;
