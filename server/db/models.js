const mongoose = require('mongoose');


const deckSchema = new mongoose.Schema({
  deckName: String,
  deckList: Array
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;