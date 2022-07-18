const express = require('express');
require('dotenv').config();

const secret = process.env.SECRET;
const dota2 = process.env.DOTA;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        secret: secret
    });
});

app.get('/dota2', (req, res) => {
    res.status(200).json({
        secret: dota2
    })
})

module.exports = app;