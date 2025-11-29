const mongoose = require('mongoose');

const connecDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connecDB;