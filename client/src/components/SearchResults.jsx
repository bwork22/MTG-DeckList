import React, { useState } from 'react';
import CardTile from './CardTile.jsx';

const SearchResults = ({ searchList, deckList, setDeckList }) => {
  const cardTiles = searchList.map((card, index) => {
    return <CardTile key={index} card={card} deckList={deckList} setDeckList={setDeckList}/>
  })

  return (
    <div className="container">
      {cardTiles}
    </div>
  );
}

export default SearchResults;