import React, { createContext, useContext, useState } from 'react';

const WordContext = createContext();

export const useWord = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error('useWord must be used within a WordProvider');
  }
  return context;
};

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState('');

  const updateWord = (newWord) => {
    setWord(newWord);
  };

  return (
    <WordContext.Provider value={{ word, updateWord }}>
      {children}
    </WordContext.Provider>
  );
};