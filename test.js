const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

require('dotenv').config()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    autoIndex: true
});

if(mongoose){
    console.log('DB is connected!!!!')
} else {
    console.log('No DB connection')
}
// Create
// BlogPost.create({
//     title: 'Using Express & Node to create a fullstack app',
//     body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, sit? Molestiae expedita praesentium animi deserunt, enim alias molestias accusamus excepturi similique nisi corrupti, perferendis autem incidunt dolore delectus, ut voluptas!'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// Read
// BlogPost.find({}, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// Update
// var id = "63af1a3b671633dbf0b05606";
// BlogPost.findByIdAndUpdate(id, {
//     title: 'Update to title'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// Delete
// var id = "63af1a3b671633dbf0b05606";
// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//     console.log(error, blogpost)
// })
