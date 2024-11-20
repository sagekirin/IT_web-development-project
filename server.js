const express = require('express');
const app = express();
const port = 3000;
const escapeHtml = require('escape-html');  //Helps input sanitization
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(express.urlencoded({extended: true}))
app.use(csrfProtection);  

let guestbookEntries = [];  //Store guestbook entries

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route that handles form submission
app.post('/submit-form', (req,res) => {
    const name = escapeHtml(req.body.name);
    if (name) {
        guestbookEntries.push(name);
    }
    res.redirect('/')   //Send user back to homepage
});

app.listen(port, () => {
    console.log('Guestbook running on http://localhost:$(port)');
});