const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let data = { 
    ime: 'Pero', 
    prezime: 'Peroski',
    niza: ['Skopje', 'Prilep', 'Bitola', 'Ohrid', 'Kumanovo'],
    studenti: [
        {ime: 'Jovan', prezime: 'Jovanoski', prosek: 9.2},
        {ime: 'Stanko', prezime: 'Stankovski', prosek: 7.1},
        {ime: 'Petar', prezime: 'Petreski', prosek: 8.4},
        {ime: 'Ivan', prezime: 'Ivanoski', prosek: 7.0}
    ]
    };
    res.render('index', data)
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Service started on port: 10000');
});