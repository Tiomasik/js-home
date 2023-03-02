const express = require('express');
const app = express();

const PORT = 8080;

app.get('/tioma', (req, res) => {
    res.send('I am GET')
});

app.post('/tioma', (req, res) => {
    res.send('I am POST')
});

app.delete('/tioma', (req, res) => {
    res.send('I am DELETE')
});

app.use((req, res) => {
    res.redirect('https://www.google.com.ua/')
});

app.listen(PORT, (error) => {
    if (error) {
        console.error('Alarm:', error)
    }
    console.log(`Server works at ${PORT} port`)
});