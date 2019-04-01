var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var burgers = require(path.join(__dirname, '../models/burgers'));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.text());
router.use(bodyParser.json({type: 'application/vnd.api+json'}));

router.get('/', function (req, res, next) {
    //get data from database
    var my_burgers = burgers.list_burgers(function(my_burgers) {
        console.log('my burgers');
        console.log(my_burgers);
        var uneaten = [];
        var devoured = [];
        my_burgers.forEach(burger => {
            if (burger.devoured == 0) {
                uneaten.push(burger);
            }
            else{
                devoured.push(burger);
            }
        });

        res.render('index', {
            burgers: my_burgers,
            uneaten_burgers: uneaten,
            devoured_burgers: devoured,
            //override any helpers here
            helpers: {
            }
            
        });
    });
});


router.get('/burger/update/:id?', function (req, res) {
    var burger_id= parseInt(req.params.id);
    burgers.devour_burger(burger_id, function() {
        res.redirect('/');
    });
});
router.post('/burger/add', function (req, res) {
    var burgerData = req.body;
    console.log(burgerData);
    burgers.create_burger(burgerData.burger_name, function() {
        res.redirect('/');
    });
});

module.exports = router;