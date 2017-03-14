var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')))

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});