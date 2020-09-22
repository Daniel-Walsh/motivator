import React, { useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import CloseButton from './close.js';

// Import styles
import './App.scss';

// Import entries
import entries from './entries.json';

function App() {
  const quote = entries[Math.floor(Math.random() * entries.length)];
  const words = quote.quote.split(' ').length;
  const quoteClass = (words <= 10) ? 'quote-sm' : 'quote-lg';
  
  useEffect(() => {
    window.addEventListener('load', e => {
      document.getElementById('quotes')?.classList.add('loaded');
    });
  }, []);

  const closeMotivator = () => {
    window.close();
  };

  return (
    <div id="app">
      <div id="loader">
        <p>&nbsp;&nbsp;&nbsp;Seeking wisdom...</p>
        <PuffLoader color="#fff" size="70px" />
      </div>
      <div id="quotes">
        <div id="quote" className={quoteClass}>{quote.quote}</div>
        <div id="source">{quote.source}</div>
      </div>
      {/* eslint-disable-next-line */}
        <a id="close" href="#" onClick={closeMotivator}>
          <CloseButton />
        </a>
    </div>
  );
}

export default App;
