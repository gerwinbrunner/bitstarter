var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(request, response) {
  var text = fs.readFileSync("index.html")
  response.send(text+"");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});