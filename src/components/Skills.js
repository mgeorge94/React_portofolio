import React from 'react';
import styled from 'styled-components';
import cssLogo from '../images/skills-logos/css.png';
import gitLogo from '../images/skills-logos/git.png';
import htmlLogo from '../images/skills-logos/html.png';
import jQueryLogo from '../images/skills-logos/jQuery.png';
import jsLogo from '../images/skills-logos/js.png';
import photoshopLogo from '../images/skills-logos/photoshop.png';
import sassLogo from '../images/skills-logos/sass.png';
import reactLogo from '../images/skills-logos/react.png';
import styledComponentsLogo from '../images/skills-logos/styled-components.png';
import framerMotionLogo from '../images/skills-logos/framer-motion.png';
const Skills = () => {
 const logoArr = [
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  jQueryLogo,
  sassLogo,
  reactLogo,
  styledComponentsLogo,
  framerMotionLogo,
  gitLogo,
  photoshopLogo,
 ];
 const skillsText = [
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
  'Technologies I worked With',
 ];
 return (
  <>
   <SkillsContainer>
    <SkillsInnerContainer>
     {logoArr.map((logo) => {
      return <Logo src={logo}></Logo>;
     })}
    </SkillsInnerContainer>
   </SkillsContainer>
  </>
 );
};

const SkillsContainer = styled.div`
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
const SkillsInnerContainer = styled.div`
 height: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 animation: endlessLoop 40s linear infinite;
 @keyframes endlessLoop {
  0% {
   transform: translateX(-100%);
  }
  50% {
   transform: translate(0%);
  }
  100% {
   transform: translateX(-100%);
  }
 }
`;
const Logo = styled.img`
 height: 100%;
 padding: 0.5rem 0 0.5rem 1.5rem;
 transform: scaleX(-1);
`;

export default Skills;
