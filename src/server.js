// -----Loades express into our project.-----
const express = require('express');
const bodyParser = require('body-parser');

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
});