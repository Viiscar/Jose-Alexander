const express = require('express');
const sendMail = require('./mail')
const app = express();
const path = require('path');

const PORT = 8080;

//Data parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post('/email', (req, res) =>{
    const {subject, email, text} = req.body;
    console.log('Data', req.body);

    sendMail(email, subject, text, function(err, data){
        if (err) {
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({message: 'Email sent!'})
        }
    });
});

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(PORT, () => console.log('Server is starting on PORT, ', 8080));