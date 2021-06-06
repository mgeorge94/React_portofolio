import pastImg from '../images/chapter-backgrounds/flute-chapter.jpg';
import betImg from '../images/chapter-backgrounds/bet-chapter.jpg';
import presentImg from '../images/chapter-backgrounds/present-chapter.jpg';
import curriculumImg from '../images/chapter-backgrounds/curriculum-chapter.jpg';
import endImg from '../images/chapter-backgrounds/end-chapter.gif';
export const ChaptersData = [
 {
  name: 'The Past',
  paragraph: ` "I used to be a flute player. Even though I wasn't makin' much and I worked from dawn to dusk, I was glad to be working.
           One day I was on my break and I was just hanging out when I heard a bet I couldn't refuse..."`,
  image: pastImg,
  bg: '#000000',
  top: '-7vw',
  id: 'past',
 },
 {
  name: 'The Bet',
  paragraph: `"A bet from my very best friend, an IT guy who I was teaching flute on the side...
       - I bet  you the next round I can learn to play the flute faster than you can learn programming
       P.S. He lost! "`,
  image: betImg,
  bg: '#202332',
  top: '-14rem',
  id: 'bet',
 },
 {
  name: 'The Present',
  paragraph: ` "Anyway,  I begun my journey in conquering Web Development, each and every day taking small steps to become the greatest front end dev (of my family). Currently I am working as a backend web-developer for StrongBytes"`,
  image: presentImg,
  bg: '#242424',
  top: '-21rem',
  id: 'present',
 },
 {
  name: 'The Curriculum',
  paragraph: ` "The JavaScript guru's from the internet called to me so I enrolled in a few courses from CodeCademy, Pluralsight and WantSome. There was also some handsome sensei who helped me along the way but he wishes to remain annonimus"`,
  image: curriculumImg,
  bg: '#2c2a2d',
  top: '-28rem',
  id: 'curriculum',
 },
 {
  name: 'The Experience',
  bg: '#222222',
  top: '-35rem',
  id: 'experience',
 },
 {
  name: 'The End',
  image: endImg,
  bg: '#373737',
  top: '-42rem',
  id: 'end',
 },
];
