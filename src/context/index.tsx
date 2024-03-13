'use client';
import { createContext, useState } from 'react';

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [gameContext, setGameContext] = useState({
    questionNumber: 0,
    reward: '$0'
  });

  return (
    <GameContext.Provider value={{ gameContext, setGameContext }}>
      {children}
    </GameContext.Provider>
  );
};
