// Importing module
const mysql = require('mysql')

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',        // Host Name
    user: 'root',            // Database Username
    password: '',        // Database Password
    database: 'flashcard'        // Database Name
});

module.exports = connection