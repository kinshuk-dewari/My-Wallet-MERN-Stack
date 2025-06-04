const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); 
    }
};

module.exports = connectDB;