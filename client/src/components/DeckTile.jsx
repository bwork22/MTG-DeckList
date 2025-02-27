import React from 'react';

const DeckTile = ({ deck, setDeckList, setDeckListView, setBuilderView, setCurrDeckName }) => {

  const viewDeck = (selectedDeck) => {
    setDeckList(selectedDeck.deckList);
    setCurrDeckName(selectedDeck.deckName);
    setDeckListView(false);
    setBuilderView(true);
  }

  return (
    <li>
      <span>{deck.deckName}</span><button className="deck-btn" onClick={() => viewDeck(deck)}>View Deck</button>
    </li>
  )
}

export default DeckTile;