"use client"
import React, { useRef } from 'react';
import anime from 'animejs';

interface BoxProps {
  text: string;
}

function Box({ text }: BoxProps) {
  const boxRef = useRef(null);

  const handleClick = () => {
    anime({
      targets: boxRef.current,
      scale: [
        {value: 0.1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
    });
  };

  // Teile den Text an Leerzeichen
  const textParts = text.split(' ');

  return (
    <div 
      ref={boxRef}
      className="border-2 p-40 flex items-center justify-center h-full w-full"
      onClick={handleClick}
    >
      <div className="text-center">
        {textParts.map((part, index) => (
          <div key={index} className="text-6xl">{part}</div>
        ))}
      </div>
    </div>
  );
}

export default Box;
