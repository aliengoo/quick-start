(function () {
  'use strict';

  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');

  app.use(express.static('../public'));
  app.use(bodyParser.json());

  app.get('/test2', function (req, res) {
    res.send('Hello, World!');
  });

  app.listen(3001, function() {
    console.log('Listening');
  });

}());
