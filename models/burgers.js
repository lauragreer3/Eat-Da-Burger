var path = require('path');
var orm = require(path.join(__dirname, '../config/orm.js'));

var burger = {
    all_burgers: [],
    create_burger: function(burger_name) {
        var insertedBurger = orm.insertOne(burger_name);
        console.log(insertedBurger);
        this.burgers.push(insertedBurger);
    },
    devour_burger: function(burger_id) {
        var devoured_burger = orm.insertOne(burger_id, true);
        console.log(devouredBurger);
        //refresh burgers list
        this.list_burgers();

    },
    list_burgers: function() {
        var allBurgers = orm.selectAll();

        this.all_burgers = allBurgers;
        return this.all_burgers;
    }
};

module.exports = burger;