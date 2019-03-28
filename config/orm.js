var mysql = require('mysql');
var connection = require('./connection.js');

var orm = {
    selectAll: function() {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(error, results, fields) {
            if(error) throw error;
            console.log('Selected All Burgers');
            return results;
        });
    },
    insertOne: function(burger_name, devoured) {
        //make sure devoured is a boolean
        var devouredDB = 0;
        if (devoured) {
            devouredDB = 1;
        }
        
        //make sure burgername isn't blank and is a string

        var query = 'INSERT INTO burgers (burger_name, devoured) VALUES ("' + burger_name + '", ' + devouredDB + ')';
        connection query(query, function(error, results) {
            if (error) throw error;
            console.log('Inserted burger into database');
            return results;
        });
    },
    updateOne: function(burger_id) {
        var query = 'UPDATE burgers SET (burgername = "'+ burger_name + '", devoured=' + devouredDB + ') WHERE id=' + burger_id; 
        connection.query(query, function(error, results) {
            if(error) throw error;
            console.log('updated database entry');
            return results;
        });
    }
};

module.exports(orm);