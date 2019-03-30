var path = require('path');
var orm = require(path.join(__dirname, '../config/orm.js'));

var burger = {
    create_burger: function(burger_name) {
        orm.insertOne(burger_name);
    };
    devour_burger: function(burger_id) {
        orm.insertOne(burger_id, true);
    },
    list_burgers: function() {

    }
}

module.exports = burger;