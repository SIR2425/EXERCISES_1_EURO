express = require('express');

app = new express();


app.use(express.static('public'));

app.get('/hello', function (req, res) {
    return res.send('Hello');
});

app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');  // Set header to JSON type
    //return res.send('{numeros:[1,2,3,4,5], stars:[1,2]}');
    return res.json(bet())
});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}


function bet() {
    numbers = generate(5, 1, 50);
    stars = generate(2, 1, 12);
    newbet = {
        "numbers": numbers,
        "starts" : stars
    }
    return newbet;
}


app.listen(3000, () => {console.log("listening")});