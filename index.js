const express = require('express')
const app = express();
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('views', path.join(__dirnam, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(flash());
app.use(expressSession({
    secret: process.env.SECRET
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    autoIndex: true
});

if(mongoose){
    ocnsole.log('DB is connected!!!!')
} else {
    console.log('No DB connection')
}

const port = process.env.PORT;
app.listen(port || 3300, () => {
    console.log(`App listening to port${port}`)
})

app.use('/', router);

app.use((req, res) => res.render('notFound'));