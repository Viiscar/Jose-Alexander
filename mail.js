const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '72a143c245c3c9b1fe326c406401c22d-f7d0b107-0262f7cf',
        domain: 'sandbox177b0848b4934d4aa86487b747651250.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions ={
        from: email,
        to: 'fanchleroux@tutanota.com',
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail();
