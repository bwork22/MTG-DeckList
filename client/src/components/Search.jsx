import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchResults from './SearchResults.jsx';

const Search = ({searchList, setSearchList, deckList, setDeckList}) => {
  const [searchCard, setSearchCard] = useState('');
  const [searchRarity, setSearchRarity] = useState('');

  const handleCardName = (e) => {
    setSearchCard(e.target.value);
  }

  const handleRarity = (e) => {
    setSearchRarity(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const params = {
      name: searchCard
    };

    return axios.get('/api', {
      params: params
    })
    .then((response) => {
      setSearchList(response.data);
      return;
    })
    .catch((err) => console.error(err));
  }


  return (
    <div className="searchBox">
      <div id="search">
          <form onSubmit={handleSearch}>
            <h2>Card Search</h2>
            <input type="text" placeholder="Type in a card name..." value={searchCard} onChange={handleCardName}/>
            <span>       (Optional)Rarity: </span>
            <select value={searchRarity} onChange={handleRarity}>
              <option value="">--Choose Rarity--</option>
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
              <option value="Mythic Rare">Mythic Rare</option>
            </select>
            <input className="btn" type="submit" value="Search"/>
          </form>
        </div>
        <div>
          {searchList.length ? <SearchResults searchList={searchList} deckList={deckList} setDeckList={setDeckList}/> : null}
        </div>
      </div>
  );
}

export default Search;