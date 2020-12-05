const express = require('express');//estoy requiriendo el módulo express
const app = express();//y lo estoy empezando a utilizar

app.get('/',(req,res) => {
  res.send('Hola gato!');
});

app.get('/about',(req,res) => {
  res.send('Hola gato!, estas en /about!');
});

app.get('/about/tuvieja22',(req,res) => {
  res.send('Hola gato!, estas en /about/tuvieja22!');
});

app.listen(5000,() => {
  
  console.log('Server up on port 5000');

});