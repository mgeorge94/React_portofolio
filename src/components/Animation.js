export const fade = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { duration: 4 } },
};

export const pageAnimation = {
 hidden: { opacity: 0, y: 300 },
 show: { opacity: 1, y: 0, transition: { duration: 1 } },
 exit: { opacity: 0 },
};
export const gridAnimation = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
export const gridElementAnimation = {
 hidden: { x: 1000, opacity: 0 },
 show: { x: 0, opacity: 1, transition: { duration: 1 } },
};
export const titleAnimation = {
 hidden: { opacity: 0 },
 show: { opacity: 1, transition: { duration: 2 } },
};
export const containerAnimation = {
 hidden: { x: 100 },
 show: { x: 0, transition: { duration: 1 } },
};
export const rotatePageAnimation = {
 hidden: { x: '-130%', skew: '45deg' },
 show: { x: '100%', skew: '0deg', transition: { duration: 2, ease: 'easeOut' } },
};
export const pageAnimationContainer = {
 hidden: { opacity: 1 },
 show: { opacity: 1, transition: { duration: 2, when: 'afterChildren', staggerChildren: 0.25, ease: 'easeOut' } },
};
