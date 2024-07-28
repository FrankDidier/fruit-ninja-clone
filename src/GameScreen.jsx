import React, { useState, useEffect, useRef } from 'react';
import GameElement from './GameElement';

function GameScreen({ endGame }) {
  const [score, setScore] = useState(0);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newElements = elements.map(el => ({
        ...el,
        y: el.y + el.speed,
      })).filter(el => el.y < window.innerHeight);

      if (newElements.length < elements.length) {
        endGame();
      } else {
        setElements(newElements);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [elements, endGame]);

  const handleSwipe = (id) => {
    setElements(elements.filter(el => el.id !== id));
    const el = elements.find(el => el.id === id);
    setScore(score + el.points);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const type = ['square', 'circle', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)];
      const newElement = {
        id: Date.now(),
        type: type,
        y: 0,
        speed: { square: 5, circle: 6.25, triangle: 7.5, hexagon: 8.75 }[type],
        points: { square: 1, circle: 2, triangle: 3, hexagon: 4 }[type],
      };
      setElements([...elements, newElement]);
    }, 1000);

    return () => clearInterval(interval);
  }, [elements]);

  return (
    <div>
      <div style={{ position: 'fixed', top: 10, left: 10, fontSize: '24px' }}>Score: {score}</div>
      {elements.map(el => (
        <GameElement key={el.id} el={el} handleSwipe={handleSwipe} />
      ))}
    </div>
  );
}

export default GameScreen;
