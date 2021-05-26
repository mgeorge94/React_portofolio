import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo/logo.png';
import { FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <FooterContainer>
   <FooterWrap>
    <FooterLinksContainer>
     <FooterLinksWrapper>
      <div>
       <FooterLinkItems>
        <FooterLinksTitle>Business</FooterLinksTitle>

        <FooterLinkR to='/testimonials'> Testimonials</FooterLinkR>
        <FooterLinkR to='/certifications'> Certificates</FooterLinkR>

        <a href='/#experience'>Projects</a>
       </FooterLinkItems>
      </div>
     </FooterLinksWrapper>
     <FooterLinksWrapper>
      <FooterLinkItems>
       <FooterLinksTitle> Personal</FooterLinksTitle>

       <FooterLink target='_blank' href='https://www.linkedin.com/in/george-murgoci-39a73a205/'>
        {' '}
        <span>
         <FaLinkedinIn />
        </span>{' '}
        LinkedIn
       </FooterLink>
       <FooterLink target='_blank' href='https://github.com/mgeorge94'>
        <span>
         {' '}
         <FaGithub />
        </span>{' '}
        Github
       </FooterLink>
       <FooterLink
        target='_blank'
        href=' https://www.canva.com/design/DAEdDDrSKgo/j8UDCC3X7bd_I2qE-S_BWA/view?utm_content=DAEdDDrSKgo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
       >
        <span>
         {' '}
         <FaFilePdf />
        </span>{' '}
        Curriculum Vitae
       </FooterLink>
      </FooterLinkItems>
     </FooterLinksWrapper>
    </FooterLinksContainer>
    <LogoWrapper>
     <LogoLink>
      <Logo src={logo} />
     </LogoLink>
     George Murgoci &copy; {new Date().getFullYear()} All rights reserved
    </LogoWrapper>
   </FooterWrap>
  </FooterContainer>
 );
};

const FooterContainer = styled.footer`
 background: #101522;
 position: relative;
 /* top: -45rem; */
 z-index: -1;
 width: 100vw;
 a {
  color: white;
  text-decoration: none;
  :hover {
   color: var(--accent-color);
  }
 }
`;
const FooterWrap = styled.div`
 padding: 48px 24px 0 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 max-width: 1100px;
 margin: 0 auto;
`;
const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;

 @media screen and (max-width: 820px) {
  padding-top: 32px;
 }
`;
const FooterLinksWrapper = styled.div`
 display: flex;

 @media screen and (max-width: 820px) {
  flex-direction: column;
 } ;
`;
const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 1rem 2rem;
 text-align: left;
 width: 160px;
 color: white;

 @media screen and (max-width: 420px) {
  margin: 0;
  padding: 10px;
  width: 100%;
 }
`;
const FooterLinksTitle = styled.h3`
 font-size: 24px;
 margin-bottom: 20px;
`;
const FooterLink = styled.a`
 color: white;
 text-decoration: none;
 padding-bottom: 0.4rem;
 font-size: 1rem;
 margin-bottom: 10px;

 span {
  position: relative;
  font-size: 1.4rem;
  bottom: -3px;
  margin-right: 5px;
 }
 &:hover {
  color: var(--accent-color);
  transition: 0.3s ease-in-out;
 }
`;
const FooterLinkR = styled(Link)`
 color: white;
 text-decoration: none;
 padding-bottom: 1rem;
 font-size: 1rem;
 margin-bottom: 10px;
 &:hover {
  color: var(--accent-color);
  transition: 0.3s ease-in-out;
 }
`;

const LogoWrapper = styled.div`
 width: 100vw;
 padding: 2rem 2rem 0 2rem;
 display: flex;
 justify-content: space-between;
 cursor: default;
 color: white;

 @media screen and (max-width: 700px) {
  flex-direction: column;
 }

 align-items: center;
`;
const LogoLink = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1100px;

 text-decoration: none;

 justify-self: start;
 display: flex;
 align-items: center;
 margin-bottom: 16px;

 @media screen and (max-width: 820px) {
  flex-direction: column;
 }
`;
const Logo = styled.img`
 height: 60px;
`;

export default Footer;
