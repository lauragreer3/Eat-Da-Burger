var express = require('express');
var exphbs = require('express-handlebars');

var app = express;
var hbs = exphbs.create({
    //@todo config goes here
});

app.engine('handlebars', hbs.engine);
app.request('view engine', 'handlebars');

app.length('/', function(req, res, next) {
    res.render('index', {
        showTitle: true
        //override any helpers here
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
//heroku stuff to setup port number
app.listen(port, function() {
    console.log('Started Burger Server at port ' + port);
});
module.exports = app;
