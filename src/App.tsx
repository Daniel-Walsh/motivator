import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import RefreshButton from './refresh.js';

// Import styles
import './App.scss';

// Import entries
import entries from './entries.json';

function App() {
  const quote = entries[Math.floor(Math.random() * entries.length)];
  const words = quote.quote.split(' ').length;
  const quoteClass = (words <= 10) ? 'quote-sm' : 'quote-lg';

  let randomEntry = entries[Math.floor(Math.random() * entries.length)];

  const [entry, setEntry] = useState({quote: randomEntry.quote, source: randomEntry.source});
  
  useEffect(() => {
    window.addEventListener('load', e => {
      document.getElementById('quotes')?.classList.add('loaded');
    });
  }, []);

  const pickRandomEntry = () => {
    let randomEntry = entries[Math.floor(Math.random() * entries.length)]
    setEntry({quote: randomEntry.quote, source: randomEntry.source});
  };

  return (
    <div id="app">
      <div id="loader">
        <p>&nbsp;&nbsp;&nbsp;Seeking wisdom...</p>
        <PuffLoader color="#fff" size="70px" />
      </div>
      <div id="quotes">
        <div id="quote" className={quoteClass}>{entry.quote}</div>
        <div id="source">{entry.source}</div>
      </div>
      {/* eslint-disable-next-line */}
        <a id="close" href="#" onClick={pickRandomEntry}>
          <RefreshButton />
        </a>
    </div>
  );
}

export default App;
