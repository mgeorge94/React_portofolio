import React, { useState } from 'react';
import styled from 'styled-components';
import { ChapterContainer, TextContainer, ImageContainer } from './ChapterLeft';
import Typewriter from 'typewriter-effect';
import Skills from './Skills';
import CurriculumIconsContainer from './CurriculumIconsContainer';
import Form from './Form';
const ChapterRight = ({id, name, paragraph, image, bg, top }) => {
 let [typing, setTyping] = useState(false);

 const setTypingTRUE = () => {
  setTyping(true);
 };
 const setTypingFALSE = () => {
  setTyping(!typing);
 };
 return (
  <ChapterContainerR id={id} onMouseEnter={setTypingTRUE} className='chapter chapter-right' top={top} bg={bg}>
   {name === 'The Curriculum' ? (
    <>
     <TextContainerR>
      <h2>{name}</h2>

      <Typewriter
       onInit={(typewriter) => {
        typewriter.changeDelay(50).typeString(`${paragraph}`).start();
       }}
      />
      <CurriculumIconsContainer />
     </TextContainerR>
     <Skills />
    </>
   ) : name === 'The End' ? (
    <>
     <TextContainerR>
      <h2>{name}</h2>
     </TextContainerR>
     <Form />
    </>
   ) : (
    <TextContainerR>
     <h2>{name}</h2>
     {typing && paragraph !== undefined ? (
      <Typewriter
       onInit={(typewriter) => {
        typewriter.changeDelay(50).typeString(`${paragraph}`).start();
       }}
      />
     ) : null}
    </TextContainerR>
   )}
   {image === undefined ? (
    ''
   ) : name === 'The End' ? (
    <ImageContainerR className='end' image={image}></ImageContainerR>
   ) : (
    <ImageContainerR image={image}></ImageContainerR>
   )}
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
 &.end {
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  top: 0;
  z-index: -2;
  height: 100%;
  width: 80rem;
  background-image: ${({ image }) => `url(({image}))`};
  background-size: 60vw;
  background-position: bottom right;
  @media screen and (max-width: 1100px) {
   display: none;
  }
 }
`;
export default ChapterRight;
