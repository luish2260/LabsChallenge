const express = require('express'); // estoy requiriendo el módulo express
const cors = require('cors'); // estoy requiriendo el módulo cors
const fetch = require('node-fetch'); // estoy requiriendo el módulo node fetch
const app = express(); // y lo estoy empezando a utilizar

app.use(cors()); // esto es un middleware

app.get('/api/search/:q', (req, res) => {
 console.log('GET request to search'); // muestro por consola cada vez que entro a esta ruta
 fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + req.params.q)
  .then((res) => res.json())
  .then((data) => {
   res.json(data);
  });
});

app.listen(5000, () => {
 console.log('Server up on port 5000');
});