// src/Game.js
import React, { useState, useEffect } from 'react';

function Game() {
  const [santaPosition, setSantaPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  
  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500); // Jump duration
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSantaPosition((prevPosition) => prevPosition + 20); // Move Santa forward
  //   }, 100);
    
  //   return () => clearInterval(interval); // Clean up interval when component is removed
  // }, []);

  return (
    <div className="game-area">
      {/* Display Santa */}
      <div className="santa" style={{ left: `${santaPosition}px`, bottom: isJumping ? '400px' : '170px' }} onClick={jump}>
        🎅
      </div>

      {/* Ground */}
      <div className="ground"></div>
    </div>
  );
}

export default Game;
