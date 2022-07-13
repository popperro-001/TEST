const express = require('express');
require('dotenv').config();

const secret = process.env.SECRET;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        secret: secret
    });
});

module.exports = app;