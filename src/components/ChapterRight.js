import React from 'react';
import styled from 'styled-components';
import { ChapterContainer, TextContainer, ImageContainer } from './ChapterLeft';
import betChapter from '../images/chapter-backgrounds/bet-chapter.jpg';
const ChapterRight = () => {
 return (
  <ChapterContainerR>
   <TextContainerR>
    <h2>The bed</h2>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facilis dolor. Laboriosam error iure praesentium ipsa maxime
     in deserunt nobis sit accusantium perspiciatis soluta, a modi commodi accusamus blanditiis dolores.
    </p>
   </TextContainerR>
   <ImageContainerR></ImageContainerR>
  </ChapterContainerR>
 );
};
const ChapterContainerR = styled(ChapterContainer)`
 background: #1f1f1f;
 transform: scaleX(-1);
`;
const TextContainerR = styled(TextContainer)`
 transform: scaleX(-1);
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 text-align: right;
 @media screen and (max-width: 1100px) {
  text-align: left;
 }
`;
const ImageContainerR = styled(ImageContainer)`
 transform: scaleX(-1);
 background-image: url(${betChapter});
`;
export default ChapterRight;
