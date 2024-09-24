var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/demosite/index.html'));
});

app.get('/list', function (req, res) {
    res.sendFile(__dirname+ "/exampledata.txt");
});

app.get('/jsondata', function (req, res) {
    var data = require('./exampledata2.json');
    res.json(data);
});

app.get('/details', function (req, res) {
    var data = require('./exampledata2.json');
    var results = '<table border="1">';

    for (var i=0; i < data.length; i++) {
        results += 
        '<tr>'+
        '<td>'+data[i].Name+'</td>'+
        '<td>'+data[i].Email+'</td>'+
        '</tr>';
    }
    res.send(results);
});

app.get('/add', function (req, res) {
    var data = require('./exampledata2.json');

    data.push({
        "Name": "Mika Stenberg",
        "Company": "Laurea",
        "Email": "mika@laurea.fi",
        "Date": "30/3/2016 \r\n"
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log("It's saved!");
    });

    res.send("Saved the date to the file. Browse to the /details to see the contents of the file.")
});

app.get('*', function (req, res) {
    res.send("Can't find the requested page", 404);
});

app.listen(8080, function () {
    console.log('Example app is listening on port 8080!');
});