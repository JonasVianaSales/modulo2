const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const database = new sqlite3.Database('sqlite.db');
const port = '3000';
const hostname = '127.0.0.1';
const DBPATH = 'sqlite.db';
app.use(express.json())
app.use(express.static("front/"));


app.get('/skills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM skills ORDER BY title COLLATE NOCASE';
    db.all(sql, [],  (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});


app.post('/insertskills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = `INSERT INTO skills (title, id, text) VALUES ('${req.body.title}, ${req.body.text}, ${req.body.id}')`;
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.end();
});


app.post('/updateskills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE skills SET title = '" + req.body.title + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close();
});


app.post('/deleteskills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM skills WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close();
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });