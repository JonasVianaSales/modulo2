const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const database = new sqlite3.Database('sqlite.db');
const port = '3000';
const hostname = '127.0.0.1';
const DBPATH = 'sqlite.db';
app.use(express.json())
app.use(express.static("front/"));

app.get('/uau', (req, res) =>{
    res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    sql = 'SELECT * FROM skills ORDER BY id COLLATE NOCASE';
    db.all(sql, [],  (err, rows) => {
		if (err) {
		    throw err;
		}
        console.log(rows);
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Database server running at http://${hostname}:${port}/`);
  });