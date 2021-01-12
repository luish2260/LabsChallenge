const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
let objCache = {}; //lo uso para no disparar 2 o más veces la búsqueda repetida a la api
let name;

app.use(cors());

app.get('/api/search/:q', (req, res) => {
  name = req.params.q; //me guardo el parámetro de la búsqueda
  if (objCache[name]) {
    console.log('GET request to cache');
    res.json(objCache[name]);
  }
  else {
    console.log('GET request to search');
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + req.params.q + '&limit=30') //después setear limit en 30
      .then(res => res.json())
      .then(data => {
        objCache[name] = data; //guardo la promesa en un objeto 
        res.json(data);
      });
  }
});

app.listen(5000, () => {
  console.log('Server up on port 5000');
});