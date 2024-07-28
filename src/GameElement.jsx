import React from 'react';

const shapes = {
  square: { width: 50, height: 50, backgroundColor: 'red' },
  circle: { width: 50, height: 50, borderRadius: '50%', backgroundColor: 'blue' },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderBottom: '50px solid green',
  },
  hexagon: {
    width: 50,
    height: 28.87,
    backgroundColor: 'yellow',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  },
};

function GameElement({ el, handleSwipe }) {
  const style = {
    position: 'absolute',
    top: el.y,
    left: Math.random() * (window.innerWidth - 50),
    ...shapes[el.type],
  };

  return (
    <div style={style} onClick={() => handleSwipe(el.id)} />
  );
}

export default GameElement;
