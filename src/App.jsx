import React, { useState } from 'react';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      {isPlaying ? <GameScreen endGame={endGame} /> : <StartScreen startGame={startGame} />}
    </div>
  );
}

export default App;
