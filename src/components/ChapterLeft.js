import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from './Header';
import fluteChapter from '../images/chapter-backgrounds/flute-chapter.jpg';
const ChapterLeft = () => {
 return (
  <ChapterContainer>
   <TextContainer>
    <h2>The past</h2>
    <p>
     "I used to be a flute player. Even though I wasn't makin' much and I worked from dawn to dusk, I was glad to be working. One
     day I was on my break and I was just hanging out when I heard a bet I couldn't refuse..."
    </p>
   </TextContainer>
   <ImageContainer />
  </ChapterContainer>
 );
};
export const ChapterContainer = styled.div`
 clip-path: polygon(0 0, 100% calc(6vw), 100% calc(100% - 6vw), 0% 100%);
 background-attachment: fixed;
 min-height: 90vh;
 /* transform: translateX(-400%); */
 transition: transform 0.4s ease-in-out;
 top: -6vw;
 position: relative;

 display: flex;
 justify-content: space-between;
 @media screen and (max-width: 1100px) {
  flex-direction: column;
 }
`;
export const TextContainer = styled.aside`
 margin: 8rem 0 8rem 8rem;
 h2 {
  font-family: 'Six Caps';
  color: var(--accent-color);
  transition: color 1s ease-in-out;
  font-size: 8rem;
  font-weight: 200;

  animation: showTitle 2s ease-in-out forwards;

  animation: showTitle 2s ease-in-out forwards;
 }
 p {
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
  p {
   flex-basis: auto;
   width: 100%;
  }
 }
 @media screen and (max-width: 500px) {
  padding: 2rem;
 }
`;
export const ImageContainer = styled.div`
 background-image: url(${fluteChapter});
 background-size: 40%;
 background-attachment: fixed;
 background-position: right center;
 background-repeat: no-repeat;

 width: 40%;
 box-shadow: inset 0px 0px 28px 35px rgba(0, 0, 0, 0.75);

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
