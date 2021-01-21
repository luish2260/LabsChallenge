const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
let objCache = {};
let name; //objCache[name]

app.use(cors());
//ruta para busqueda en general
app.get('/api/search/:q', (req, res) => {
  name = req.params.q;
  if (false) {
    console.log('GET request to CACHE');
    res.json(objCache[name]);
  }
  else {
    console.log('GET request to API');
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + req.params.q)
      .then(res => res.json())
      .then(data => {
        objCache[name] = data;
        res.json(data);
      });
  }
});

app.listen(5000, () => {
  console.log('Server up on port 5000');
});