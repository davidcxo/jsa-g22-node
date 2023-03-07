const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/zdravo', (req, res) => {
    res.send('Zdravo svetu');
});

app.get('/zdravo/:ime', (req, res) => {
    res.send(req.params.ime); // req.params.ime = :ime (vo URL-to)
});

app.get('/calculator/:op/:a/:b', (req, res) => {
    switch(req.params.op) {
        case 'sobiranje':
            return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
        case 'odzemanje':
            return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
        case 'delenje':
            return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
        case 'mnozenje':
            return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
        default:
            return res.send(`Nepoznat operator!`);
    }
});

app.post('/calculator', (req, res) => {
    console.log(req.body);
    res.send(req.body.operacija);
});

app.listen(10001, err => {
    if(err) return console.log(err);
    console.log('Server started successfully on port 10000');
});