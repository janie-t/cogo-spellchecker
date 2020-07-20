import { hot } from 'react-hot-loader';
import React from 'react';
import Main from './page/main';
import 'fontsource-roboto/cyrillic-400-normal.css';
import 'fontsource-roboto/cyrillic-700-normal.css';

import './App.css';

const App = () => (
  <div className="App">
    <h1>Spellchecker</h1>
    <p>Welcome! This spelling checker uses Ogden’s Basic English list of 850 words.</p>
    <p>Type your word into the box below, then click 'Check&nbsp;Now'.</p>
    <Main />
  </div>
);

export default hot(module)(App);
