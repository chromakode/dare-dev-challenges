var express = require('express');
var app = express();

app.use(require('connect-livereload')({ port: 19999 }));

app.use(express.static(__dirname, {
  // Don't cache anything.
  maxAge: 0
}));

app.listen('8888');
