import React from 'react';
import styled from 'styled-components';
import { ChapterContainer, TextContainer, ImageContainer } from './ChapterLeft';
import betChapter from '../images/chapter-backgrounds/bet-chapter.jpg';
const ChapterRight = ({ name, paragraph, image, bg }) => {
 return (
  <ChapterContainerR bg={bg}>
   <TextContainerR>
    <h2>{name}</h2>
    {paragraph === undefined ? '' : <p>{paragraph}</p>}
   </TextContainerR>
   {image === undefined ? '' : <ImageContainerR image={image}></ImageContainerR>}
  </ChapterContainerR>
 );
};
const ChapterContainerR = styled(ChapterContainer)`
 background: ${(props) => props.bg};
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

 background-image: ${({ image }) => (image ? `url(({image}))` : `url("")`)};
`;
export default ChapterRight;
