var path = require('path');
var orm = require(path.join(__dirname, '../config/orm.js'));

var burger = {
    all_burgers: [],
    create_burger: function(burger_name, cb_function) {
        orm.insertOne(burger_name, cb_function);
    },
    devour_burger: function(burger_id, cb_function) {
        orm.insertOne(burger_id, true, cb_function);
        console.log(devouredBurger);
        //refresh burgers list
        this.list_burgers(cb_function);

    },
    list_burgers: function(cb_function) {
        orm.selectAll(cb_function);
    }
};

module.exports = burger;