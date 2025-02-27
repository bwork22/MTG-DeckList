import React, { useState } from 'react';

const CardTile = ({ card, deckList, setDeckList }) => {

  const handleAddCard = () => {
    setDeckList([...deckList, card]);
  };

  return (
    <div className="card-tile">
      <strong>{card.name}</strong><br></br>
      <img src={card.imageUrl} width="200" height="275"></img>
      <p>Set: {card.set} - {card.setName}</p>
      <button className="btn"  onClick={handleAddCard}>Add to Deck</button>
    </div>
  )
}

export default CardTile;