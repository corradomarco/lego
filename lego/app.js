
const express = require('express');
const legoo = require('./legoo.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    legoo: legoo.legoo //Passa il vettore profiles alla pagina index.pug
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});



app.get('/profile', (req, res) => {
  const l2 = legoo.legoo.find(p => p.id == req.query.id);
  res.render('profile', {
    title: `About ${l2.setName} `,
    l2,
  });
});