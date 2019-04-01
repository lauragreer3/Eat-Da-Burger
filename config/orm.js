var mysql = require('mysql');
var connection = require('./connection.js');

var orm = {
    data: {},
    selectAll: function(cb_function) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(error, results, fields) {
            if(error) throw error;
            console.log('Selected All Burgers');
            console.log(results);
            cb_function(results);
        });
        console.log(orm);
        return this.data;
    },
    insertOne: function(burger_name, devoured, cb_function) {
        //make sure devoured is a boolean
        var devouredDB = 0;
        if (devoured) {
            devouredDB = 1;
        }
        
        //make sure burgername isn't blank and is a string

        var query = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + burger_name + '", ' + devouredDB + ')';
        connection.query(query, function(error, results) {
            if (error) throw error;
            console.log('Inserted burger into database');
            cb_function(results);
        });
    },
    updateOne: function(burger_id, devoured, cb_function) {
        //make sure devoured is a boolean
        var devouredDB = 0;
        if (devoured) {
            devouredDB = 1;
        }
        //make sure burgername isn't blank and is a string

        var query = 'UPDATE burgers SET (devoured=' + devouredDB + ') WHERE id=' + burger_id; 
        connection.query(query, function(error, results) {
            if(error) throw error;
            console.log('updated database entry');
            cb_function(results);
        });
    }
};

module.exports = orm;