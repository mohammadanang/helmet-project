const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('CI with Travis');
});

app.get('/home', (req, res) => {
    res.json({
        success: true
    });
});

const server = app.listen(3000, () => {
    console.log('App running on port 3000');
});

module.exports = server;