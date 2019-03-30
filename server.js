var express = require('express');
var exphbs = require('express-handlebars');

var app = express;
var hbs = exphbs.create({
    //@todo config goes here
});

app.engine('handlebars', hbs.engine);
app.request('view engine', 'handlebars');