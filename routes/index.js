// page routes
var router = require('express').Router();

// controllers
const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
const catalogController = require('../controllers/catalogPage');
// Users
const registerController = require('../controllers/registerUsers');
const storeUserController = require('../controllers/StoreUsers');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const logoutController = require('../controllers/logoutUser');
const deleteProfileController = require('../controllers/deleteProfile');
//Blogs
const newPostController = require('../controllers/newPost');
const storePostController = require('../controllers/StorePost');
const blogsController = require('../controllers/blogsPage');
const postController = require('../controllers/singlePost');
const deletePostController = require('../controllers/deletePost');
// Reviews
const newReviewController = require('../controllers/createReview');
const storeReviewController = require('../controllers/StoreReview');
const reviewsController = require('../controllers/reviewsPage');
// middleware
const validateMiddleWare = require('../middleware/validateForm');
const authMiddleWare = require('../middleware/authorized');
const redirect = require('../middleware/redirectIfUser');

// main pages
router.get('/', homeController); //
router.get('/about', aboutController); //
router.get('/contact', contactController); //
router.get('/catalog', catalogController); //

////////////////////////////////////////////
//nodemailer
// const nodemailer = require('nodemailer');
//
//
// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "5a8d0335427abf",
//         pass: "e60f8c83ba447e"
//     }
// });
//
// const mailOptions = {
//     from: 'from@example.com',
//     to: 'stephenbrooks714@gmail.com',
//     subject: 'Test Nodemailer with Mailtrap',
//     body: 'Welcome to this message'
//
//     // html: '<h1>Attachments</h1>',
//     // attachments: [
//     //     {   // utf-8 string as an attachment
//     //         filename: 'text.txt',
//     //         content: 'Attachments'
//     //     },
//     //     {
//     //         filename: 'logo',
//     //         path: 'newlogo.png'
//     //     }
//     // ]
// };
//
// transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
// });
///////////////////////////////////////////

// User pages
router.get('/register', registerController); //
router.post('/store/user', storeUserController); //
router.get('/login', redirect, loginController); //
router.post('/login/user', loginUserController); //
router.get('/logout', logoutController);
router.get('/deleteProfile/:id', deleteProfileController)
// blog pages
router.get('/create', authMiddleWare, newPostController); //
router.post('/store/post', validateMiddleWare, storePostController); //
router.get('/blogs', blogsController); //
router.get('/post/:id', postController); //
router.get('/delete/:id', authMiddleWare, deletePostController); //
// reviews routes
router.get('/createReview', newReviewController); //
router.post('/store/review', storeReviewController); //
router.get('/reviews', reviewsController); //

module.exports = router