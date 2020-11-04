import './App.css';
import './searchMovie';
import SearchMovie from './searchMovie';
import SearchCount from './searchCount';
import { useState } from 'react';
import React from 'react';

import ResultContext from './RestContext';

function App() {

  const [count, setCount] = useState(0);
  
  const updateCount = (val) => {
    setCount(val)
  }
  return (
      <ResultContext.Provider value={{count,updateCount}}>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchCount></SearchCount>
        <SearchMovie></SearchMovie>
      </div>
      </ResultContext.Provider>
  );
}

export default App;
