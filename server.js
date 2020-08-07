const express = require('express');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const app = express();
const path = require('path');

//const PORT = 8080;
const PORT = process.env.PORT || 8080;

// Serve Static Assets
app.use(express.static('public'));

//Data parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

// When form submit
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

//Routing
app.get('/public/index.html' || '/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/wedding.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'wedding.html'));
});

app.get('/nature.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'nature.html'));
});

app.get('/party.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'party.html'));
});

app.get('/quinceaneros.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'quinceaneros.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(PORT, () => console.log('Server is starting on PORT, ', PORT));

// Auth needed for mailGun
const auth = {
    auth: {
        api_key: '72a143c245c3c9b1fe326c406401c22d-f7d0b107-0262f7cf',
        domain: 'sandbox177b0848b4934d4aa86487b747651250.mailgun.org'
    }
}

//Email transporter
const transporter = nodemailer.createTransport(mailGun(auth));

//Sending Email
const sendMail = (email, subject, text) => {
    const mailOptions ={
        from: email,
        to: 'receiver email',
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log("'Error occurs'");
        }
        return console.log('Email sent!!!');
    });
}