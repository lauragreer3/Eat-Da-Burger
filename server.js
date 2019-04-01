var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var burgerController = require(path.join(__dirname, '/controllers/burgers_controller'));

var app = express();
var hbs = exphbs.create({
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', burgerController);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
//heroku stuff to setup port number
app.listen(port, function() {
    console.log('Started Burger Server at port ' + port);
});
module.exports = app;
