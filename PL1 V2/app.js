express = require('express');

app = new express();

app.get('/', function(req, res) {
    console.log("a responder em /");
    res.send('Hello Express!');
});

app.get('/euro', function (req, res) {
    res.set("content-type", 'application/json');
    res.send('{"numeros":[1,2,3,4,5,6], "estrelas":[1,2]}');
});
app.listen(3000);