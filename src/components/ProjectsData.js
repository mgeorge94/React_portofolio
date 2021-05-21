const projectsArr = [
 {
  name: "We'll fix it",
  paragraphCard:
   "Yeah. I did it. My first ever React Project. It's a real project for a real client that helped me understand how React works",
  picture1: `./resources/project-photos/we-ll-fix-it-project/header.jpg`,
  picture2: `./resources/project-photos/we-ll-fix-it-project/faq.jpg`,
  picture3: `./resources/project-photos/we-ll-fix-it-project/review.jpg `,
  picture4: `./resources/project-photos/we-ll-fix-it-project/contact.jpg`,
  seeMoreContainer: [
   {
    title: `We'll fix it`,
    projectDescriptionParagraph: `I first want to say that I adore React. The project was like a path to enlightenment for me because I had the opportunity to shift the way I thought about a project. Also I used some fun stuff that I will tel you about in a minute <a href="http://www.wellfixitcluj.ro" target='_blank' class ='link'>here</a> `,
    paragraph1:
     'Ok so besides React I used unDraw for images, reactScroll for smoothScrolling, Styled Components for well styling the components, React icons and Beauty Star Rating.',
    subtitle1: 'Challenges',
    subtitleParagraph:
     'Well, it was a new language so.. everyF*****Gthing. Nah. For real now, it was hard while I got the grasp of it but then.. Smooth sailing. One tricky bit was indeed the lifecicle methods. ',
    subtitle2: 'How I overcome them',
    subtitleParagraph2: `I didn't. The problem that I had was that It was pretty hard for me to understand class components and state so I just switch to function Components with hooks and useState. Now that i have an idea about state, I will use it in class components in the upcoming projects.`,

    bestFeatures: ['Beautiful and modern design ', 'Lag-free UX ', 'Completely responsive'],
    moreProjectImages: [
     `./resources/project-photos/we-ll-fix-it-project/header.jpg`,
     `./resources/project-photos/we-ll-fix-it-project/faq.jpg`,
     `./resources/project-photos/we-ll-fix-it-project/review.jpg `,
     `./resources/project-photos/we-ll-fix-it-project/contact.jpg`,
    ],
   },
  ],
 },
 {
  name: 'ChillBox',
  paragraphCard:
   "There is a new thing I am working on and that is ChillBox. A free Netflix alternative based on api's. Based purely on Javascript, this is my most ambitious project yet",
  picture1: `./resources/project-photos/ChillBox-project/navmenu.jpg`,
  picture2: `./resources/project-photos/ChillBox-project/cover-image.jpg`,
  picture3: `./resources/project-photos/ChillBox-project/genres.jpg `,
  picture4: `./resources/project-photos/ChillBox-project/movie-details.jpg`,
  seeMoreContainer: [
   {
    title: 'ChillBox',
    projectDescriptionParagraph: `ChillBox is supposed to be (for me at least) my way of working for the first time with a complex api. Even though it's be probably  illegal in about 1459 countries because it's based on a movie torrent api, I think it's a fun way of practicing. You can check out the project <a href="https://chillbox.tk/" target='_blank' class ='link'>here</a> `,
    paragraph1:
     " This project was soooo fun to make. Besides the fact that I am a cinema lover since I was a lil' boy, the api make's it really easy to work with complex data. I am glad I didn't flex for nothing when I was working with hard coded data (the Musicare Project for example)",
    subtitle1: 'Challenges',
    subtitleParagraph:
     "It isn't much to say here. I had some problems regarding speed and some difficult design choices but I think It turned out pretty good. The biggest challenge was the magnet link, because at first I couldn't find a player that supported magnet link playing. And I thought there is no point in making it from scratch because... when will I ever need a magnet link player like... ever.",
    subtitle2: 'Things I did to make my life easier',
    subtitleParagraph2:
     'I found a torrent magnet link player on github and, after a little tinkering,  It worked like a charm. Also, after I had the filtering logic down, I discovered that the API I was using had a filtering functionality build in. So I went for that.   By the way. I used the YTS api in case you were wondering ..',

    bestFeatures: [
     'A immense global selection of movies ',
     'Colorful design with lots of animations ',
     'Chance of filtering movies by genre, name, year, actor, director etc',
     'Movie suggestions by pressing the chance btn ',
     'Chance to watch a movie trailer before you embark on watching the full movie.',
     'Imdb ratings',
    ],
    moreProjectImages: [
     `./resources/project-photos/ChillBox-project/cover-image.jpg`,
     `./resources/project-photos/ChillBox-project/navmenu.jpg `,
     `./resources/project-photos/ChillBox-project/movie-details.jpg `,
     `./resources/project-photos/ChillBox-project/genres.jpg`,
     ,
    ],
   },
  ],
 },
 {
  name: 'Portofolio Website',
  paragraphCard:
   'There is no surprise that my personal portofolio si done by .. well ..me. I included this here because I stumbled upon some interesting problems along the way and  the way I managed to fix the is... at least interesting.',
  picture1: `./resources/project-photos/Portofolio-project/quote.jpg`,
  picture2: `./resources/project-photos/Portofolio-project/level.jpg `,
  picture3: `./resources/project-photos/Portofolio-project/certifications.jpg`,
  picture4: `./resources/project-photos/Portofolio-project/project.jpg`,
  seeMoreContainer: [
   {
    title: 'Personal Portofolio',
    projectDescriptionParagraph:
     "When I started working on this website I had no idea what I wanted to do. Or rather, I had to many ideas and didn't know which one to choose. After a brainstorming session a arrived at the conclusion that this website should reflect my personality and the visual effects, text, little jokes, even the Mafia:The city of lost heaven reference (Kudos to you  if you got it ), all reflect my personality.",
    paragraph1:
     ' The pictures above reflect what I think are the best aesthetic choices I made on this website  but not the hardest things to do.In other words, those are the thing I flex with to my mom.',
    subtitle1: 'Challenges',
    subtitleParagraph:
     "Oh... the auto-typing effect. I wanted to implement this in a project for a while but it was like it wasn't making sense form a logical perspective. But here, i embraced the storytelling  way of presenting my message and i think the auto-typing effect   fits right in.",
    subtitle2: 'How i Overcome them',
    subtitleParagraph2:
     'After trying to set up a trigger point  for the function that types the text to run, and failing  miserably, I started thinking about mouse event listeners for each card. At the time of writing this, I probably switched between mousemoove, mouseenter and mouseover more than 10 times... Probably in a few years I will laugh at the problems i encountered now but for 4 months of experience, i think is pretty good.  ',

    bestFeatures: [
     'Modern design that fully translates  my personality ',
     'Accent color that dynamically changes on every click ',
     'Beautiful 3d animation  on hover for the project cards in  the experience chapter',
     'auto typing effect with screen freeze and  black and white transition for added  nostalgia effect and emphasising the storytelling mood ',
     "The amazing parallax effect that even now, then i know how its done, makes me go 'wow'",
     'working contact form',
    ],
    moreProjectImages: [
     `./resources/project-photos/Portofolio-project/quote.jpg`,
     `./resources/project-photos/Portofolio-project/certifications.jpg`,
     `./resources/project-photos/Portofolio-project/form.jpg`,
     // `./resources/project-photos/Portofolio-project/level.jpg`,
     `./resources/project-photos/Portofolio-project/project.jpg`,
    ],
   },
  ],
 },

 {
  name: 'Quiz game',
  paragraphCard:
   "This is for the HR people who probably don't have the time to look at my very complex Musicare project and it's a  reason why they should. ",
  picture1: `./resources/project-photos/quiz-project/quiz-questions.jpg`,
  picture2: `./resources/project-photos/quiz-project/quiz-rules.jpg`,
  picture3: `./resources/project-photos/quiz-project/quiz-wrong-answer.jpg`,
  picture4: `./resources/project-photos/quiz-project/quiz-results.jpg `,

  seeMoreContainer: [
   {
    title: 'Quiz game',
    projectDescriptionParagraph:
     'As i said before. The quiz game is parte of a bigger project called Musicare, and it serves as a chance for a discount if the player wins. Below I will explain some of the functionality i implemented and why.',
    paragraph1: '',
    subtitle1: 'Challenges',
    subtitleParagraph:
     'Searching through the array of answers was awful. I felt like having a correct answer somewhere in the array of objects and checking each answer against it seemed like to much ram power with no real result ',
    subtitle2: 'How I filtered the answers',

    subtitleParagraph2:
     "Well. pretty simple actually. I gave the correct answer a correct key with a value of either correct or false, and filter that way. Now, thinking back, the false answer didn't have to have a correct propriety but .. yeah. that was my way of thinking  after like 3months of experience. You can check out the game  <a href='https://www.musicare.ml' target='_blank' class ='link'>here</a> by pressing on the Musicare hero text. And... the code is on Github under the musicare project  ",

    bestFeatures: [
     'The questions show up in a random order ',
     'There is a time limit on every question and after it passes, the buttons become unclickable.',
     'The game shows you the correct answer if you get it wrong',
     'There is a counter that keeps track of every right answer ',
     'Confetti  if you get  at least 9/10 answers right',
    ],
    moreProjectImages: [
     `./resources/project-photos/quiz-project/quiz-rules.jpg`,
     `./resources/project-photos/quiz-project/quiz-questions.jpg`,

     `./resources/project-photos/quiz-project/quiz-wrong-answer.jpg`,
     `./resources/project-photos/quiz-project/quiz-results.jpg `,
    ],
   },
  ],
 },
 {
  name: 'Musicare',
  paragraphCard:
   'My first ever project. And kind of an ambitious one. Done in 2 mouths and 0  experience to begin with, im managed to make a real life scenario website, all the features you normally see, and some bonus ones',
  picture1: `./resources/project-photos/Musicare-project/panels.jpg`,
  picture2: `./resources/project-photos/Musicare-project/landing.jpg `,
  picture3: `./resources/project-photos/Musicare-project/about.jpg`,
  picture4: `./resources/project-photos/Musicare-project/grid.jpg`,
  seeMoreContainer: [
   {
    title: 'Musicare',
    projectDescriptionParagraph:
     "I started this project in order to make the transition,  from being a full time flute player to a ambitious programmer, smoother. And also I thought it was an unique,  long-awaited and needed idea-implementation  for my country. The website it's made entirely by me,   with Html, Css and Javascript. No Wordpress, no React, nada.  You can check it out <a href='https://www.musicare.ml' target='_blank' class ='link'>here</a>. ",
    paragraph1:
     '  Ok. In the pictures above you can see some of the highlights from the website , but not all of them. As i said, this project is a fully functional website with lots of features that i will brag about down bellow',
    subtitle1: 'Challenges',
    subtitleParagraph: `The thing is .. On such a big project there  are bound to be things that  drive you crazy each commit. And please keep in mind that, at the time i had like 0h of  real experience . So, with that in mind, here is a list with things that MADE ME A BETTER PROGRAMMER in an attempt to fixing them:  
           <ul>
           <li>- the split landing page</li>
           <li>- the slides you see above</li>
           <li>- the  secret quiz for discounts</li>
           <li>- the freakin' filter for instruments</li>
           <li>- the contact/checkout forms because i didn't know any backend back then</li>
           <li>- making things as dry as possible</li>
           </ul>`,

    subtitle2: 'How i fixed stuff',
    subtitleParagraph2: ` First I want to say that,  after 4 months, when i finally finished the project, i fell in love with the programing way of thinking about problems.
             <h6>About fixes, the biggest problem was the filter for instruments because it's so complex. And after figuring out how to filter the instruments, I lost all the functionality when a instrument card was clicked. So I ended up repainting the whole instruments grid and calling the functions i needed for functionality inside the repaint function.</h6>
             <h6>The quiz was also pretty difficult to implement but  the way i structured my code  with all the questions and answers is pretty API-like. So, now i can flex about being able to filter thing from an API.</h6>
             <h6>The split landing page that implies that there is a different version of that website under each page, was pretty simple to do. I made two functions that painted on the screen only the things i needed for that specific website and called them through HTML.
             About the dry part.. there is always more work .
             </h6>
              `,
    bestFeatures: [
     'Modern but elegant design',
     'Split landing page',
     'Dynamic accent color for the different versions of teh website',
     'Complex instrument filter that filters alphabetically,  by name, by type, by price and by discount',
     'Secret quiz game for adding discount',
     'beautiful animations for the intro, news section, hovering over stuff and probably much more. ',
     'unique logo, fully made by me in Photoshop',
     'working contact and checkout form',
    ],
    moreProjectImages: [
     './resources/project-photos/musicare-project-image-slider.jpg',
     './resources/project-photos/musicare-project-grid-photo.jpg',
     './resources/project-photos/musicare-project-hero-photo.jpg',
     './resources/project-photos/checkout-form.jpg',
    ],
   },
  ],
 },
];
