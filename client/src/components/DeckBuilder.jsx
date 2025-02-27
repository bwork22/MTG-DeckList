import React, { useState } from 'react';
import axios from 'axios';

const DeckBuilder = ({ deckList, setDeckList, allDecks, currDeckName, setCurrDeckName }) => {

  if (!deckList.length) {
    return <p>Start Adding Cards to Your Deck</p>
  }

  const saveDeck = () => {
    if (currDeckName === '') {
      let deckName = prompt('Name your deck');

      const deckToSave = {
        deckName: deckName,
        deckList: deckList
      };

      return axios.post('/decks', deckToSave)
        .then(() => {
          setDeckList([]);
          return;
        })
        .catch((err) => console.error(err));
    } else {
      const deckToSave = {
        deckName: currDeckName,
        deckList: deckList
      };

      return axios.put(`/decks/${currDeckName}`, {deckList: deckList})
        .then(() => {
          setDeckList([]);
          setCurrDeckName('');
          return;
        })
        .catch((err) => console.error(err));
    }
  };

  const filterByType = (type) => {
    let filtered = deckList.filter((card) => {
      return card.type.includes(type);
    });

    const items = filtered.map((card, index) => {
      return (
        <li key={index} className="decklist-card">
          <div className="decklist-item">{card.name}</div>
          <div className="decklist-img">
            <img src={card.imageUrl} width="200" height="275"></img>
          </div>
        </li>
      )
    });
    return items;
  }

  const creaturesList = filterByType('Creature');
  const instantsList = filterByType('Instant');
  const sorceriesList = filterByType('Sorcery');
  const enchantmentsList = filterByType('Enchantment');
  const artifactsList = filterByType('Artifact');
  const planeswalkersList = filterByType('Planeswalker');
  const landsList = filterByType('Land');




  return (
    <div className="deckbuilder">
      {currDeckName ? <h2>{currDeckName}</h2> : <h2>New Deck</h2>}
      <p>{deckList.length}/100 cards</p>
      <div className="decklist">
        <ul className="deck-container">
          {creaturesList.length ? <div><strong style={{textDecoration:'underline'}}>Creatures</strong>{creaturesList}</div> : null}
          {instantsList.length ? <div><strong style={{textDecoration:'underline'}}>Instants</strong>{instantsList}</div> : null}
          {sorceriesList.length ? <div><strong style={{textDecoration:'underline'}}>Sorceries</strong>{sorceriesList}</div> : null}
          {enchantmentsList.length ? <div><strong style={{textDecoration:'underline'}}>Enchantments</strong>{enchantmentsList}</div> : null}
          {artifactsList.length ? <div><strong style={{textDecoration:'underline'}}>Artifacts</strong>{artifactsList}</div> : null}
          {planeswalkersList.length ? <div><strong style={{textDecoration:'underline'}}>Planeswalkers</strong>{planeswalkersList}</div> : null}
          {landsList.length ? <div><strong style={{textDecoration:'underline'}}>Lands</strong>{landsList}</div> : null}
        </ul>
      </div>
      <button onClick={saveDeck}>Save Deck</button>
      <button onClick={() => setDeckList([])}>Clear</button>
    </div>
  )
}

export default DeckBuilder;