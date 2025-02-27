const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const { getDecks, addDeck, updateDeck } = require('./controllers.js');

const apiURL = 'https://api.magicthegathering.io/v1';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

// spin-up db
mongoose.connect('mongodb://localhost:27017/decks');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('Connected to DECKS db'));



// Search API for specific cards
app.get('/api', async (req, res) => {
  let params = req.query;
  const response = await axios.get(`${apiURL}/cards`, {params: params})
    .then((response) => {
      res.set('Access-Control-Allow-Origin' , '*');
      let cardList = response.data.cards;
      return cardList;
    })
    .catch((err) => console.error(err));

    res.send(response);
});

// Saving / Accessing Decks to/from DB
app.get('/decks', getDecks);
app.post('/decks', addDeck);
app.put('/decks/:deckName', updateDeck);

app.listen(3000, () => {
  console.log('listening on port 3000');
});