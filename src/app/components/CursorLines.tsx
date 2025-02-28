"use client"
import { useEffect, useState } from "react";
import "./styles/cursorlines.css"

const CursorLines = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="cursor-lines">
      <div className="vertical-line" style={{ left: `${mousePosition.x}px` }}></div>
      <div className="horizontal-line" style={{ top: `${mousePosition.y}px` }}></div>
    </div>
  );
};

export default CursorLines;
