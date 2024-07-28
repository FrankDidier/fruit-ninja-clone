import React from 'react';

function StartScreen({ startGame }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <button onClick={startGame} style={{ fontSize: '24px', padding: '10px 20px' }}>Play</button>
    </div>
  );
}

export default StartScreen;
