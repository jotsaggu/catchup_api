'user strict';
const config  = require('./config');
const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : config.db.host,
    user     :  config.db.user,
    password :  config.db.password,
    database : config.db.database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;