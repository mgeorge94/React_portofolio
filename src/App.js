import './App.css';
import NavContainer from './components/NavContainer';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
 //  change is open class for opening navigation menu
 let [isOpen, setIsOpen] = useState(false);
 //change accent color on click
 let changeAccentColor = () => {
  //array of accent colors
  const accentColors = [
   '#FFD700',

   '#c69400',
   '#7d3470',
   '#4c91d1',
   '#c28897',
   '#64b87d',
   ' #005b96',
   '#c1c530',
   '#af6150',
   '#56b59a',
   '#680fea',
   '#851e3e',
   '#651e3e',
   '#0e9aa7 ',

   '#54b2a9',
   '#8874a3',
   '#3b7dd8',
   '#4a91f2',
  ];
  let randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
  document.documentElement.style.setProperty('--accent-color', randomAccentColor);
 };
 return (
  <AppContainer onClick={changeAccentColor} isOpen={isOpen} className='App'>
   <NavContainer isOpen={isOpen} setIsOpen={setIsOpen} />
  </AppContainer>
 );
}
const AppContainer = styled.div`
 background-color: ${({ isOpen }) => (isOpen ? '#bababa' : 'black')};
 transition: all var(--transition-length) ease-in-out;
`;
export default App;
