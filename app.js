const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req,res) => {
    const username = req.body.username;
    if (!username || username.length < 3) {
        return res.status(400).send('Invalid username.');
    }
    res.send('Username is $(username)')
});

app.listen(port, () => {
    console.log('Server running on http://localhost:$(port)');
});