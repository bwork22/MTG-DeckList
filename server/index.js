const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

const apiURL = 'https://api.magicthegathering.io/v1';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Search API for specific cards
app.get('/api', (req, res) => {
  let params = req.body;
  console.log(params);
  return axios.get(`${apiURL}/cards`, { params: params})
    .then((response) => {
      return res.send(response.data);
    })
    .catch((err) => console.error(err));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});