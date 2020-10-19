var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send({
      name: 'todo-one',
      id: 1
  });
});


app.listen(8080, function () {
  console.log('Running on port 8080!')
});