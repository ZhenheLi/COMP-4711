console.log("app is starting");

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text());

function listen(){
    console.log("start listen");
}

app.listen(process.env.PORT ||3000, listen);

app.get('/get', (req, res) => {
    var data = fs.readFileSync('artist.json');
    var obj = JSON.parse(data);
    res.send(obj);
})


app.post('/add', (req, res) => {
    var data = req.body;
    console.log(data);
    fs.writeFileSync("artist.json", JSON.stringify(data));
    res.send(); 
    
});