import React from 'react';
import styled from 'styled-components';
import { FaFilePdf, FaFileAlt, FaCertificate, FaBacon } from 'react-icons/fa';

const CurriculumIconsContainer = () => {
 return (
  <IconsContainer>
   <Certificates>
    <FaFileAlt />
    <FaCertificateStyled />
    <FaBaconStyled />
    <p>Certificates</p>
   </Certificates>

   <Cv>
    <a
     href=' https://www.canva.com/design/DAEdDDrSKgo/j8UDCC3X7bd_I2qE-S_BWA/view?utm_content=DAEdDDrSKgo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
     target='_blank'
    >
     <FaFilePdf />
     <p>CV</p>
    </a>
   </Cv>
  </IconsContainer>
 );
};
const IconsContainer = styled.div`
 position: relative;
 left: 0;
 min-width: 13rem;
 max-width: 13rem;

 bottom: 0;
 transform: rotate(4deg);
 display: block;
 color: var(--accent-color);
 transition: color 0.6s ease-in-out;

 display: flex;

 div {
  font-size: 6rem;
 }
`;
const Certificates = styled.div`
 display: inline;

 p {
  position: absolute;
  bottom: 20%;
  left: -3rem;
  font-size: 1.4rem;
  color: white;
 }
`;
const Cv = styled.div`
 margin-left: 1rem;
 display: inline;

 position: relative;
 right: 0;
 top: 0;
 p {
  position: absolute;
  bottom: 25%;
  left: -6px;
  font-size: 1.4rem;
  color: white;
 }
`;
const FaBaconStyled = styled(FaBacon)`
 position: absolute;
 left: -1rem;
 font-size: 3rem;
 top: 90px;
 filter: brightness(60%);
 transform: rotate(-20deg);
`;
const FaCertificateStyled = styled(FaCertificate)`
 position: absolute;
 left: -0.5rem;
 top: 80px;
 font-size: 2.5rem;

 filter: brightness(70%);

 z-index: 2;
`;
export default CurriculumIconsContainer;
