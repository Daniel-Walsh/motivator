import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import RefreshButton from './refresh.js';

// Import styles
import './App.scss';

// Import entries
import entries from './entries.json';

type Entry = {
  quote: string
  source: string
  class: string
}

function App() {
  const getEntryClass = (entryText: string) => {
    const totalWords = entryText.split(' ').length;
    return (totalWords <= 10) ? 'quote-sm' : 'quote-lg';
  };

  const pickRandomEntry = (): Entry => {
    let randomEntry = entries[Math.floor(Math.random() * entries.length)];
    return {
      quote: randomEntry.quote,
      source: randomEntry.source,
      class: getEntryClass(randomEntry.quote)
    };
  };
  
  const [entry, setEntry] = useState(pickRandomEntry());

  const setRandomEntry = () => {
    setEntry(pickRandomEntry());
  };
  
  useEffect(() => {
    window.addEventListener('load', e => {
      document.getElementById('quotes')?.classList.add('loaded');
    });
  }, []);

  return (
    <div id="app">
      <div id="loader">
        <p>&nbsp;&nbsp;&nbsp;Seeking wisdom...</p>
        <PuffLoader color="#fff" size="70px" />
      </div>
      <div id="quotes">
        <div id="quote" className={entry.class}>{entry.quote}</div>
        <div id="source">{entry.source}</div>
      </div>
      {/* eslint-disable-next-line */}
        <a id="close" href="#" onClick={setRandomEntry}>
          <RefreshButton />
        </a>
    </div>
  );
}

export default App;
