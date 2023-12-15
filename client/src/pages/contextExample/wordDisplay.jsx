
//use the context on a page like this if the parent page (App) is wrapped in <WordProvider>:
import React from 'react';
import { useWord } from './WordContext';

const WordDisplay = () => {
  const { word } = useWord();

  return (
    <div>
      <h2>Address Display</h2>
      <p>Address: {word}</p>
    </div>
  );
};

export default WordDisplay;


//Or call entire component at App. 
  
import { WordProvider } from './WordContext';
import WordDisplay from './WordDisplay'
import WordInput from './wordInput'

function App() {
  return (
    <WordProvider>
      <div>
        <h1>Simple Context Example</h1>
        <WordInput />
        <WordDisplay />
      </div>
    </WordProvider>
  );
};
export default App;