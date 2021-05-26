import pastImg from '../images/chapter-backgrounds/flute-chapter.jpg';
import betImg from '../images/chapter-backgrounds/bet-chapter.png';
import presentImg from '../images/chapter-backgrounds/present-chapter.png';
import curriculumImg from '../images/chapter-backgrounds/curriculum-chapter.png';
import endImg from '../images/chapter-backgrounds/end-chapter.gif';
export const ChaptersData = [
 {
  name: 'The Past',
  paragraph: ` "I used to be a flute player. Even though I wasn't makin' much and I worked from dawn to dusk, I was glad to be working.
           One day I was on my break and I was just hanging out when I heard a bet I couldn't refuse..."`,
  image: pastImg,
  bg: '#0c0e14',
  z: '6',

  id: 'past',
 },
 {
  name: 'The Bet',
  paragraph: `"A bet from my very best friend, an IT guy who I was teaching flute on the side...
       - I bet  you the next round I can learn to play the flute faster than you can learn programming
       P.S. He lost! "`,
  image: betImg,
  bg: ' #13151e',
  z: '5',

  id: 'bet',
 },
 {
  name: 'The Present',
  paragraph: ` "Anyway,  I begun my journey in conquering Web Development, each and every day taking small steps to become the greatest front end dev (of my family)"`,
  image: presentImg,
  bg: '#161823',
  z: '4',

  id: 'present',
 },
 {
  name: 'The Curriculum',
  paragraph: ` "The JavaScript guru's from the internet called to me so I enrolled in a few courses from CodeCademy, Pluralsight and WantSome. There was also some handsome sensei who helped me along the way but he wishes to remain annonimus"`,
  image: curriculumImg,
  bg: '#191c28',
  z: '3',

  id: 'curriculum',
 },
 {
  name: 'The Experience',
  bg: '#1c1f2d',
  z: '2',

  id: 'experience',
 },
 {
  name: 'The End',
  image: endImg,
  bg: '#202332',
  z: '1',
  id: 'end',
 },
];
