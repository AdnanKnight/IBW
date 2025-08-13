// Exports
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Your app is connected to MongoDB");
    } catch (err) {
        console.log("Mongoose ran into an error:", err.message);
    }
};

module.exports = connectDB;
