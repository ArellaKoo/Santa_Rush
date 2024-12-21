// App.jsx
import React from 'react';
import './App.css';
import Game from './game';  // No need for the .jsx extension here

function App() {
  return (
    <div className="App">
      <h1>Santa Rush Game</h1>
      <Game /> {/* Render the Game component */}
    </div>
  );
}

export default App;
