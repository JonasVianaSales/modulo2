const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const database = new sqlite3.Database('sqlite.db');
const port = '3000';
const hostname = '127.0.0.1';
const DBPATH = 'sqlite.db';
const bodyParser = require('body-Parser');
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
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
    // console.log(req.body);
    // console.log(req.body.title, " ", req.body.text);
    sql = "INSERT INTO skills (title, text) VALUES ('" + req.body.title + "', '" + req.body.text + "')";
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
    // console.log(req.body);
    // console.log(req.body.title, " ", req.body.text, " ", req.body.id);
    sql = "UPDATE skills SET title = '" + req.body.title + "', text = '" + req.body.text + "' WHERE id = '" + req.body.id + "'";
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