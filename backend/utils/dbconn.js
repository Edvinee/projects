const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}


module.exports = dbconnection;
