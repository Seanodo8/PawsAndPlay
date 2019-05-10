const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://localhost:27017/pawsandplay"

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to Mongo');
    },
    err => {
        console.log(err);
    }
    );

module.exports = mongoose.connection;