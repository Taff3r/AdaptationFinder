const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mariaDB = require('mariadb');
// Connection Object, used to reach the database server.
var conn;

// Create a new pool with the correct settings.
const pool = mariaDB.createPool({
   host: "localhost", 
   user: "root",
   password: "",
   port: 3306,
   database: "mydb"
});

// Connects to the datebase server.
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

// Adds GET listen to lh:3000/insert add isbn and imdbid value pair to DB.
// If imdb or isbn is missing returns and nothing is added to the DB.
app.get('/insert', (req, res) => {
   let imdb = req.query.imdbID;
   let isbn = req.query.isbn;
   if(!imdb || !isbn){
      res.send("invalid query");
      return;
   }
   conn.query('INSERT INTO connections VALUES ("' + isbn + '", "' + imdb + '");');
   res.send("Inserted isbn: " + isbn + " and imdb id: " + imdb);
});

// Listens for GET request on lh:3000/isbn. Gets all occurences of connections with the requested isbn number. 
app.get('/isbn', (req, res) => {
   let isbn = req.query.isbn;
   let query = 'SELECT * FROM connections WHERE isbn = "' + isbn + '";';
   conn.query(query).then(r => res.send(r));
});

// Listens for GET request on lh:3000/imdb. Gets all occurences of connections with the requested imdb id.
app.get('/imdb', (req, res) => {
   let imdb = req.query.imdbID;
   let query = 'SELECT * FROM connections WHERE imdbID = "' + imdb + '";';
   conn.query(query).then(r => res.send(r));
});

