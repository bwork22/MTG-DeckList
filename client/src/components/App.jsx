import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

import Search from './Search.jsx';
import DeckBuilder from './DeckBuilder.jsx';
import ListOfDecks from './ListOfDecks.jsx';


const App = () => {
  const [builderView, setBuilderView] = useState(false);
  const [deckListView, setDeckListView] = useState(false);
  const [deckList, setDeckList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [allDecks, setAllDecks] = useState([]);
  const [currDeckName, setCurrDeckName] = useState('');

  const handleBuilderView = () => {
    setBuilderView(true);
    setDeckListView(false);
  };

  const handleDeckListView = () => {
    setDeckListView(true);
    setBuilderView(false);
  };

  return (
    <div>
    <h1 id="title">MTG Commander Deck Builder</h1>
    <div id="deck-selection">
        <button className="btn" onClick={handleBuilderView}>Start New Deck</button><br></br>
        <button className="btn" onClick={handleDeckListView}>View Saved Decks</button>
      </div>
    <div>
      <div className="views">
        {deckListView ? <ListOfDecks setDeckList={setDeckList} setBuilderView={setBuilderView} setDeckListView={setDeckListView} allDecks={allDecks} setAllDecks={setAllDecks} setCurrDeckName={setCurrDeckName}/> : null}
        {builderView || deckList.length ? <DeckBuilder deckList={deckList} setDeckList={setDeckList} allDecks={allDecks} currDeckName={currDeckName} setCurrDeckName={setCurrDeckName}/> : <div className="deckbuilder">Select a deck or start a new one</div>}
      </div>
      <div className="views">
      <Search searchList={searchList} setSearchList={setSearchList} deckList={deckList} setDeckList={setDeckList}/>
      </div>
    </div>
    </div>
  );
}

export default App;