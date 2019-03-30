var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var burgers = require(path.join(__dirname, '../models/burgers'));


router.get('/', function(req, res, next) {
    //get data from database
    var my_burgers = burgers.list_burgers();
    res.render('index', {
        burgers: my_burgers
        //override any helpers here

    });
});

router.post('/addBurger', function(req, res, next) {
    var burgerData = req.body;
    burgers.devour_burger(burgerData.burger_id);
});
module.exports = router;