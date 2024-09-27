const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('This is Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});