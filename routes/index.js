// page routes
var router = require('express').Router();

// controllers
const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
const catalogController = require('../controllers/catalogPage');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/catalog', catalogController);

module.exports = router