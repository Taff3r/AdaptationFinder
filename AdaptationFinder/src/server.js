const express = require('express');
const app = express();
const mariaDB = require('mariadb');
var conn;
const pool = mariaDB.createPool({
   host: "localhost", 
   user: "root",
   password: "",
   port: 3306,
   database: "mydb"
});

pool.getConnection()
.then(c => {
   conn = c;
}).catch(err => {
   console.log(err);
   c.end();
});

// Basic GET listen, used to test server
app.get('/', (req, res) => {
   res.send('request received');
});

// Starts the server
app.listen(3000, () => {
   console.log("Server running on :3000");
});

// Adds GET listen to lh:3000/testAdd trying to add values to DB.
app.get('/testAdd', (req, res) => {
   let query = 'INSERT INTO testTable VALUES ("Squat", 200);';
   res.send(conn.query(query));
});

// Adds GET listen to lh:3000/testGet trying to return data from DB.
app.get('/testGet', (req, res) => {
   let query = "SELECT * FROM testTable;";
   conn.query(query).then(r => res.send(r));
});
