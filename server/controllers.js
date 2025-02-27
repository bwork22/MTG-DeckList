const Deck = require('./db/models.js');
const mongoose = require('mongoose');

const getDecks = async (req, res) => {
  const decks = await Deck.find();
  res.send(decks);
}

const addDeck = async (req, res) => {
  console.log(req.body)
  Deck.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => console.error(err))
}

const updateDeck = async (req, res) => {
  console.log(req.body);
  const { deckName } = req.params;
  Deck.updateOne({deckName: deckName}, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
}

module.exports = { getDecks, addDeck, updateDeck };