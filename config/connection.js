var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dumphuckr!2142',
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;