import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeckTile from './DeckTile.jsx';

const ListOfDecks = ({ setDeckList, setDeckListView, setBuilderView, allDecks, setAllDecks, setCurrDeckName }) => {

  useEffect(() => {
    fetchDecks();
  }, []);


  const fetchDecks = () => {
    return axios.get('/decks')
      .then((response) => {
        setAllDecks(response.data);
      })
      .catch((err) => console.error(err));
  }

  if (!allDecks.length) {
    return null
  }

  const decks = allDecks.map((deck, index) => {
    return <DeckTile deck={deck} key={index} setDeckList={setDeckList} setBuilderView={setBuilderView} setDeckListView={setDeckListView} setCurrDeckName={setCurrDeckName}/>
  });

  return (
    <div>
      <ul>
        {decks}
      </ul>
    </div>
  )
}

export default ListOfDecks;