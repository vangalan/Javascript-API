// -----Loades express into our project.-----
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alanvang',
    database: 'todo'
});

// Making sure the connection works!/ performs queries.
try {
    connection.connect();
} catch (e) {
    // (e) is error.
    console.log('Connection to MySQL failed');
    console.log(e);
}

// -----Setting up the api-----
const api = express();
api.use(express.static(__dirname + '/public'));
// __dirname is the directory name 
// which is the full path to the script 
// your writing on your local machine.
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('API up and running');
});

// -----Routes for the api-----

// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello World');
//     // ----sends text to the user on the browser.----
// })

api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('IT WORKS!');

    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
        if (error) return res.json({ error: error });

        connection.query('SELECT LAST_INSERTED_ID() FROM tasks', (error, results) => {
            if (error) return res.json({ error: error });
            
            // send back the object to the browser we created so then we use this ID in the HTML to identify a certain item.
            res.json({
                id: results[0]['LAST_INSERT_ID()'],
                description: req.body.item
            });
        });
    });

    api.post('/tasks/:id/update', (req, res) => {
        connection.query('UPDATE tasks SET completed = ? WHERE id = ?', [req.body.completed, req.params.id], (error, results) => {
            if (error) return res.json({ error: error });
    
            res.json({});
        })
    })
    
    api.post('/tasks/:id/remove', (req, res) => {
        connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (error, results) => {
            if (error) return res.json({ error: error });
    
            res.json({});
        });
    })
});