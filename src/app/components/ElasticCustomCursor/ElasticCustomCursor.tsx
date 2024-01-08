// // src/components/ElasticCustomCursor/ElasticCustomCursor.tsx
// import React, { useEffect } from 'react';
// import styles from './ElasticCustomCursor.module.css'; // Säkerställ att sökvägen är korrekt

// const ElasticCustomCursor: React.FC = () => {
//   useEffect(() => {
//     const cursorElement = document.createElement('div');
//     cursorElement.className = styles.cursor; // Använd klassnamn från styles-objektet
//     const circleElement = document.createElement('div');
//     circleElement.className = styles.cursorCircle; // Använd klassnamn från styles-objektet

//     document.body.appendChild(cursorElement);
//     cursorElement.appendChild(circleElement);

//     interface Coordinates {
//       x: number;
//       y: number;
//     }

//     const mouse: Coordinates = { x: 0, y: 0 };
//     const previousMouse: Coordinates = { x: 0, y: 0 };
//     let currentScale = 0;
//     let currentAngle = 0;

//     const speed = 0.17;
//     const maxAxisVelocity = 100;
//     const maxVelocity = Math.sqrt(maxAxisVelocity ** 2 + maxAxisVelocity ** 2);
//     const minScale = 0.5;
//     const squeezeIntensity = 4;

//     const clamp = (value: number, minMax: number): number => {
//       return Math.min(Math.max(value, -minMax), minMax);
//     };

//     const mouseMoveHandler = (e: MouseEvent): void => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener('mousemove', mouseMoveHandler);

//     const tick = (): void => {
//       const cursorX = cursorElement.getBoundingClientRect().left + cursorElement.clientWidth / 2;
//       const cursorY = cursorElement.getBoundingClientRect().top + cursorElement.clientHeight / 2;

//       const deltaX = mouse.x - cursorX;
//       const deltaY = mouse.y - cursorY;
      
//       cursorElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

//       const deltaMouseX = mouse.x - previousMouse.x;
//       const deltaMouseY = mouse.y - previousMouse.y;
//       previousMouse.x = mouse.x;
//       previousMouse.y = mouse.y;

//       const velocityX = clamp(deltaMouseX, maxAxisVelocity);
//       const velocityY = clamp(deltaMouseY, maxAxisVelocity);
//       const mouseVelocity = Math.sqrt(velocityX ** 2 + velocityY ** 2); 
//       const scaleValue = (clamp(mouseVelocity * squeezeIntensity, maxVelocity) / maxVelocity) * minScale;
      
//       currentScale += (scaleValue - currentScale) * speed;
//       let scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
      
//       const angle = (180 * Math.atan2(deltaY, deltaX)) / Math.PI;
//       if (mouseVelocity > 5) {
//         currentAngle = angle;
//       }
      
//       circleElement.style.transform = `rotate(${currentAngle}deg) ${scaleTransform}`;
      
//       window.requestAnimationFrame(tick);
//     };

//     tick();

//     return () => {
//       window.removeEventListener('mousemove', mouseMoveHandler);
//       document.body.removeChild(cursorElement);
//     };
//   }, []);

//   // Vi returnerar null eftersom cursorElement skapas och hanteras helt i useEffect
//   return null;
// };

// export default ElasticCustomCursor;
