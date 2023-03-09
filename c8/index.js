const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/calculator', async (req, res) => {
    try {
        let output = await parseTemplate('calculator_form', 'result');
        res.send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }
});

app.post('/calculator', async (req, res) => {
    let result = '';
    switch(req.body.op) {
        case 'sobiranje':
            result = `${Number(req.body.a) + Number(req.body.b)}`;
            break;
        case 'odzemanje':
            result = `${Number(req.body.a) - Number(req.body.b)}`;
            break;
        case 'delenje':
            result = `${Number(req.body.a) / Number(req.body.b)}`;
            break;
        case 'mnozenje':
            result = `${Number(req.body.a) * Number(req.body.b)}`;
            break;
        default:
            result = `Nepoznat operator!`;
            break;
    }

    try {
        let output = await parseTemplate('calculator', result);
        res.send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }

});

const parseTemplate = async  (template, data) => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/templates/${template}.html`, 'utf8', (err, content) => {
            if(err) {
                return fail(err);
            }
            content = content.replace('{{data}}', data);
            return success(content);
        });
    });
};

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started on port 10000!');
});