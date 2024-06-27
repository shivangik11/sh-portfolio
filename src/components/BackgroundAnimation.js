// // components/BackgroundAnimation.js
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import styled from 'styled-components';

// const Background = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: -1;
//   background-color: black;
// `;

// const Dot = styled.div`
//   position: absolute;
//   width: 400px;
//   height: 400px;
//   background: radial-gradient(circle, rgba(246, 45, 147, 0.3) 0%, rgba(246, 45, 147, 0) 70%);
//   border-radius: 50%;
//   pointer-events: none;
//   mix-blend-mode: screen;
// `;

// const BackgroundAnimation = () => {
//   const dotRefs = useRef([]);

//   useEffect(() => {
//     const dots = dotRefs.current;

//     dots.forEach((dot, index) => {
//       gsap.to(dot, {
//         x: () => Math.random() * window.innerWidth,
//         y: () => Math.random() * window.innerHeight,
//         duration: 4 + Math.random() * 20,
//         repeat: -1,
//         yoyo: true,
//         ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })'
//       });
//     });

//     const handleMouseMove = (event) => {
//       dots.forEach((dot) => {
//         gsap.to(dot, {
//           x: event.clientX - dot.offsetWidth / 2,
//           y: event.clientY - dot.offsetHeight / 2,
//           duration: 1,
//           ease: 'power3.out'
//         });
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <Background>
//       {Array(10).fill().map((_, i) => (
//         <Dot key={i} ref={(el) => (dotRefs.current[i] = el)} />
//       ))}
//     </Background>
//   );
// };

// export default BackgroundAnimation;


// components/BackgroundAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: black;

`;

const Dot = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(246, 45, 147, 0.3) 0%, rgba(246, 45, 147, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
`;

const BackgroundAnimation = () => {
  const dotRefs = useRef([]);

  useEffect(() => {
    const dots = dotRefs.current;

    dots.forEach((dot, index) => {
      gsap.to(dot, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        duration: 4 + Math.random() * 20,
        repeat: -1,
        yoyo: true,
        ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })'
      });
    });

    const handleMouseMove = (event) => {
      dots.forEach((dot) => {
        gsap.to(dot, {
          x: event.clientX - dot.offsetWidth / 2,
          y: event.clientY - dot.offsetHeight / 2,
          duration: 1,
          ease: 'power3.out'
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Background>
      {Array(10).fill().map((_, i) => (
        <Dot key={i} ref={(el) => (dotRefs.current[i] = el)} />
      ))}
    </Background>
  );
};

export default BackgroundAnimation;
