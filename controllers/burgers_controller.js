var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var burgers = require(path.join(__dirname, '../models/burgers'));


router.get('/', function (req, res, next) {
    //get data from database
    var my_burgers = burgers.list_burgers(function(my_burgers) {
        console.log('my burgers');
        console.log(my_burgers);
        res.render('index', {
            burgers: my_burgers,
            uneaten: [],
            devoured: [],
            //override any helpers here
            helpers: {
                show_uneaten_burgers: function (burgers) {
                    // var uneaten_html = '<ol class="devoured">\n';
                    burgers.forEach(burger => {
                        if (burger.devoured == 0) {
                            this.uneaten.push(burger);
                            // uneaten_html += '<li class="uneaten_burger">' + burger.burger.name + ' <span class="devour_button"><button id="devour_' + burger.id + '"> Devour<button></span></li>\n';
                        }
                    });
                    return this.uneaten;
                    // uneaten_html += "</ol>"
                    //@todo see if this works
                    // return Handlebars.SafeString(uneaten_html);
                    // return uneaten_html;
                },
                show_devoured_burgers: function (burgers) {
                    // devoured_html = '<ol class="devoured">';
                    burgers.forEach(burger => {
                        if (burger.devoured == 1) {
                            devoured.push(burger);
                            // devoured_html += '<li class="devoured_burger">' + burger.burger_name + '</li>\n';
                        }
                    });
                    return this.devoured;
                    // devoured_html += '</ol>\n';
                    // return devoured_html;
                    //@todo check if this safestring works
                    // return Handlebars.SafeString(devoured_html);
                }
            }
        });
    });


});

router.post('/addBurger', function (req, res, next) {
    var burgerData = req.body;
    burgers.devour_burger(burgerData.burger_id);
});
module.exports = router;