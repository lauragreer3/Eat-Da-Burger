var mysql = require('mysql');

let jawsdb = process.env.JAWSDB_URL;
if (jawsdb == null || jawsdb == "") {
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Dumphuckr!2142',
        database: 'burgers_db'
    });
}
else
{
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
connection.connect();

module.exports = connection;