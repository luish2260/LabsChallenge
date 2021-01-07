const express = require('express'); 
const cors = require('cors'); 
const fetch = require('node-fetch'); 
const app = express(); 

app.use(cors()); 

app.get('/api/search/:q', (req, res) => {
  console.log('GET request to search'); 
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + req.params.q)
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
});

app.listen(5000, () => {
  console.log('Server up on port 5000');
});