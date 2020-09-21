import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import quotes from './quotes.json';

function App() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="app loaded">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="quote">{quote.quote}</div>
      <div id="source">{quote.source}</div>
    </div>
  );
}

export default App;
