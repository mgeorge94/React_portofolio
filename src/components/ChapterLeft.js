import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from './Header';
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
  </ChapterContainer>
 );
};
const ChapterContainer = styled.div`
 clip-path: polygon(0 0, 100% calc(6vw), 100% calc(100% - 6vw), 0% 100%);
 background-attachment: fixed;
 min-height: 90vh;
 /* transform: translateX(-400%); */
 transition: transform 0.4s ease-in-out;
 top: -6vw;
 position: relative;
 background-color: black;
 background-image: url(../images/chapter-backgrounds/header-img.jpg);
 background-size: 45%;

 background-position: right center;
 background-repeat: no-repeat;
`;
const TextContainer = styled.aside`
 margin: 8rem;
 h2 {
  font-family: 'Six Caps';
  color: var(--accent-color);
  transition: color 1s ease-in-out;
  font-size: 8rem;
  font-weight: 200;

  animation: showTitle 2s ease-in-out forwards;
  display: flex;

  animation: showTitle 2s ease-in-out forwards;
 }
 p {
  width: 30rem;
  margin-top: 10vh;
  font-size: 1.4rem;
  font-style: oblique;
 }
`;
export default ChapterLeft;
