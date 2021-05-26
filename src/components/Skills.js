import React from 'react';
import styled from 'styled-components';
import { logoArr } from './CurriculumData';

const Skills = () => {
 return (
  <>
   <SkillsContainer>
    <SkillsInnerContainer>
     {logoArr.map((logo, index) => {
      return <Logo key={index} src={logo}></Logo>;
     })}
    </SkillsInnerContainer>
   </SkillsContainer>
  </>
 );
};

export const SkillsContainer = styled.div`
 height: 5rem;
 width: 150%;
 background: rgba(255, 255, 255, 0.361);
 position: absolute;

 left: -1rem;

 right: 0;
 bottom: 10rem;
 margin-bottom: 10rem;
 transform: rotate(60deg);
 z-index: 4;
 overflow: hidden;

 transform: rotate(-20deg);
 background: rgba(107, 107, 107, 0.861);

 z-index: 1;
 top: 80%;
 @media screen and (max-width: 1100px) {
  transform: rotate(-20deg);
  top: 80%;
  z-index: 3;
 }
`;
export const SkillsInnerContainer = styled.div`
 height: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 transform: translateX(-50%);
 animation: endlessLoop 40s linear infinite;
 @keyframes endlessLoop {
  0% {
   transform: translateX(-50%);
  }
  50% {
   transform: translate(0%);
  }
  100% {
   transform: translateX(-50%);
  }
 }
`;
const Logo = styled.img`
 height: 100%;
 padding: 0.5rem 0 0.5rem 1.5rem;
 transform: scaleX(-1);
`;

export default Skills;
