var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1a2b3c4d5e6f7g", //example of generated by Mailtrap
        pass: "1a2b3c4d5e6f7g" //example of generated by Mailtrap
    }
});

var mailOptions = {
    from: 'from@example.com',
    to: 'test@example.com',
    subject: 'Test Nodemailer with Mailtrap',

    html: '<h1>Attachments</h1>',
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'text.txt',
            content: 'Attachments'
        },
        {
            filename: 'logo',
            path: 'newlogo.png'
        }
    ]
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});