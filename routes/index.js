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
// User pages
router.get('/register', registerController); //
router.post('/store/user', storeUserController); //
router.get('/login', redirect, loginController); //
router.post('/login/user', loginUserController); //
router.get('/logout', logoutController); 
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