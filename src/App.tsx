import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import RefreshButton from './refresh.js';
import moment  from 'moment';

// Import styles
import './App.scss';

// Import entries
import entries from './entries.json';

type Entry = {
  quote: string
  source: string
  class: string
}

const bgFade = 'rgba(0,0,0,0.75)';
const nowStamp = (+ new Date()).toString();
const quoteBg = `linear-gradient(${bgFade}, ${bgFade}), 100%/cover no-repeat url(https://source.unsplash.com/collection/99958844/1600x900?r=${nowStamp})`;

function App() {
  const getEntryClass = (entryText:string) => {
    const totalWords = entryText.split(' ').length;
    return (totalWords <= 10) ? 'quote-sm' : 'quote-lg';
  };

  const pickRandomEntry = ():Entry => {
    let randomEntry = entries[Math.floor(Math.random() * entries.length)];
    return {
      quote: randomEntry.quote,
      source: randomEntry.source,
      class: getEntryClass(randomEntry.quote)
    };
  };
  
  const [entry, setEntry] = useState(pickRandomEntry());
  const [theDate, setTheDate] = useState(new Date());

  function tick() {
    setTheDate(new Date());
  }

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const setRandomEntry = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
      <div id="quotes" style={{background: quoteBg}}>
        <div id="quote" className={entry.class}>{entry.quote}</div>
        <div id="source">{entry.source}</div>
      </div>
      <a id="refresh" href="#" onClick={setRandomEntry}>
        <RefreshButton />
      </a>
      <div id="datetime">
        <div id="time">
          {moment(theDate).format('hh:mm A')}
        </div>
        <div id="date">
          {moment(theDate).format('ddd, D MMM yyyy')}
        </div>
      </div>
    </div>
  );
}

export default App;
