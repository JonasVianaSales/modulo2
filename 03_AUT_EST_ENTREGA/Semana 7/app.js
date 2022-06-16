const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const database = new sqlite3.Database('sqlite.db');
const port = '3000';
const hostname = '127.0.0.1';
const DBPATH = 'sqlite.db';
app.use(express.json())
app.use(express.static("front/"));

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/skills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM skills ORDER BY title COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
// app.post('/skillsinsert', urlencodedParser, (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

//     sql = "INSERT INTO skills (title, id, text) VALUES ('" req.body.title + req.body.id  + req.body.id "')";
//     var db = new sqlite3.Database(DBPATH); // Abre o banco
//     db.run(sql, [],  err => {
//         if (err) {
//             throw err;
//         }
//     });
//     db.close(); // Fecha o banco
//     res.end();
// });

// Atualiza um registro (é o U do CRUD - Update)
app.post('/skillsupdate', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "UPDATE skills SET title = '" + req.body.title + "' WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/skillsdelete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM skills WHERE id = " + req.body.id;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Database server running at http://${hostname}:${port}/`);
  });